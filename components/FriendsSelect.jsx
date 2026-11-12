'use client';
import {useEffect,useId,useRef,useState} from 'react';

// Branded dropdown: a button that opens a listbox styled like the rest of Friends.
// A visually hidden input keeps native `required` validation working.
export default function FriendsSelect({value,onChange,options,placeholder='Select',required=false,ariaLabel}){
 const [open,setOpen]=useState(false);
 const [active,setActive]=useState(0);
 const root=useRef(null),list=useRef(null),trigger=useRef(null);
 const listId=useId();
 const items=options.map(o=>typeof o==='string'?{value:o,label:o}:o);
 const selected=items.find(o=>o.value===value);

 useEffect(()=>{
  if(!open)return;
  const i=items.findIndex(o=>o.value===value);setActive(i<0?0:i);
  const close=e=>{if(!root.current?.contains(e.target))setOpen(false)};
  document.addEventListener('pointerdown',close);
  return()=>document.removeEventListener('pointerdown',close);
 },[open]);// eslint-disable-line react-hooks/exhaustive-deps
 useEffect(()=>{if(open)list.current?.querySelector('[data-active="true"]')?.scrollIntoView({block:'nearest'})},[active,open]);

 function choose(v){onChange(v);setOpen(false);trigger.current?.focus()}
 function onKey(e){
  if(e.key==='Escape'&&open){e.preventDefault();setOpen(false);return}
  if(e.key==='Tab'){setOpen(false);return}
  if(!open&&['ArrowDown','ArrowUp','Enter',' '].includes(e.key)){e.preventDefault();setOpen(true);return}
  if(!open)return;
  if(e.key==='ArrowDown'){e.preventDefault();setActive(a=>Math.min(a+1,items.length-1))}
  else if(e.key==='ArrowUp'){e.preventDefault();setActive(a=>Math.max(a-1,0))}
  else if(e.key==='Home'){e.preventDefault();setActive(0)}
  else if(e.key==='End'){e.preventDefault();setActive(items.length-1)}
  else if(e.key==='Enter'||e.key===' '){e.preventDefault();if(items[active])choose(items[active].value)}
 }

 return <div className={'fs-select'+(open?' is-open':'')} ref={root}>
  <button type="button" ref={trigger} className={'fs-trigger'+(selected?'':' is-placeholder')} aria-haspopup="listbox" aria-expanded={open} aria-controls={listId} aria-label={ariaLabel} onClick={()=>setOpen(o=>!o)} onKeyDown={onKey}>
   <span>{selected?selected.label:placeholder}</span><i className="icon icon-chevron-down" aria-hidden="true"/>
  </button>
  <input className="fs-native" tabIndex={-1} aria-hidden="true" required={required} value={value||''} onChange={()=>{}} onFocus={()=>trigger.current?.focus()}/>
  {open&&<ul className="fs-list" id={listId} role="listbox" ref={list} aria-label={ariaLabel}>
   {items.map((o,i)=><li key={o.value} role="option" aria-selected={o.value===value} data-active={i===active} className={(o.value===value?'is-selected ':'')+(i===active?'is-active':'')} onPointerEnter={()=>setActive(i)} onClick={()=>choose(o.value)}>
    <span>{o.label}</span>{o.value===value&&<i className="icon icon-check" aria-hidden="true"/>}
   </li>)}
  </ul>}
 </div>;
}
