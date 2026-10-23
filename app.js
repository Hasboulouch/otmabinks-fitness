'use strict';
const Fitness = (() => {
  const KEY = 'otmabinks-fitness-v1';
  const names = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  function dateKey(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
  function monday(date = new Date()) { const d = new Date(date); d.setHours(12,0,0,0); d.setDate(d.getDate() - (d.getDay()+6)%7); return dateKey(d); }
  function offset(key, days) { const d = new Date(`${key}T12:00:00`); d.setDate(d.getDate()+days); return dateKey(d); }
  function initial() { return {version:1,plan:names.map(name=>({title:`Séance du ${name.toLowerCase()}`,exercises:[]})),weeks:{}}; }
  function validDate(value) { return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(new Date(`${value}T12:00:00`).valueOf()) && dateKey(new Date(`${value}T12:00:00`)) === value; }
  function validate(data) {
    const fail = () => { throw new Error('Fichier incompatible : importe un export OTMABINKS FITNESS version 1.'); };
    const str = (s,max) => typeof s === 'string' && s.length <= max;
    if (!data || data.version !== 1 || !Array.isArray(data.plan) || data.plan.length !== 7 || !data.weeks || typeof data.weeks !== 'object' || Array.isArray(data.weeks)) fail();
    const ids = new Set();
    const plan = data.plan.map(day=>{
      if (!day || !str(day.title,100) || !day.title.trim() || !Array.isArray(day.exercises) || day.exercises.length>100) fail();
      return {title:day.title,exercises:day.exercises.map(e=>{
        if (!e || !str(e.id,100) || !/^[a-zA-Z0-9_-]+$/.test(e.id) || ids.has(e.id) || !str(e.name,200) || !e.name.trim() || !str(e.sets,50) || !str(e.reps,50) || !str(e.rest,100)) fail();
        ids.add(e.id); return {id:e.id,name:e.name,sets:e.sets,reps:e.reps,rest:e.rest};
      })};
    });
    const weeks = {};
    for (const [key,week] of Object.entries(data.weeks)) {
      if (!validDate(key) || monday(new Date(`${key}T12:00:00`)) !== key || !Array.isArray(week) || week.length !== 7) fail();
      weeks[key] = week.map(day=>{
        if (!day || !str(day.notes,20000) || !Array.isArray(day.done) || day.done.length>10000 || !day.done.every(id=>str(id,100) && /^[a-zA-Z0-9_-]+$/.test(id))) fail();
        return {notes:day.notes,done:[...new Set(day.done)]};
      });
    }
    return {version:1,plan,weeks};
  }
  function progress(plan,week) { const total=plan.reduce((n,d)=>n+d.exercises.length,0); const done=plan.reduce((n,d,i)=>n+d.exercises.filter(e=>week?.[i]?.done.includes(e.id)).length,0); return {total,done,percent:total?Math.round(done/total*100):0}; }
  return {KEY,names,dateKey,monday,offset,initial,validate,progress};
})();
if (typeof module !== 'undefined') module.exports = Fitness;
if (typeof document !== 'undefined') {
  const $ = s=>document.querySelector(s);
  const {KEY,names,monday,offset,initial,validate,progress} = Fitness;
  let state=initial(), week=monday(), day=(new Date().getDay()+6)%7, draft=[], storageBlocked=false;
  function status(message) { $('#status').textContent=message; }
  try { const saved=localStorage.getItem(KEY); if(saved) state=validate(JSON.parse(saved)); }
  catch { storageBlocked=true; status('La sauvegarde existante est illisible ou inaccessible. Elle est préservée. Exporte tes nouvelles données avant de quitter.'); }
  function persist() {
    if(storageBlocked) { $('#save-hint').textContent='Sauvegarde indisponible : exporte tes données.'; return false; }
    try { localStorage.setItem(KEY,JSON.stringify(state)); $('#save-hint').textContent='Enregistré sur cet appareil'; return true; }
    catch { $('#save-hint').textContent='Sauvegarde indisponible : exporte tes données.'; status('Le navigateur ne peut pas sauvegarder. Exporte tes données avant de fermer cette page.'); return false; }
  }
  function record() { if(!state.weeks[week]) state.weeks[week]=names.map(()=>({notes:'',done:[]})); return state.weeks[week][day]; }
  function element(tag,text,className) { const e=document.createElement(tag); if(text!==undefined) e.textContent=text; if(className) e.className=className; return e; }
  function openEditor() {
    draft=state.plan[day].exercises.map(e=>({...e})); $('#session-name').value=state.plan[day].title;
    $('#editor-title').textContent=`Le programme du ${names[day].toLowerCase()}`; renderEditor(); $('#editor').showModal();
  }
  function render() {
    const dateFormat = new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'short',year:'numeric'});
    $('#week-label').textContent=`${dateFormat.format(new Date(`${week}T12:00:00`))} — ${dateFormat.format(new Date(`${offset(week,6)}T12:00:00`))}`;
    $('#this-week').hidden=week===monday();
    const stats=progress(state.plan,state.weeks[week]);
    $('#week-count').textContent=`${stats.done} / ${stats.total} exercices terminés`; $('#week-percent').textContent=`${stats.percent} %`; $('#week-progress').value=stats.percent;
    $('#days').replaceChildren();
    names.forEach((name,i)=>{
      const b=element('button',undefined,'day-button'); b.type='button'; b.setAttribute('aria-pressed',String(i===day));
      const date=new Date(`${offset(week,i)}T12:00:00`); const total=state.plan[i].exercises.length; const complete=state.plan[i].exercises.filter(e=>state.weeks[week]?.[i]?.done.includes(e.id)).length;
      b.setAttribute('aria-label',`${name} ${date.getDate()}, ${complete} sur ${total} exercices`);
      b.append(element('span',name.slice(0,3)+'.'),element('strong',String(date.getDate()).padStart(2,'0')),element('small',total?`${complete}/${total}`:'Libre')); b.onclick=()=>{day=i;render();}; $('#days').append(b);
    });
    $('#day-label').textContent=`${names[day]} / ${dateFormat.format(new Date(`${offset(week,day)}T12:00:00`))}`;
    $('#session-title').textContent=state.plan[day].title;
    const list=$('#exercise-list'); list.replaceChildren(); const exercises=state.plan[day].exercises;
    if(!exercises.length) {
      const empty=element('div',undefined,'empty'); empty.append(element('h3','Une journée à ton rythme.'),element('p',state.plan.some(d=>d.exercises.length)?'Aucun exercice prévu. Profite de cette journée pour récupérer, ou ajoute une séance.':'Ajoute les exercices de ton programme, ou garde cette journée pour récupérer. Le programme original n’a pas encore été importé.'));
      const add=element('button','+ Préparer cette séance','primary'); add.onclick=openEditor; empty.append(add); list.append(empty);
    }
    exercises.forEach((e,i)=>{
      const checked=state.weeks[week]?.[day]?.done.includes(e.id) || false;
      const label=element('label',undefined,`exercise${checked?' done':''}`), input=element('input'); input.type='checkbox'; input.checked=checked; input.setAttribute('aria-label',`${e.name} terminé`);
      const info=element('span',undefined,'exercise-info'); info.append(element('strong',e.name),element('span',[e.sets&&`${e.sets} séries`,e.reps&&`${e.reps} reps / durée`,e.rest&&`Repos : ${e.rest}`].filter(Boolean).join(' · '),'details'));
      input.onchange=()=>{ const r=record(); r.done=input.checked?[...new Set([...r.done,e.id])]:r.done.filter(id=>id!==e.id);persist();render(); $('#exercise-list').querySelectorAll('input')[i].focus(); };
      label.append(element('span',String(i+1).padStart(2,'0'),'number'),info,input); list.append(label);
    });
    const count=exercises.filter(e=>state.weeks[week]?.[day]?.done.includes(e.id)).length;
    $('#day-summary').textContent=exercises.length?(count===exercises.length?'Séance terminée. Bien joué !':`${count} sur ${exercises.length} exercices terminés`):'Aucun exercice programmé.';
    $('#notes').value=state.weeks[week]?.[day]?.notes || ''; if(storageBlocked) $('#save-hint').textContent='Sauvegarde indisponible : exporte tes données.';
  }
  function renderEditor() {
    $('#editor-rows').replaceChildren();
    draft.forEach((e,i)=>{
      const row=element('div',undefined,'editor-row');
      [['name','Exercice',200],['sets','Séries',50],['reps','Répétitions / durée',50],['rest','Temps de repos',100]].forEach(([key,title,max])=>{
        const label=element('label',title),input=element('input'); input.value=e[key];input.maxLength=max;input.required=key==='name'; input.oninput=()=>{e[key]=input.value;};label.append(input);if(key==='rest')label.className='wide';row.append(label);
      });
      const remove=element('button','Retirer','secondary');remove.type='button';remove.setAttribute('aria-label',`Retirer l’exercice ${i+1}`);remove.onclick=()=>{draft.splice(i,1);renderEditor();};row.append(remove);$('#editor-rows').append(row);
    });
    $('#add-exercise').disabled=draft.length>=100;
  }
  $('#prev-week').onclick=()=>{week=offset(week,-7);render();}; $('#next-week').onclick=()=>{week=offset(week,7);render();}; $('#this-week').onclick=()=>{week=monday();render();};
  $('#notes').oninput=()=>{record().notes=$('#notes').value;persist();};
  $('#edit-plan').onclick=openEditor;
  $('#close-editor').onclick=$('#cancel-editor').onclick=()=>$('#editor').close();
  $('#add-exercise').onclick=()=>{if(draft.length>=100)return;draft.push({id:'e_'+crypto.randomUUID(),name:'',sets:'',reps:'',rest:''});renderEditor();$('#editor-rows').lastElementChild.querySelector('input').focus();};
  $('#editor-form').onsubmit=e=>{
    e.preventDefault();const title=$('#session-name').value.trim();
    if(!title || draft.some(ex=>!ex.name.trim())) {status('Renseigne le nom de la séance et de chaque exercice.');return;}
    state.plan[day]={title,exercises:draft.map(ex=>({...ex,name:ex.name.trim()}))};persist();$('#editor').close();render();status('Programme mis à jour.');
  };
  $('#export').onclick=()=>{
    const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),link=element('a');link.href=url;link.download=`otmabinks-fitness-${Fitness.dateKey(new Date())}.json`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);status('Export préparé : conserve le fichier JSON dans un endroit sûr.');
  };
  $('#import').onclick=()=>$('#import-file').click();
  $('#import-file').onchange=async()=>{
    const file=$('#import-file').files[0];if(!file)return;
    try {
      if(file.size>5*1024*1024) throw new Error('Ce fichier dépasse la limite de 5 Mo.');
      const imported=validate(JSON.parse(await file.text()));
      if(!confirm('Importer ce fichier remplacera le programme, les cases et les notes de ce navigateur. Exporte tes données actuelles avant de continuer si tu souhaites les garder. Continuer ?'))return;
      state=imported;storageBlocked=false;const saved=persist();render();status(saved?'Programme et historique importés.':'Import effectué en mémoire seulement. La sauvegarde est indisponible : conserve ton fichier.');
    } catch(error) {status(`Import refusé. ${error instanceof SyntaxError?'Le fichier JSON est invalide.':error.message} Tes données actuelles sont conservées.`);}
    finally {$('#import-file').value='';}
  };
  render();
}
