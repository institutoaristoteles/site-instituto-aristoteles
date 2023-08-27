import axios from "axios"
import React from "react"
import { Author, GetPostsParams, Paginated, Post } from "@/integration/types"
import { RequestBodyDto } from "@/app/api/send-mail/route"

const apiClient = axios.create({
  baseURL: process.env.API_HOST ?? "/api",
})

export const fetchPosts = React.cache(async (params: GetPostsParams) => {
  const { data } = await apiClient.get<Paginated<Post>>("/blog/posts", {
    params,
  })
  return data
})

export const fetchAuthorById = React.cache(async (authorId: string) => {
  const { data } = await apiClient.get<Author>(`/blog/author/${authorId}`)
  return data
})

export const sendMail = React.cache(async (content: RequestBodyDto) => {
  const { data } = await apiClient.post(`/send-mail`, content)
  return data
})
