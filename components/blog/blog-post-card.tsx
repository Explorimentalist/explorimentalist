import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { BlogPost } from '@/lib/posts'
import { cn } from '@/lib/utils'

type ExtendedPost = BlogPost & {
  imageAlt?: string
  featured_image?: string
  readTime?: string
  author?: string
}

type BlogPostCardProps = {
  post: ExtendedPost
  href?: string
  priorityImage?: boolean
} & HTMLAttributes<HTMLElement>

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

export function BlogPostCard({
  post,
  href,
  priorityImage = false,
  className,
  ...articleProps
}: BlogPostCardProps) {
  const imageSrc =
    post.coverImage ??
    post.featured_image ??
    '/images/hero/hero-background.svg'

  const categoryLabel = post.category
  const formattedDate = (() => {
    try {
      return dateFormatter.format(new Date(post.publishedAt))
    } catch {
      return post.publishedAt
    }
  })()

  const ariaTitleId = `post-title-${post.slug}`

  return (
    <article
      aria-labelledby={ariaTitleId}
      className={cn('focus:outline-none', className)}
      {...articleProps}
    >
      <Card
        className={cn(
          'group relative flex h-full w-full max-w-2xl flex-col overflow-hidden rounded-[24px] border-0 !bg-transparent bg-[radial-gradient(100%_100%_at_50%_0%,rgba(255,82,42,0.24)_0%,rgba(255,255,255,0.24)_100%)] p-6 text-black shadow-none backdrop-blur-[20px] transition-all duration-500 focus-within:ring-4 focus-within:ring-[#FF522A] focus-within:ring-offset-4 focus-within:ring-offset-white hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] sm:p-10 lg:p-14',
          'min-h-[32rem] lg:min-h-[40rem]'
        )}
      >
        <CardHeader className="flex-row items-center justify-between gap-6 p-0">
          <time
            dateTime={post.publishedAt}
            className="font-mono text-base font-normal tracking-wide text-black"
          >
            {formattedDate}
          </time>
          <Badge
            aria-label={categoryLabel ? `Category: ${categoryLabel}` : undefined}
            className="border-2 px-5 py-2 text-sm"
          >
            {categoryLabel}
          </Badge>
        </CardHeader>

        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-[20px] border border-black/10 bg-gray-200 shadow-[8px_12px_40px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-[1.01] sm:h-80 lg:h-[28rem]">
          <Image
            src={imageSrc}
            alt={post.imageAlt ?? `Featured image for ${post.title}`}
            fill
            priority={priorityImage}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10 backdrop-blur-sm" aria-hidden="true" />
        </div>

        <CardContent className="flex flex-1 flex-col justify-end p-0 pt-8">
          <div className="space-y-6">
            <CardTitle
              id={ariaTitleId}
              className="text-3xl font-semibold leading-tight text-black transition-colors duration-300 group-hover:text-gray-800 lg:text-[32px]"
            >
              {href ? (
                <Link
                  href={href as any}
                  className="no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/80"
                >
                  {post.title}
                </Link>
              ) : (
                post.title
              )}
            </CardTitle>
            <p className="font-mono text-base leading-relaxed text-black/80 line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          {(post.readTime || post.author) && (
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-mono uppercase tracking-[0.3em] text-black/60">
              {post.author && <span>{post.author}</span>}
              {post.readTime && <span>{post.readTime}</span>}
            </div>
          )}
        </CardContent>
      </Card>
    </article>
  )
}
