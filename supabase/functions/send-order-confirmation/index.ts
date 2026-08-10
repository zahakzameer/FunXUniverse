// Order confirmation email — triggered by a Supabase Database Webhook on
// INSERT to public.orders (Dashboard > Database > Webhooks), not called
// directly from create_order() itself, so a slow/failed email can never
// roll back or block a real order from being created.
//
// Deploy: supabase functions deploy send-order-confirmation
// Requires one secret: supabase secrets set RESEND_API_KEY=re_xxx
//
// Uses Resend (resend.com) — free tier covers a small store's volume,
// simple REST API, no SDK dependency needed. Swap the fetch call below if
// a different provider is preferred later; nothing else here is
// Resend-specific.

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const FROM_ADDRESS = 'FunX Universe <orders@funxuniverse.com>'; // must be a verified sender/domain in Resend

Deno.serve(async (req) => {
  if (!RESEND_API_KEY) {
    return new Response('RESEND_API_KEY not configured', { status: 500 });
  }

  const payload = await req.json();
  const order = payload.record; // Database Webhook sends { type, table, record, ... }

  if (!order || !order.contact_email) {
    return new Response('No order/contact_email in payload', { status: 400 });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <h2>Thanks for your order, ${order.order_number}</h2>
      <p>We've received your order and will let you know as soon as it ships.</p>
      <p><strong>Total:</strong> ${order.currency} ${order.total}</p>
      <p>Track it any time at
        <a href="https://funxuniverse.com/track-order.html">funxuniverse.com/track-order.html</a>
        using this order number and the email this was sent to.
      </p>
      <p>— The FunX Universe</p>
    </div>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: order.contact_email,
      subject: `Order confirmed — ${order.order_number}`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    return new Response(`Resend API error: ${detail}`, { status: 502 });
  }

  return new Response('sent', { status: 200 });
});
