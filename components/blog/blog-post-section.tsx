'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { BlogPostCard } from '@/components/blog/blog-post-card'
import { filterPosts, groupPostsByYear } from '@/lib/blog-filters'
import type { BlogPost } from '@/lib/posts'
import { cn } from '@/lib/utils'

type BlogPostSectionProps = {
  posts: BlogPost[]
}

const GRADIENT_RINGS = [
  '',
  'before:absolute before:-inset-4 before:-z-10 before:rounded-[32px] before:bg-gradient-to-br before:from-purple-100/50 before:via-white/40 before:to-white/80 before:opacity-70 before:content-[""]',
  'before:absolute before:-inset-4 before:-z-10 before:rounded-[32px] before:bg-gradient-to-br before:from-emerald-100/50 before:via-white/40 before:to-white/80 before:opacity-70 before:content-[""]',
]

export function BlogPostSection({ posts }: BlogPostSectionProps) {
  const searchParams = useSearchParams()
  const search = searchParams.get('q') ?? ''
  const topic = searchParams.get('topic') ?? 'all'
  const year = searchParams.get('year') ?? 'all'

  const filteredPosts = useMemo(
    () => filterPosts(posts, { search, topic, year }),
    [posts, search, topic, year]
  )

  const groupedPosts = useMemo(() => groupPostsByYear(filteredPosts), [filteredPosts])

  const calendarYear = new Date().getFullYear()
  const initialYear = groupedPosts[0]?.year ?? calendarYear
  const [currentYear, setCurrentYear] = useState(initialYear)
  const currentYearRef = useRef(currentYear)

  const yearSentinelRefs = useRef<Map<number, HTMLElement>>(new Map())
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  const setYearSentinelRef = useCallback((yearValue: number) => {
    return (node: HTMLElement | null) => {
      const map = yearSentinelRefs.current

      if (node) {
        map.set(yearValue, node)
      } else {
        map.delete(yearValue)
      }
    }
  }, [])

  useEffect(() => {
    setCurrentYear(initialYear)
  }, [initialYear])

  useEffect(() => {
    currentYearRef.current = currentYear
  }, [currentYear])

  useEffect(() => {
    const sentinels = Array.from(yearSentinelRefs.current.values())
    if (sentinels.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const candidates = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => {
            const entryYear = Number(entry.target.getAttribute('data-year-sentinel'))
            const bounding = entry.boundingClientRect
            const viewportMid = window.innerHeight / 2
            const delta = Math.abs(bounding.top + bounding.height / 2 - viewportMid)

            return { year: entryYear, delta }
          })
          .filter(({ year }) => Number.isFinite(year))

        if (!candidates.length) {
          return
        }

        const nextYear = candidates.reduce((closest, candidate) =>
          candidate.delta < closest.delta ? candidate : closest
        ).year

        if (nextYear !== currentYearRef.current) {
          if (debounceRef.current) {
            clearTimeout(debounceRef.current)
          }
          debounceRef.current = setTimeout(() => {
            setCurrentYear(nextYear)
          }, 80)
        }
      },
      {
        threshold: [0],
        rootMargin: '-45% 0px -45% 0px',
      }
    )

    sentinels.forEach((sentinel) => observer.observe(sentinel))

    return () => {
      observer.disconnect()
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [groupedPosts])

  const renderEmptyState = () => (
    <div className="relative z-10 mx-auto max-w-3xl rounded-3xl border-4 border-dashed border-black/20 bg-white/70 p-12 text-center shadow-[12px_12px_0_rgba(0,0,0,0.08)]">
      <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-gray-600">
        No experiments match those filters
      </h3>
      <p className="mt-4 font-mono text-base text-gray-500">
        Adjust the filters above to discover more field notes from The Explorimentalist.
      </p>
    </div>
  )

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-28"
      aria-labelledby="blog-posts-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="sticky top-[45vh] -translate-y-1/2">
          <span
            key={currentYear}
            aria-hidden="true"
            className="block text-center text-[14rem] font-black leading-none tracking-tighter text-gray-300/85 mix-blend-multiply transition-all duration-500 ease-out sm:text-[20rem] lg:text-[26rem]"
          >
            {currentYear}
          </span>
        </div>
      </div>

      <div aria-live="polite" className="sr-only">
        Currently viewing posts from {currentYear}.
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-3 border-4 border-black bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.6em] shadow-[8px_8px_0_rgba(0,0,0,1)]">
            Journal
            <span className="h-2 w-2 bg-red-500" aria-hidden="true" />
          </span>
          {/* <h2 id="blog-posts-heading" className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">
            Explorimentalist Field Notes
          </h2>
          <p className="mt-6 max-w-2xl font-mono text-base text-gray-600">
            Scroll through the archive. The brutalist skyline of years shifts as you explore the experiments.
          </p> */}
        </div>

        <div className="flex flex-col items-center space-y-24 lg:space-y-32">
          {groupedPosts.length === 0 && renderEmptyState()}

          {groupedPosts.map(({ year: postYear, posts: yearPosts }) => (
            <section
              key={postYear}
              aria-labelledby={`posts-${postYear}`}
              className="relative w-full max-w-4xl"
            >
              <span
                aria-hidden="true"
                data-year-sentinel={postYear}
                ref={setYearSentinelRef(postYear)}
                className="pointer-events-none absolute left-0 right-0 top-0 block h-px w-full"
              />
              <h3 id={`posts-${postYear}`} className="sr-only">
                Posts from {postYear}
              </h3>

              <div className="flex flex-col items-center space-y-20">
                {yearPosts.map((post, index) => {
                  const gradientRing = GRADIENT_RINGS[index % GRADIENT_RINGS.length]
                  const isActiveYear = postYear === currentYear

                  return (
                    <div
                      key={post.slug}
                      data-observed-year={postYear}
                      className={cn(
                        'relative w-full max-w-3xl transition-all duration-500',
                        gradientRing,
                        isActiveYear ? 'scale-[1.01] opacity-100' : 'opacity-80 hover:opacity-100'
                      )}
                    >
                      <BlogPostCard
                        post={post}
                        href={`/#experiments/${post.slug}`}
                        priorityImage={index === 0 && postYear === groupedPosts[0]?.year}
                        className="mx-auto"
                        data-year={postYear}
                      />
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
