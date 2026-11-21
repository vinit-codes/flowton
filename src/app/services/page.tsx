import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PrimaryLink } from "@/components/buttons";
import { FAQ } from "@/components/faq";
import { services } from "@/lib/data";
import { serviceWhatsappHref, whatsappHref } from "@/lib/whatsapp";
import { partsCatalog } from "@/lib/parts-catalog";

export const metadata: Metadata = {
 title: "Hydraulic Services — Troubleshooting, Spare Parts & Power Packs",
 description: "See all Flowton hydraulic capabilities on one page and send a service-specific enquiry directly to Md Ehtesham Hasan on WhatsApp."
};

const serviceImages: Record<string,string> = {
 "hydraulic-servicing":"/images/hydraulic-servicing.webp",
 "spare-parts":"/images/hydraulic-components.webp",
 "power-packs":"/images/hydraulic-power-pack.webp"
};

export default function ServicesPage(){return <main id="main">
 <section className="inner-hero services-hero"><div className="site-shell"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>Services</div><span className="section-kicker light">ALL CAPABILITIES / 01—03</span><h1>Hydraulic challenges.<br/><em>Clear next steps.</em></h1><p className="inner-hero-desc">Browse servicing, component sourcing and power-pack engineering below. For any requirement, send a dedicated WhatsApp enquiry directly to our technical point of contact.</p><div className="service-anchor-nav" aria-label="Jump to a capability">{services.map(s=><a key={s.slug} href={`#${s.slug}`}>{s.shortTitle} <span>↓</span></a>)}</div></div></section>
 <div className="services-single-page">
 {services.map((s,i)=> <section className={`section service-deep-section ${i%2 ? "section-pale" : ""}`} id={s.slug} key={s.slug}><div className="site-shell">
  <Reveal className="service-single-heading"><span className="section-kicker">SERVICE / {s.number} — {s.eyebrow}</span><h2>{s.name}</h2><p>{s.summary}</p></Reveal>
  <div className="service-deep-grid">
   <Reveal className="service-deep-visual"><Image src={serviceImages[s.slug]} alt={`${s.shortTitle}: industrial hydraulic equipment`} fill sizes="(max-width: 900px) 100vw, 46vw" quality={90}/><span>FLOWTON / {s.number} — {s.shortTitle.toUpperCase()}</span></Reveal>
   <Reveal className="service-deep-content" delay={.06}>
    <h3>What we can help with</h3><ul className="service-deep-checks">{s.deliverables.map(item=><li key={item}><Check size={17}/>{item}</li>)}</ul>
    <div className="service-deep-actions"><a className="btn btn-primary" href={serviceWhatsappHref(s.name)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Enquire on WhatsApp <ArrowUpRight size={19}/></a><a className="directory-arrow" href={serviceWhatsappHref(s.name)} target="_blank" rel="noopener noreferrer" aria-label={`Send WhatsApp enquiry about ${s.name}`} title="Send WhatsApp enquiry"><ArrowUpRight size={24}/></a></div>
   </Reveal>
  </div>
  <div className="service-deep-lower">
   <Reveal><h3>Common situations</h3><div className="service-mini-list">{s.situations.map(x=><div key={x.title}><strong>{x.title}</strong><p>{x.copy}</p></div>)}</div></Reveal>
   <Reveal delay={.04}><h3>Helpful details to send</h3><ul className="service-needs-list">{s.needs.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul><p className="service-note">You can message us with the information you have; technical compatibility and project feasibility are reviewed before commitment.</p></Reveal>
   <Reveal delay={.08}><h3>How we approach it</h3><div className="service-mini-list">{s.steps.map((x,j)=><div key={x.title}><strong><span>0{j+1} / </span>{x.title}</strong><p>{x.copy}</p></div>)}</div></Reveal>
  </div>
  {s.slug === "spare-parts" && <Reveal className="parts-catalogue-panel"><div><span className="section-kicker">PRODUCT DATA / BUILT TO GROW</span><h3>Hydraulic components catalogue</h3><p>{partsCatalog.length ? "Browse the verified parts currently recorded by Flowton. Every catalogue enquiry goes to WhatsApp for confirmation of compatibility and availability." : "A detailed parts catalogue will appear here as verified machine-part documents, specifications and product images are added. For now, send a part number, nameplate or component photo through WhatsApp."}</p></div>{partsCatalog.length > 0 && <div className="parts-catalogue-grid">{partsCatalog.map(part=><div className="part-entry" key={part.id}><strong>{part.name}</strong><span>{part.partNumber || part.category}</span>{part.cataloguePdf && <a href={part.cataloguePdf} target="_blank" rel="noopener noreferrer">View product document</a>}<a href={whatsappHref(`Hello Mr. Ehtesham Hasan, I would like to source ${part.name}${part.partNumber ? ` (Part no. ${part.partNumber})` : ""}.\nQuantity:\nLocation:`)} target="_blank" rel="noopener noreferrer">Ask about this part <ArrowUpRight size={16}/></a></div>)}</div>}</Reveal>}
  <Reveal className="service-faq-container"><h3>Questions about {s.shortTitle.toLowerCase()}</h3><FAQ items={s.faqs}/></Reveal>
 </div></section>)}
 </div>
 <section className="section-short soft-cta"><div className="site-shell split-cta"><div><span className="section-kicker">NOT SURE WHICH SERVICE YOU NEED?</span><h2>Start with your machine.<br/><em>We’ll discuss the next step.</em></h2></div><PrimaryLink href={whatsappHref("Hello Mr. Ehtesham Hasan, I need guidance on a hydraulic requirement.\nEquipment / situation:\nLocation:")}>Send a general enquiry</PrimaryLink></div></section>
 </main>}
