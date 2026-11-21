import fs from "node:fs";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
let ts;
try { ts = require("typescript"); } catch { ts = require("/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js"); }
const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const data = read("src/lib/data.ts");
const about = read("src/app/about/page.tsx");
const homepage = read("src/app/page.tsx");
const servicesPage = read("src/app/services/page.tsx");
const header = read("src/components/site-header.tsx");
const footer = read("src/components/site-footer.tsx");
const form = read("src/components/lead-form.tsx");
const whatsappSrc = read("src/lib/whatsapp.ts");
const redirects = read("src/app/services/[slug]/page.tsx");

assert.match(data, /whatsappNumber: "918102294842"/);
assert.doesNotMatch(homepage, /Ehtesham|ehtesham|founder-section/);
for (const slug of ["hydraulic-servicing", "spare-parts", "power-packs"]) {
 assert.ok(data.includes(`slug: "${slug}"`), `Missing service: ${slug}`);
 assert.ok(servicesPage.includes(`id={s.slug}`), "Service anchor missing");
}
assert.match(redirects, /redirect\(`\/services#\$\{slug\}`\)/);
assert.match(servicesPage, /serviceWhatsappHref\(s.name\)/);
assert.match(homepage, /serviceWhatsappHref\(service.name\)/);
assert.match(about, /otherLeaders\.map/);
assert.match(about, /person\.bio/);
assert.match(about, /lead\.bio/);
assert.match(form, /window\.open\(whatsappHref\(msg\)/);
for (const person of ["Ehtesham", "Nazia", "Ratan", "Arquam"]) assert.ok(data.includes(person));
for (const asset of ["ehtesham", "nazia", "ratan", "arquam", "hydraulic-servicing", "hydraulic-components", "hydraulic-power-pack", "industrial-press"]) {
 assert.ok(fs.existsSync(new URL(`../public/images/${asset}.webp`, import.meta.url)), `Missing ${asset}.webp`);
}
for (const [label, href] of [["Our company","/about"],["Capabilities","/services"],["Industries","/industries"],["Contact us","/contact"]]) {
 assert.ok(footer.includes(`<Link href="${href}">${label}</Link>`), `Bad footer destination for ${label}`);
 assert.ok(fs.existsSync(new URL(`../src/app${href}/page.tsx`,import.meta.url)),`Route missing: ${href}`);
}
assert.doesNotMatch(header, /nav-dropdown-panel|serviceOpen/);
assert.ok(fs.existsSync(new URL("../src/lib/parts-catalog.ts",import.meta.url)));

// Use actual transpiled utility and verify destination and message bodies, not just regex.
const compiled = ts.transpileModule(whatsappSrc,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const mod={exports:{}};
const loader=(id)=>{ assert.equal(id,"@/lib/data"); return {COMPANY:{whatsappNumber:"918102294842"}}; };
new Function("require","module","exports",compiled)(loader,mod,mod.exports);
for (const [label,href] of [
 ["general",mod.exports.whatsappHref()],
 ["spare",mod.exports.serviceWhatsappHref("Hydraulic spare parts sourcing")],
 ["servicing",mod.exports.serviceWhatsappHref("Hydraulic servicing & troubleshooting")],
 ["power pack",mod.exports.serviceWhatsappHref("Hydraulic power pack engineering")]
]) {
 const url=new URL(href);
 assert.equal(url.origin,"https://wa.me");
 assert.equal(url.pathname,"/918102294842");
 const message=url.searchParams.get("text")??"";
 assert.match(message,/\[FLOWTON WEBSITE ENQUIRY\]/);
 assert.match(message,/For: Md Ehtesham Hasan/);
 assert.match(message,/Source: Flowton website/);
 if(label!=="general") assert.match(message,new RegExp(label==="spare"?"spare parts sourcing":label==="servicing"?"servicing & troubleshooting":"power pack engineering","i"));
}
// Parse all TS/TSX source files using installed global TypeScript (no npm install required).
const root = new URL("../src/",import.meta.url);
let checked=0;
function walk(dir){for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
 const full=`${dir}/${ent.name}`;
 if(ent.isDirectory())walk(full);
 else if(/\.tsx?$/.test(ent.name)){
  const text=fs.readFileSync(full,"utf8");
  const source=ts.createSourceFile(full,text,ts.ScriptTarget.Latest,true,ent.name.endsWith("tsx")?ts.ScriptKind.TSX:ts.ScriptKind.TS);
  assert.equal(source.parseDiagnostics.length,0,`${full}: ${source.parseDiagnostics.map(d=>d.messageText).join("; ")}`);
  checked++;
 }
}}
walk(new URL(root).pathname.replace(/\/$/,""));
console.log(`PASS: ${checked} TS/TSX files parse; distinct footer routes; single-page services; director biographies; image assets; WhatsApp source attribution and all service messages.`);
