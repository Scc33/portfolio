export const baseUrl = "https://portfolio.seancoughlin.me";

export default async function sitemap() {
  let routes = [
    "",
    "testimonialCard",
    "blogCard",
    "portfolioCard",
    "button",
    "textInput",
    "fetch",
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
