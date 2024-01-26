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

function PostsListing() {
  const [posts, setPosts] = useState<Post[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const pageSize = 15

  const loadPosts = async (page: number) => {
    const data = await fetchPosts({
      pageSize,
      status: "published",
      page,
    })

    setPosts([...posts, ...data.results])
    setCurrentPage(data.currentPage)
    setHasMore(posts.length < data.totalSize)
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
        await loadPosts(currentPage + 1)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, currentPage])

  return (
    <section className="flex flex-col">
      <section
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        role="feed"
        aria-busy={isLoading}
      >
        {posts.map((post, index) => (
          <PostCard post={post} key={post.id} priority={index < pageSize} />
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
