import Image from "next/image";
import { ArrowUpRight, ArrowDown, Activity, MapPin, Wrench, PackageSearch, CircuitBoard, MessageCircle } from "lucide-react";
import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/reveal";
import { PrimaryLink, TextLink } from "@/components/buttons";
import { RequirementSelector } from "@/components/requirement-selector";
import { FAQ } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { COMPANY, services, industries, generalFaqs } from "@/lib/data";
import { whatsappHref, serviceWhatsappHref } from "@/lib/whatsapp";

export default function HomePage(){
 return <main id="main">
  <section className="hero-section">
   <div className="hero-grid-overlay" aria-hidden="true"/>
   <div className="site-shell hero-grid">
    <div className="hero-copy">
     <div className="hero-eyebrow"><span className="mini-yellow-dash"/> INDUSTRIAL HYDRAULICS. ENGINEERED WITH PURPOSE.</div>
     <h1>Keep your<br/><span className="hero-outline">industry</span><br/><span className="hero-gold">in motion<span className="hero-period">.</span></span></h1>
     <p className="hero-description">From a machine that won’t run to a part you can’t find or a power pack you need to build—Flowton helps turn hydraulic challenges into a clear next step.</p>
     <div className="hero-actions"><PrimaryLink href={whatsappHref("Hello Flowton, I would like to discuss a hydraulic requirement.\nMy equipment / requirement:\nLocation:")} bright>Discuss your requirement</PrimaryLink><a href="#capabilities" className="hero-secondary">Explore capabilities <ArrowDown size={18}/></a></div>
     <div className="hero-trust-row"><div className="hero-trust-line"/><span>TECHNICAL THINKING. PRACTICAL EXECUTION.</span></div>
    </div>
    <div className="hero-art"><HeroScene/></div>
   </div>
   <div className="hero-bottom site-shell"><span>INDUSTRIAL HYDRAULIC SOLUTIONS / FLOWTON</span><div className="hero-bottom-right"><span>01 — 03 / OUR CAPABILITIES</span><ArrowDown size={16}/></div></div>
  </section>

  <div className="capability-strip" aria-label="Our three primary capabilities"><div className="site-shell strip-inner"><span><Wrench size={20}/> HYDRAULIC SERVICING</span><i/><span><PackageSearch size={20}/> SPARE PARTS SOURCING</span><i/><span><CircuitBoard size={20}/> POWER PACK ENGINEERING</span></div></div>

  <section className="section services-section" id="capabilities"><div className="site-shell">
   <Reveal className="section-intro"><div><span className="section-kicker">01 / OUR CAPABILITIES</span><h2 className="section-title">One partner.<br/><em>Three ways</em> forward.</h2></div><div className="intro-side"><p>Industrial problems need more than guesswork. Tell us what’s happening, what part you need, or what your system must achieve.</p><TextLink href="/services">See all capabilities on one page</TextLink></div></Reveal>
   <div className="services-grid">{services.map((service,i)=><Reveal key={service.slug} delay={i*.09} className="service-card-home">
    <div className="service-card-top"><span className="technical-mono">SERVICE / {service.number}</span></div>
    <div className="service-illustration service-photo-illustration"><Image src={i===0?"/images/hydraulic-servicing.webp":i===1?"/images/hydraulic-components.webp":"/images/hydraulic-power-pack.webp"} alt={`Industrial hydraulic equipment: ${service.name}`} fill quality={90} sizes="(max-width: 700px) 100vw, 33vw" className="machinery-photo"/><span className="illustration-marker">FTN / SERVICE {service.number}</span></div>
    <div className="service-card-body"><h3>{service.shortTitle}</h3><p>{service.cardDescription}</p><div className="service-card-footer"><a href={serviceWhatsappHref(service.name)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${service.name} on WhatsApp`}>Enquire on WhatsApp <ArrowUpRight size={19}/></a><span>0{i+1} / 03</span></div></div>
   </Reveal>)}</div>
  </div></section>

  <section className="section selector-section"><div className="site-shell">
   <Reveal className="section-intro selector-intro"><div><span className="section-kicker">02 / FASTEST WAY TO GET STARTED</span><h2 className="section-title">What brings<br/>you <em>here today?</em></h2></div><p className="selector-heading-copy">No complicated forms. Pick the situation closest to yours, see what information helps, and start a focused WhatsApp conversation.</p></Reveal>
   <Reveal><RequirementSelector/></Reveal>
  </div></section>

  <section className="section industries-section"><div className="site-shell">
   <Reveal className="section-intro"><div><span className="section-kicker">03 / WHERE WE WORK</span><h2 className="section-title">Built for the<br/><em>real world.</em></h2></div><div className="intro-side"><p>From plant floors to mobile equipment, we begin with the machinery, its duty and the specific hydraulic requirement.</p><TextLink href="/industries">Explore industries</TextLink></div></Reveal>
   <div className="industries-grid">{industries.map((ind,i)=><Reveal key={ind.number} delay={Math.min(i%3,2)*.07} className="industry-item"><div className="industry-top"><span>{ind.number} / INDUSTRY</span></div><div className="home-industry-image"><Image src={i%4===0?"/images/industrial-press.webp":i%4===1?"/images/hydraulic-power-pack.webp":i%4===2?"/images/hydraulic-servicing.webp":"/images/hydraulic-components.webp"} alt={`${ind.name}: industrial hydraulic equipment`} fill sizes="(max-width: 640px) 100vw, 33vw"/></div><h3>{ind.name}</h3><p>{ind.summary}</p></Reveal>)}</div>
  </div></section>

  <section className="section process-section"><div className="site-shell"><Reveal className="section-intro process-intro"><div><span className="section-kicker light">04 / THE FLOWTON APPROACH</span><h2 className="section-title on-dark">Clear thinking.<br/><em>From day one.</em></h2></div><p>Every project starts with understanding the requirement, not assuming the solution.</p></Reveal>
   <div className="process-steps">{[
    {num:"01",title:"Tell us the challenge",body:"Share a breakdown, a part reference or a new hydraulic application."},
    {num:"02",title:"Technical review",body:"We clarify missing information, operating requirements and feasibility."},
    {num:"03",title:"Scope & quotation",body:"Discuss the proposed approach, resources, deliverables and commercial terms."},
    {num:"04",title:"Coordinated execution",body:"The agreed service, sourcing or engineering work proceeds with relevant resources."}
   ].map((step,i)=><Reveal delay={i*.06} className="process-step" key={step.num}><span className="process-index">{step.num}</span><div className="process-symbol"><span/></div><h3>{step.title}</h3><p>{step.body}</p></Reveal>)}</div>
   <Reveal className="process-bottom-note"><Activity size={18}/><span>Scope and execution are confirmed based on project requirements and available resources.</span></Reveal>
  </div></section>

  <section className="section faq-section"><div className="site-shell faq-grid"><Reveal><span className="section-kicker">05 / GOOD TO KNOW</span><h2 className="section-title">Straight<br/><em>answers.</em></h2><p className="faq-side-copy">A few practical things to know before we start talking about your equipment.</p></Reveal><Reveal delay={.1}><FAQ items={generalFaqs}/></Reveal></div></section>

  <section className="section home-contact-section"><div className="site-shell contact-callout-grid"><Reveal className="contact-callout-copy"><span className="section-kicker light">06 / START THE CONVERSATION</span><h2>Something<br/>hydraulic on<br/><em>your mind?</em></h2><p>Whether it’s urgent troubleshooting, a critical component or an engineered system, tell us what you need. We’ll start with the technical details.</p><div className="contact-direct"><span>OR MESSAGE US DIRECTLY</span><a href={whatsappHref()} target="_blank" rel="noopener noreferrer"><MessageCircle size={22}/>{COMPANY.whatsappDisplay}<ArrowUpRight size={19}/></a></div><div className="contact-local"><MapPin size={17}/>{COMPANY.location}, India</div></Reveal><Reveal delay={.1} className="contact-form-shell"><LeadForm compact/></Reveal></div></section>
 </main>;
}
