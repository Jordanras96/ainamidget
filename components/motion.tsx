'use client';
import { useEffect, useRef, useState } from 'react';
import { disciplines } from '@/lib/content';
export function MotionController(){
 useEffect(()=>{
 const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.12});
 document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const hero=document.querySelector<HTMLElement>('.hero');
 let frame=0;
 const move=(e:PointerEvent)=>{ if(reduced||e.pointerType==='touch'||!hero)return;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{hero.style.setProperty('--mx',`${(e.clientX/window.innerWidth-.5)*14}px`);hero.style.setProperty('--my',`${(e.clientY/window.innerHeight-.5)*14}px`);});};
 hero?.addEventListener('pointermove',move);
 return ()=>{observer.disconnect();hero?.removeEventListener('pointermove',move);cancelAnimationFrame(frame);};
 },[]);
 return null;
}
export function Opening(){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{if(sessionStorage.getItem('aina-intro')){setVisible(false);return;}const timer=setTimeout(()=>{setVisible(false);sessionStorage.setItem('aina-intro','1');},1500);return()=>clearTimeout(timer);},[]);
 return visible ? <div className="opening" aria-hidden="true"><div className="opening-inner"><span className="mono">AINA MIDGET · PORTFOLIO</span><span className="opening-word">Tout commence<br/>par une <i>rencontre.</i></span><span className="opening-line"/><span className="mono">PLUSIEURS FACETTES. UNE MÊME ÉNERGIE.</span></div></div>:null;
}
export function Navigation(){
 const [open,setOpen]=useState(false);
 return <header className="header"><a className="wordmark" href="/" aria-label="Aina Midget, accueil">am<span>✳</span></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation">{open?'Fermer −':'Menu +'}</button><nav id="navigation" className={open?'nav open':'nav'} aria-label="Navigation principale"><a href="/#facettes" onClick={()=>setOpen(false)}>Les facettes</a><a href="/#preuves" onClick={()=>setOpen(false)}>En pratique</a><a href="/#parcours" onClick={()=>setOpen(false)}>Le parcours</a></nav><a className="header-contact" href="/#contact">Faisons connaissance <span>↗</span></a></header>;
}
export function Facets(){
 const [active,setActive]=useState(0);
 const selected=disciplines[active];
 const refs=useRef<(HTMLButtonElement|null)[]>([]);
 return <div className="facets-layout"><div role="tablist" aria-label="Mes domaines d’intervention" aria-orientation="vertical" className="facet-tabs">{disciplines.map((item,i)=><button ref={el=>{refs.current[i]=el;}} role="tab" key={item.id} id={`tab-${item.id}`} aria-selected={i===active} aria-controls={`panel-${item.id}`} tabIndex={i===active?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>{if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?3:(active+(e.key==='ArrowDown'?1:3))%4;setActive(next);refs.current[next]?.focus();}}}><span className="mono">{item.number}</span><span>{item.tag}</span><span className="tab-arrow">↗</span></button>)}</div><div className="facet-detail" role="tabpanel" id={`panel-${selected.id}`} aria-labelledby={`tab-${selected.id}`} key={selected.id}><div className="facet-symbol" aria-hidden="true">{selected.symbol}</div><span className="eyebrow">UNE FACETTE, DES POSSIBILITÉS</span><h3>{selected.name}</h3><p>{selected.description}</p><div className="tags">{selected.tools.map(t=><span key={t}>{t}</span>)}</div><div className="facet-proof"><span>↳</span>{selected.proof}</div></div></div>;
}
export function CopyEmail(){
 const [copied,setCopied]=useState(false);
 return <button className="copy-email" onClick={async()=>{try{await navigator.clipboard.writeText('ainamidget@gmail.com');setCopied(true);setTimeout(()=>setCopied(false),2200);}catch{setCopied(false);}}} aria-label="Copier l’adresse e-mail"><span aria-live="polite">{copied?'Adresse copiée ✓':'Copier l’adresse ↗'}</span></button>;
}
