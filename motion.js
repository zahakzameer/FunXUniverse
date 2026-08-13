(function(){
'use strict';
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var coarse = window.matchMedia('(pointer: coarse)').matches;
var seen = new WeakSet();

function setupReveal(){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){ entry.target.classList.add('funx-in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  function scan(){
    document.querySelectorAll('section').forEach(function(el){
      if (seen.has(el)) return;
      seen.add(el);
      if (reduced) { el.classList.add('funx-in'); return; }
      el.classList.add('funx-reveal');
      requestAnimationFrame(function(){ io.observe(el); });
    });
    // Stagger individual product cards on top of the section-level fade
    // above — the section fades up as a block, then cards cascade in one
    // after another. Delay is capped so a big grid doesn't crawl in.
    document.querySelectorAll('a[href^="product.html?id="]').forEach(function(el){
      if (seen.has(el)) return;
      seen.add(el);
      if (reduced) { el.classList.add('funx-in'); return; }
      el.classList.add('funx-reveal-item');
      var idx = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--funx-delay', (Math.min(idx, 7) * 60) + 'ms');
      requestAnimationFrame(function(){ io.observe(el); });
    });
  }
  scan();
  var root = document.getElementById('root');
  if (root){
    var mo = new MutationObserver(function(){ scan(); });
    mo.observe(root, { childList:true, subtree:true });
  }
}

function setupTilt(){
  if (reduced || coarse) return;
  document.addEventListener('pointermove', function(e){
    var card = e.target.closest('a[href^="product.html?id="]');
    document.querySelectorAll('.funx-tilt-active').forEach(function(el){
      if (el !== card){ el.style.transform=''; el.classList.remove('funx-tilt-active'); }
    });
    if (!card) return;
    var box = card.querySelector('div');
    if (!box) return;
    var r = card.getBoundingClientRect();
    var px = (e.clientX - r.left)/r.width - 0.5, py = (e.clientY - r.top)/r.height - 0.5;
    box.classList.add('funx-tilt','funx-tilt-active');
    box.style.transform = 'perspective(700px) rotateX('+(-py*7)+'deg) rotateY('+(px*7)+'deg) scale(1.015)';
  }, { passive:true });
  document.addEventListener('pointerleave', function(e){
    var card = e.target.closest && e.target.closest('a[href^="product.html?id="]');
    if (card){ var box = card.querySelector('div'); if (box){ box.style.transform=''; box.classList.remove('funx-tilt-active'); } }
  }, true);
}

function setupCursor(){
  if (reduced || coarse) return;
  var dot = document.createElement('div');
  dot.setAttribute('aria-hidden', 'true');
  dot.style.cssText = 'position:fixed;top:0;left:0;width:26px;height:26px;border-radius:50%;'
    + 'border:1.5px solid var(--paint-orange);pointer-events:none;z-index:9999;'
    + 'transform:translate3d(-50%,-50%,0) scale(0);opacity:0;'
    + 'transition:opacity var(--duration-base,220ms) var(--ease-standard,ease),transform var(--duration-base,220ms) var(--ease-spring,ease),width var(--duration-base,220ms) var(--ease-standard,ease),height var(--duration-base,220ms) var(--ease-standard,ease),background var(--duration-base,220ms) var(--ease-standard,ease);';
  document.body.appendChild(dot);

  var tx = 0, ty = 0, x = 0, y = 0, shown = false;
  document.addEventListener('pointermove', function(e){
    tx = e.clientX; ty = e.clientY;
    if (!shown){ shown = true; dot.style.opacity = '1'; dot.style.transform = 'translate3d(-50%,-50%,0) scale(1)'; }
  }, { passive:true });
  document.addEventListener('pointerleave', function(){ dot.style.opacity = '0'; }, true);

  function tick(){
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    requestAnimationFrame(tick);
  }
  tick();

  var hoverTargets = 'a, button, input, textarea, select, [role="button"], [onclick], .funx-tilt-active';
  document.addEventListener('pointerover', function(e){
    if (e.target.closest && e.target.closest(hoverTargets)){
      dot.style.width = '44px'; dot.style.height = '44px';
      dot.style.background = 'rgba(241,106,62,0.08)';
    }
  });
  document.addEventListener('pointerout', function(e){
    if (e.target.closest && e.target.closest(hoverTargets)){
      dot.style.width = '26px'; dot.style.height = '26px';
      dot.style.background = 'transparent';
    }
  });
}

// Add-to-cart "pop" — a brief burst of brand-colored dots from the header
// cart icon. Reads cart count itself independently of React (consistent
// with the rest of this file), so it needs no wiring into common.jsx.
// Session-scoped intensity decay so it never gets old on a multi-item
// order: full burst the 1st add this session, half the 2nd-3rd, then just
// the icon's existing scale-pulse (no particles) from the 4th on.
function setupCartBurst(){
  if (reduced) return;
  var SESSION_KEY = 'funx_cart_pop_count';
  var prevCount = null;

  function getCartCount(){
    try {
      var items = JSON.parse(localStorage.getItem('funx_cart') || '[]');
      return items.reduce(function(s, i){ return s + (i.qty || 0); }, 0);
    } catch (e) { return 0; }
  }

  function nextBurstSize(){
    var n = 0;
    try { n = parseInt(sessionStorage.getItem(SESSION_KEY) || '0', 10) || 0; } catch (e) {}
    try { sessionStorage.setItem(SESSION_KEY, String(n + 1)); } catch (e) {}
    if (n < 1) return 8;   // 1st add this session
    if (n < 3) return 4;   // 2nd-3rd
    return 0;              // 4th+ — icon's own pulse carries the moment
  }

  function burst(){
    var cartLink = document.querySelector('a[href="cart.html"]');
    if (!cartLink) return;
    var count = nextBurstSize();
    if (count === 0) return;
    var r = cartLink.getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    var colors = ['#F16A3E', '#FFC93C', '#E8384F', '#3DDBFF'];
    // Spread within an upward arc, not a full circle — the icon sits at
    // the top of the page, so particles fly up/sideways into open header
    // space rather than down into page content.
    for (var i = 0; i < count; i++){
      var angle = -Math.PI * 0.15 - (Math.PI * 0.7) * (i / Math.max(1, count - 1)) + (Math.random() * 0.3 - 0.15);
      var dist = 26 + Math.random() * 22;
      var dx = Math.cos(angle) * dist, dy = Math.sin(angle) * dist;
      var size = 5 + Math.random() * 4;
      (function(dx, dy, size, color){
        var el = document.createElement('div');
        el.setAttribute('aria-hidden', 'true');
        el.className = 'funx-cart-particle';
        el.style.cssText = 'position:fixed;left:' + cx + 'px;top:' + cy + 'px;width:' + size + 'px;height:' + size + 'px;'
          + 'border-radius:50%;background:' + color + ';pointer-events:none;z-index:9998;'
          + 'transform:translate3d(-50%,-50%,0) scale(1);opacity:1;'
          + 'transition:transform 560ms cubic-bezier(.2,.7,.3,1),opacity 560ms ease-out;';
        document.body.appendChild(el);
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){
            el.style.transform = 'translate3d(calc(-50% + ' + dx + 'px), calc(-50% + ' + dy + 'px), 0) scale(0.3)';
            el.style.opacity = '0';
          });
        });
        setTimeout(function(){ el.remove(); }, 640);
      })(dx, dy, size, colors[i % colors.length]);
    }
  }

  window.addEventListener('funx-cart-updated', function(){
    var c = getCartCount();
    if (prevCount !== null && c > prevCount) burst();
    prevCount = c;
  });
}

function init(){
  setupReveal();
  setupTilt();
  setupCursor();
  setupCartBurst();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
})();
