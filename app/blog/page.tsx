import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";
import { SITE_URL } from "@/constants/site";
import { getBlogArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Jurídico | Arenas Mora & Asociados — Abogados en Barcelona",
  description:
    "Artículos y noticias sobre derecho laboral, familia, extranjería y más. Mantente informado con el blog jurídico de Arenas Mora & Asociados.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default async function BlogPage() {
  const articles = await getBlogArticles();

  return <BlogPageClient articles={articles} />;
}
