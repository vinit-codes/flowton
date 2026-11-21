"use client";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, LockKeyhole, MessageCircle } from "lucide-react";
import { services } from "@/lib/data";
import { whatsappHref } from "@/lib/whatsapp";

const choices=[{value:"",label:"Select a service"},...services.map(s=>({value:s.name,label:s.shortTitle})),{value:"Other hydraulic requirement",label:"Other requirement"}];
export function LeadForm({defaultService="",compact=false}:{defaultService?:string;compact?:boolean}){
 const [service,setService]=useState(defaultService);
 const [name,setName]=useState("");
 const [company,setCompany]=useState("");
 const [phone,setPhone]=useState("");
 const [location,setLocation]=useState("");
 const [details,setDetails]=useState("");
 useEffect(()=>{
  if(defaultService){setService(defaultService);return;}
  const fromUrl=new URLSearchParams(window.location.search).get("service");
  const match=choices.find(c=>c.value===fromUrl);
  if(match)setService(match.value);
 },[defaultService]);
 const submit=(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const msg=["Hello Mr. Ehtesham Hasan, I'd like a technical review / quote.",`Requirement: ${service||"General hydraulic enquiry"}`,`Name: ${name.trim()}`,company.trim()?`Company: ${company.trim()}`:null,`Phone: ${phone.trim()}`,location.trim()?`Location: ${location.trim()}`:null,`Details: ${details.trim()}`,"Please let me know what technical information you need next."].filter(Boolean).join("\n");
  window.open(whatsappHref(msg),"_blank","noopener,noreferrer");
 };
 return <form className={`lead-form ${compact?"form-compact":""}`} onSubmit={submit}>
  <div className="form-heading-row"><div><span className="form-eyebrow">DIRECT TO OUR TEAM</span><h3>Tell us what you need.</h3></div><MessageCircle size={24}/></div>
  <div className="form-fields">
   <label className="form-field form-full">Type of requirement <span>*</span><select required value={service} onChange={e=>setService(e.target.value)}>{choices.map(s=><option value={s.value} key={s.label}>{s.label}</option>)}</select></label>
   <label className="form-field">Your name <span>*</span><input required minLength={2} maxLength={90} autoComplete="name" placeholder="Your full name" value={name} onChange={e=>setName(e.target.value)}/></label>
   <label className="form-field">Phone / WhatsApp <span>*</span><input required type="tel" minLength={7} maxLength={20} autoComplete="tel" placeholder="Your contact number" value={phone} onChange={e=>setPhone(e.target.value)}/></label>
   <label className="form-field">Company <span className="optional">(optional)</span><input maxLength={100} autoComplete="organization" placeholder="Company / plant name" value={company} onChange={e=>setCompany(e.target.value)}/></label>
   <label className="form-field">Site location <span className="optional">(optional)</span><input maxLength={100} placeholder="City, state" value={location} onChange={e=>setLocation(e.target.value)}/></label>
   <label className="form-field form-full">Describe your requirement <span>*</span><textarea required maxLength={1600} minLength={10} rows={compact?3:4} placeholder="Machine problem, spare-part number, or power-pack specifications..." value={details} onChange={e=>setDetails(e.target.value)}/></label>
  </div>
  <button className="btn btn-primary form-submit" type="submit">Continue on WhatsApp <ArrowUpRight size={19}/></button>
  <p className="form-note"><LockKeyhole size={13}/> No account needed. This opens WhatsApp with your details pre-filled; nothing is submitted to a website database.</p>
 </form>
}
