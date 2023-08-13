import axios from "axios"
import React from "react"
import { Author, GetPostsParams, Paginated, Post } from "@/integration/types"

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
