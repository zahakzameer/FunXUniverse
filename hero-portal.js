(function(){
'use strict';
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var coarse = window.matchMedia('(pointer: coarse)').matches;
if (reduced || coarse || !window.THREE) return;

function start(){
  var host = document.getElementById('funx-hero-portal');
  if (!host) return;
  var THREE = window.THREE;
  var w = host.clientWidth, h = host.clientHeight;
  var renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true });
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
  renderer.setSize(w,h);
  renderer.domElement.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  host.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(55, w/h, 0.1, 100);
  camera.position.z = 18;

  var colors = [0xF16A3E, 0xFFC93C];
  var count = 500;
  var positions = new Float32Array(count*3);
  var colorArr = new Float32Array(count*3);
  var col = new THREE.Color();
  for (var i=0;i<count;i++){
    var radius = 6 + Math.random()*14;
    var theta = Math.random()*Math.PI*2;
    var phi = Math.acos((Math.random()*2)-1);
    positions[i*3] = radius*Math.sin(phi)*Math.cos(theta);
    positions[i*3+1] = radius*Math.sin(phi)*Math.sin(theta)*0.6;
    positions[i*3+2] = radius*Math.cos(phi) - 6;
    col.set(colors[i % colors.length]);
    colorArr[i*3]=col.r; colorArr[i*3+1]=col.g; colorArr[i*3+2]=col.b;
  }
  var geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  geo.setAttribute('color', new THREE.BufferAttribute(colorArr,3));
  var mat = new THREE.PointsMaterial({ size:0.16, vertexColors:true, transparent:true, opacity:0.85, blending:THREE.AdditiveBlending, depthWrite:false });
  var points = new THREE.Points(geo, mat);
  scene.add(points);

  var mx=0,my=0;
  host.addEventListener('mousemove', function(e){
    var r = host.getBoundingClientRect();
    mx = ((e.clientX-r.left)/r.width - 0.5) * 2;
    my = ((e.clientY-r.top)/r.height - 0.5) * 2;
  });

  // Scroll progress through the hero section (0 at top, 1 once scrolled
  // past it) — drives the camera pulling back and the field spreading out,
  // so the portal feels like part of the page rather than a static banner.
  var scrollT = 0;
  function updateScroll(){
    var r = host.getBoundingClientRect();
    var p = 1 - Math.max(0, Math.min(1, r.bottom / (r.height + window.innerHeight)));
    scrollT = Math.max(0, Math.min(1, p));
  }
  window.addEventListener('scroll', updateScroll, { passive:true });
  updateScroll();

  var visible = true;
  var io = new IntersectionObserver(function(entries){ visible = entries[0].isIntersecting; }, { threshold:0 });
  io.observe(host);

  function animate(){
    requestAnimationFrame(animate);
    if (!visible) return;
    points.rotation.y += 0.0009 + scrollT*0.002;
    points.rotation.x += (my*0.15 - points.rotation.x) * 0.03;
    camera.position.x += (mx*1.2 - camera.position.x) * 0.04;
    camera.position.z += ((18 + scrollT*14) - camera.position.z) * 0.05;
    mat.opacity = 0.85 * (1 - scrollT*0.7);
    camera.lookAt(0,0,-6);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', function(){
    var w2 = host.clientWidth, h2 = host.clientHeight;
    renderer.setSize(w2,h2);
    camera.aspect = w2/h2; camera.updateProjectionMatrix();
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', waitForHost);
else waitForHost();

function waitForHost(){
  var host = document.getElementById('funx-hero-portal');
  if (host) { start(); return; }
  var mo = new MutationObserver(function(){
    var h = document.getElementById('funx-hero-portal');
    if (h) { mo.disconnect(); start(); }
  });
  mo.observe(document.body, { childList:true, subtree:true });
}
})();
