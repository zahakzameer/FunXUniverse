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
    + 'transition:opacity 200ms ease,transform 200ms var(--ease-spring,ease),width 200ms ease,height 200ms ease,background 200ms ease;';
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

function init(){
  setupReveal();
  setupTilt();
  setupCursor();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
})();
