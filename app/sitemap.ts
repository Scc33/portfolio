import { PAGE_METADATA } from "./data/Pages";

export const baseUrl = "https://portfolio.seancoughlin.me";

export default async function sitemap() {
  let routes = [
    ...PAGE_METADATA.map((page) => page.endpoint),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
