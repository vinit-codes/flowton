"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { Group } from "three";

const metal="#a8b3b8";
const dark="#263438";
const gold="#ffb521";

function Model({reduce}:{reduce:boolean}){
 const rig=useRef<Group>(null);
 useFrame(({clock},delta)=>{
   if(rig.current && !reduce){rig.current.rotation.y+=delta*.085;rig.current.position.y=Math.sin(clock.elapsedTime*.55)*.055;}
 });
 return <group ref={rig} rotation={[0.2,-0.35,0.1]} scale={0.91}>
  {/* Central machined cylinder, placed horizontally */}
  <group rotation={[0,0,Math.PI/2]}>
   <mesh><cylinderGeometry args={[0.67,0.67,3.45,40]}/><meshStandardMaterial color={metal} metalness={.88} roughness={.27}/></mesh>
   {[-1.76,-1.42,1.42,1.76].map((y,i)=><mesh key={i} position={[0,y,0]}><cylinderGeometry args={[.83,.83,.18,40]}/><meshStandardMaterial color={i===1||i===2?gold:dark} metalness={.78} roughness={.28}/></mesh>)}
   <mesh position={[0,-2.2,0]}><cylinderGeometry args={[.23,.23,1.15,32]}/><meshStandardMaterial color="#f5f7f5" metalness={.9} roughness={.15}/></mesh>
   <mesh position={[0,-2.81,0]}><cylinderGeometry args={[.34,.34,.12,32]}/><meshStandardMaterial color={dark} metalness={.8} roughness={.3}/></mesh>
   <mesh position={[0,1.87,0]}><cylinderGeometry args={[.49,.49,.25,32]}/><meshStandardMaterial color={dark} metalness={.9} roughness={.22}/></mesh>
  </group>
  {/* Side control manifold and pipe connections */}
  <group position={[.2,-1.21,-1.13]} rotation={[0,.12,0]}>
   <mesh><boxGeometry args={[2.1,.78,1.25]}/><meshStandardMaterial color={dark} metalness={.8} roughness={.31}/></mesh>
   {[[-.78,.42],[.78,.42]].map(([x,y],i)=><mesh key={i} position={[x,y,0]}><cylinderGeometry args={[.14,.14,.36,20]}/><meshStandardMaterial color={gold} metalness={.82} roughness={.23}/></mesh>)}
   {[-.65,0,.65].map((x,i)=><mesh key={i} position={[x,0,.64]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[.16,.038,8,24]}/><meshStandardMaterial color="#bfc6c5" metalness={.8} roughness={.28}/></mesh>)}
  </group>
  {/* Flanged joint hardware */}
  {[-1.78,1.78].map((x,i)=><group key={i} position={[x,0,0]} rotation={[0,0,Math.PI/2]}>
   {[0,Math.PI/2,Math.PI,Math.PI*1.5].map((a,j)=><mesh key={j} position={[.65*Math.cos(a),0,.65*Math.sin(a)]}><sphereGeometry args={[.085,10,10]}/><meshStandardMaterial color="#1c2426" metalness={.8}/></mesh>)}
  </group>)}
  {/* Decorative isolated engineering rings */}
  <mesh rotation={[Math.PI/2,0,0]} position={[0,0,-.85]}><torusGeometry args={[3.2,.009,4,120]}/><meshBasicMaterial color="#8e7543" transparent opacity={.35}/></mesh>
  <mesh rotation={[.75,.1,.45]} position={[0,0,0]}><torusGeometry args={[3.6,.007,4,120]}/><meshBasicMaterial color="#55656c" transparent opacity={.46}/></mesh>
 </group>;
}
export default function ThreeAssembly(){
 const reduce=Boolean(useReducedMotion());
 return <Canvas camera={{position:[7,4.5,8],fov:33}} dpr={[1,1.5]} gl={{alpha:true,antialias:true,powerPreference:"low-power"}} frameloop={reduce?"demand":"always"} aria-label="Slowly rotating 3D technical illustration of an industrial hydraulic cylinder assembly">
  <ambientLight intensity={1.15}/><directionalLight position={[4,6,5]} intensity={3.2} color="#fff8e8"/><directionalLight position={[-4,-1,-4]} intensity={1.8} color="#8fa9bf"/>
  <Model reduce={reduce}/>
 </Canvas>
}
