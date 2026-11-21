
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.flowtonmfg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/industries",
    "/about",
    "/contact",
  ];

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
