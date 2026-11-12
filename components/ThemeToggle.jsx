'use client';
import {useEffect,useState} from 'react';
export default function ThemeToggle(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{const saved=localStorage.getItem('friends-theme');const preferred=saved?saved==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;setDark(preferred);document.documentElement.dataset.theme=preferred?'dark':'light';},[]);
 function toggle(){const next=!dark;setDark(next);document.documentElement.dataset.theme=next?'dark':'light';localStorage.setItem('friends-theme',next?'dark':'light');}
 return <button className="theme-toggle" type="button" onClick={toggle} aria-label={dark?'Switch to light mode':'Switch to dark mode'} aria-pressed={dark}><span aria-hidden="true">{dark?'☀':'☾'}</span><span>{dark?'Light mode':'Dark mode'}</span></button>;
}
