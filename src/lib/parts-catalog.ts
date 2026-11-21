/**
 * Data-driven source of truth for the future hydraulic parts catalogue.
 * Add records when Flowton supplies verified product/part information.
 * No supplier, model, stock status or price is fabricated by the website.
 */
export type PartCategory = "pump" | "motor" | "valve" | "cylinder" | "hose" | "seal" | "fitting" | "other";
export type PartRecord = {
  id: string;
  name: string;
  category: PartCategory;
  manufacturer?: string;
  partNumber?: string;
  specifications?: string[];
  image?: string;            // e.g. /parts-images/pump-123.webp
  cataloguePdf?: string;     // e.g. /catalogues/pump-123.pdf
  enquiryNotes?: string;
};
export const partsCatalog: PartRecord[] = [];
