import Link from "next/link";
import type {ReactNode} from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

export function PrimaryLink({href,children,bright=false,className=""}:{href:string;children:ReactNode;bright?:boolean;className?:string}){
 const cls=`btn btn-primary ${bright?"btn-bright":""} ${className}`;
 const external=href.startsWith("http");
 return external?<a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={19}/></a>:<Link href={href} className={cls}>{children}<ArrowUpRight size={19}/></Link>;
}
export function TextLink({href,children,light=false}:{href:string;children:ReactNode;light?:boolean}){
 const cls=`text-action ${light?"text-action-light":""}`;
 return href.startsWith("http")?<a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}<ArrowUpRight size={17}/></a>:<Link href={href} className={cls}>{children}<ArrowUpRight size={17}/></Link>
}
export function WhatsAppLink({message,children,className=""}:{message?:string;children?:ReactNode;className?:string}){
 return <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${className}`}><MessageCircle size={18}/>{children||"Chat on WhatsApp"}<ArrowUpRight size={18}/></a>
}
