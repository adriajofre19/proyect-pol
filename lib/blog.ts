import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { Article } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

type ArticleFrontmatter = {
  title?: string;
  excerpt?: string;
  image?: string;
  category?: string;
  date?: string;
  readTime?: string;
  author?: string;
};

function toArticle(fileName: string, source: string): Article {
  const slug = fileName.replace(/\.mdx?$/, "");
  const { data, content } = matter(source);
  const frontmatter = data as ArticleFrontmatter;

  return {
    id: slug,
    slug,
    title: frontmatter.title ?? "Sin título",
    excerpt: frontmatter.excerpt ?? "",
    content: content.trim(),
    image: frontmatter.image ?? "/images/logo.avif",
    category: frontmatter.category ?? "General",
    date: frontmatter.date ?? new Date().toISOString().slice(0, 10),
    readTime: frontmatter.readTime ?? "5 min",
    author: frontmatter.author ?? "Equipo Jurídico",
  };
}

export async function getBlogArticles(): Promise<Article[]> {
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  const mdxFiles = entries
    .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
    .map((entry) => entry.name);

  const articles = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const fullPath = path.join(BLOG_DIR, fileName);
      const source = await fs.readFile(fullPath, "utf8");
      return toArticle(fileName, source);
    }),
  );

  return articles.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getBlogArticleBySlug(
  slug: string,
): Promise<Article | null> {
  const articles = await getBlogArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}

export async function getAdjacentBlogArticles(slug: string): Promise<{
  newer: Article | null;
  older: Article | null;
}> {
  const articles = await getBlogArticles();
  const index = articles.findIndex((article) => article.slug === slug);

  if (index === -1) {
    return { newer: null, older: null };
  }

  return {
    newer: index > 0 ? articles[index - 1] : null,
    older: index < articles.length - 1 ? articles[index + 1] : null,
  };
}
