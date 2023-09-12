"use client"

import React, { useEffect, useRef, useState } from "react"
import { Post } from "@/integration/types"
import PostCard, { PostCardLoader } from "@/shared/components/post-card"
import { fetchPosts } from "@/integration/api"
import _ from "lodash"

export const PostsListingLoader = () => (
  <section className="flex flex-col">
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {_.range(0, 9).map(() => (
        <PostCardLoader key={_.uniqueId()} />
      ))}
    </section>
  </section>
)

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
    <section className="flex flex-col">
      <section
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        role="feed"
        aria-busy={isLoading}
      >
        {posts.map((post, index) => (
          <PostCard
            post={post}
            key={post.id}
            priority={index < props.pageSize}
          />
        ))}

        {isLoading && (
          <React.Fragment>
            {_.range(0, 3).map(() => (
              <PostCardLoader key={_.uniqueId()} />
            ))}
          </React.Fragment>
        )}
      </section>

      <div className="flex flex-col items-center gap-2 py-10" ref={ref}></div>
    </section>
  )
}

export default PostsListing
