import { getPostBySlug, getPostContent } from "@/integration/notion"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function PostPage(props: { params: { slug: string } }) {
  const post = await getPostBySlug(props.params.slug)
  if (!post) {
    return notFound()
  }

  const content = await getPostContent(post.id)

  return (
    <article>
      <div className="container flex flex-col gap-5">
        {post.image && (
          <Image
            src={post.image}
            alt=""
            width={3000}
            height={3000}
            className="max-h-[250px] object-cover object-center full-width"
          />
        )}

        <header>
          <h1>{post.title}</h1>
          <div>{post.description}</div>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  )
}
