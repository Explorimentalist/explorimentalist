# Enhanced Landing Page Implementation Prompt

## Project Foundation
Create a Next.js project that uses Tailwind CSS for styling, ShadCN as the design system, and is hosted on Vercel. Integrate DecapCMS as the content management system and host the repository on GitHub.

## Navigation Bar Requirements
Implement a sticky navigation bar based on the provided design brief:
- **Desktop Layout**: Logo left, centered navigation links, right-aligned action buttons
- **Mobile**: Hamburger menu with slide-in overlay
- **Styling**: `bg-gray-100`, `text-gray-800`, `blue-500` accents
- **Typography**: `font-sans` throughout, `text-xl` for logo, `text-base` for navigation
- **Accessibility**: 4.5:1 contrast ratio, ARIA labels, keyboard navigation

## Hero Section Structure
Generate a modern, brutalistic hero section with the following specifications:

### Visual Design
- **Background**: Full-width background image with dark overlay for text readability
- **Typography**: 
  - Primary headline in `text-6xl md:text-7xl lg:text-8xl font-black tracking-tight`
  - Secondary text in `text-xl font-sans font-medium`
- **Colors**: 
  - Primary text: `text-gray-100` (white/light for contrast against dark bg)
  - Secondary text: `text-gray-300`
  - CTA buttons: `bg-black text-white` with `hover:bg-gray-800` states
  - Accent elements: Sharp geometric shapes in `bg-red-500` or `bg-yellow-400`

### Layout & Spacing
- **Container**: `min-h-screen flex items-center justify-center`
- **Content padding**: `p-6 lg:p-12`
- **Element spacing**: `space-y-6 lg:space-y-8`
- **Max width**: `max-w-7xl mx-auto`

### Responsive Behavior
- **Mobile (<768px)**: 
  - Single column stack
  - Headline scales to `text-4xl`
  - Center-aligned content
  - Touch-friendly buttons (min 44px height)
- **Desktop (≥1024px)**: 
  - Two-column layout with 60/40 split
  - Left: Hero content
  - Right: Featured article preview or visual element

### Brutalistic Design Elements
- **Typography**: Bold, condensed fonts with high contrast
- **Geometric Shapes**: Angular dividers, rectangular overlays
- **Minimal Color Palette**: Black, white, gray with one accent color
- **Raw Textures**: Concrete-like background textures or patterns
- **Sharp Edges**: No rounded corners, stark geometric forms
- **High Contrast**: Strong black/white contrasts

### Accessibility Standards
- **Button Contrast**: Maintain ≥4.5:1 ratio for all interactive elements
- **Alt Text**: Descriptive alt text for all background images
- **Focus States**: Clear, high-contrast focus indicators
- **Screen Reader**: Proper heading hierarchy (h1 for main headline)

### Interactivity & Animation
- **Load Animation**: Fade-in effect with staggered element appearance
- **Hover Effects**: Subtle transforms on buttons (`hover:scale-105`)
- **Scroll Indicator**: Animated down arrow or scroll prompt
- **Performance**: Optimized for Core Web Vitals

## Content Integration
- **CMS-Driven**: All hero content manageable through DecapCMS
- **Dynamic Background**: Background image configurable via CMS
- **Flexible Content**: Headline, subtext, and CTA buttons editable
- **SEO Optimization**: Meta tags and structured data

## Article Feed Section
Below the hero, implement an article feed with:
- **Filtering**: Year and category filters sourced from DecapCMS
- **Layout**: Card-based grid system
- **Responsive**: 1 column mobile, 2-3 columns desktop
- **Typography**: Consistent with brutalistic theme
- **Performance**: ISR for dynamic content updates

## Technical Implementation
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom brutalistic design tokens
- **Components**: ShadCN UI components customized for brutalistic aesthetic
- **CMS**: DecapCMS integration following the provided documentation
- **Hosting**: Vercel deployment with automatic GitHub integration
- **Performance**: Image optimization, lazy loading, Core Web Vitals optimization

## Design Tokens (Custom Tailwind Config)
```javascript
// Brutalistic theme extensions
theme: {
  extend: {
    fontFamily: {
      'brutalist': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    colors: {
      brutalist: {
        concrete: '#f5f5f5',
        steel: '#2d2d2d',
        accent: '#ff0000',
      }
    },
    animation: {
      'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
    }
  }
}
```

This implementation combines modern web development practices with a bold, brutalistic design aesthetic while maintaining excellent accessibility and performance standards.