import { getPostBySlug } from "@/integration/notion"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function PostPage(props: { params: { slug: string } }) {
  const post = await getPostBySlug(props.params.slug)
  if (!post) {
    return notFound()
  }
  return (
    <main>
      <div className="container">
        {post.image && (
          <Image src={post.image} alt="" width={200} height={200} />
        )}
      </div>
    </main>
  )
}
