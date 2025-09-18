import { cn } from '@/lib/utils'

type HeroSectionProps = {
  kicker?: string
  headline: string
  className?: string
}

export function HeroSection({
  kicker = 'Radical Design Dispatch',
  headline,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-white text-black',
        className
      )}
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-8 py-20 sm:gap-12 sm:px-16 sm:py-24 lg:gap-16 lg:px-24 xl:px-32">
        <div className="inline-flex w-fit flex-col gap-5 border border-black/10 bg-white/60 px-6 py-4 uppercase tracking-[0.4em] text-xs font-black shadow-[10px_10px_0_rgba(0,0,0,0.15)] backdrop-blur">
          <span className="text-black/70">{kicker}</span>
        </div>

        <h1
          id="hero-heading"
          className="text-center font-heading text-[clamp(3.75rem,8.44vw,15rem)] font-black uppercase leading-[0.9] tracking-tight whitespace-nowrap"
        >
          {headline}
        </h1>
      </div>
    </section>
  )
}

export const DEFAULT_HERO_CONTENT: HeroSectionProps = {
  kicker: 'Notes from',
  headline: 'THE EXPLORIMENTALIST',
}
