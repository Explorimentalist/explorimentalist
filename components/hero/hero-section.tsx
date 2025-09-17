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
      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full flex-col gap-16 px-4 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="relative flex w-full flex-col items-center gap-12">
            <div className="inline-flex w-fit flex-col gap-5 self-start border border-black/10 bg-white/60 px-6 py-4 uppercase tracking-[0.4em] text-xs font-black shadow-[10px_10px_0_rgba(0,0,0,0.15)] backdrop-blur">
              <span className="text-black/70">{kicker}</span>
            </div>

            <h1
              id="hero-heading"
              className="w-full max-w-[min(90vw,1400px)] text-center font-heading text-[clamp(3.5rem,6vw,7.5rem)] font-black uppercase leading-[0.78] tracking-tight lg:whitespace-nowrap"
            >
              {headline}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export const DEFAULT_HERO_CONTENT: HeroSectionProps = {
  kicker: 'Notes from',
  headline: 'THE EXPLORIMENTALIST',
}
