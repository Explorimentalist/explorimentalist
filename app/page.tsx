import { HeroSection, DEFAULT_HERO_CONTENT } from '@/components/hero/hero-section'
import { TypographyDemo } from '@/components/typography-demo'

export default function Home() {
  return (
    <>
      <HeroSection {...DEFAULT_HERO_CONTENT} />

      <section id="main-content" className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-massive leading-none tracking-tighter text-black">
            THE EXPLORIMENTALIST
          </h1>
          <p className="typography-lead mb-16">
            A brutalist + glassmorphism blog combining raw, honest design with ethereal,
            translucent effects. Where exploration meets innovation.
          </p>

          <div className="border-t pt-16">
            <h2 className="typography-h2 mb-8">Typography System</h2>
            <TypographyDemo />
          </div>
        </div>
      </section>
    </>
  )
}
