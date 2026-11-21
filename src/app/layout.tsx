import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { COMPANY, services } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: new URL(COMPANY.website),
 title: {default:"Flowton | Hydraulic Services, Spares & Power Packs", template:"%s | Flowton"},
 description:"Engineering-led hydraulic troubleshooting, specification-matched spare parts and hydraulic power-pack solutions. Talk to Flowton in Chakradharpur, Jharkhand.",
 applicationName:"Flowton",
 keywords:["hydraulic service", "hydraulic troubleshooting", "hydraulic spare parts", "hydraulic power packs", "industrial hydraulics", "Chakradharpur", "Jharkhand"],
 twitter:{card:"summary_large_image",images:["/og-image.png"]},
 manifest:"/manifest.webmanifest",
 openGraph:{type:"website",title:"Flowton | Industrial Hydraulic Engineering Solutions",description:"Hydraulic servicing, parts sourcing and power-pack engineering. Discuss your requirements with Flowton.",siteName:"Flowton",locale:"en_IN",images:[{url:"/og-image.png",width:1200,height:630,alt:"Flowton — Keep your industry in motion"}]},
 robots:{index:true,follow:true},
 icons:{icon:"/favicon.svg"},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#0f1719"};
const structuredData = {
 "@context":"https://schema.org",
 "@type":"LocalBusiness",
 name:COMPANY.name,
 url:COMPANY.website,
 image:`${COMPANY.website}/og-image.png`,
 telephone:`+${COMPANY.whatsappNumber}`,
 address:{"@type":"PostalAddress",streetAddress:"Ward No. 19, Back Side Lal, Chakradharpur",addressLocality:"Chakradharpur",addressRegion:"Jharkhand",postalCode:"833102",addressCountry:"IN"},
 hasOfferCatalog:{"@type":"OfferCatalog",name:"Industrial hydraulic solutions",itemListElement:services.map(service=>({"@type":"OfferCatalog",name:service.name,description:service.summary}))}
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body id="top"><a className="skip-to-content" href="#main">Skip to content</a><SiteHeader/>{children}<SiteFooter/><FloatingWhatsApp/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>;
}
