import { projects } from "./data/projects";

const BASE_URL = "https://rubyfranco.dev";

export default function sitemap() {
  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${BASE_URL}/projects/${p.slug}`,
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
