type PostStatus = "published" | "draft"

export type GetPostsParams = {
  pageSize: number
  page: number
  status: PostStatus
}

export interface Category {
  id: string
  title: string
  slug: string
  createdAt: Date
  updatedAt: Date
}

export interface Author {
  id: string
  avatar?: string
  name: string
  email: string
  username: string
}

export interface Post {
  id: string
  title: string
  slug: string
  coverUrl?: string
  description: string
  content: string
  status: PostStatus
  createdBy: Author
  updatedBy?: Author
  category?: Category
  createdAt: Date
  updatedAt: Date
}

export interface Paginated<T> {
  results: T[]
  currentPage: number
  pageSize: number
  totalSize: number
}
