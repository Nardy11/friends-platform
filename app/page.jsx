'use client';
import Link from 'next/link';
import {useState} from 'react';
import ThemeToggle from '../components/ThemeToggle';
import {FriendsBrand} from '../components/FriendsBrand';

function Brand(){return <Link href="/" className="showcase-brand"><FriendsBrand/><span>Friends</span></Link>}
const stories=[
 {quote:'“Friends gave me a sense of purpose. I made new friends, helped at a shelter, and even started visiting a grandfriend weekly. It really changed my routine.”',name:'Omar H.',meta:'Member since Mar 2025',image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85'},
 {quote:'“I joined for one afternoon at the shelter. I stayed because the people I met made it feel like I belonged somewhere.”',name:'Mariam A.',meta:'Community member',image:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85'},
 {quote:'“A weekly visit became the highlight of my week. It reminded me how much a little time can mean.”',name:'Salma R.',meta:'Volunteer',image:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=85'}
];
const ways=[
 {title:'Animals',tag:'Give care. Get it back.',desc:'Volunteer at shelters, help with walks, feeding and care.',image:'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1100&q=90'},
 {title:'Grandfriends',tag:'Be there for someone.',desc:'Share a conversation, a game or a little time with older adults.',image:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1100&q=90'},
 {title:'Events',tag:'Make a first memory.',desc:'Food, hangouts, parties, sports and new experiences.',image:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=90'}
];
export default function Home(){const [story,setStory]=useState(0);return <main className="friends-showcase">
 <header className="showcase-nav"><Brand/><nav><a href="#home">Home</a><a href="#why">Why Friends</a><a href="#how">How It Works</a><a href="#impact">Impact</a><a href="#stories">Stories</a></nav><div className="showcase-nav-actions"><ThemeToggle/><Link href="/login/" className="showcase-login">Log in</Link><Link href="/signup/" className="showcase-join">Get Started</Link></div></header>
 <section className="showcase-hero" id="home"><div className="showcase-hero-copy"><p className="showcase-kicker">A COMMUNITY FOR REAL CONNECTIONS</p><h1>Make Room<br/>for <em>Connection</em></h1><p className="showcase-lead">Spend time with shelter animals, bring company to older adults, or join meaningful events — all in one place.</p><div className="showcase-ctas"><Link href="/signup/" className="showcase-join">Get Started Free <span>↗</span></Link><a href="#how" className="showcase-watch"><span>▷</span> Watch How It Works</a></div></div><div className="showcase-hero-photo">
 <img className="showcase-hero-artwork" src="/friends-platform/friends-community-hero-transparent.webp" alt="A young woman, a young man, an older man and a golden dog together" fetchPriority="high"/>
 <div className="hero-float-card hero-float-volunteer"><span aria-hidden="true">♧</span>Volunteer</div>
 <div className="hero-float-card hero-float-meet"><span aria-hidden="true">♧</span>Meet</div>
 <div className="hero-float-card hero-float-care"><span aria-hidden="true">♡</span>Care</div>
 <div className="hero-float-card hero-float-belong"><span aria-hidden="true">↗</span>Belong</div>
 </div></section>
 <section className="showcase-stats" id="impact"><div><b>●</b><strong>5,200+</strong><small>Active Members</small></div><div><b>♡</b><strong>1,180+</strong><small>Animals Helped</small></div><div><b>♧</b><strong>780+</strong><small>Older Adults Visited</small></div><div><b>✦</b><strong>320+</strong><small>Meaningful Events</small></div></section>
 <section className="showcase-section why-showcase" id="why"><div className="showcase-section-heading"><p className="showcase-kicker">WHY FRIENDS EXISTS</p><h2>Why Friends Exists</h2><p>Because in a fast-paced world, many people, animals, and older adults feel left out. Friends brings them together to create kindness, companionship, and a stronger, happier community.</p></div><div className="why-showcase-grid"><article><span>♧</span><h3>Support Animals</h3><p>Help shelters and give animals the care and attention they deserve.</p></article><article><span>♡</span><h3>Be There for Others</h3><p>Spend quality time with older adults and reduce feelings of loneliness.</p></article><article><span>✧</span><h3>Grow Yourself</h3><p>Build empathy, new friendships, and a happier, more purposeful life.</p></article></div></section>
 <section className="showcase-section how-showcase" id="how"><div className="showcase-section-heading"><p className="showcase-kicker">A SIMPLE WAY TO BEGIN</p><h2>How It Works</h2><p>Simple steps to start making a difference.</p></div><div className="how-showcase-steps"><article><span>♙</span><b>01</b><h3>Create Your<br/>Verified Account</h3></article><i>→</i><article><span>⌕</span><b>02</b><h3>Explore<br/>Opportunities</h3></article><i>→</i><article><span>▦</span><b>03</b><h3>Request<br/>& Join</h3></article><i>→</i><article><span>♡</span><b>04</b><h3>Make a<br/>Real Impact</h3></article></div></section>
 <section className="showcase-testimonial" id="stories"><button aria-label="Previous story" onClick={()=>setStory((story+stories.length-1)%stories.length)}>‹</button><div className="testimonial-copy"><p>{stories[story].quote}</p><strong>{stories[story].name}</strong><small>{stories[story].meta}</small><div className="testimonial-dots">{stories.map((s,i)=><button key={s.name} aria-label={'Story '+(i+1)} className={i===story?'active':''} onClick={()=>setStory(i)}/>)}</div></div><img src={stories[story].image} alt={stories[story].name}/><button aria-label="Next story" onClick={()=>setStory((story+1)%stories.length)}>›</button></section>
 <section className="showcase-final"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1300&q=90" alt="A peaceful sunset outdoors"/><div><h2>Small Moments.<br/>A Bigger Life.</h2><p>Start your journey with Friends today.</p><Link href="/signup/" className="showcase-join">Join the Community <span>↗</span></Link></div></section>
 <section className="showcase-ways" aria-label="Ways to connect">{ways.map(w=><article key={w.title}><img src={w.image} alt=""/><div><small>{w.tag}</small><h3>{w.title}</h3><p>{w.desc}</p></div></article>)}</section>
 <footer className="showcase-footer"><Brand/><p>Make room for connection.</p><div><Link href="/login/">Log in</Link><Link href="/signup/">Get started</Link></div><small>© {new Date().getFullYear()} Friends · Real people. Real moments.</small></footer>
 </main>}
