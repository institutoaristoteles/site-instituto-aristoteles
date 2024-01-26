import Image from "next/image"
import { notFound } from "next/navigation"
import PostAuthorBadge from "@/shared/components/post-author-badge"
import { Metadata } from "next"
import { Article, WithContext } from "schema-dts"
import { getPostBySlug } from "@/integration/api"

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

  const common = {
    title: post.title,
    images: post.coverUrl ? [post.coverUrl] : [],
    description: post.description,
  }

  return {
    title: post.title + " | Instituto Aristóteles",
    openGraph: {
      ...common,
      type: "article",
      url: process.env.URL + "/blog/" + post.slug,
      siteName: "Instituto Aristóteles",
      publishedTime: new Date(post.createdAt).toISOString(),
      authors: post.createdBy?.name,
    },
    twitter: {
      card: "summary",
      ...common,
      creator: post.createdBy?.name || undefined,
    },
  }
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPostBySlug(slug)

  if (!post) return notFound()

  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: post.title,
    image: post.coverUrl,
    description: post.description,
    headline: post.title,
    author: {
      "@type": "Person",
      name: post.createdBy.name ?? undefined,
      image: post.createdBy.avatar ?? undefined,
      email: post.createdBy.email ?? undefined,
      url: post.createdBy.email,
    },
    dateCreated: new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
  }

  return (
    <main className="-mt-content-gap">
      {post.coverUrl && (
        <figure className="w-screen h-[250px] mb-5 md:mb-10 relative">
          <Image
            src={post.coverUrl}
            alt=""
            quality={100}
            fill
            priority
            className="object-cover object-center"
          />
        </figure>
      )}

      <div className="container flex flex-col gap-5 md:gap-10 max-w-prose">
        <header className="flex flex-col gap-5">
          <h1 className="text-2xl text-dark-blue font-bold xl:text-3xl">
            {post.title}
          </h1>

          <div className="flex flex-col-reverse md:flex-row gap-2 justify-between">
            <PostAuthorBadge {...post.createdBy} />
            <span className="text-xs">
              Publicado em:{" "}
              <time>{dateFormatter.format(new Date(post.createdAt))}</time>
            </span>
          </div>

          {post.description && (
            <div className="prose text-justify hyphens-auto leading-relaxed border-b border-b-[#e9e9e9] pb-5 opacity-60">
              {post.description}
            </div>
          )}
        </header>

        <div
          className="prose prose-p:text-justify prose-p:hyphens-auto prose-headings:text-dark-blue"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </main>
  )
}
