"use client";
import {useState} from "react";
import { AnimatePresence, motion } from "motion/react";
import { Activity, PackageSearch, CircuitBoard, ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

const options=[
 {tag:"01",name:"A machine is down",sub:"Troubleshooting & repair",prompt:"Hello Mr. Ehtesham Hasan, our hydraulic machine has a fault.\nMachine/model:\nSymptoms:\nSite location:\nUrgency:",items:["Machine make / model", "Symptoms & fault history", "Site location & urgency", "Photos or readings if available"],icon:Activity},
 {tag:"02",name:"I need a spare part",sub:"Find a compatible component",prompt:"Hello Mr. Ehtesham Hasan, I need to source a hydraulic component.\nPart name / OEM number:\nSpecification:\nQuantity:\nDelivery location:",items:["Part or OEM reference", "Nameplate / component photos", "Quantity & technical duty", "Delivery location"],icon:PackageSearch},
 {tag:"03",name:"I need a power pack",sub:"Engineer a hydraulic system",prompt:"Hello Mr. Ehtesham Hasan, I need a hydraulic power pack.\nApplication:\nLoad / force:\nStroke / speed:\nDuty cycle / power supply:",items:["Application & load", "Stroke, speed and duty", "Electrical power availability", "Drawings / requirements"],icon:CircuitBoard}
];
export function RequirementSelector(){
 const [selected,setSelected]=useState(0);
 const current=options[selected];
 return <div className="selector-wrap">
  <div className="selector-tabs" role="tablist" aria-label="Choose a hydraulic requirement">
   {options.map((o,i)=><button type="button" key={o.tag} role="tab" aria-selected={selected===i} id={`requirement-tab-${i}`} aria-controls="requirement-panel" onClick={()=>setSelected(i)} className={`selector-tab ${selected===i?"selected":""}`}><span className="selector-tab-num">{o.tag}</span><o.icon size={25} strokeWidth={1.5}/><span><strong>{o.name}</strong><small>{o.sub}</small></span><ArrowUpRight className="selector-tab-arrow" size={18}/></button>)}
  </div>
  <div id="requirement-panel" className="selector-panel" role="tabpanel" aria-labelledby={`requirement-tab-${selected}`}>
   <AnimatePresence mode="wait"><motion.div key={selected} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.16}}>
    <div className="selector-panel-head"><span className="section-kicker">START WITH WHAT YOU KNOW</span><span className="selector-panel-stamp">REQ / 0{selected+1}</span></div>
    <h3>Here’s what helps<br/>us get started.</h3>
    <p>Send these details if available. Don’t worry if you don’t have everything yet.</p>
    <div className="selector-checklist">{current.items.map((a,i)=><div key={a}><span>0{i+1}</span>{a}</div>)}</div>
    <a className="btn btn-primary selector-cta" href={whatsappHref(current.prompt)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Discuss this requirement <ArrowUpRight size={19}/></a>
   </motion.div></AnimatePresence>
  </div>
 </div>;
}
