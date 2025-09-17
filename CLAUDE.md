# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Explorimentalist is a Next.js 14 blog with a unique design philosophy combining **Brutalism** and **Glassmorphism**. The project uses TypeScript, Tailwind CSS, ShadCN UI, and DecapCMS, deployed on Netlify.

## Development Commands

```bash
# Development
npm run dev              # Start development server on port 3000
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript compiler check

# Testing (when implemented)
npm test                # Run test suite
npm run test:watch      # Run tests in watch mode
```

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom brutalist + glassmorphism theme
- **Components**: ShadCN UI
- **Content Management**: DecapCMS (Netlify CMS)
- **Deployment**: Netlify with static export
- **TypeScript**: Full type safety

### Directory Structure
```
explorimentalist/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   └── custom/         # Custom components
├── lib/                # Utility functions and configurations
├── content/            # CMS-managed content
│   ├── blog/           # Blog posts
│   ├── pages/          # Static pages
│   ├── authors/        # Author profiles
│   └── settings/       # Site configuration
├── public/
│   ├── admin/          # DecapCMS admin interface
│   └── images/         # Static assets
├── docs/               # Project documentation
└── styles/             # Global styles
```

### Design System

**Color Palette:**
- Base: Black (#000000), White (#FFFFFF), Gray scale
- Accents: Orange (#FF522A), Green (#2BB673), Purple (#8642F4)
- Glassmorphism: Various rgba values for transparency effects

**Typography System (ShadCN-based):**
- Body Text: Inter font family (via --font-geist variable)
- Headings: Mori font family (WOFF2 optimized from Pangram Pangram)
- System follows ShadCN typography principles with semantic classes
- Brutalist scale: display (8rem), massive (6rem), huge (4rem)
- Available weights: Extralight (200), Regular (400), SemiBold (600)

**Key Tailwind Classes:**

*Glassmorphism & Design:*
- `.glass-card` - Primary glassmorphism card style
- `.glass-nav` - Navigation glassmorphism effect
- `.brutalist-shadow` - Sharp drop shadows
- `.accent-orange/green/purple` - Accent color utilities

*ShadCN Typography Classes:*
- `.typography-h1` - Large heading (Mori)
- `.typography-h2` - Section heading with border (Mori)
- `.typography-h3` - Subsection heading (Mori)
- `.typography-h4` - Small heading (Mori)
- `.typography-p` - Paragraph text (Inter)
- `.typography-lead` - Lead paragraph
- `.typography-large` - Large text
- `.typography-small` - Small text
- `.typography-muted` - Muted text
- `.typography-blockquote` - Blockquote styling
- `.typography-list` - List styling
- `.typography-inline-code` - Inline code

*Font Families:*
- `font-heading` - Mori font for headings
- `font-body` - Inter font for body text

*Brutalist Variations:*
- `.text-brutalist` - Mori semibold with brutalist styling
- `.text-heading-light` - Mori extralight (200)
- `.text-heading-semibold` - Mori semibold (600)
- `.glass-text` - White text with drop shadow

### Content Management

**DecapCMS Configuration:**
- Admin interface: `/admin` (redirects to `/admin/index.html`)
- Configuration: `public/admin/config.yml`
- Collections: Blog posts, Pages, Authors, Site settings
- Content stored in: `content/` directory

**Content Utilities:**
- `lib/content.js` - Content fetching and processing
- `lib/markdown.js` - Markdown parsing and rendering

### Component Patterns

**Navigation:**
- Sticky positioning with glassmorphism background
- Desktop: Logo left, nav center, buttons right
- Mobile: Hamburger menu with slide-in overlay
- Styling: `bg-white/80 backdrop-blur-md`

**Hero Section:**
- Full-screen height with background image
- Glassmorphism overlay cards
- Brutalist typography: `text-6xl md:text-7xl lg:text-8xl font-black`
- Two-column desktop, single-column mobile

**Blog Cards:**
- Glassmorphism styling with hover effects
- Year and category filtering
- ISR for dynamic content updates

### Performance Requirements

- Lighthouse score: 95+
- Core Web Vitals compliance
- Image optimization
- ISR (Incremental Static Regeneration)
- Static export for Netlify deployment

### Deployment Configuration

**Netlify Settings:**
- Build command: `npm run build`
- Publish directory: `out` (Next.js static export)
- Node version: 18
- Redirects configured for CMS and SPA routing
- Security headers and caching rules defined

**Important Files:**
- `netlify.toml` - Deployment configuration
- `next.config.js` - Next.js configuration with static export
- `tailwind.config.js` - Custom theme with glassmorphism utilities

### Development Guidelines

1. **Design Philosophy**: Maintain tension between brutalist (sharp, bold) and glassmorphism (soft, transparent) elements
2. **Responsive Design**: Mobile-first approach with reduced glass effects on mobile for performance
3. **Accessibility**: 4.5:1 contrast ratio, ARIA labels, keyboard navigation, semantic HTML
4. **Content Strategy**: CMS-driven with ISR for dynamic updates
5. **Performance**: Optimize backdrop-filter usage, reduce blur on mobile devices

### Key Configuration Files

- `tailwind.config.js` - Complete custom theme with glassmorphism utilities
- `docs/master_requirements.md` - Comprehensive project specifications
- `docs/design_system_guide.md` - Detailed design system documentation
- `docs/netlify_config.md` - Deployment configuration reference