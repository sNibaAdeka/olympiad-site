'use client';

import { useEffect, useState } from 'react';

const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScNaHS72kN_m-t7js6yufrZe7NyfgI3CP62ZU2HP-seJJ7EMQ/viewform';
const stages = [
  ['01', 'ENTRY', '23 SEPTEMBER', 'Registration\ncloses', 'YOUR FIRST COORDINATE'],
  ['02', 'WRITTEN', '25 SEPTEMBER', 'Written\ntest', 'SPATIAL REASONING'],
  ['03', 'MULTIMEDIA', '26 SEPTEMBER', 'Multimedia\ntest', 'VISUAL ANALYSIS'],
  ['04', 'REVIEW', '27 SEPTEMBER', 'Marking\nday', 'FIELD NOTES'],
  ['05', 'RELEASE', '28 SEPTEMBER', 'Results\nannounced', 'NEW HORIZON'],
];

export default function Home() {
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.sessionStorage.getItem('geonova-intro')) return;
    setIntro(true);
    const timer = window.setTimeout(() => { setIntro(false); window.sessionStorage.setItem('geonova-intro', 'seen'); }, 1450);
    return () => window.clearTimeout(timer);
  }, []);
  const skipIntro = () => { setIntro(false); window.sessionStorage.setItem('geonova-intro', 'seen'); };

  return <main>
    {intro && <section className="intro" aria-label="Geonova introduction"><button onClick={skipIntro}>Skip intro ↗</button><img src="/geonova-atlas-v2.png" alt="" /><strong>GEONOVA</strong><span>ONLINE GEOGRAPHY OLYMPIAD / 2026</span></section>}
    <section className="hero" id="home"><nav className="nav shell"><a href="#home" className="nav-brand"><img src="/geonova-logo-transparent.png" alt="GEONOVA Online Geography Olympiad" /></a><div className="nav-links"><a href="#about">About</a><a href="#schedule">Schedule</a><a href="#format">Format</a></div><a className="nav-cta" href={registrationUrl} target="_blank" rel="noreferrer">Register ↗</a></nav>
      <div className="hero-inner shell"><div className="hero-copy"><p className="label">ONLINE GEOGRAPHY OLYMPIAD / 2026</p><h1>GEONOVA</h1><h2>Read the world<br /><em>differently.</em></h2><p>A focused online competition for young geographers ready to test analytical skills, spatial thinking and global knowledge.</p><a className="primary" href={registrationUrl} target="_blank" rel="noreferrer">Register now <span>↗</span></a><div className="facts"><span>25—28 SEPTEMBER</span><i /><span>ONLINE</span><i /><span>ENGLISH</span></div></div><div className="hero-visual"><img src="/geonova-atlas-v2.png" alt="A three-dimensional Geonova atlas globe" /><small>GEONOVA / ORBIT ATLAS</small></div></div></section>
    <section className="format" id="format"><div className="shell"><span>ONLINE</span><b>·</b><span>ENGLISH</span><b>·</b><span>REGISTRATION CLOSES 23 SEPTEMBER</span></div></section>
    <section className="about shell" id="about"><p className="label">01 / THE PREMISE</p><div><h2>Geography is not<br /><em>memorising maps.</em></h2><p>It is learning to read systems: people, places, patterns and the forces that connect them.</p></div><aside><article><b>01</b><h3>Analyse</h3><p>Find the pattern beneath the surface.</p></article><article><b>02</b><h3>Locate</h3><p>Read the world through place and scale.</p></article><article><b>03</b><h3>Connect</h3><p>Turn observations into a bigger picture.</p></article></aside></section>
    <section className="schedule" id="schedule"><div className="shell"><header><p className="label">02 / THE ROUTE</p><h2>Four days.<br /><em>One shared map.</em></h2></header><div className="stage-field">{stages.map(([no, code, date, title, note], index) => <article className={`stage s${index + 1}`} key={no}><div><span>{no} / {code}</span><b>{date}</b></div><h3>{title.split('\n').map(line => <span key={line}>{line}</span>)}</h3><p>{note}</p></article>)}</div></div></section>
    <section className="details shell"><p className="label">03 / THE DETAILS</p><div><h2>Test your view<br />of <em>the world.</em></h2><p>GEONOVA is an online geography olympiad for curious minds who want to question, interpret and connect what they see.</p></div><dl><div><dt>25 SEPT</dt><dd>Written test</dd><small>Structured geographic thinking</small></div><div><dt>26 SEPT</dt><dd>Multimedia test</dd><small>Images, maps and visual evidence</small></div><div><dt>27—28 SEPT</dt><dd>Marking & results</dd><small>Review, then a new horizon</small></div></dl></section>
    <section className="cta"><div className="shell"><img src="/geonova-atlas-v2.png" alt="" /><div><p className="label">YOUR NEXT COORDINATE IS HERE</p><h2>Read the world<br /><em>differently.</em></h2></div><a href={registrationUrl} target="_blank" rel="noreferrer">Register for<br />GEONOVA <span>↗</span></a></div></section><footer className="footer shell"><span>© GEONOVA 2026</span><span>ONLINE GEOGRAPHY OLYMPIAD</span><a href={registrationUrl} target="_blank" rel="noreferrer">Registration ↗</a></footer>
  </main>;
}
