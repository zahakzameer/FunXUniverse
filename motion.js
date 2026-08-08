(function(){
'use strict';
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var coarse = window.matchMedia('(pointer: coarse)').matches;
var seen = new WeakSet();

function playBlip(freq){
  try{
    window.__funxAudioCtx = window.__funxAudioCtx || new (window.AudioContext||window.webkitAudioContext)();
    var ctx = window.__funxAudioCtx;
    if (ctx.state === 'suspended') ctx.resume();
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = freq || 620;
    g.gain.value = 0.0001;
    o.connect(g); g.connect(ctx.destination);
    var t = ctx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.start(t); o.stop(t + 0.2);
  }catch(e){}
}

function flyToCart(sourceEl){
  var cartIcon = document.querySelector('a[href="cart.html"]');
  if (!cartIcon || !sourceEl) return;
  var img = sourceEl.querySelector('img, image-slot');
  var srcRect = sourceEl.getBoundingClientRect();
  var dstRect = cartIcon.getBoundingClientRect();
  var ghost = document.createElement('div');
  ghost.style.cssText = 'position:fixed;z-index:100000;pointer-events:none;border-radius:12px;overflow:hidden;background:var(--surface-gallery,#1a1a1d);box-shadow:0 10px 30px rgba(0,0,0,0.4);';
  ghost.style.left = srcRect.left+'px'; ghost.style.top = srcRect.top+'px';
  ghost.style.width = srcRect.width+'px'; ghost.style.height = srcRect.height+'px';
  if (img && img.tagName === 'IMG') {
    var clone = img.cloneNode(); clone.style.width='100%'; clone.style.height='100%'; clone.style.objectFit='cover';
    ghost.appendChild(clone);
  }
  document.body.appendChild(ghost);
  var dx = dstRect.left + dstRect.width/2 - (srcRect.left + srcRect.width/2);
  var dy = dstRect.top + dstRect.height/2 - (srcRect.top + srcRect.height/2);
  if (window.gsap){
    gsap.timeline().to(ghost, { duration:0.15, scale:1.06, ease:'power1.out' })
      .to(ghost, { duration:0.65, x:dx, y:dy, scale:0.08, opacity:0.4, ease:'power3.in' })
      .call(function(){ ghost.remove(); burst(dstRect.left+dstRect.width/2, dstRect.top+dstRect.height/2); cartIcon.animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:380,easing:'cubic-bezier(.34,1.56,.64,1)'}); });
  } else {
    ghost.style.transition = 'transform .6s cubic-bezier(.16,.84,.44,1), opacity .6s';
    requestAnimationFrame(function(){ ghost.style.transform = 'translate('+dx+'px,'+dy+'px) scale(0.08)'; ghost.style.opacity='0.3'; });
    setTimeout(function(){ ghost.remove(); burst(dstRect.left+dstRect.width/2, dstRect.top+dstRect.height/2); }, 620);
  }
}

function burst(x,y){
  for (var i=0;i<10;i++){
    var p = document.createElement('div');
    p.className = 'funx-burst';
    var size = 4 + Math.random()*5;
    p.style.width = size+'px'; p.style.height = size+'px';
    p.style.left = x+'px'; p.style.top = y+'px';
    p.style.opacity = '1';
    document.body.appendChild(p);
    var angle = Math.random()*Math.PI*2, dist = 30 + Math.random()*50;
    var dx = Math.cos(angle)*dist, dy = Math.sin(angle)*dist;
    p.animate([
      { transform:'translate(-50%,-50%) translate(0,0) scale(1)', opacity:1 },
      { transform:'translate(-50%,-50%) translate('+dx+'px,'+dy+'px) scale(0.3)', opacity:0 }
    ], { duration: 520 + Math.random()*260, easing:'cubic-bezier(.16,.84,.44,1)' }).onfinish = function(){ p.remove(); };
  }
}

function setupCursor(){}

function setupMagnetic(){
  if (reduced || coarse) return;
  document.addEventListener('mousemove', function(e){
    document.querySelectorAll('button').forEach(function(btn){
      var r = btn.getBoundingClientRect();
      var cx = r.left + r.width/2, cy = r.top + r.height/2;
      var dx = e.clientX - cx, dy = e.clientY - cy;
      var dist = Math.sqrt(dx*dx+dy*dy);
      if (dist < 70){
        var pull = (1 - dist/70) * 8;
        btn.style.transform = 'translate('+(dx/dist*pull||0)+'px,'+(dy/dist*pull||0)+'px)';
      } else if (btn.style.transform) {
        btn.style.transform = '';
      }
    });
  }, { passive:true });
}

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

function setupSoundAndBurst(){
  document.addEventListener('click', function(e){
    var btn = e.target.closest('button,a');
    if (!btn) return;
    var txt = (btn.textContent||'').trim();
    if (/quick add|add to cart|buy now|sign up|join|send|verify|checkout|apply/i.test(txt)){
      playBlip(/add|buy|cart/i.test(txt) ? 720 : 560);
      if (/quick add|add to cart/i.test(txt)) {
        var card = btn.closest('a[href^="product.html?id="]') || btn.closest('section,div');
        if (card) flyToCart(card.querySelector('[style*="aspect-ratio"]') || card);
        else burst(e.clientX, e.clientY);
      }
    } else if (btn.tagName === 'A' || btn.tagName === 'BUTTON') {
      playBlip(480);
    }
  });
}

function init(){
  setupCursor();
  setupMagnetic();
  setupReveal();
  setupTilt();
  setupSoundAndBurst();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
})();
