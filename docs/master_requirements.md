# The Explorimentalist - Master Requirements

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Design System**: ShadCN UI
- **CMS**: DecapCMS (Netlify CMS)
- **Hosting**: Netlify
- **Repository**: https://github.com/Explorimentalist/explorimentalist

## Project Structure
```
explorimentalist/
├── docs/                           # Documentation
├── app/                            # Next.js App Router
├── components/                     # React Components
├── lib/                           # Utility functions
├── content/                       # CMS content
│   ├── blog/
│   ├── pages/
│   ├── authors/
│   └── settings/
├── public/
│   ├── admin/                     # DecapCMS admin
│   └── images/
└── styles/                        # Global styles
```

## Core Components to Build

### 1. Navigation Bar
**Requirements:**
- Sticky navigation (`sticky top-0`)
- Desktop: Logo left, nav center, buttons right
- Mobile: Hamburger menu with slide-in overlay
- **Styling**: `bg-white/80 backdrop-blur-md`, `text-black`, accent colors for CTAs
- **Typography**: `font-sans`, `text-xl` logo, `text-base` nav
- **Accessibility**: 4.5:1 contrast, ARIA labels, keyboard nav

### 2. Brutalist + Glassmorphism Hero Section
**Requirements:**
- Full-screen height (`min-h-screen`)
- Background image with glassmorphism overlay
- **Typography**: 
  - Headline: `text-6xl md:text-7xl lg:text-8xl font-black tracking-tight`
  - Subtext: `text-xl md:text-2xl font-sans font-medium`
- **Colors**: `text-white`, `text-gray-200`, glassmorphism elements
- **Layout**: Two-column desktop (60/40), single-column mobile
- **Elements**: Sharp geometric accents, glassmorphism cards, no rounded corners

### 3. Article Feed
**Requirements:**
- Year and category filtering
- Card-based grid layout
- CMS-driven content
- ISR for dynamic updates

## DecapCMS Configuration

### Collections Needed:
1. **Blog Posts** (`content/blog/`)
2. **Pages** (`content/pages/`)
3. **Authors** (`content/authors/`)
4. **Site Settings** (`content/settings/`)

### Key Files:
- `public/admin/index.html` - CMS interface
- `public/admin/config.yml` - CMS configuration
- `lib/content.js` - Content utilities
- `lib/markdown.js` - Markdown processing

## Design System (Brutalist + Glassmorphism Theme)

### Color Palette:
- **Base Colors**: `black`, `white`, `gray-100`, `gray-200`, `gray-800`, `gray-900`
- **Accent Colors**: 
  - Orange: `#FF522A` (primary accent)
  - Green: `#2BB673` (secondary accent)
  - Purple: `#8642F4` (tertiary accent)
- **Glassmorphism**: `bg-white/10`, `bg-black/10`, `backdrop-blur-md`, `backdrop-blur-lg`

### Typography:
- **Primary Font**: Inter (`font-sans`)
- **Weights**: `font-black`, `font-bold`, `font-medium`
- **Tracking**: `tracking-tight`, `tracking-tighter`
- **Leading**: `leading-none`, `leading-tight`

### Layout Principles:
- **Brutalist Elements**: Sharp edges, high contrast, bold typography
- **Glassmorphism Elements**: Translucent cards, backdrop blur, subtle gradients
- **No rounded corners** except for glassmorphism elements (minimal `rounded-lg`)
- **Grid-based layouts** with geometric precision
- **Monochromatic base** with strategic accent color usage

### Glassmorphism Components:
- **Cards**: `bg-white/10 backdrop-blur-md border border-white/20`
- **Navigation**: `bg-white/80 backdrop-blur-md`
- **Overlays**: `bg-black/50 backdrop-blur-sm`
- **Buttons**: Glassmorphic with accent color highlights

## Accessibility Standards
- 4.5:1 contrast ratio minimum
- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Semantic HTML structure

## Performance Targets
- Lighthouse score: 95+
- Core Web Vitals compliance
- Image optimization
- ISR for dynamic content
- Font optimization

## Implementation Priority
1. Basic Next.js setup with Tailwind/ShadCN
2. Navigation component
3. Hero section
4. DecapCMS integration
5. Article feed component
6. Content utilities
7. Deployment setup
8. Performance optimization

## Claude Code Instructions
When using Claude Code, reference this file and the specific component you're building. Each component should be built incrementally with proper TypeScript types and responsive design.