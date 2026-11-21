import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { services } from "@/lib/data";

/** Retain old URLs but send all visitors to the unified scrolling services page. */
export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const service=services.find(s=>s.slug===slug);
 return {title:service ? `${service.name} — Flowton Services` : "Service not found",description:service?.summary};
}
export default async function LegacyServiceRoute({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 if(!services.some(s=>s.slug===slug)) notFound();
 redirect(`/services#${slug}`);
}
