(function(){
"use strict";
/* ---- Project data: edit here. Add "url" only for verified live links. ---- */
var PROJECTS=[
 {name:"Brandstory Corporate Website",cat:"Corporate website",img:"assets/images/projects/brandstory.svg",url:"https://brandstory.ai/",
  desc:"Corporate website for Brandstory Digital, developed, maintained and enhanced for ongoing business and marketing needs.",
  role:"WordPress content and page updates, responsive landing pages, theme customisation, speed work, testing and bug fixes.",tech:"WordPress, HTML5, CSS3, JavaScript, PHP, WooCommerce"},
 {name:"DSU University Website",cat:"Education",img:"assets/images/projects/dsu.svg",
  desc:"University website with a development-focused build.",role:"Development of the site (add details).",tech:"WordPress, HTML, CSS, JavaScript, Bootstrap, PHP"},
 {name:"Kshemavana",cat:"Naturopathy",img:"assets/images/projects/kshemavana.svg",
  desc:"Website for a naturopathy business.",role:"Website development (add details).",tech:"WordPress, HTML, CSS, JavaScript, PHP"},
 {name:"Leru Remote",cat:"Job opportunities",img:"assets/images/projects/leru-remote.svg",
  desc:"Job opportunities website.",role:"Website development (add details).",tech:"WordPress, HTML, CSS, JavaScript, PHP"},
 {name:"Utkal Automotive",cat:"EV dealership",img:"assets/images/projects/utkal-automotive.svg",
  desc:"Website for an EV dealership.",role:"Website development (add details).",tech:"PHP, WordPress"},
 {name:"Chatkazz",cat:"Frontend project",img:"assets/images/projects/chatkazz.svg",
  desc:"Frontend and development work that broadened exposure beyond WordPress.",role:"Frontend development (add details).",tech:"Frontend development"}
];
var list=document.getElementById("work-list");
PROJECTS.forEach(function(p,i){
 var a=document.createElement("article");a.className="proj";a.style.setProperty("--r",(i%2?1:-1)*0.8+"deg");
 var link=p.url?'<a href="'+p.url+'" target="_blank" rel="noopener">Visit '+p.name.split(" ")[0]+' site</a>':'<a href="#contact">Ask about this project</a>';
 a.innerHTML='<div class="shot"><img src="'+p.img+'" alt="'+p.name+' placeholder screenshot" loading="lazy" width="800" height="600"></div><h3>'+p.name+'</h3><span class="cat">'+p.cat+'</span><p>'+p.desc+'</p><p><b>My part:</b> '+p.role+'</p><p class="tech">'+p.tech+'</p>'+link;
 list.appendChild(a);
});
/* ---- Showreel: set a real file path to swap the poster for a video ---- */
var REEL_SRC=""; // e.g. "assets/videos/showreel.mp4"
if(REEL_SRC){var f=document.getElementById("reel"),v=document.createElement("video");v.src=REEL_SRC;v.controls=true;v.preload="none";v.poster=f.querySelector("img").src;f.innerHTML="";f.appendChild(v);}
/* ---- Mobile menu ---- */
var b=document.getElementById("burger"),m=document.getElementById("menu");
function setMenu(o){m.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu");}
b.addEventListener("click",function(){setMenu(!m.classList.contains("open"));});
m.addEventListener("click",function(e){if(e.target.tagName==="A")setMenu(false);});
document.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false);});
/* ---- Contact form ---- */
var form=document.getElementById("form"),msg=document.getElementById("msg");
form.addEventListener("submit",function(e){
 e.preventDefault();var ok=true;
 form.querySelectorAll("[required]").forEach(function(el){var bad=!el.value.trim()||(el.type==="email"&&!/^\S+@\S+\.\S+$/.test(el.value));el.setAttribute("aria-invalid",bad);if(bad)ok=false;});
 if(!ok){msg.textContent="Fill in your name, a valid email and a message.";return;}
 if(form.action.indexOf("YOUR_FORM_ID")>-1){msg.textContent="The form service isn't set up yet. Email vishnuvjn224@gmail.com directly for now.";return;}
 fetch(form.action,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}}).then(function(r){
  if(r.ok){msg.textContent="Thanks, your enquiry is sent.";form.reset();}else{msg.textContent="Sending failed. Please email me directly.";}
 }).catch(function(){msg.textContent="Sending failed. Please email me directly.";});
});
/* ---- Animation (GSAP) ---- */
window.addEventListener("DOMContentLoaded",function(){
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 var h1=document.querySelector("[data-split]");
 var mm=gsap.matchMedia();
 mm.add("(prefers-reduced-motion: no-preference)",function(){
  /* one intro: headline characters rise in, then the rest settles */
  var words=h1.textContent.trim().split(" ");h1.setAttribute("aria-label",h1.textContent.trim());h1.innerHTML="";
  words.forEach(function(w){var s=document.createElement("span");s.setAttribute("aria-hidden","true");s.style.display="inline-block";s.style.whiteSpace="nowrap";
   w.split("").forEach(function(c){var k=document.createElement("span");k.className="ch";k.textContent=c;s.appendChild(k);});
   h1.appendChild(s);h1.appendChild(document.createTextNode(" "));});
  gsap.timeline({defaults:{ease:"power3.out"}})
   .from(".ch",{yPercent:110,opacity:0,duration:.7,stagger:.02})
   .from(".status,.sub,.intro,.cta",{y:20,opacity:0,duration:.5,stagger:.08},"-=.4")
   .from(".hero-portrait img",{clipPath:"inset(0 0 100% 0)",duration:.8},"-=.9");
  gsap.to(".hero-portrait img",{yPercent:8,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",scrub:true}});
  gsap.utils.toArray(".proj .shot img").forEach(function(img){
   gsap.from(img,{clipPath:"inset(100% 0 0 0)",duration:.9,ease:"power3.out",scrollTrigger:{trigger:img,start:"top 85%",once:true}});});
  gsap.from(".timeline li",{opacity:0,y:30,stagger:.2,duration:.6,scrollTrigger:{trigger:".timeline",start:"top 80%",once:true}});
  if(window.matchMedia("(hover:hover)").matches){
   document.querySelectorAll(".magnet").forEach(function(el){
    el.addEventListener("mousemove",function(e){var r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.2,y:(e.clientY-r.top-r.height/2)*.3,duration:.3});});
    el.addEventListener("mouseleave",function(){gsap.to(el,{x:0,y:0,duration:.4});});});}
 });
});
})();



/* =================================
   HERO PORTRAIT VIDEO CONTROLS
================================= */

document.addEventListener('DOMContentLoaded', () => {
    const portraitVideo = document.querySelector('.hero-portrait-video');

    if (!portraitVideo) return;

    // Start video automatically
    portraitVideo.muted = true;
    portraitVideo.loop = true;
    portraitVideo.playsInline = true;

    const startVideo = () => {
        portraitVideo.play().catch(() => {});
    };

    // Pause when mouse enters
    portraitVideo.addEventListener('mouseenter', () => {
        portraitVideo.pause();
    });

    // Resume when mouse leaves
    portraitVideo.addEventListener('mouseleave', () => {
        startVideo();
    });

    // Start playback
    startVideo();
});

