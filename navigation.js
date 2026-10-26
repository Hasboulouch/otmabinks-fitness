'use strict';
(()=> {
const screens=['seance','planning','progres','carnet'];
const $=id=>document.getElementById(id);
function current(){return screens.includes(location.hash.slice(1))?location.hash.slice(1):'seance';}
function show(tab,scroll=true){
 if(!screens.includes(tab))tab='seance';
 screens.forEach(t=>{const el=$('screen-'+t);el.hidden=t!==tab;el.classList.toggle('screen-active',t===tab);});
 document.querySelectorAll('[data-tab]').forEach(b=>{const on=b.dataset.tab===tab;b.classList.toggle('active',on);if(b.classList.contains('tab')){if(on)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');}});
 if(scroll)window.scrollTo({top:0,behavior:'instant'});
 update();
}
function update(){
 const s=$('streak-count')?.textContent||'0', c=$('completed-count')?.textContent||'0';
 $('home-streak').textContent=s+' jour'+(+s===1?'':'s');$('home-week-done').textContent=c+' / 6';
 const today=new Date();$('home-date').textContent=new Intl.DateTimeFormat('fr-CA',{weekday:'long',day:'numeric',month:'long'}).format(today);
 const currentDay=(today.getDay()+6)%7, currentWeek=$('this-week').hidden, selected=[...$('days').children].findIndex(b=>b.getAttribute('aria-pressed')==='true');
 $('back-to-today').hidden=currentWeek&&selected===currentDay;
 const cards=$('week-cards');if(!cards)return;cards.replaceChildren();
 [...$('days').children].forEach((b,i)=>{
  const el=document.createElement('button');el.type='button';el.className='week-card';
  el.innerHTML='<span class="week-card-day"></span><span class="week-card-name"></span><span class="week-card-arrow">→</span>';
  el.querySelector('.week-card-day').textContent=b.querySelector('.day-top span')?.textContent||'';
  el.querySelector('.week-card-name').textContent=b.querySelector('.day-label')?.textContent||'';
  if(b.getAttribute('aria-pressed')==='true')el.classList.add('selected');
  if(b.querySelector('.day-indicator')?.textContent==='✓')el.classList.add('finished');
  el.onclick=()=>{b.click();location.hash='seance';show('seance');};
  cards.append(el);
 });
}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();const tab=b.dataset.tab;location.hash=tab;show(tab);}));
document.querySelectorAll('.brand[data-tab]').forEach(a=>a.addEventListener('click',()=>show('seance')));
window.addEventListener('hashchange',()=>show(current()));
$('back-to-today').onclick=()=>{$('this-week').click();const i=(new Date().getDay()+6)%7;$('days').children[i]?.click();update();};
$('days').addEventListener('click',()=>setTimeout(update,0));
['prev-week','next-week','this-week','complete-session','add-exercise'].forEach(id=>$(id)?.addEventListener('click',()=>setTimeout(update,0)));
const obs=new MutationObserver(()=>{const a=$('completed-count')?.textContent,b=$('streak-count')?.textContent;if(a!==obs.lastA||b!==obs.lastB){obs.lastA=a;obs.lastB=b;update();}});
obs.observe($('completed-count'),{childList:true,characterData:true,subtree:true});obs.observe($('streak-count'),{childList:true,characterData:true,subtree:true});
show(current(),false);
})();