import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getAdjacentBlogArticles,
  getBlogArticleBySlug,
  getBlogArticles,
} from "@/lib/blog";
import { SITE_URL } from "@/constants/site";
import { formatDate } from "@/lib/utils";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getBlogArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artículo no encontrado | Blog Jurídico",
    };
  }

  return {
    title: `${article.title} | Blog Jurídico`,
    description: article.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/blog/${article.slug}`,
      type: "article",
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { newer, older } = await getAdjacentBlogArticles(slug);

  return (
    <main className="min-h-screen bg-[#FFFBF4] py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-yellow-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al blog
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            width={1400}
            height={700}
            className="w-full h-64 sm:h-80 object-cover"
          />

          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">
                {formatDate(new Date(article.date))}
              </span>
              <span className="text-sm text-gray-500">
                {article.readTime} de lectura
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{article.excerpt}</p>

            <div className="prose prose-neutral max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-800 prose-p:leading-8 prose-li:text-gray-800 prose-strong:text-gray-900 prose-a:text-yellow-700 hover:prose-a:text-yellow-800 prose-a:font-medium prose-blockquote:border-l-yellow-300 prose-blockquote:text-gray-700">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <nav
          className="mt-8 grid sm:grid-cols-2 gap-4"
          aria-label="Navegación entre artículos"
        >
          {newer ? (
            <Link
              href={`/blog/${newer.slug}`}
              className="group bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:border-yellow-300 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <ArrowLeft className="h-4 w-4" />
                Artículo anterior
              </div>
              <p className="font-semibold text-gray-900 group-hover:text-yellow-700">
                {newer.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="group bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:border-yellow-300 transition-colors text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                Artículo siguiente
                <ArrowRight className="h-4 w-4" />
              </div>
              <p className="font-semibold text-gray-900 group-hover:text-yellow-700">
                {older.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </main>
  );
}
