import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, GraduationCap, Factory, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PrimaryLink } from "@/components/buttons";
import { people } from "@/lib/data";
import { whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
 title: "About Flowton — Engineering Leadership and Directors",
 description: "Learn about Flowton's company approach and its people: Md Ehtesham Hasan, Nazia Parveen, Ratan Biswakarma and Md Arquam Sayeed."
};

export default function AboutPage(){
 const lead = people[0];
 const otherLeaders = people.slice(1);
 return <main id="main">
  <section className="inner-hero"><div className="site-shell"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>About</div><span className="section-kicker light">ABOUT FLOWTON</span><h1>Engineering knowledge.<br/><em>Clear business thinking.</em></h1><p className="inner-hero-desc">Flowton brings together hydraulic research, plant operations, business strategy and market development to help industrial customers make confident technical decisions.</p></div></section>
  <section className="section"><div className="site-shell about-intro-grid"><Reveal><span className="section-kicker">OUR APPROACH</span><h2 className="section-title">Understand first.<br/><em>Engineer second.</em></h2></Reveal><Reveal delay={.06}><p className="about-intro-text">A hydraulic problem is never just a part number. It is a machine, a duty cycle, an operating environment—and a business depending on it.</p><p>We begin by understanding what the equipment must do, what has changed and what constraints apply. Flowton then reviews feasibility and coordinates the sourcing, engineering or service resources needed for the agreed work.</p><div className="about-value-line"><span>01 / TECHNICAL CLARITY</span><span>02 / SPECIFICATION-LED SOURCING</span><span>03 / RESPONSIBLE EXECUTION</span></div></Reveal></div></section>
  <section className="section about-highlight"><div className="site-shell about-leader-grid"><Reveal className="about-leader-photo"><Image src={lead.image} alt="Portrait of Md Ehtesham Hasan" fill sizes="(max-width: 900px) 100vw, 41vw"/><span className="about-leader-photo-label">TECHNICAL LEADERSHIP / FLOWTON</span></Reveal><Reveal delay={.06} className="about-leader-copy"><span className="section-kicker light">TECHNICAL POINT OF CONTACT</span><h2>Expertise that<br/>starts the <em>conversation.</em></h2><h3>{lead.name}</h3><span className="leader-role">{lead.role}</span><p>{lead.bio}</p><div className="about-leader-highlights">{lead.highlights.map(h=><span key={h}><Check size={16}/>{h}</span>)}</div><div className="leader-facts"><span><GraduationCap size={19}/> PhD · IIT (ISM) Dhanbad</span><span><BadgeCheck size={19}/> M.Tech · NIT Durgapur</span><span><Factory size={19}/> Power hydraulics research</span></div><PrimaryLink href={whatsappHref("Hello Mr. Ehtesham Hasan, I'd like to speak with you about a hydraulic requirement.") } bright>Enquire with Ehtesham</PrimaryLink></Reveal></div></section>
  <section className="section team-section"><div className="site-shell"><Reveal className="section-intro"><div><span className="section-kicker">PEOPLE BEHIND THE COMPANY</span><h2 className="section-title">Meet the<br/><em>leadership team.</em></h2></div><p className="intro-side">Each person contributes a distinct perspective, from commercial strategy and industrial execution to new business relationships.</p></Reveal>
  <div className="director-profiles">{otherLeaders.map((person,i)=><Reveal className="director-profile" delay={.04*i} key={person.id}><div className="director-profile-photo"><Image src={person.image} alt={`Portrait of ${person.name}`} fill sizes="(max-width: 640px) 100vw, 30vw"/><span>FLOWTON / 0{i+2}</span></div><div className="director-profile-content"><span className="director-profile-role">{person.role}</span><h3>{person.name}</h3><strong>{person.credential}</strong><p>{person.bio}</p><ul>{person.highlights.map(h=><li key={h}><Check size={15}/>{h}</li>)}</ul></div></Reveal>)}</div>
  </div></section>
  <section className="section about-values"><div className="site-shell"><Reveal><span className="section-kicker light">OUR COMMITMENT</span><h2 className="section-title on-dark">Technical direction.<br/><em>Responsible execution.</em></h2></Reveal><div className="values-grid">{[{no:"01",title:"Clarity before commitment",text:"We review symptoms, specifications and site constraints before defining the work."},{no:"02",title:"The right-fit solution",text:"We evaluate sourcing and engineering options for the actual machine duty."},{no:"03",title:"Transparent scoping",text:"Feasibility, resources, deliverables and commercial terms are discussed before execution."}].map((v,i)=><Reveal className="value-card" key={v.no} delay={i*.05}><span>{v.no}</span><h3>{v.title}</h3><p>{v.text}</p></Reveal>)}</div></div></section>
  <section className="section-short soft-cta"><div className="site-shell split-cta"><div><span className="section-kicker">HAVE A MACHINE OR COMPONENT REQUIREMENT?</span><h2>Start a focused<br/><em>technical discussion.</em></h2></div><PrimaryLink href={whatsappHref()}>Enquire on WhatsApp</PrimaryLink></div></section>
 </main>;
}
