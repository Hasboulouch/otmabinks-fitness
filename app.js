'use strict';
const Fitness = (() => {
  const program = typeof module !== 'undefined' ? require('./program.js') : PROGRAM;
  const guides = typeof module !== 'undefined' ? require('./guides.js') : GUIDES;
  const KEY='otmabinks-training-club-v2', LEGACY_KEY='otma_fit_tracker_v1';
  const dateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  function monday(date=new Date()){const d=new Date(date);d.setHours(12,0,0,0);d.setDate(d.getDate()-(d.getDay()+6)%7);return dateKey(d);}
  function offset(key,n){const d=new Date(`${key}T12:00:00`);d.setDate(d.getDate()+n);return dateKey(d);}
  const empty=()=>({version:2,weeks:{},notes:'',extras:[]});
  const emptyWeek=()=>({checks:{},complete:{}});
  const object=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
  function validDate(key){return /^\d{4}-\d{2}-\d{2}$/.test(key)&&!Number.isNaN(new Date(`${key}T12:00:00`).valueOf())&&dateKey(new Date(`${key}T12:00:00`))===key&&monday(new Date(`${key}T12:00:00`))===key;}
  function normalizeWeek(data,extras=[]){
    if(!object(data)||!object(data.checks)||!object(data.complete))throw Error('Les données de suivi sont invalides.');
    const week=emptyWeek();
    for(const [key,value] of Object.entries(data.checks)){
      const match=/^([0-6]):(\d{1,2})$/.exec(key);
      const extra=/^([0-5]):x_([a-zA-Z0-9_-]+)$/.exec(key);
      const stable=/^([0-5]):(v3_[a-zA-Z0-9_-]+)$/.exec(key);
      const known=match&&program[+match[1]].items[+match[2]] || extra&&extras.some(e=>e.day===+extra[1]&&e.id===extra[2]) || stable&&program[+stable[1]].items.some(e=>e[4]===stable[2]);
      if(!known||typeof value!=='boolean')throw Error('Une case du suivi est invalide.');
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
      return {version:2,weeks:{[current]:normalizeWeek({checks:data.checks??{},complete:data.complete??{}})},notes,extras:[]};
    }
    if(data.version!==2||!object(data.weeks)||typeof data.notes!=='string'||data.notes.length>20000)throw Error('Version ou format de sauvegarde incompatible.');
    const extras=validateExtras(data.extras||[]);
    const weeks={};
    for(const [key,value] of Object.entries(data.weeks)){if(!validDate(key))throw Error('Une date de semaine est invalide.');weeks[key]=normalizeWeek(value,extras);}
    return {version:2,weeks,notes:data.notes,extras};
  }
  function stats(week=emptyWeek(),days=program){
    let done=0,total=0,completed=0;
    days.forEach((d,i)=>{total+=d.items.length;done+=d.items.filter((_,j)=>week.checks[itemKey(d.items[j],i,j)]).length;if(d.items.length&&week.complete[i])completed++;});
    return {done,total,completed};
  }
  function safePhoto(url){try{const u=new URL(url);return u.protocol==='https:'&&url.length<=2048&&!u.username&&!u.password;}catch{return false;}}
  function validateGuide(g){
    if(!object(g)||typeof g.name!=='string'||!g.name.trim()||g.name.length>120||typeof g.equipment!=='string'||g.equipment.length>160||!Array.isArray(g.steps)||!g.steps.length||g.steps.length>8||g.steps.some(t=>typeof t!=='string'||!t.trim()||t.length>800)||!Array.isArray(g.images)||g.images.length<1||g.images.length>2||g.images.some(u=>!safePhoto(u)))throw Error('Chaque exercice doit avoir un nom, une explication et une ou deux photos HTTPS.');
    return {name:g.name,equipment:g.equipment,steps:g.steps,images:g.images,note:typeof g.note==='string'?g.note.slice(0,1000):'',source:typeof g.source==='string'&&safePhoto(g.source)?g.source:'',captions:g.images.map((_,i)=>`Position ${i+1}`)};
  }
  function validateExtras(extras){
    if(!Array.isArray(extras)||extras.length>100)throw Error('Liste d’exercices ajoutés invalide.');const ids=new Set();
    return extras.map(e=>{if(!object(e)||!Number.isInteger(e.day)||e.day<0||e.day>5||typeof e.id!=='string'||!/^[a-zA-Z0-9_-]{1,80}$/.test(e.id)||ids.has(e.id)||typeof e.from!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(e.from)||Number.isNaN(new Date(e.from+'T12:00:00').valueOf())||dateKey(new Date(e.from+'T12:00:00'))!==e.from||typeof e.sets!=='string'||!e.sets.trim()||e.sets.length>80)throw Error('Un exercice ajouté est invalide.');ids.add(e.id);
      if(typeof e.guide==='string'){if(!guides.some(g=>g.id===e.guide))throw Error('Fiche inconnue.');return {id:e.id,day:e.day,from:e.from,sets:e.sets,guide:e.guide};}
      return {id:e.id,day:e.day,from:e.from,sets:e.sets,guide:validateGuide(e.guide)};
    });
  }
  function guideFor(item){const supplied=item[3];if(supplied!==null&&typeof supplied==='object')return supplied;return guides.find(g=>typeof supplied==='string'&&g.id===supplied)||guides.find(g=>g.name===item[0]);}
  function itemKey(item,day,index){return `${day}:${item[4]||index}`;}
  function plan(state,week){return program.map((d,i)=>({...d,items:[...d.items,...(state.extras||[]).filter(e=>e.day===i&&e.from<=offset(week,i)).map(e=>{const g=typeof e.guide==='string'?guides.find(g=>g.id===e.guide):e.guide;return [g.name,g.equipment,e.sets,e.guide,'x_'+e.id];})]}));}
  function streak(state,today=dateKey(new Date())){
    const completed=new Set();
    for(const [wk,w] of Object.entries(state.weeks))for(let i=0;i<6;i++)if(w.complete[i]&&offset(wk,i)<=today)completed.add(offset(wk,i));
    const start=[...completed].sort()[0];
    const used={},history={};let current=0,best=0;
    if(start)for(let date=start;date<=today;date=offset(date,1)){
      const rest=new Date(`${date}T12:00:00`).getDay()===0,month=date.slice(0,7);
      if(completed.has(date)){current++;history[date]='done';}
      else if(rest){if(current)current++;history[date]='rest';}
      else if(date===today){history[date]='pending';}
      else if(current&&(used[month]||0)<3){used[month]=(used[month]||0)+1;history[date]='frozen';}
      else {history[date]=current?'broken':'missed';current=0;}
      best=Math.max(best,current);
    }
    return {current,best,remaining:3-(used[today.slice(0,7)]||0),used,history,start,todayDone:completed.has(today)};
  }
  return {program,KEY,LEGACY_KEY,dateKey,monday,offset,empty,emptyWeek,validate,stats,streak,guides,guideFor,itemKey,plan,validateExtras,validateGuide};
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
  }catch(error){
    // Never overwrite a saved record that failed validation.
    // A previous version may have exercise indexes that no longer exist after a program edit.
    try{
      const raw=localStorage.getItem(KEY);
      const previous=raw&&JSON.parse(raw);
      if(previous&&previous.version===2&&previous.weeks&&typeof previous.weeks==='object'&&typeof previous.notes==='string'){
        const backupKey=KEY+'-backup-before-repair';
        if(!localStorage.getItem(backupKey))localStorage.setItem(backupKey,raw);
        const cleaned={version:2,weeks:{},notes:previous.notes.slice(0,20000),extras:[]};
        try{cleaned.extras=Fitness.validateExtras(previous.extras||[]);}catch{}
        for(const [weekKey,record] of Object.entries(previous.weeks)){
          if(!/^\d{4}-\d{2}-\d{2}$/.test(weekKey)||!record||typeof record!=='object')continue;
          const checks={},complete={};
          for(const [k,v] of Object.entries(record.checks||{})){
            if(v!==true&&v!==false)continue;
            const match=/^([0-6]):(\d{1,2})$/.exec(k);
            const extra=/^([0-5]):x_([a-zA-Z0-9_-]+)$/.exec(k);
            const stable=/^([0-5]):(v3_[a-zA-Z0-9_-]+)$/.exec(k);
            if(match&&program[+match[1]]?.items[+match[2]]||extra&&cleaned.extras.some(e=>e.day===+extra[1]&&e.id===extra[2])||stable&&program[+stable[1]]?.items.some(e=>e[4]===stable[2]))checks[k]=v;
          }
          for(const [k,v] of Object.entries(record.complete||{}))if(/^[0-6]$/.test(k)&&typeof v==='boolean')complete[k]=v;
          cleaned.weeks[weekKey]={checks,complete};
        }
        state=validate(cleaned);
        save();
        message('Ancien suivi récupéré. Une copie de sécurité a été conservée dans ce navigateur. Exporte ton suivi.',true);
      }else{blocked=true;message('Sauvegarde illisible : tes anciennes données sont préservées. Exporte les nouvelles données avant de quitter.',true);}
    }catch{blocked=true;message('Sauvegarde inaccessible. Tes anciennes données sont préservées. Exporte ton suivi.',true);}
  }
  const currentWeek=()=>state.weeks[week]||emptyWeek();
  function writableWeek(){return state.weeks[week]||=(emptyWeek());}
  function confirmAction(title,text,action){
    return new Promise(resolve=>{const dialog=$('confirm-dialog');$('confirm-title').textContent=title;$('confirm-message').textContent=text;$('confirm-action').textContent=action;dialog.returnValue='';dialog.addEventListener('close',()=>resolve(dialog.returnValue==='confirm'),{once:true});dialog.showModal();});
  }
  function render(){
    const today=dateKey(new Date()), selected=offset(week,active), locked=selected!==today;
    const displayed=Fitness.plan(state,week),d=displayed[active], w=currentWeek(), count=d.items.filter((item,i)=>w.checks[Fitness.itemKey(item,active,i)]).length;
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
      const key=Fitness.itemKey(exercise,active,i),checked=!!w.checks[key],label=el('div',undefined,`exercise${checked?' done':''}`),info=el('button',undefined,'exercise-info exercise-open'),input=el('input');
      info.type='button';info.setAttribute('aria-label',`Voir le mouvement : ${exercise[0]}`);info.onclick=()=>openGuide(exercise);
      info.append(el('span',exercise[0],'exercise-name'),el('span',exercise[1]+' · Voir le mouvement ↗','exercise-sub'));
      input.type='checkbox';input.checked=checked;input.disabled=locked;input.setAttribute('aria-label',`${exercise[0]} terminé`);
      input.onchange=()=>{if(offset(week,active)!==dateKey(new Date())){render();return;}const record=writableWeek();record.checks[key]=input.checked;if(!input.checked)record.complete[active]=false;save();render();$('exercises').querySelectorAll('input')[i].focus({preventScroll:true});};
      label.append(el('span',String(i+1).padStart(2,'0'),'exercise-index'),info,el('span',exercise[2],'exercise-sets'),input);$('exercises').append(label);
    });
    if(!d.items.length){const rest=el('div',undefined,'rest-state');rest.append(el('span','↗','rest-icon'),el('strong','RÉCUPÉRER,\nC’EST AVANCER.'),el('p','Une marche douce, du repos et du temps pour toi. Aujourd’hui, tu recharges.'));$('exercises').append(rest);}
    document.querySelector('.list-heading').hidden=!d.items.length;$('session-progress').hidden=!d.items.length;$('session-date-hint').textContent=locked?(selected>today?'Cette séance pourra être validée le jour prévu.':'Historique conservé : les journées passées ne sont plus modifiables.'):'Valide ta séance avant minuit pour prolonger ta série.';
    const percent=d.items.length?Math.round(count/d.items.length*100):0;
    $('session-count').textContent=`${count} / ${d.items.length} exercices`;$('session-percent').textContent=`${percent} %`;$('exercise-progress').value=percent;
    $('complete-session').textContent=w.complete[active]?(d.items.length?'Séance terminée ✓':'Repos validé ✓'):(d.items.length?'Terminer la séance ↗':'Valider ma récupération ↗');
    $('complete-session').setAttribute('aria-pressed',String(!!w.complete[active]));$('complete-session').disabled=locked;
    renderStreak(today);
    const total=stats(w,displayed);$('completed-count').textContent=total.completed;
    $('week-message').textContent=total.completed===6?'Semaine complète. Beau travail.':total.completed?'Tu avances. Garde le rythme.':'Chaque séance fait la différence.';
    $('week-marks').replaceChildren();program.forEach((day,i)=>{if(!day.items.length)return;const mark=el('span',undefined,w.complete[i]?'done':'');mark.title=`${day.name} : ${w.complete[i]?'terminé':'à faire'}`;$('week-marks').append(mark);});
    $('week-marks').setAttribute('aria-label',`${total.completed} séances terminées sur 6`);
    $('add-exercise').disabled=selected<today||active===6||(state.extras||[]).length>=100;
    if(blocked)$('save-state').textContent='Sauvegarde indisponible. Pense à exporter.';
  }
  function openGuide(item){
    const g=Fitness.guideFor(item);if(!g){message('Fiche introuvable pour ce mouvement.');return;}
    $('guide-title').textContent=item[0];$('guide-meta').textContent=item[1]+' · '+item[2];$('guide-photos').replaceChildren();
    g.images.forEach((src,i)=>{const figure=el('figure'),img=el('img');img.src=src;img.alt=`${g.name} — ${g.captions?.[i]||`position ${i+1}`}`;img.referrerPolicy='no-referrer';img.decoding='async';img.onerror=()=>{img.hidden=true;figure.prepend(el('p','Photo indisponible. Vérifie ta connexion ou consulte la source.','photo-error'));};figure.append(img,el('figcaption',g.captions?.[i]||`Position ${i+1}`));$('guide-photos').append(figure);});
    $('guide-steps').replaceChildren(...g.steps.map(step=>el('li',step)));$('guide-note').textContent=g.note||'Reste sur une amplitude confortable et un mouvement contrôlé.';
    $('guide-source').hidden=!g.source;$('guide-source').href=g.source||'#';$('exercise-guide').showModal();
  }
  $('close-guide').onclick=()=>$('exercise-guide').close();
  const choose=$('guide-choice');Fitness.guides.forEach(g=>{const option=el('option',g.name);option.value=g.id;choose.append(option);});const customOption=el('option','Autre exercice : créer sa fiche');customOption.value='custom';choose.append(customOption);
  function selection(){const custom=choose.value==='custom';$('custom-guide-fields').hidden=!custom;for(const input of $('custom-guide-fields').querySelectorAll('input,textarea')){input.disabled=!custom;input.required=custom&&input.hasAttribute('data-required');}const g=Fitness.guides.find(g=>g.id===choose.value);$('chosen-guide-info').textContent=custom?'Pour ce nouveau mouvement, ajoute une explication et au moins une photo.':g?`${g.equipment} · ${g.images.length} photo(s) et une explication incluses.`:'';$('preview-guide').hidden=!g;}
  choose.onchange=selection;
  $('preview-guide').onclick=()=>{const g=Fitness.guides.find(g=>g.id===choose.value);if(g)openGuide([g.name,g.equipment,$('extra-sets').value||'À définir',g.id]);};
  let addDate,addDay;
  $('add-exercise').onclick=()=>{addDate=offset(week,active);addDay=active;if(addDate<dateKey(new Date())||active===6)return;$('add-form').reset();choose.value=Fitness.guides[0].id;$('add-day-label').textContent=`${program[active].name}, à partir du ${new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long'}).format(new Date(addDate+'T12:00:00'))}`;selection();$('add-error').textContent='';$('add-dialog').showModal();};
  $('close-add').onclick=$('cancel-add').onclick=()=>$('add-dialog').close();
  $('add-form').onsubmit=e=>{e.preventDefault();try{if(addDate<dateKey(new Date()))throw Error('Le jour a changé. Rouvre l’ajout sur une journée à venir.');let guide=choose.value;if(guide==='custom')guide=Fitness.validateGuide({name:$('custom-name').value.trim(),equipment:$('custom-equipment').value.trim(),steps:$('custom-steps').value.split('\n').map(s=>s.trim()).filter(Boolean),images:[$('custom-photo-1').value.trim(),$('custom-photo-2').value.trim()].filter(Boolean),note:'Fiche personnelle ajoutée par toi.'});const extra={id:crypto.randomUUID(),day:addDay,from:addDate,sets:$('extra-sets').value.trim(),guide};const before=JSON.parse(JSON.stringify(state));state.extras=Fitness.validateExtras([...(state.extras||[]),extra]);const targetWeek=monday(new Date(addDate+'T12:00:00'));if(state.weeks[targetWeek])state.weeks[targetWeek].complete[addDay]=false;if(!save()){state=before;throw Error('Impossible d’enregistrer cet ajout. Exporte ton suivi ou libère de l’espace.');}$('add-dialog').close();render();message('Exercice ajouté avec sa fiche. Il reviendra chaque semaine à partir de cette date.');}catch(error){$('add-error').textContent=error.message;}};
  function renderStreak(today){
    const result=Fitness.streak(state,today);
    $('streak-count').textContent=result.current;
    $('streak-best').textContent=`Record : ${result.best} jour${result.best>1?'s':''}`;
    $('streak-message').textContent=!result.start?'Ta première séance lance ta série.':result.todayDone?'C’est fait pour aujourd’hui. À demain.':new Date(`${today}T12:00:00`).getDay()===0?'Dimanche : ta récupération protège ta série.':result.current?'Ta série continue. À toi de jouer aujourd’hui.':'Une nouvelle séance, un nouveau départ.';
    $('freeze-count').textContent=`${result.remaining} / 3 gels disponibles`;
    $('freeze-month').textContent=new Intl.DateTimeFormat('fr-FR',{month:'long',year:'numeric'}).format(new Date(`${today}T12:00:00`));
    $('freezes').replaceChildren();for(let i=0;i<3;i++)$('freezes').append(el('span',i<result.remaining?'❄':'—',i<result.remaining?'available':'spent'));
    $('streak-history').replaceChildren();
    const labels={done:'Séance validée',rest:'Repos prévu',frozen:'Gel utilisé',broken:'Série interrompue',missed:'Séance manquée',pending:'À faire aujourd’hui',idle:'Avant le début de la série'};
    for(let i=27;i>=0;i--){const date=offset(today,-i),kind=result.history[date]||'idle',cell=el('span',new Date(`${date}T12:00:00`).getDate(),`history-day ${kind}`);cell.title=`${date} : ${labels[kind]}`;cell.setAttribute('aria-label',cell.title);$('streak-history').append(cell);}
  }
  function refreshNotes(){$('notes').value=state.notes;$('note-count').textContent=`${state.notes.length.toLocaleString('fr-FR')} / 20 000`;}
  $('notes').oninput=()=>{state.notes=$('notes').value;$('note-count').textContent=`${state.notes.length.toLocaleString('fr-FR')} / 20 000`;save();};
  $('prev-week').onclick=()=>{week=offset(week,-7);render();};$('next-week').onclick=()=>{week=offset(week,7);render();};$('this-week').onclick=()=>{week=monday();render();};
  $('complete-session').onclick=()=>{if(offset(week,active)!==dateKey(new Date())){render();return;}const w=writableWeek();w.complete[active]=!w.complete[active];if(w.complete[active])Fitness.plan(state,week)[active].items.forEach((item,i)=>w.checks[Fitness.itemKey(item,active,i)]=true);save();render();if(w.complete[active])message(program[active].items.length?'Séance validée. Un pas de plus.':'Récupération validée.');};
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
  let lastDate=dateKey(new Date());
  function checkDate(){const now=dateKey(new Date());if(now!==lastDate){lastDate=now;week=monday();active=(new Date().getDay()+6)%7;render();}}
  setInterval(checkDate,30000);window.addEventListener('focus',checkDate);document.addEventListener('visibilitychange',checkDate);
  refreshNotes();render();
}
