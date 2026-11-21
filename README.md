# Flowton — Next.js 16 website (revision 2)

Responsive industrial website built with **Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion for React, Radix UI and Lucide icons**. Uses the original Flowton branding, real portraits from the four supplied DOCX files, and locally bundled illustrative hydraulic machinery imagery.

## What's changed in this revision

- **Homepage:** Removed the Ehtesham Hasan biography/photo section. The homepage now focuses on machinery, capabilities, technical process and conversion.
- **About:** Expanded background for **Md Ehtesham Hasan, Nazia Parveen, Ratan Biswakarma and Md Arquam Sayeed**, preserving details from their supplied DOCX profiles. Ehtesham is highlighted as technical point of contact **on About only**.
- **WhatsApp:** Every WhatsApp link points to **+91 81022 94842** and automatically inserts:

  ```text
  [FLOWTON WEBSITE ENQUIRY]
  For: Md Ehtesham Hasan
  Source: Flowton website
  ```

  The visitor's specific request, service, sector or form fields follow that marker. The website opens WhatsApp with the message *pre-filled*; visitors must press **Send** themselves.
- **Services:** Exactly one public, scrolling **`/services`** page with all three capabilities, what Flowton can help with, technical requirements, process and FAQs. Both the *Enquire on WhatsApp* text link and nearby arrow on every service section open WhatsApp with the correct service name. Old service URLs redirect to `/services#service-slug`.
- **Navigation/footer:** Removed the confusing services dropdown and redundant footer service list. The four footer destinations are distinct and valid: `/about`, `/services`, `/industries`, `/contact`.
- **Machinery visuals:** Replaced pixelated/soft 3D hero effects and abstract service icons with sharp, optimized factory/hydraulic images plus minimal, reduced-motion-aware hover and slow hero motion. Industry pages now show relevant machinery imagery.
- **Future parts catalogue:** Typed data model at `src/lib/parts-catalog.ts` and `public/catalogues/` folder, with a conditional catalogue display on the spare-parts section when verified parts are added. **No fake product records**.

## Start the project

Requires Node.js **20.9+** (22 LTS recommended).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`.

Before a production release:

```bash
npm run smoke
npm run typecheck
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the live website domain on the hosting platform. Deploy to Vercel or any provider capable of hosting Next.js 16. The code and assets are included; `node_modules`, `.next` and environment secrets are excluded. The full build could not be performed in the packaging environment because npm installation timed out. The independent source/route/WhatsApp/syntax test passed. **Run the build on your machine before publishing.**

## Routes

- `/` — homepage
- `/services` — **all services in one scrolling page**, with `#hydraulic-servicing`, `#spare-parts`, `#power-packs` anchors
- `/industries` — industry applications and machinery imagery
- `/about` — detailed director and leadership profiles
- `/contact` — WhatsApp-first enquiry form and address
- `/services/<old-slug>` — redirect to the matching section of `/services`

## Add hydraulic machine parts in the future

1. Put approved product PDFs/specification sheets in `public/catalogues/` and approved part photos in a new `public/parts-images/` folder.
2. Add one `PartRecord` per confirmed component to `partsCatalog` in `src/lib/parts-catalog.ts`. Example:

   ```ts
   {
     id: "sample-part-001",
     name: "Verified hydraulic component name",
     category: "valve",
     manufacturer: "Manufacturer from the supplied file",
     partNumber: "Exact part number",
     specifications: ["Pressure: confirmed value", "Flow: confirmed value"],
     image: "/parts-images/part-001.webp",
     cataloguePdf: "/catalogues/part-001.pdf"
   }
   ```

3. Once at least one verified part is added, the catalogue block appears automatically within `/services#spare-parts`, and individual enquiries auto-fill the part name/number and website attribution.
4. Don't add availability, prices, compatibility claims or manufacturer brands unless verified. `PartRecord` can be extended with filters/search and category pages if the catalogue grows.

**No upload/administration portal is included.** Product files are added in the repository for now. A CMS or private admin workflow can be integrated later without changing the current enquiry flow.

## About images

The four portraits and Flowton logos are supplied by the client. The additional industrial imagery is **illustrative, not photographs of verified Flowton projects or facilities**. Avoid captions implying Flowton manufactured or delivered the pictured machines. Static CSS motion is deliberately subtle and respects `prefers-reduced-motion`.

A high-resolution Three.js assembly component from the prior edition remains as a source file for future use, but is **not rendered in the live homepage** because the previous WebGL artwork looked low-resolution. Keeping it unused avoids its runtime weight. You can remove `@react-three/fiber` and `three` when no longer needed.

## Contact details

- Company: Flowton Manufacturing Private Limited
- WhatsApp recipient: Md Ehtesham Hasan (user-designated contact), **+91 81022 94842**
- Ward No. 19, Back Side Lal, Chakradharpur, Seraikela-Kharsawan – 833102, Jharkhand, India
- Every enquiry prepends website origin in `src/lib/whatsapp.ts`; update that helper if you change the routing.

## Code organization

- `src/lib/data.ts` — company, services, FAQ, industry and director content
- `src/lib/whatsapp.ts` — **single source of truth for WhatsApp routing and source labels**
- `src/lib/parts-catalog.ts` — future parts data
- `src/app/services/page.tsx` — single long services page
- `src/components/site-header.tsx`, `site-footer.tsx` — navigation
- `src/components/lead-form.tsx` — client-side WhatsApp form
- `src/app/globals.css` — style tokens, photography, motion and responsive rules
- `tests/content-check.mjs` — independent syntax, asset, contact and link checks

**Safety on lead capture:** Visitors aren't transmitting data to a Flowton server via the website form. The browser constructs a WhatsApp URL. The site cannot confirm that a WhatsApp message has actually been sent, viewed or replied to.
