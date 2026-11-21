import Image from "next/image";

/** Crisp, optimized industrial photography in place of the previous low-DPR WebGL animation. */
export function HeroScene(){
 return <div className="scene-frame scene-photographic">
   <Image src="/images/industrial-press.webp" alt="Industrial hydraulic press operating in a manufacturing facility" fill priority quality={92} sizes="(max-width: 900px) 100vw, 50vw" className="hero-machinery-image" />
   <div className="scene-photo-overlay" aria-hidden="true"/>
   <div className="hero-machine-caption"><span className="hero-caption-square"/> INDUSTRIAL HYDRAULIC SYSTEMS <span>FLOWTON / ENGINEERING</span></div>
 </div>;
}
