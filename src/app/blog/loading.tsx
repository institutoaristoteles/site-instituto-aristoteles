import { PostsListingLoader } from "@/shared/components/posts-listing"

export default function BlogLoader() {
  return (
    <main>
      <div className="container">
        <h2 className="text-3xl font-bold text-dark-blue pb-5">Blog</h2>
        <PostsListingLoader />
      </div>
    </main>
  )
}
