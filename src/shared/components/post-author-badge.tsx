"use client"

import Image from "next/image"
import { memo } from "react"
import { fetchAuthorById } from "@/integration/api"
import useSWR from "swr"
import Skeleton from "react-loading-skeleton"

export const PostAuthorSkeleton = () => (
  <div className="flex gap-2 items-center">
    <Skeleton circle height={24} width={24} />
    <span className="text-xs">
      <Skeleton width={100} height={12} />
    </span>
  </div>
)

const authorFetcher = async (authorId: string) => {
  return await fetchAuthorById(authorId)
}

function PostAuthorBadge({ authorId }: { authorId: string }) {
  const { isLoading, data: author } = useSWR(authorId, authorFetcher)

  if (isLoading) {
    return <PostAuthorSkeleton />
  }

  if (!author) {
    return <></>
  }

  return (
    <div className="flex gap-2 items-center">
      {author.avatar && (
        <Image
          src={author.avatar}
          alt={`Avatar de ${author.name}`}
          width={40}
          height={40}
          className="rounded-full w-7 shadow"
        />
      )}
      <span className="text-xs">{author.name}</span>
    </div>
  )
}

export default memo(PostAuthorBadge)
