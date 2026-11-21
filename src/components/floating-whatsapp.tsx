"use client";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";
export function FloatingWhatsApp(){
 return <a className="floating-whatsapp" href={whatsappHref("Hello Mr. Ehtesham Hasan, I have a hydraulic requirement. Can you help?")} target="_blank" rel="noopener noreferrer" aria-label="Chat with Flowton on WhatsApp"><MessageCircle size={21}/><span>Talk to an expert</span><ArrowUpRight className="floating-arrow" size={16}/></a>;
}
