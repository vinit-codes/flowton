import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { whatsappHref } from "@/lib/whatsapp";

export function SiteFooter(){
 return <footer className="site-footer">
   <div className="site-shell">
    <div className="footer-top"><div className="footer-claim"><p className="section-kicker light">THE NEXT STEP STARTS HERE</p><h2>Let’s get your <em>system</em><br/>moving.</h2></div><a className="footer-action" href={whatsappHref()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <ArrowUpRight size={24}/></a></div>
    <div className="footer-grid footer-grid-simple">
     <div className="footer-company"><Link href="/" aria-label="Flowton home"><Image src="/images/flowton-logo-light.png" alt="Flowton" width={208} height={65} /></Link><p>Hydraulic servicing, specification-led spare-part sourcing and power-pack engineering for industry.</p></div>
     <div><h3>EXPLORE</h3><Link href="/about">Our company</Link><Link href="/services">Capabilities</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact us</Link></div>
     <div className="footer-contact"><h3>GET IN TOUCH</h3><a href={whatsappHref()} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> {COMPANY.whatsappDisplay} · WhatsApp</a><a href="https://www.google.com/maps/search/?api=1&query=Ward+No+19+Back+Side+Lal+Chakradharpur+833102+Jharkhand" target="_blank" rel="noopener noreferrer"><MapPin size={15}/> {COMPANY.addressLine1},<br/>{COMPANY.addressLine2}</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Flowton Manufacturing Private Limited. All rights reserved.</span><span>CHAKRADHARPUR, JHARKHAND · INDIA</span><Link href="/">Back to home <ArrowUpRight size={14}/></Link></div>
   </div>
 </footer>
}
