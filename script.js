// header scroll
const hd=document.getElementById('hd');
addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>40),{passive:true});
// burger
const mm=document.getElementById('mm');
document.getElementById('bg').onclick=()=>mm.classList.toggle('on');
mm.querySelectorAll('a').forEach(a=>a.onclick=()=>mm.classList.remove('on'));
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// lightbox
const lb=document.getElementById('lb'),lbi=document.getElementById('lbimg');
document.querySelectorAll('.gal-item img').forEach(im=>im.onclick=()=>{lbi.src=im.src;lb.classList.add('on')});
lb.onclick=()=>lb.classList.remove('on');
// form -> whatsapp
document.getElementById('orcForm').onsubmit=e=>{
  e.preventDefault();
  const f=e.target, t=encodeURIComponent(
    `Olá! Meu nome é ${f.nome.value}. `+
    `Preciso de: ${f.servico.value}. `+
    (f.msg.value?`Detalhes: ${f.msg.value}. `:'')+
    `Meu contato: ${f.fone.value}. Aguardo o orçamento!`);
  window.open('https://wa.me/5516991320643?text='+t,'_blank');
};
