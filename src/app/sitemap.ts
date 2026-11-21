import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services", "/industries", "/about", "/contact"];
  return paths.map((path) => ({
    url: `${COMPANY.website}${path}`,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));
}
