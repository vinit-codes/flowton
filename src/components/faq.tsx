"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export function FAQ({items}:{items:{q:string;a:string}[]}){
 return <Accordion.Root type="single" collapsible className="faq-list">
  {items.map((item,i)=><Accordion.Item key={item.q} value={`faq-${i}`} className="faq-item">
   <Accordion.Header><Accordion.Trigger className="faq-trigger"><span className="faq-idx">{String(i+1).padStart(2,"0")}</span><span>{item.q}</span><Plus className="faq-plus" size={21} strokeWidth={1.6}/></Accordion.Trigger></Accordion.Header>
   <Accordion.Content className="faq-content"><div>{item.a}</div></Accordion.Content>
  </Accordion.Item>)}
 </Accordion.Root>
}
