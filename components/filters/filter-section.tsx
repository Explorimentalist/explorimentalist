'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Route } from 'next'

import { Search, X } from 'lucide-react'

import { type BlogPost } from '@/lib/posts'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { filterPosts } from '@/lib/blog-filters'

type FilterSectionProps = {
  posts: BlogPost[]
}

type Option = {
  label: string
  value: string
}

const TOPIC_OPTIONS: Option[] = [
  { label: 'All Topics', value: 'all' },
  { label: 'Technology', value: 'Technology' },
  { label: 'Design', value: 'Design' },
  { label: 'Culture', value: 'Culture' },
  { label: 'Code', value: 'Code' },
  { label: 'Philosophy', value: 'Philosophy' },
]

const SEARCH_DELAY = 300

const formatDate = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
})

export function FilterSection({ posts }: FilterSectionProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialSearch = searchParams.get('q') ?? ''
  const initialTopic = searchParams.get('topic') ?? 'all'
  const initialYear = searchParams.get('year') ?? 'all'

  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch)
  const [topic, setTopic] = useState(
    TOPIC_OPTIONS.find((option) => option.value === initialTopic)?.value ?? 'all'
  )
  const [year, setYear] = useState(initialYear)
  const [isDebouncing, setIsDebouncing] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)

  const commandRef = useRef<HTMLDivElement | null>(null)

  const years = useMemo(() => {
    const uniqueYears = new Set<string>()
    posts.forEach((post) => {
      const postYear = new Date(post.publishedAt).getFullYear()
      if (!Number.isNaN(postYear)) {
        uniqueYears.add(String(postYear))
      }
    })
    return [
      { label: 'All Years', value: 'all' },
      ...Array.from(uniqueYears)
        .sort((a, b) => Number(b) - Number(a))
        .map((value) => ({ label: value, value })),
    ] satisfies Option[]
  }, [posts])

  useEffect(() => {
    setIsDebouncing(true)
    const handle = window.setTimeout(() => {
      setDebouncedSearch(searchTerm.trim())
      setIsDebouncing(false)
    }, SEARCH_DELAY)
    return () => window.clearTimeout(handle)
  }, [searchTerm])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const query: Record<string, string> = {}

    if (debouncedSearch) {
      query.q = debouncedSearch
    }

    if (topic !== 'all') {
      query.topic = topic
    }

    if (year !== 'all') {
      query.year = year
    }

    const queryString = new URLSearchParams(query).toString()
    const nextUrl = (queryString ? `${pathname}?${queryString}` : pathname) as Route
    router.replace(nextUrl, { scroll: false })
  }, [debouncedSearch, topic, year, pathname, router])

  const filteredPosts = useMemo(
    () => filterPosts(posts, { search: debouncedSearch, topic, year }),
    [posts, debouncedSearch, topic, year]
  )

  const activeFilters = useMemo(() => {
    const selectedFilters: { label: string; value: string }[] = []
    if (topic !== 'all') {
      const topicLabel = TOPIC_OPTIONS.find((option) => option.value === topic)?.label ?? topic
      selectedFilters.push({ label: 'Topic', value: topicLabel })
    }
    if (year !== 'all') {
      selectedFilters.push({ label: 'Year', value: year })
    }
    if (debouncedSearch) {
      selectedFilters.push({ label: 'Search', value: debouncedSearch })
    }
    return selectedFilters
  }, [topic, year, debouncedSearch])

  const hasActiveFilters = activeFilters.length > 0

  const handleReset = () => {
    setSearchTerm('')
    setTopic('all')
    setYear('all')
    setDebouncedSearch('')
  }

  return (
    <section
      className="border-t-2 border-b-2 border-black bg-gray-100 py-12 md:py-14 lg:py-16"
      aria-labelledby="filters-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <header className="mb-8 flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-3 border-2 border-black bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.6em] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <span>Filter</span>
            <span className="h-2 w-2 bg-red-500" aria-hidden="true" />
          </div>
          <h2
            id="filters-heading"
            className="text-3xl font-medium uppercase tracking-tight text-black md:text-4xl"
          >
           
          </h2>
        </header>

        <form
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
          role="search"
          aria-label="Filter blog posts"
        >
          <div className="col-span-12">
            <label htmlFor="search" className="sr-only">
              Search blog entries
            </label>
            <Command
              shouldFilter={false}
              ref={commandRef}
              className="border-2 border-black bg-white text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <div className="border-b-2 border-black bg-white">
                <CommandInput
                  id="search"
                  value={searchTerm}
                  onValueChange={(value) => setSearchTerm(value)}
                  placeholder="Search blog entries..."
                  aria-label="Search blog posts"
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      (event.target as HTMLInputElement).blur()
                      setSearchTerm('')
                    }
                  }}
                  onFocus={() => setIsSearchActive(true)}
                  onBlur={() => {
                    window.requestAnimationFrame(() => {
                      if (!commandRef.current) return
                      if (!commandRef.current.contains(document.activeElement)) {
                        setIsSearchActive(false)
                      }
                    })
                  }}
                  className="min-h-[56px]"
                >
                  <Search className="h-6 w-6 flex-none text-black" aria-hidden="true" />
                </CommandInput>
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                  className={cn(
                    'absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-2 border-transparent text-gray-500 transition-all duration-200 ease-in-out',
                    searchTerm
                      ? 'opacity-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'
                      : 'pointer-events-none opacity-0'
                  )}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <CommandList
                aria-hidden={!(isSearchActive || Boolean(searchTerm) || isDebouncing)}
                className={cn(
                  'absolute left-0 right-0 top-full z-50 mt-3 max-h-72 border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-opacity duration-150',
                  isSearchActive || searchTerm || isDebouncing
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                )}
              >
                {isDebouncing ? (
                  <div className="border-b-2 border-black bg-white px-4 py-4 text-sm font-medium uppercase tracking-[0.3em] text-black">
                    Refining…
                  </div>
                ) : filteredPosts.length > 0 ? (
                  <>
                    {filteredPosts.map((post) => (
                      <CommandItem
                        key={post.slug}
                        value={`${post.title} ${post.category}`}
                        onSelect={() => {
                          setSearchTerm(post.title)
                          setIsSearchActive(false)
                        }}
                      >
                        <span className="inline-flex h-2 w-2 bg-red-500" aria-hidden="true" />
                        <div className="flex flex-col gap-1">
                          <span className="text-base font-medium uppercase tracking-tight">
                            {post.title}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">
                            {post.category} • {formatDate.format(new Date(post.publishedAt))}
                          </span>
                        </div>
                      </CommandItem>
                    ))}
                  </>
                ) : (
                  <CommandEmpty>No experiments match those filters—try resetting.</CommandEmpty>
                )}
              </CommandList>
            </Command>
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-6 md:col-span-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <span className="mb-2 block text-xs font-medium uppercase tracking-[0.4em] text-gray-600">
                Topic
              </span>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger aria-label="Filter by topic">
                  <SelectValue placeholder="All Topics" />
                </SelectTrigger>
                <SelectContent align="start">
                  {TOPIC_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-6">
              <span className="mb-2 block text-xs font-medium uppercase tracking-[0.4em] text-gray-600">
                Year
              </span>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger aria-label="Filter by year">
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent align="start">
                  {years.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3" aria-live="polite" aria-atomic="true">
            <span className="inline-flex items-center border border-black bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.4em] shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              {isDebouncing ? 'Refining…' : `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? 'experiment' : 'experiments'}`}
            </span>
            {activeFilters.map((filter) => (
              <span
                key={`${filter.label}-${filter.value}`}
                className="inline-flex items-center gap-2 border border-black bg-black px-3 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              >
                <span className="h-2 w-2 bg-red-500" aria-hidden="true" />
                {filter.label}: {filter.value}
              </span>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center border-2 border-black bg-red-500 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-transform duration-200 ease-in-out hover:translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Reset filters
            </button>
          )}
        </div>

      </div>
    </section>
  )
}
