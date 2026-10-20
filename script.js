
const orb=document.getElementById('cursorOrb');
document.addEventListener('pointermove',e=>{if(orb){orb.animate({left:e.clientX+'px',top:e.clientY+'px'},{duration:700,fill:'forwards'});}});
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight; if(progress) progress.style.width=(scrollY/h*100)+'%';});
const menu=document.getElementById('menuBtn'), links=document.getElementById('navLinks');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
document.querySelectorAll('[data-count]').forEach(el=>{
 const target=Number(el.dataset.count), suffix=el.dataset.suffix||'';
 let done=false;
 const io=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!done){done=true;let s=0;const step=Math.max(1,Math.ceil(target/55));const t=setInterval(()=>{s+=step;if(s>=target){s=target;clearInterval(t)}el.textContent=s.toLocaleString()+suffix},22)}},{threshold:.6});
 io.observe(el);
});
const booking=document.getElementById('bookingForm');
if(booking) booking.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMsg').textContent='Thank you. Your consultation request has been recorded for this prototype.';});
