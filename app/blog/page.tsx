import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog Jurídico | Arenas Mora & Asociados — Abogados en Barcelona",
  description:
    "Artículos y noticias sobre derecho laboral, familia, extranjería y más. Mantente informado con el blog jurídico de Arenas Mora & Asociados.",
  alternates: { canonical: "https://arenasmorapol.com/blog" },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
