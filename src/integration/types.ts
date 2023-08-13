import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type Properties = PageObjectResponse["properties"][0]
type PropertyType = Properties["type"]
type Cover = PageObjectResponse["cover"]

export type Property<T extends PropertyType> = Extract<Properties, { type: T }>
export type NotionExternalFile = Extract<Cover, { type: "external" }>
export type NotionFile = Extract<Cover, { type: "file" }>

export type PostProps = {
  Title: Property<"title">
  Description: Property<"rich_text">
  Slug: Property<"rich_text">
}

export type GetPostsParams = {
  pageSize: number
  startCursor?: string
}

export interface Post {
  id: string
  title: string
  image?: string
  createdTime: Date
  lastEditedTime: Date
  authorId: string
  slug: string
  description: string
}

export interface Author {
  id: string
  email?: string
  name: string | null
  avatar: string | null
}

export interface Paginated<T> {
  hasMore: boolean
  nextCursor: string | undefined
  results: T[]
}
