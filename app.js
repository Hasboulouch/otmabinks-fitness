'use strict';
const Fitness = (() => {
  const program = typeof module !== 'undefined' ? require('./program.js') : PROGRAM;
  const KEY='otmabinks-training-club-v2', LEGACY_KEY='otma_fit_tracker_v1';
  const dateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  function monday(date=new Date()){const d=new Date(date);d.setHours(12,0,0,0);d.setDate(d.getDate()-(d.getDay()+6)%7);return dateKey(d);}
  function offset(key,n){const d=new Date(`${key}T12:00:00`);d.setDate(d.getDate()+n);return dateKey(d);}
  const empty=()=>({version:2,weeks:{},notes:''});
  const emptyWeek=()=>({checks:{},complete:{}});
  const object=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
  function validDate(key){return /^\d{4}-\d{2}-\d{2}$/.test(key)&&!Number.isNaN(new Date(`${key}T12:00:00`).valueOf())&&dateKey(new Date(`${key}T12:00:00`))===key&&monday(new Date(`${key}T12:00:00`))===key;}
  function normalizeWeek(data){
    if(!object(data)||!object(data.checks)||!object(data.complete))throw Error('Les données de suivi sont invalides.');
    const week=emptyWeek();
    for(const [key,value] of Object.entries(data.checks)){
      const match=/^([0-6]):(\d{1,2})$/.exec(key);
      if(!match||!program[+match[1]].items[+match[2]]||typeof value!=='boolean')throw Error('Une case du suivi est invalide.');
      week.checks[key]=value;
    }
    for(const [key,value] of Object.entries(data.complete)){
      if(!/^[0-6]$/.test(key)||typeof value!=='boolean')throw Error('Une séance du suivi est invalide.');
      week.complete[key]=value;
    }
    return week;
  }
  function validate(data,current=monday()){
    if(!object(data))throw Error('Format de sauvegarde non reconnu.');
    if(data.version===undefined){
      if(!('checks' in data)&&!('complete' in data)&&!('notes' in data))throw Error('Ce fichier ne contient aucun suivi OTMABINKS.');
      if(data.notes!==undefined&&typeof data.notes!=='string')throw Error('Les notes sont invalides.');
      const notes=data.notes||'';if(notes.length>20000)throw Error('Les notes dépassent 20 000 caractères.');
      return {version:2,weeks:{[current]:normalizeWeek({checks:data.checks??{},complete:data.complete??{}})},notes};
    }
    if(data.version!==2||!object(data.weeks)||typeof data.notes!=='string'||data.notes.length>20000)throw Error('Version ou format de sauvegarde incompatible.');
    const weeks={};
    for(const [key,value] of Object.entries(data.weeks)){if(!validDate(key))throw Error('Une date de semaine est invalide.');weeks[key]=normalizeWeek(value);}
    return {version:2,weeks,notes:data.notes};
  }
  function stats(week=emptyWeek()){
    let done=0,total=0,completed=0;
    program.forEach((d,i)=>{total+=d.items.length;done+=d.items.filter((_,j)=>week.checks[`${i}:${j}`]).length;if(d.items.length&&week.complete[i])completed++;});
    return {done,total,completed};
  }
  return {program,KEY,LEGACY_KEY,dateKey,monday,offset,empty,emptyWeek,validate,stats};
})();
if(typeof module!=='undefined')module.exports=Fitness;
if(typeof document!=='undefined'){
  const {program,KEY,LEGACY_KEY,dateKey,monday,offset,empty,emptyWeek,validate,stats}=Fitness;
  const $=id=>document.getElementById(id);
  const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
  let state=empty(),week=monday(),active=(new Date().getDay()+6)%7,blocked=false,toastTimer;
  function message(text,persistent=false){clearTimeout(toastTimer);$('status').textContent=text;$('status').hidden=false;if(!persistent)toastTimer=setTimeout(()=>$('status').hidden=true,6500);}
  function save(){
    if(blocked){$('save-state').textContent='Sauvegarde indisponible. Pense à exporter.';return false;}
    try{localStorage.setItem(KEY,JSON.stringify(state));$('save-state').textContent='Enregistré sur cet appareil';return true;}
    catch{$('save-state').textContent='Sauvegarde indisponible. Pense à exporter.';message('Le navigateur ne peut pas sauvegarder. Exporte ton suivi avant de quitter.',true);return false;}
  }
  try{
    const saved=localStorage.getItem(KEY),legacy=localStorage.getItem(LEGACY_KEY);
    if(saved)state=validate(JSON.parse(saved));
    else if(legacy){state=validate(JSON.parse(legacy));save();message('Ton ancien suivi a été repris dans la semaine actuelle.');}
  }catch{blocked=true;message('La sauvegarde existante est inaccessible ou illisible. Elle est préservée. Exporte tes nouvelles données avant de quitter.',true);}
  const currentWeek=()=>state.weeks[week]||emptyWeek();
  function writableWeek(){return state.weeks[week]||=(emptyWeek());}
  function confirmAction(title,text,action){
    return new Promise(resolve=>{const dialog=$('confirm-dialog');$('confirm-title').textContent=title;$('confirm-message').textContent=text;$('confirm-action').textContent=action;dialog.returnValue='';dialog.addEventListener('close',()=>resolve(dialog.returnValue==='confirm'),{once:true});dialog.showModal();});
  }
  function render(){
    const d=program[active], w=currentWeek(), count=d.items.filter((_,i)=>w.checks[`${active}:${i}`]).length;
    const fmt=new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'short'});
    $('week-label').textContent=`${fmt.format(new Date(`${week}T12:00:00`))} — ${fmt.format(new Date(`${offset(week,6)}T12:00:00`))}`;
    $('week-label').title=`Semaine du ${week}`;$('this-week').hidden=week===monday();
    $('days').replaceChildren();
    program.forEach((day,i)=>{
      const b=el('button',undefined,'day'),key=offset(week,i),date=new Date(`${key}T12:00:00`);
      b.type='button';b.setAttribute('aria-pressed',String(i===active));b.setAttribute('aria-label',`${day.name}, ${day.tag}${w.complete[i]?', terminé':''}`);
      if(key===dateKey(new Date()))b.setAttribute('aria-current','date');
      const top=el('span',undefined,'day-top');top.append(el('span',day.short.toUpperCase()),el('span',w.complete[i]?'✓':'','day-indicator'));
      b.append(top,el('span',String(date.getDate()).padStart(2,'0'),'day-number'),el('span',day.tag,'day-label'));
      b.onclick=()=>{active=i;render();$('days').children[i].focus({preventScroll:true});};$('days').append(b);
    });
    $('workout-tag').textContent=`${d.name.toUpperCase()} / ${d.tag}`;$('workout-title').textContent=d.title;$('workout-description').textContent=d.desc;$('workout-duration').textContent=d.time;
    $('exercises').replaceChildren();
    d.items.forEach((exercise,i)=>{
      const checked=!!w.checks[`${active}:${i}`],label=el('label',undefined,`exercise${checked?' done':''}`),info=el('span',undefined,'exercise-info'),input=el('input');
      info.append(el('span',exercise[0],'exercise-name'),el('span',exercise[1],'exercise-sub'));
      input.type='checkbox';input.checked=checked;input.setAttribute('aria-label',`${exercise[0]} terminé`);
      input.onchange=()=>{const record=writableWeek();record.checks[`${active}:${i}`]=input.checked;if(!input.checked)record.complete[active]=false;save();render();$('exercises').querySelectorAll('input')[i].focus({preventScroll:true});};
      label.append(el('span',String(i+1).padStart(2,'0'),'exercise-index'),info,el('span',exercise[2],'exercise-sets'),input);$('exercises').append(label);
    });
    if(!d.items.length){const rest=el('div',undefined,'rest-state');rest.append(el('span','↗','rest-icon'),el('strong','RÉCUPÉRER,\nC’EST AVANCER.'),el('p','Une marche douce, du repos et du temps pour toi. Aujourd’hui, tu recharges.'));$('exercises').append(rest);}
    document.querySelector('.list-heading').hidden=!d.items.length;$('session-progress').hidden=!d.items.length;$('reset-session').hidden=!d.items.length;
    const percent=d.items.length?Math.round(count/d.items.length*100):0;
    $('session-count').textContent=`${count} / ${d.items.length} exercices`;$('session-percent').textContent=`${percent} %`;$('exercise-progress').value=percent;
    $('complete-session').textContent=w.complete[active]?(d.items.length?'Séance terminée ✓':'Repos validé ✓'):(d.items.length?'Terminer la séance ↗':'Valider ma récupération ↗');
    $('complete-session').setAttribute('aria-pressed',String(!!w.complete[active]));
    const total=stats(w);$('completed-count').textContent=total.completed;
    $('week-message').textContent=total.completed===6?'Semaine complète. Beau travail.':total.completed?'Tu avances. Garde le rythme.':'Chaque séance fait la différence.';
    $('week-marks').replaceChildren();program.forEach((day,i)=>{if(!day.items.length)return;const mark=el('span',undefined,w.complete[i]?'done':'');mark.title=`${day.name} : ${w.complete[i]?'terminé':'à faire'}`;$('week-marks').append(mark);});
    $('week-marks').setAttribute('aria-label',`${total.completed} séances terminées sur 6`);
    if(blocked)$('save-state').textContent='Sauvegarde indisponible. Pense à exporter.';
  }
  function refreshNotes(){$('notes').value=state.notes;$('note-count').textContent=`${state.notes.length.toLocaleString('fr-FR')} / 20 000`;}
  $('notes').oninput=()=>{state.notes=$('notes').value;$('note-count').textContent=`${state.notes.length.toLocaleString('fr-FR')} / 20 000`;save();};
  $('prev-week').onclick=()=>{week=offset(week,-7);render();};$('next-week').onclick=()=>{week=offset(week,7);render();};$('this-week').onclick=()=>{week=monday();render();};
  $('complete-session').onclick=()=>{const w=writableWeek();w.complete[active]=!w.complete[active];if(w.complete[active])program[active].items.forEach((_,i)=>w.checks[`${active}:${i}`]=true);save();render();if(w.complete[active])message(program[active].items.length?'Séance validée. Un pas de plus.':'Récupération validée.');};
  $('reset-session').onclick=async()=>{const targetWeek=week,targetDay=active;if(!await confirmAction('Repartir de zéro ?','Les coches de cette séance seront retirées. Tes notes et les autres séances seront conservées.','Réinitialiser'))return;const w=state.weeks[targetWeek];if(w){program[targetDay].items.forEach((_,i)=>delete w.checks[`${targetDay}:${i}`]);w.complete[targetDay]=false;}save();render();message('Les coches de la séance ont été réinitialisées.');};
  $('export').onclick=()=>{const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=el('a');link.href=url;link.download=`otmabinks-suivi-${dateKey(new Date())}.json`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);message('Ton export est prêt. Garde-le pour retrouver ton suivi.');};
  $('import').onclick=()=>$('import-file').click();
  $('import-file').onchange=async()=>{
    const file=$('import-file').files[0];if(!file)return;
    try{
      if(file.size>5*1024*1024)throw Error('Le fichier dépasse 5 Mo.');
      const raw=JSON.parse(await file.text()), imported=validate(raw,monday());
      const legacy=raw.version===undefined;
      if(!await confirmAction('Importer ton suivi ?',`${legacy?'Cet ancien export sera placé dans la semaine actuelle. ':''}Le fichier remplacera le suivi et les notes de ce navigateur. Exporte tes données actuelles si tu souhaites les conserver.`,'Importer'))return;
      state=imported;blocked=false;week=monday();const saved=save();refreshNotes();render();message(saved?'Ton suivi a été importé.':'Importé en mémoire seulement : conserve ton fichier.',!saved);
    }catch(e){message(`Import refusé. ${e instanceof SyntaxError?'Ce fichier JSON est invalide.':e.message} Ton suivi est conservé.`,true);}
    finally{$('import-file').value='';}
  };
  refreshNotes();render();
}
