import PostsListing from "@/shared/components/posts-listing"
import { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog | Instituto Aristóteles",
}

async function Blog() {
  return (
    <main>
      <div className="container">
        <h2 className="text-3xl font-bold text-dark-blue pb-5">Blog</h2>
        <PostsListing />
      </div>
    </main>
  )
}

export default Blog
