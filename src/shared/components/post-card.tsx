import { Post } from "@/integration/types"
import Link from "next/link"
import Image from "next/image"
import PostAuthorBadge from "@/shared/components/post-author-badge"
import React, { memo } from "react"

function PostCard({ post }: { post: Post }) {
  const postUrl = `/blog/${post.slug}`

  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  return (
    <article className="flex flex-col border border-[#e7e7e7] overflow-hidden bg-white">
      {post.image && (
        <Link
          href={postUrl}
          className="w-full h-32 md:h-52 hover:scale-100 overflow-hidden"
        >
          <Image
            src={post.image}
            alt={`Imagem do artigo: ${post.title}}`}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-all hover:opacity-95"
          />
        </Link>
      )}

      <div className="p-5 flex flex-col gap-3 flex-grow">
        <time className="text-xs">
          {dateFormatter.format(new Date(post.createdTime))}
        </time>

        <Link href={postUrl} className="hover:scale-100 hover:underline">
          <h3 className="text-xl text-dark-blue font-bold">{post.title}</h3>
        </Link>

        <div className="flex justify-between items-center mt-auto">
          <PostAuthorBadge authorId={post.authorId} />
        </div>
      </div>
    </article>
  )
}

export default memo(PostCard)
