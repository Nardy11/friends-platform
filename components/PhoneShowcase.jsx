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
 events:'/friends-platform/friends-brand-sm.webp',
 pottery:'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=640&q=75'
};
const STEPS=[
 {key:'welcome',tap:'login',side:'right',title:'Friends, in your pocket',text:'The same warm community, made for your phone. Plans, people and reminders are always one tap away.',hint:'Tap Log in on the phone'},
 {key:'login',tap:'login',side:'right',title:'Back in with one tap',text:'Your profile, plans and chats follow you from the website to the app. Nothing to set up twice.',hint:'Tap Log in'},
 {key:'home',tap:'events',side:'left',title:'Your community at a glance',text:'See what is happening near you today and choose how you want to show up: animals, grandfriends or events.',hint:'Tap Events'},
 {key:'explore',tap:'pottery',side:'left',title:'Find a plan that fits',text:'Every listing shows the area, the expected spend and how many spots are left, so deciding takes seconds.',hint:'Tap an event'},
 {key:'detail',tap:'request',side:'right',title:'Know before you go',text:'Dates, the host, the plan and who is already going. The first hello feels a lot easier.',hint:'Tap Request to join'},
 {key:'sent',tap:'plans',side:'right',title:'Your request is on its way',text:'The host looks at your profile and you get a notification the moment you are in.',hint:'Tap See my plans'},
 {key:'plans',tap:'tab-chat',side:'left',title:'Your week, planned',text:'Visits and events land on one calendar, with a reminder before each one.',hint:'Tap Chats'},
 {key:'chat',tap:'tab-home',side:'left',title:'Say hello before you meet',text:'Every plan gets its own group chat, so you arrive already knowing a few names.',hint:'Tap Home to start again'}
];
const idx=k=>STEPS.findIndex(s=>s.key===k);

function Icon({n}){return <i className={'icon icon-'+n} aria-hidden="true"/>}
function Finger(){return <span className="ph-finger" aria-hidden="true"><i className="icon icon-pointer"/></span>}
function Tabs({go,active,hl}){
 const t=[['home','house','Home'],['explore','compass','Explore'],['plans','calendar-days','Plans'],['chat','message-circle','Chats']];
 return <nav className="ph-tabs">{t.map(([k,i,l])=><button key={k} type="button" className={(active===k?'on':'')+(hl==='tab-'+k?' ph-pulse':'')} onClick={()=>go(k)}><Icon n={i}/><span>{l}</span>{hl==='tab-'+k&&<Finger/>}</button>)}</nav>;
}

function Screen({k,go,busy,setBusy,hl}){
 const P=id=>hl===id?' ph-pulse':'';
 const F=id=>hl===id?<Finger/>:null;
 if(k==='welcome')return <div className="ph-pad ph-welcome">
  <img src={IMG.events} alt="" className="ph-welcome-img"/>
  <div className="ph-welcome-copy"><span className="ph-logo"><FriendsBrand/></span><h4>Make room for connection</h4><p>Animals, grandfriends and new faces, all in one place.</p>
   <button type="button" className={'ph-btn'+P('login')} onClick={()=>go('login')}>Log in{F('login')}</button><button type="button" className="ph-btn ghost" onClick={()=>go('login')}>Create an account</button></div>
 </div>;
 if(k==='login')return <div className="ph-pad">
  <button type="button" className="ph-back" onClick={()=>go('welcome')} aria-label="Back"><Icon n="chevron-left"/></button>
  <h4 className="ph-h">Welcome back</h4><p className="ph-sub">Log in to see your plans.</p>
  <label className="ph-field"><span>Email</span><b>nour@friends.app</b></label>
  <label className="ph-field"><span>Password</span><b>••••••••••</b></label>
  <button type="button" className={'ph-btn'+P('login')} disabled={busy} onClick={()=>{setBusy(true);setTimeout(()=>{setBusy(false);go('home')},450)}}>{busy?<span className="ph-spin"/>:'Log in'}{!busy&&F('login')}</button>
  <p className="ph-note">Demo preview. Nothing is sent anywhere.</p>
 </div>;
 if(k==='home')return <div className="ph-scroll">
  <div className="ph-pad"><p className="ph-sub">Thursday, 12 Nov</p><h4 className="ph-h">Hi Nour</h4>
   <div className="ph-hero"><img src={IMG.events} alt=""/><div><b>Good things happen when we show up.</b><span>3 plans near you today</span></div></div>
   <p className="ph-label">Choose how to connect</p>
   <div className="ph-paths">
    <button type="button" onClick={()=>go('explore')}><img src={IMG.dog} alt=""/><span>Animals</span></button>
    <button type="button" onClick={()=>go('explore')}><img src={IMG.grand} alt=""/><span>Grandfriends</span></button>
    <button type="button" className={'wide'+P('events')} onClick={()=>go('explore')}><img src={IMG.events} alt=""/><span>Events</span>{F('events')}</button>
   </div></div>
  <Tabs go={go} active="home" hl={hl}/>
 </div>;
 if(k==='explore')return <div className="ph-scroll">
  <div className="ph-pad"><h4 className="ph-h">Explore</h4>
   <div className="ph-search"><Icon n="search"/>Search events or areas</div>
   <div className="ph-chips"><span className="on">All</span><span>Food</span><span>Arts</span><span>Outdoor</span></div>
   {[{img:IMG.pottery,t:'Pottery, no experience needed',m:'Maadi · Sat 14 Nov',s:'2 spots left'},{img:IMG.events,t:'Dinner with new faces',m:'Zamalek · Fri 13 Nov',s:'3 spots left'},{img:IMG.dog,t:'Hope Tails Rescue',m:'Maadi · Free',s:'3 openings'}].map((e,i)=>
    <button type="button" key={e.t} className={'ph-card'+(i===0?P('pottery'):'')} onClick={()=>go('detail')}><img src={e.img} alt=""/><div><b>{e.t}</b><span>{e.m}</span><em>{e.s}</em></div>{i===0&&F('pottery')}</button>)}
  </div>
  <Tabs go={go} active="explore" hl={hl}/>
 </div>;
 if(k==='detail')return <div className="ph-scroll">
  <div className="ph-detail-img"><img src={IMG.pottery} alt=""/><button type="button" className="ph-back on-img" onClick={()=>go('explore')} aria-label="Back"><Icon n="chevron-left"/></button></div>
  <div className="ph-pad"><span className="ph-tag">Arts & culture</span><h4 className="ph-h">Pottery, no experience needed</h4>
   <div className="ph-facts"><div><span>When</span><b>Sat 14 Nov, 4 pm</b></div><div><span>Spend</span><b>EGP 300-500</b></div></div>
   <div className="ph-going"><span className="ph-av a">M</span><span className="ph-av b">O</span><span className="ph-av c">S</span><p>4 going · hosted by Omar</p></div>
   <button type="button" className={'ph-btn'+P('request')} onClick={()=>go('sent')}>Request to join{F('request')}</button>
  </div>
 </div>;
 if(k==='sent')return <div className="ph-pad ph-sent">
  <div className="ph-check"><Icon n="check"/></div><h4 className="ph-h">Request sent</h4>
  <p className="ph-sub">Omar will review your profile. We will let you know as soon as you are in.</p>
  <button type="button" className={'ph-btn'+P('plans')} onClick={()=>go('plans')}>See my plans{F('plans')}</button>
  <button type="button" className="ph-btn ghost" onClick={()=>go('explore')}>Keep exploring</button>
 </div>;
 if(k==='plans')return <div className="ph-scroll">
  <div className="ph-pad"><h4 className="ph-h">My plans</h4>
   <div className="ph-week">{['M','T','W','T','F','S','S'].map((d,i)=><span key={i} className={(i===3?'today ':'')+(i===5||i===6?'has':'')}><small>{d}</small>{9+i}</span>)}</div>
   {[{d:'14',t:'Pottery, no experience needed',m:'4:00 pm · Maadi',s:'Pending',c:'pend'},{d:'14',t:'Bayt El Hekaya',m:'1:00 pm · Heliopolis',s:'Confirmed',c:'ok'},{d:'15',t:'Hope Tails Rescue',m:'10:00 am · Maadi',s:'Confirmed',c:'ok'}].map(p=>
    <div className="ph-plan" key={p.t}><span className="ph-date"><small>Nov</small>{p.d}</span><div><b>{p.t}</b><span>{p.m}</span></div><em className={p.c}>{p.s}</em></div>)}
  </div>
  <Tabs go={go} active="plans" hl={hl}/>
 </div>;
 return <div className="ph-scroll">
  <div className="ph-chat-head"><span className="ph-av a">P</span><div><b>Pottery group</b><span>5 members</span></div></div>
  <div className="ph-msgs">
   <p className="in" style={{'--d':'0s'}}>Hi all! First time on the wheel for me too.</p>
   <p className="in" style={{'--d':'.7s'}}>Same here. Shall we meet at the studio door at 3:50?</p>
   <p className="out" style={{'--d':'1.4s'}}>Perfect, see you there!</p>
   <p className="typing" style={{'--d':'2.1s'}}><i/><i/><i/></p>
  </div>
  <Tabs go={go} active="chat" hl={hl}/>
 </div>;
}

export default function PhoneShowcase(){
 const [step,setStep]=useState(0);
 const [spins,setSpins]=useState(0);
 const [busy,setBusy]=useState(false);
 const prevSide=useRef(STEPS[0].side);
 const sentinels=useRef([]);
 const lock=useRef(null);
 const cur=STEPS[step];

 useEffect(()=>{if(cur.side!==prevSide.current){prevSide.current=cur.side;setSpins(s=>s+1)}},[cur.side]);
 useEffect(()=>{
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const n=Number(e.target.dataset.step);if(lock.current!==null){if(n===lock.current)lock.current=null;return}setStep(n)})},{rootMargin:'-45% 0px -45% 0px'});
  sentinels.current.forEach(el=>el&&io.observe(el));
  return()=>io.disconnect();
 },[]);
 // Tapping in the phone (or a dot) also scrolls the page to that screen's place in the section,
 // so scrolling afterwards continues from where the visitor is. Scroll triggers are paused
 // until the page arrives, so the phone does not flip through the screens in between.
 const jump=i=>{
  if(i<0)return;setStep(i);
  const el=sentinels.current[i];if(!el||!el.offsetHeight)return;
  const r=el.getBoundingClientRect(),y=window.scrollY+r.top+r.height/2-window.innerHeight/2;
  if(Math.abs(y-window.scrollY)<4)return;
  lock.current=i;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:y,behavior:reduce?'auto':'smooth'});
  const release=()=>{lock.current=null;window.removeEventListener('scrollend',release)};
  window.addEventListener('scrollend',release,{once:true});
  setTimeout(release,1500);
 };
 const go=k=>jump(idx(k));
 const tilt=cur.side==='right'?-9:9;

 return <section className="app-show" id="app" aria-label="The Friends app">
  <div className="app-track">
   <div className={'app-stage side-'+cur.side}>
    <div className="app-copy" aria-live="polite">
     <div key={cur.key} className="app-copy-inner">
      <h2>{cur.title}</h2><p>{cur.text}</p>
      <p className="app-hint"><Icon n="pointer"/>{cur.hint}</p>
      <div className="app-dots" role="tablist" aria-label="App screens">{STEPS.map((s,i)=><button key={s.key} type="button" role="tab" aria-selected={i===step} aria-label={s.title} className={i===step?'on':''} onClick={()=>jump(i)}/>)}</div>
      <div className="app-stores"><span><Icon n="smartphone"/>Coming soon to iPhone and Android</span><Link href="/signup/" className="showcase-join">Get started on the web <Icon n="arrow-up-right"/></Link></div>
     </div>
    </div>
    <div className="app-phone-slot">
     <span className="ph-badge" aria-hidden="true"><Icon n="pointer"/>Tap the screen</span>
     <div className="ph-device" style={{transform:`rotateY(${spins*360+tilt}deg)`}}>
      {Array.from({length:13},(_,i)=><span key={i} className="ph-edge" style={{transform:`translateZ(${i-6}px)`}} aria-hidden="true"/>)}
      <div className="ph-face ph-front">
       <div className="ph-screen">
        <div className="ph-status"><span>9:41</span><span className="ph-island"/><span className="ph-sys"><Icon n="signal"/><Icon n="wifi"/><Icon n="battery-full"/></span></div>
        <div className="ph-view" key={cur.key}><Screen k={cur.key} go={go} busy={busy} setBusy={setBusy} hl={cur.tap}/></div>
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
