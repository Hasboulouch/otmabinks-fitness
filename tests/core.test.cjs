const test=require('node:test');
const assert=require('node:assert/strict');
const {initial,validate,monday,offset,progress}=require('../app.js');
test('week boundaries use local dates across year and daylight saving transitions',()=>{
  assert.equal(monday(new Date('2026-01-01T12:00:00')),'2025-12-29');
  assert.equal(monday(new Date('2026-10-25T12:00:00')),'2026-10-19');
  assert.equal(offset('2026-10-26',7),'2026-11-02');
});
test('export round trip preserves program, notes and historical checks',()=>{
 const data=initial(); data.plan[0].exercises=[{id:'e_1',name:'Exercice test',sets:'3',reps:'8',rest:'60 s'}];
 data.weeks['2026-10-19']=Array.from({length:7},()=>({notes:'',done:[]}));data.weeks['2026-10-19'][0]={notes:'Charge test <script>',done:['e_1']};
 assert.deepEqual(validate(JSON.parse(JSON.stringify(data))),data);
 assert.deepEqual(progress(data.plan,data.weeks['2026-10-19']),{total:1,done:1,percent:100});
 assert.deepEqual(progress(data.plan,data.weeks['2026-10-26']),{total:1,done:0,percent:0});
});
test('import rejects malformed data, duplicate identifiers and invalid dates',()=>{
 assert.throws(()=>validate({version:2})); const data=initial();data.plan[0].exercises=[{id:'x',name:'a',sets:'',reps:'',rest:''},{id:'x',name:'b',sets:'',reps:'',rest:''}];assert.throws(()=>validate(data));
 const invalid=initial();invalid.weeks['2026-02-30']=[];assert.throws(()=>validate(invalid));
 const proto=JSON.parse('{"version":1,"plan":[],"weeks":{"__proto__":{}}}');assert.throws(()=>validate(proto));
});
test('empty plan and stale checks do not inflate progress',()=>{
 const data=initial();assert.deepEqual(progress(data.plan),{total:0,done:0,percent:0});
 data.plan[0].exercises=[{id:'new'}];assert.deepEqual(progress(data.plan,[{done:['old']}]),{total:1,done:0,percent:0});
});
