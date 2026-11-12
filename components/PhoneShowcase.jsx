'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {FriendsBrand} from './FriendsBrand';

// Interactive app preview: real mini screens inside a CSS phone. Tapping inside the phone
// moves through the app; scrolling the section does the same. When the story changes side,
// the phone spins 360 degrees across the stage and the description swaps to the other side.

const IMG={
 dog:'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=640&q=75',
 grand:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=640&q=75',
 events:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=640&q=75',
 pottery:'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=640&q=75'
};
const STEPS=[
 {key:'welcome',side:'right',title:'Friends, in your pocket',text:'The same warm community, made for your phone. Plans, people and reminders are always one tap away.',hint:'Tap Log in on the phone'},
 {key:'login',side:'right',title:'Back in with one tap',text:'Your profile, plans and chats follow you from the website to the app. Nothing to set up twice.',hint:'Tap Log in'},
 {key:'home',side:'left',title:'Your community at a glance',text:'See what is happening near you today and choose how you want to show up: animals, grandfriends or events.',hint:'Tap Events'},
 {key:'explore',side:'left',title:'Find a plan that fits',text:'Every listing shows the area, the expected spend and how many spots are left, so deciding takes seconds.',hint:'Tap an event'},
 {key:'detail',side:'right',title:'Know before you go',text:'Dates, the host, the plan and who is already going. The first hello feels a lot easier.',hint:'Tap Request to join'},
 {key:'sent',side:'right',title:'Your request is on its way',text:'The host looks at your profile and you get a notification the moment you are in.',hint:'Tap See my plans'},
 {key:'plans',side:'left',title:'Your week, planned',text:'Visits and events land on one calendar, with a reminder before each one.',hint:'Tap Chats'},
 {key:'chat',side:'left',title:'Say hello before you meet',text:'Every plan gets its own group chat, so you arrive already knowing a few names.',hint:'Tap Home to start again'}
];
const idx=k=>STEPS.findIndex(s=>s.key===k);

function Icon({n}){return <i className={'icon icon-'+n} aria-hidden="true"/>}
function Tabs({go,active}){
 const t=[['home','house','Home'],['explore','compass','Explore'],['plans','calendar-days','Plans'],['chat','message-circle','Chats']];
 return <nav className="ph-tabs">{t.map(([k,i,l])=><button key={k} type="button" className={active===k?'on':''} onClick={()=>go(k)}><Icon n={i}/><span>{l}</span></button>)}</nav>;
}

function Screen({k,go,busy,setBusy}){
 if(k==='welcome')return <div className="ph-pad ph-welcome">
  <img src={IMG.events} alt="" className="ph-welcome-img"/>
  <div className="ph-welcome-copy"><span className="ph-logo"><FriendsBrand/></span><h4>Make room for connection</h4><p>Animals, grandfriends and new faces, all in one place.</p>
   <button type="button" className="ph-btn" onClick={()=>go('login')}>Log in</button><button type="button" className="ph-btn ghost" onClick={()=>go('login')}>Create an account</button></div>
 </div>;
 if(k==='login')return <div className="ph-pad">
  <button type="button" className="ph-back" onClick={()=>go('welcome')} aria-label="Back"><Icon n="chevron-left"/></button>
  <h4 className="ph-h">Welcome back</h4><p className="ph-sub">Log in to see your plans.</p>
  <label className="ph-field"><span>Email</span><b>nour@friends.app</b></label>
  <label className="ph-field"><span>Password</span><b>••••••••••</b></label>
  <button type="button" className="ph-btn" disabled={busy} onClick={()=>{setBusy(true);setTimeout(()=>{setBusy(false);go('home')},450)}}>{busy?<span className="ph-spin"/>:'Log in'}</button>
  <p className="ph-note">Demo preview. Nothing is sent anywhere.</p>
 </div>;
 if(k==='home')return <div className="ph-scroll">
  <div className="ph-pad"><p className="ph-sub">Thursday, 12 Nov</p><h4 className="ph-h">Hi Nour</h4>
   <div className="ph-hero"><img src={IMG.events} alt=""/><div><b>Good things happen when we show up.</b><span>3 plans near you today</span></div></div>
   <p className="ph-label">Choose how to connect</p>
   <div className="ph-paths">
    <button type="button" onClick={()=>go('explore')}><img src={IMG.dog} alt=""/><span>Animals</span></button>
    <button type="button" onClick={()=>go('explore')}><img src={IMG.grand} alt=""/><span>Grandfriends</span></button>
    <button type="button" className="wide" onClick={()=>go('explore')}><img src={IMG.events} alt=""/><span>Events</span></button>
   </div></div>
  <Tabs go={go} active="home"/>
 </div>;
 if(k==='explore')return <div className="ph-scroll">
  <div className="ph-pad"><h4 className="ph-h">Explore</h4>
   <div className="ph-search"><Icon n="search"/>Search events or areas</div>
   <div className="ph-chips"><span className="on">All</span><span>Food</span><span>Arts</span><span>Outdoor</span></div>
   {[{img:IMG.pottery,t:'Pottery, no experience needed',m:'Maadi · Sat 14 Nov',s:'2 spots left'},{img:IMG.events,t:'Dinner with new faces',m:'Zamalek · Fri 13 Nov',s:'3 spots left'},{img:IMG.dog,t:'Hope Tails Rescue',m:'Maadi · Free',s:'3 openings'}].map((e,i)=>
    <button type="button" key={e.t} className="ph-card" onClick={()=>go('detail')}><img src={e.img} alt=""/><div><b>{e.t}</b><span>{e.m}</span><em>{e.s}</em></div></button>)}
  </div>
  <Tabs go={go} active="explore"/>
 </div>;
 if(k==='detail')return <div className="ph-scroll">
  <div className="ph-detail-img"><img src={IMG.pottery} alt=""/><button type="button" className="ph-back on-img" onClick={()=>go('explore')} aria-label="Back"><Icon n="chevron-left"/></button></div>
  <div className="ph-pad"><span className="ph-tag">Arts & culture</span><h4 className="ph-h">Pottery, no experience needed</h4>
   <div className="ph-facts"><div><span>When</span><b>Sat 14 Nov, 4 pm</b></div><div><span>Spend</span><b>EGP 300-500</b></div></div>
   <div className="ph-going"><span className="ph-av a">M</span><span className="ph-av b">O</span><span className="ph-av c">S</span><p>4 going · hosted by Omar</p></div>
   <button type="button" className="ph-btn" onClick={()=>go('sent')}>Request to join</button>
  </div>
 </div>;
 if(k==='sent')return <div className="ph-pad ph-sent">
  <div className="ph-check"><Icon n="check"/></div><h4 className="ph-h">Request sent</h4>
  <p className="ph-sub">Omar will review your profile. We will let you know as soon as you are in.</p>
  <button type="button" className="ph-btn" onClick={()=>go('plans')}>See my plans</button>
  <button type="button" className="ph-btn ghost" onClick={()=>go('explore')}>Keep exploring</button>
 </div>;
 if(k==='plans')return <div className="ph-scroll">
  <div className="ph-pad"><h4 className="ph-h">My plans</h4>
   <div className="ph-week">{['M','T','W','T','F','S','S'].map((d,i)=><span key={i} className={(i===3?'today ':'')+(i===5||i===6?'has':'')}><small>{d}</small>{9+i}</span>)}</div>
   {[{d:'14',t:'Pottery, no experience needed',m:'4:00 pm · Maadi',s:'Pending',c:'pend'},{d:'14',t:'Bayt El Hekaya',m:'1:00 pm · Heliopolis',s:'Confirmed',c:'ok'},{d:'15',t:'Hope Tails Rescue',m:'10:00 am · Maadi',s:'Confirmed',c:'ok'}].map(p=>
    <div className="ph-plan" key={p.t}><span className="ph-date"><small>Nov</small>{p.d}</span><div><b>{p.t}</b><span>{p.m}</span></div><em className={p.c}>{p.s}</em></div>)}
  </div>
  <Tabs go={go} active="plans"/>
 </div>;
 return <div className="ph-scroll">
  <div className="ph-chat-head"><span className="ph-av a">P</span><div><b>Pottery group</b><span>5 members</span></div></div>
  <div className="ph-msgs">
   <p className="in" style={{'--d':'0s'}}>Hi all! First time on the wheel for me too.</p>
   <p className="in" style={{'--d':'.7s'}}>Same here. Shall we meet at the studio door at 3:50?</p>
   <p className="out" style={{'--d':'1.4s'}}>Perfect, see you there!</p>
   <p className="typing" style={{'--d':'2.1s'}}><i/><i/><i/></p>
  </div>
  <Tabs go={go} active="chat"/>
 </div>;
}

export default function PhoneShowcase(){
 const [step,setStep]=useState(0);
 const [spins,setSpins]=useState(0);
 const [busy,setBusy]=useState(false);
 const prevSide=useRef(STEPS[0].side);
 const sentinels=useRef([]);
 const cur=STEPS[step];

 useEffect(()=>{if(cur.side!==prevSide.current){prevSide.current=cur.side;setSpins(s=>s+1)}},[cur.side]);
 useEffect(()=>{
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setStep(Number(e.target.dataset.step))})},{rootMargin:'-45% 0px -45% 0px'});
  sentinels.current.forEach(el=>el&&io.observe(el));
  return()=>io.disconnect();
 },[]);
 const go=k=>{const i=idx(k);if(i>=0)setStep(i)};
 const tilt=cur.side==='right'?-9:9;

 return <section className="app-show" id="app" aria-label="The Friends app">
  <div className="app-track">
   <div className={'app-stage side-'+cur.side}>
    <div className="app-copy" aria-live="polite">
     <div key={cur.key} className="app-copy-inner">
      <h2>{cur.title}</h2><p>{cur.text}</p>
      <p className="app-hint"><Icon n="pointer"/>{cur.hint}</p>
      <div className="app-dots" role="tablist" aria-label="App screens">{STEPS.map((s,i)=><button key={s.key} type="button" role="tab" aria-selected={i===step} aria-label={s.title} className={i===step?'on':''} onClick={()=>setStep(i)}/>)}</div>
      <div className="app-stores"><span><Icon n="smartphone"/>Coming soon to iPhone and Android</span><Link href="/signup/" className="showcase-join">Get started on the web <Icon n="arrow-up-right"/></Link></div>
     </div>
    </div>
    <div className="app-phone-slot">
     <div className="ph-device" style={{transform:`rotateY(${spins*360+tilt}deg)`}}>
      <div className="ph-face ph-front">
       <div className="ph-screen">
        <div className="ph-status"><span>9:41</span><span className="ph-island"/><span className="ph-sys"><Icon n="signal"/><Icon n="wifi"/><Icon n="battery-full"/></span></div>
        <div className="ph-view" key={cur.key}><Screen k={cur.key} go={go} busy={busy} setBusy={setBusy}/></div>
        <span className="ph-home-bar"/>
       </div>
      </div>
      <div className="ph-face ph-rear" aria-hidden="true"><span className="ph-cam"><i/><i/><i/></span><span className="ph-rear-logo"><FriendsBrand/></span></div>
     </div>
    </div>
   </div>
   <div className="app-sentinels" aria-hidden="true">{STEPS.map((s,i)=><span key={s.key} data-step={i} ref={el=>sentinels.current[i]=el}/>)}</div>
  </div>
 </section>;
}
