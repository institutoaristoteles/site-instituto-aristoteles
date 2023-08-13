"use client"

import { useEffect, useRef, useState } from "react"
import { Post } from "@/integration/types"
import PostCard from "@/shared/components/post-card"
import { fetchPosts } from "@/integration/api"

function PostsListing(props: {
  initialPosts: Post[]
  hasMore: boolean
  startCursor?: string
  pageSize: number
}) {
  const [posts, setPosts] = useState<Post[]>(props.initialPosts)
  const [cursor, setCursor] = useState<string | undefined>(props.startCursor)
  const [hasMore, setHasMore] = useState(props.hasMore)
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(async (entries) => {
      const target = entries[0]
      if (target.isIntersecting && hasMore) {
        setIsLoading(true)
        const data = await fetchPosts({
          startCursor: cursor,
          pageSize: props.pageSize,
        })
        setPosts([...posts, ...data.results])
        setCursor(data.nextCursor)
        setHasMore(data.hasMore)
        setIsLoading(false)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, cursor])

  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>

      <div ref={ref}>
        {isLoading && (
          <div className="flex items-center justify-center">
            Carregando artigos...
          </div>
        )}
      </div>
    </div>
  )
}

export default PostsListing
