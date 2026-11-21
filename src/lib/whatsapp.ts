import { COMPANY } from "@/lib/data";

/** Every website enquiry is addressed to Ehtesham and carries an attribution marker. */
const WEBSITE_ATTRIBUTION = `[FLOWTON WEBSITE ENQUIRY]\nFor: Md Ehtesham Hasan\nSource: Flowton website\n`;

export function whatsappHref(message = "Hello Mr. Ehtesham Hasan, I would like to discuss a hydraulic requirement.\nRequirement:\nSite location:") {
  const body = `${WEBSITE_ATTRIBUTION}\n${message.trim()}`;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(body)}`;
}

export function serviceWhatsappHref(serviceTitle: string) {
  return whatsappHref(`Hello Mr. Ehtesham Hasan, I would like to enquire about ${serviceTitle}.\n\nMachine / part / project details:\nLocation:\nPreferred contact time:`);
}
