import "server-only"

import {
  Author,
  GetPostsParams,
  NotionExternalFile,
  NotionFile,
  Paginated,
  Post,
  PostProps,
} from "@/integration/types"
import { Client } from "@notionhq/client"
import { cache } from "react"
import { NotionToMarkdown } from "notion-to-md"
import showdown from "showdown"
import {
  PageObjectResponse,
  PersonUserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })
const mdConverter = new showdown.Converter()

const mapNotionPageToPost = (page: PageObjectResponse): Post => {
  const pageProps = page.properties as PostProps
  const cover = page.cover as NotionExternalFile | NotionFile | undefined

  return {
    id: page.id,
    title: pageProps.Title.title[0].plain_text,
    image: cover?.type === "file" ? cover.file.url : cover?.external?.url,
    authorId: page.created_by.id,
    createdTime: new Date(page.created_time),
    lastEditedTime: new Date(page.last_edited_time),
    description: pageProps.Description.rich_text[0].plain_text,
    slug: pageProps.Slug.rich_text[0].plain_text,
  }
}

const mapNotionUserToAuthor = (author: PersonUserObjectResponse): Author => ({
  id: author.id,
  avatar: author.avatar_url,
  name: author.name,
  email: (author as PersonUserObjectResponse).person.email,
})

export const getPosts = cache(async (params: GetPostsParams) => {
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    page_size: params.pageSize,
    start_cursor: params.startCursor,
    filter: {
      property: "Status",
      status: { equals: "Publicado" },
    },
  })

  const results = pages.results as PageObjectResponse[]

  return {
    results: results.map(mapNotionPageToPost),
    nextCursor: pages.next_cursor ?? undefined,
    hasMore: pages.has_more,
  } as Paginated<Post>
})

export const getPostsBySlug = cache(async (slug: string) => {
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Status",
          status: { equals: "Publicado" },
        },
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  })
  const page = pages.results[0]

  if (page) {
    return mapNotionPageToPost(page as PageObjectResponse)
  }
})

export const getPageContent = cache(async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId)
  const markdown = await n2m.toMarkdownString(mdBlocks)
  return mdConverter.makeHtml(markdown.parent)
})

export const getAuthorById = cache(async (authorId: string) => {
  const author = await notion.users.retrieve({ user_id: authorId })
  return mapNotionUserToAuthor(author as PersonUserObjectResponse)
})
