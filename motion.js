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

function init(){
  setupReveal();
  setupTilt();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
})();
