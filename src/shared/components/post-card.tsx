import { Post } from "@/integration/types"
import Link from "next/link"
import Image from "next/image"
import PostAuthorBadge from "@/shared/components/post-author-badge"
import React, { memo } from "react"

function PostCard({ post, priority }: { post: Post; priority: boolean }) {
  const postUrl = `/blog/${post.slug}`

  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  return (
    <Link href={postUrl}>
      <article
        className="flex flex-col border border-[#e7e7e7] overflow-hidden bg-white group h-full"
        aria-setsize={-1}
        aria-label={post.title}
      >
        {post.image && (
          <figure className="w-full h-32 md:h-52 hover:scale-100 overflow-hidden">
            <Image
              src={post.image}
              alt={`Imagem do artigo: ${post.title}`}
              width={400}
              height={400}
              priority={priority}
              className="w-full h-full object-cover transition-all hover:opacity-95"
            />
          </figure>
        )}

        <div className="p-5 flex flex-col gap-3 flex-grow">
          <time className="text-xs">
            {dateFormatter.format(new Date(post.createdTime))}
          </time>

          <h2 className="text-xl text-dark-blue font-bold group-hover:underline">
            {post.title}
          </h2>

          <div className="flex justify-between items-center mt-auto">
            <PostAuthorBadge authorId={post.authorId} />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default memo(PostCard)
