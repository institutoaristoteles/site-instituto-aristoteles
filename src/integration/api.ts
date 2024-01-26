import axios from "axios"
import React, { cache } from "react"
import { GetPostsParams, Paginated, Post } from "@/integration/types"
import { RequestBodyDto } from "@/app/api/send-mail/route"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const fetchPosts = React.cache(async (params: GetPostsParams) => {
  const { data } = await apiClient.get<Paginated<Post>>("/posts", {
    params,
  })

  return data
})

export const getPostBySlug = cache(async (slug: string) => {
  const { data } = await apiClient.get<Post>(`/posts/${slug}`)
  return data
})

export const sendMail = React.cache(async (content: RequestBodyDto) => {
  const { data } = await apiClient.post(`/send-mail`, content)
  return data
})
