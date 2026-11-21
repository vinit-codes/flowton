"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Crisp opacity-and-position transitions; avoid blur/filter animations. */
export function Reveal({ children, className="", delay=0 }: {children:ReactNode;className?:string;delay?:number}) {
 const reduce=useReducedMotion();
 return <motion.div className={className} initial={reduce?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.08}} transition={{duration:0.42,delay:Math.min(delay,0.14),ease:[0.2,0.7,0.2,1]}}>{children}</motion.div>;
}
