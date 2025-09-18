import type { BlogPost } from '@/lib/posts'

type Filters = {
  search?: string
  topic?: string
  year?: string
}

const normalize = (value: string | undefined | null) => value?.trim().toLowerCase() ?? ''

export function filterPosts(posts: BlogPost[], filters: Filters): BlogPost[] {
  const normalizedSearch = normalize(filters.search)
  const normalizedTopic = filters.topic ?? 'all'
  const normalizedYear = filters.year ?? 'all'

  return posts.filter((post) => {
    const matchesTopic =
      normalizedTopic === 'all' ? true : post.category.toLowerCase() === normalizedTopic.toLowerCase()

    const matchesYear = (() => {
      if (normalizedYear === 'all') return true
      const postYear = new Date(post.publishedAt).getFullYear()
      return String(postYear) === normalizedYear
    })()

    const matchesSearch = (() => {
      if (!normalizedSearch) return true
      const haystacks = [post.title, post.excerpt, post.content]
      return haystacks
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(normalizedSearch))
    })()

    return matchesTopic && matchesYear && matchesSearch
  })
}

type GroupedPosts = {
  year: number
  posts: BlogPost[]
}

export function groupPostsByYear(posts: BlogPost[]): GroupedPosts[] {
  const buckets = new Map<number, BlogPost[]>()

  posts.forEach((post) => {
    const year = new Date(post.publishedAt).getFullYear()
    if (!buckets.has(year)) {
      buckets.set(year, [])
    }
    buckets.get(year)!.push(post)
  })

  return Array.from(buckets.entries())
    .map(([year, yearPosts]) => ({
      year,
      posts: yearPosts.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ),
    }))
    .sort((a, b) => b.year - a.year)
}
