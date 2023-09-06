import { getPostBySlug, getPostContent } from "@/integration/notion"
import Image from "next/image"
import { notFound } from "next/navigation"
import PostAuthorBadge from "@/shared/components/post-author-badge"

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "medium",
  timeStyle: "short",
})

export default async function PostPage(props: { params: { slug: string } }) {
  const post = await getPostBySlug(props.params.slug)

  if (!post) return notFound()

  const content = await getPostContent(post.id)

  return (
    <article>
      <div className="container flex flex-col gap-5 md:gap-10 max-w-4xl">
        {post.image && (
          <Image
            src={post.image}
            alt=""
            width={3000}
            height={3000}
            className="max-h-[250px] object-cover object-center full-width"
          />
        )}

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
      </div>
    </article>
  )
}
