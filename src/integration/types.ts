import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type Properties = PageObjectResponse["properties"][0]
type PropertyType = Properties["type"]
type Cover = PageObjectResponse["cover"]

export type Property<T extends PropertyType> = Extract<Properties, { type: T }>
export type NotionExternalFile = Extract<Cover, { type: "external" }>

export type PostProps = {
  Title: Property<"title">
  Description: Property<"rich_text">
}

export interface Post {
  id: string
  title: string
  image: string
  createdTime: Date
  lastEditedTime: Date
  authorId: string
}

export interface Author {
  id: string
  email?: string
  name: string | null
  avatar: string | null
}
