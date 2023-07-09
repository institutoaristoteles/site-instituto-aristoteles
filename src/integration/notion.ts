import "server-only"

import {
  PageObjectResponse,
  PersonUserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import {
  Author,
  NotionExternalFile,
  Post,
  PostProps,
} from "@/integration/types"
import { Client } from "@notionhq/client"
import { cache } from "react"
import { NotionToMarkdown } from "notion-to-md"
import showdown from "showdown"

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })
const mdConverter = new showdown.Converter()

const mapNotionPageToPost = (page: PageObjectResponse) => {
  const pageProps = page.properties as PostProps
  const cover = page.cover as NotionExternalFile

  return {
    id: page.id,
    title: pageProps.Title.title[0].plain_text,
    image: cover.external.url,
    authorId: page.created_by.id,
    createdTime: new Date(page.created_time),
    lastEditedTime: new Date(page.last_edited_time),
  }
}

const mapNotionUserToAuthor = (author: PersonUserObjectResponse): Author => ({
  id: author.id,
  avatar: author.avatar_url,
  name: author.name,
  email: (author as PersonUserObjectResponse).person.email,
})

export const fetchPublishedPosts = cache(async (): Promise<Post[]> => {
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: { equals: "Publicado" },
    },
  })

  const results = pages.results as PageObjectResponse[]
  return results.map(mapNotionPageToPost)
})

export const fetchPostById = cache(async (pageId: string) => {
  const page = await notion.pages.retrieve({ page_id: pageId })
  return mapNotionPageToPost(page as PageObjectResponse)
})

export const getPageContent = cache(async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId)
  const markdown = await n2m.toMarkdownString(mdBlocks)
  return mdConverter.makeHtml(markdown.parent)
})

export const fetchAuthorById = cache(async (authorId: string) => {
  const author = await notion.users.retrieve({ user_id: authorId })
  return mapNotionUserToAuthor(author as PersonUserObjectResponse)
})
