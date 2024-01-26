import { Post } from "@/integration/types"
import { fetchPosts } from "@/integration/api"

async function getAllPosts(): Promise<Post[]> {
  const page = 1
  let hasMore = false
  let posts: Post[] = []

  do {
    const result = await fetchPosts({
      pageSize: 100,
      page,
      status: "published",
    })
    posts = [...posts, ...result.results]
    hasMore = posts.length <= result.results.length
  } while (hasMore)

  return posts
}

export default async function sitemap() {
  const root = process.env.URL

  const posts: Post[] = await getAllPosts()

  return [
    {
      url: root + "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: root + "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: root + "/contato",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...posts.map((post) => ({
      url: root + "/blog/" + post.slug,
      lastModified: new Date(post.createdAt).toISOString(),
      changeFrequency: "hourly",
      priority: 1,
    })),
  ]
}
