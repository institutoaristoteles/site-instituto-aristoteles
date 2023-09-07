import { getPosts } from "@/integration/notion"
import { Post } from "@/integration/types"

async function* getAllPosts(): AsyncGenerator<Post[]> {
  let startCursor: string | undefined

  do {
    const result = await getPosts({ pageSize: 100, startCursor })
    startCursor = result.nextCursor

    yield result.results
  } while (startCursor)
}

export default async function sitemap() {
  const root = process.env.URL

  let posts: Post[] = []

  for await (const postsPage of getAllPosts()) {
    posts = [...posts, ...postsPage]
  }

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
      lastModified: post.lastEditedTime,
      changeFrequency: "hourly",
      priority: 1,
    })),
  ]
}
