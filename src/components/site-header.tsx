"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { whatsappHref } from "@/lib/whatsapp";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);

  return <>
    <div className="top-ribbon">
      <div className="site-shell top-ribbon-inner">
        <span><span className="ribbon-pulse"/> ENGINEERING-LED HYDRAULIC SOLUTIONS</span>
        <span className="top-location">BASED IN {COMPANY.location.toUpperCase()}</span>
      </div>
    </div>
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" aria-label="Flowton homepage" className="brand-mark" onClick={() => setOpen(false)}>
          <Image src="/images/flowton-logo-dark.png" alt="Flowton — Hydraulic Engineering Solutions" width={230} height={72} priority className="brand-image" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(item => <Link key={item.href} href={item.href} className={`nav-link ${active(item.href) ? "is-active" : ""}`}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="header-whatsapp" href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="Enquire with Md Ehtesham Hasan via WhatsApp"><MessageCircle size={18}/><span>WhatsApp us</span><ArrowUpRight size={16}/></a>
          <button className="mobile-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(s=>!s)}>{open ? <X size={25}/> : <Menu size={25}/>}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-menu" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:0.17}}>
          {nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={active(item.href)?"mobile-current":""}>{item.label}<ArrowUpRight size={18}/></Link>)}
          <a className="mobile-menu-wa" href={whatsappHref()} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Enquire on WhatsApp <ArrowUpRight size={18}/></a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  </>;
}
