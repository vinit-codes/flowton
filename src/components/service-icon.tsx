import { Wrench, PackageSearch, CircuitBoard } from "lucide-react";
export function ServiceIcon({name,size=34}:{name:"wrench"|"package"|"settings";size?:number}){
 if(name==="wrench")return <Wrench size={size} strokeWidth={1.3}/>;
 if(name==="package")return <PackageSearch size={size} strokeWidth={1.3}/>;
 return <CircuitBoard size={size} strokeWidth={1.3}/>;
}
