'use client';
import {useEffect,useRef,useState} from 'react';

const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS=['Mo','Tu','We','Th','Fr','Sa','Su'];
const pad=n=>String(n).padStart(2,'0');
const toKey=(y,m,d)=>`${y}-${pad(m+1)}-${pad(d)}`;
function parse(v){const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(v||'');return m?{y:+m[1],m:+m[2]-1,d:+m[3]}:null}

// Branded date picker with day, month and year views. Value is an ISO yyyy-mm-dd string.
export default function DatePicker({value,onChange,max,min='1920-01-01',required=false,placeholder='Select a date',ariaLabel='Date',defaultView}){
 const sel=parse(value),maxD=parse(max),minD=parse(min);
 const start=sel||parse(defaultView)||maxD||{y:new Date().getFullYear(),m:new Date().getMonth()};
 const [open,setOpen]=useState(false);
 const [view,setView]=useState('days');
 const [cursor,setCursor]=useState({y:start.y,m:start.m});
 const root=useRef(null),trigger=useRef(null);

 useEffect(()=>{
  if(!open)return;
  const s=parse(value)||start;setCursor({y:s.y,m:s.m});setView('days');
  const close=e=>{if(!root.current?.contains(e.target))setOpen(false)};
  const esc=e=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus()}};
  document.addEventListener('pointerdown',close);document.addEventListener('keydown',esc);
  return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',esc)};
 },[open]);// eslint-disable-line react-hooks/exhaustive-deps

 const after=(k)=>max&&k>max, before=(k)=>min&&k<min;
 function pick(d){onChange(toKey(cursor.y,cursor.m,d));setOpen(false);trigger.current?.focus()}
 function shift(n){
  if(view==='days'){const t=new Date(cursor.y,cursor.m+n,1);setCursor({y:t.getFullYear(),m:t.getMonth()})}
  else if(view==='months')setCursor(c=>({...c,y:c.y+n}));
  else setCursor(c=>({...c,y:c.y+n*12}));
 }
 const label=sel?new Date(sel.y,sel.m,sel.d).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}):placeholder;

 let body;
 if(view==='days'){
  const first=new Date(cursor.y,cursor.m,1),days=new Date(cursor.y,cursor.m+1,0).getDate(),offset=(first.getDay()+6)%7;
  const cells=[];for(let i=0;i<offset;i++)cells.push(<span key={'e'+i}/>);
  for(let d=1;d<=days;d++){const k=toKey(cursor.y,cursor.m,d),off=after(k)||before(k),isSel=value===k;
   cells.push(<button type="button" key={k} className={'dp-day'+(isSel?' is-selected':'')} disabled={off} aria-pressed={isSel} aria-label={new Date(cursor.y,cursor.m,d).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})} onClick={()=>pick(d)}>{d}</button>)}
  body=<div className="dp-grid dp-days">{DAYS.map(d=><b key={d}>{d}</b>)}{cells}</div>;
 }else if(view==='months'){
  body=<div className="dp-grid dp-months">{MONTHS.map((m,i)=>{const off=(maxD&&(cursor.y>maxD.y||(cursor.y===maxD.y&&i>maxD.m)))||(minD&&(cursor.y<minD.y));return <button type="button" key={m} disabled={off} className={sel&&sel.y===cursor.y&&sel.m===i?'is-selected':''} onClick={()=>{setCursor(c=>({...c,m:i}));setView('days')}}>{m.slice(0,3)}</button>})}</div>;
 }else{
  const first=Math.floor(cursor.y/12)*12;
  body=<div className="dp-grid dp-months">{Array.from({length:12},(_,i)=>first+i).map(y=>{const off=(maxD&&y>maxD.y)||(minD&&y<minD.y);return <button type="button" key={y} disabled={off} className={sel&&sel.y===y?'is-selected':''} onClick={()=>{setCursor(c=>({...c,y}));setView('months')}}>{y}</button>})}</div>;
 }
 const title=view==='days'?`${MONTHS[cursor.m]} ${cursor.y}`:view==='months'?String(cursor.y):`${Math.floor(cursor.y/12)*12} - ${Math.floor(cursor.y/12)*12+11}`;

 return <div className={'dp'+(open?' is-open':'')} ref={root}>
  <button type="button" ref={trigger} className={'fs-trigger'+(sel?'':' is-placeholder')} aria-haspopup="dialog" aria-expanded={open} aria-label={ariaLabel+(sel?': '+label:'')} onClick={()=>setOpen(o=>!o)}>
   <span>{label}</span><i className="icon icon-calendar" aria-hidden="true"/>
  </button>
  <input className="fs-native" tabIndex={-1} aria-hidden="true" required={required} value={value||''} onChange={()=>{}} onFocus={()=>trigger.current?.focus()}/>
  {open&&<div className="dp-panel" role="dialog" aria-label={ariaLabel}>
   <div className="dp-head">
    <button type="button" className="dp-title" onClick={()=>setView(view==='days'?'years':view==='years'?'days':'years')} aria-label="Choose month and year">{title}<i className="icon icon-chevron-down" aria-hidden="true"/></button>
    <div className="dp-nav"><button type="button" onClick={()=>shift(-1)} aria-label="Previous"><i className="icon icon-chevron-left" aria-hidden="true"/></button><button type="button" onClick={()=>shift(1)} aria-label="Next"><i className="icon icon-chevron-right" aria-hidden="true"/></button></div>
   </div>
   {body}
   <div className="dp-foot">{value?<button type="button" onClick={()=>{onChange('');setOpen(false)}}>Clear</button>:<span>Tap the month to jump to a year</span>}</div>
  </div>}
 </div>;
}
