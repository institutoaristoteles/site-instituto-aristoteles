import {
  getAuthorById,
  getPostBySlug,
  getPostContent,
} from "@/integration/notion"
import Image from "next/image"
import { notFound } from "next/navigation"
import PostAuthorBadge from "@/shared/components/post-author-badge"
import { Metadata } from "next"
import { Article, WithContext } from "schema-dts"

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "medium",
  timeStyle: "short",
})

interface PostPageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params: { slug },
}: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const author = await getAuthorById(post.authorId)

  const common = {
    title: post.title,
    images: post.image ? [post.image] : [],
    description: post.description,
  }

  return {
    title: post.title + " | Instituto Aristóteles",
    openGraph: {
      ...common,
      type: "article",
      url: process.env.URL + "/blog/" + post.slug,
      siteName: "Instituto Aristóteles",
      publishedTime: post.createdTime.toISOString(),
      authors: author?.name,
    },
    twitter: {
      card: "summary",
      ...common,
      creator: author?.name || undefined,
    },
  }
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPostBySlug(slug)

  if (!post) return notFound()

  const content = await getPostContent(post.id)
  const author = await getAuthorById(post.authorId)

  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: post.title,
    image: post.image,
    description: post.description,
    headline: post.title,
    author: {
      "@type": "Person",
      name: author.name ?? undefined,
      image: author.avatar ?? undefined,
      email: author.email ?? undefined,
      url: author.email,
    },
    dateCreated: post.createdTime.toISOString(),
    dateModified: post.lastEditedTime.toISOString(),
  }

  return (
    <article>
      {post.image && (
        <Image
          src={post.image}
          alt=""
          width={3000}
          height={3000}
          priority
          className="w-full max-h-[250px] object-cover object-center mb-5 md:mb-10"
        />
      )}

      <div className="container flex flex-col gap-5 md:gap-10 max-w-prose">
        <header className="flex flex-col gap-5">
          <h1 className="text-2xl text-dark-blue font-bold xl:text-3xl">
            {post.title}
          </h1>

          <div className="flex flex-col-reverse md:flex-row gap-2 justify-between">
            <PostAuthorBadge authorId={post.authorId} />
            <span className="text-xs">
              Publicado em:{" "}
              <time>{dateFormatter.format(post.createdTime)}</time>
            </span>
          </div>

          <div className="prose text-justify hyphens-auto leading-relaxed border-b border-b-[#e9e9e9] pb-5 opacity-60">
            {post.description}
          </div>
        </header>

        <div
          className="prose prose-p:text-justify prose-p:hyphens-auto prose-headings:text-dark-blue prose-headings:font-normal"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </article>
  )
}
