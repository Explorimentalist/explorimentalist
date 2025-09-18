import { Suspense } from 'react'
import { HeroSection, DEFAULT_HERO_CONTENT } from '@/components/hero/hero-section'
import { TypographyDemo } from '@/components/typography-demo'
import { FilterSection } from '@/components/filters/filter-section'
import { BlogPostSection } from '@/components/blog/blog-post-section'
import { Footer } from '@/components/footer/footer'
import { demoPosts } from '@/lib/posts'

export default function Home() {
  return (
    <>
      <HeroSection {...DEFAULT_HERO_CONTENT} />
      <Suspense fallback={<div>Loading filters...</div>}>
        <FilterSection posts={demoPosts} />
      </Suspense>
      <Suspense fallback={<div>Loading experiments...</div>}>
        <BlogPostSection posts={demoPosts} />
      </Suspense>
      <Footer />
    </>
  )
}
