"use client"

import React, { useEffect, useRef, useState } from "react"
import { Post } from "@/integration/types"
import PostCard from "@/shared/components/post-card"
import { fetchPosts } from "@/integration/api"
import { ImSpinner11 } from "react-icons/im"

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

  const loadPosts = async () => {
    const data = await fetchPosts({
      startCursor: cursor,
      pageSize: props.pageSize,
    })

    setPosts([...posts, ...data.results])
    setCursor(data.nextCursor)
    setHasMore(data.hasMore)
    setIsLoading(false)
  }

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
        await loadPosts()
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
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 py-10" ref={ref}>
        {isLoading && (
          <>
            <ImSpinner11 className="animate-spin text-dark-blue" />
            <span className="text-dark-blue opacity-80 text-xs">
              Carregando mais...
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default PostsListing
