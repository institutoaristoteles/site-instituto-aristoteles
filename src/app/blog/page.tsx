import PostsListing from "@/shared/components/posts-listing"
import { getPosts } from "@/integration/notion"

export const dynamic = "force-dynamic"

async function Blog() {
  const pageSize = 15
  const initialPosts = await getPosts({ pageSize })

  return (
    <main>
      <div className="container">
        <h2 className="text-3xl font-bold text-dark-blue py-5">Blog</h2>
        <PostsListing
          initialPosts={initialPosts.results}
          hasMore={initialPosts.hasMore}
          startCursor={initialPosts.nextCursor}
          pageSize={pageSize}
        />
      </div>
    </main>
  )
}

export default Blog