export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'Technology' | 'Design' | 'Culture' | 'Code' | 'Philosophy'
  publishedAt: string
  coverImage?: string
}

export const demoPosts: BlogPost[] = [
  {
    slug: 'algorithmic-rituals-2025',
    title: 'Algorithmic Rituals for 2025',
    excerpt:
      'Reframing creative coding as a series of ritual experiments where constraints provoke unexpected outcomes.',
    content:
      'We document six experiments that explore ritualized creative coding. Each experiment introduces a constraint designed to provoke unexpected breakthroughs. From generative typography that responds to live data streams to brutalist UI fragments that glitch intentionally, the goal is not polish but insight.',
    category: 'Technology',
    publishedAt: '2025-02-14T09:00:00.000Z',
    coverImage: '/images/hero/hero-background.svg',
  },
  {
    slug: 'brutalist-interfaces-2024',
    title: 'Brutalist Interfaces as Emotional Anchors',
    excerpt:
      'Investigating how aggressive typography and raw layouts can ground anxious users in high-friction workflows.',
    content:
      'Our field study across brutalist software dashboards reveals that emotion is coded into the geometry of interfaces. This piece shares research notes, annotated prototypes, and a toolkit for orchestrating emotional tension through layout.',
    category: 'Design',
    publishedAt: '2024-11-02T12:30:00.000Z',
  },
  {
    slug: 'living-archives-2023',
    title: 'Living Archives & Memory Scripts',
    excerpt:
      'Designing tools that evolve with the communities archiving their own histories in realtime.',
    content:
      'Living archives require user interfaces that mutate alongside the culture they document. We propose a set of experiments blending cultural anthropology with adaptive information architecture.',
    category: 'Culture',
    publishedAt: '2023-07-18T07:15:00.000Z',
  },
  {
    slug: 'critical-compilers-2022',
    title: 'Critical Compilers',
    excerpt:
      'A manifesto on building code compilers that challenge developer assumptions instead of simply optimizing them.',
    content:
      'Critical compilers invert the optimization-first mindset. By surfacing friction intentionally, they ask developers to reconcile with the politics embedded in their abstractions.',
    category: 'Code',
    publishedAt: '2022-05-09T15:00:00.000Z',
  },
  {
    slug: 'slow-systems-2021',
    title: 'Slow Systems for Urgent Times',
    excerpt:
      'Counter-programming the hyper-speed defaults of modern product design.',
    content:
      'We outline five design experiments that intentionally slow the user down. Each prototype measures how much attention can be reclaimed when friction is treated as a feature, not a bug.',
    category: 'Philosophy',
    publishedAt: '2021-09-01T10:45:00.000Z',
  },
  {
    slug: 'resonant-prototyping-2020',
    title: 'Resonant Prototyping',
    excerpt:
      'An exploration into prototyping frameworks that adapt to the emotional states of cross-disciplinary teams.',
    content:
      'Resonant prototypes change their tone to match collaborative energy. This article shares playbooks for designing prototypes that feel alive inside distributed teams.',
    category: 'Design',
    publishedAt: '2020-03-22T20:00:00.000Z',
  },
]
