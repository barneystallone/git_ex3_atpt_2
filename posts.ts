interface Post {
  id: number
  title: string
  content: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'post1',
    content: 'content post1',
  },
  {
    id: 2,
    title: 'post2',
    content: 'content post2',
  },
]

export const getAllPosts = () => posts
