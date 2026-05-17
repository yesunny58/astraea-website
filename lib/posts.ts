import { posts } from "@/data/posts"

export function getPosts() {
  return posts
}

export function getPostById(id: string) {
  return posts.find((item) => item.id === id)
}

export function getPostByCategory(category: string) {
  return posts.filter((item) => item.category === category)
}