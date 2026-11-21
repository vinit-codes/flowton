import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
export default function NotFound(){return <main id="main" className="not-found"><span>404 / PAGE NOT FOUND</span><h1>Looks like we've<br/>lost <em>pressure.</em></h1><p>That page doesn't exist. Head back to Flowton and we'll get things moving.</p><Link className="btn btn-primary" href="/">Back to homepage <ArrowUpRight size={18}/></Link></main>}
