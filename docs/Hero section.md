# Brutalist Hero Section - The Explorimentalist

## Core Structure
Generate a modern brutalist hero section for "The Explorimentalist" landing page using Next.js, Tailwind CSS, and ShadCN design system. The design should embody raw architectural brutalism with maximum typographic impact.

## Visual Design Specifications

### Typography & Headlines
- **Primary Headline**: `text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none`
- **Brand Name**: "The Explorimentalist" in bold, condensed typography
- **Secondary Text**: `text-xl md:text-2xl font-bold tracking-wide`
- **Font Family**: Use `font-sans` (Inter) with custom Mori font integration for brutalist feel
- **Text Transform**: `uppercase` for maximum brutalist impact

### Background & Visual Elements
- **Background Image**: Full-width concrete/urban architectural photography with high contrast
- **Dark Overlay**: `bg-black/70` for stark text readability
- **Geometric Accents**: Sharp rectangular elements in `bg-white` or `bg-red-500`
- **Grid Lines**: Subtle visible grid system for architectural structure

### Color Palette (Brutalist)
- **Primary Text**: `text-white` (maximum contrast against dark background)
- **Secondary Text**: `text-gray-200`
- **CTA Buttons**: `bg-white text-black border-4 border-white` with `hover:bg-black hover:text-white hover:border-white`
- **Accent Elements**: `bg-red-500` for geometric shapes and highlights
- **Background**: Dark architectural image with heavy overlay

### Layout & Spacing
- **Container**: `min-h-screen flex items-center justify-center`
- **Content Padding**: `p-6 lg:p-12`
- **Element Spacing**: `space-y-8 lg:space-y-12`
- **Max Width**: `max-w-8xl mx-auto`
- **Grid Structure**: CSS Grid for precise brutalist positioning

## Accessibility Standards
- **Button Text Contrast**: ≥4.5:1 ratio (white text on black meets 21:1)
- **Body Text**: High contrast with `text-white` on dark backgrounds
- **Focus States**: `focus:ring-4 focus:ring-white focus:ring-offset-4 focus:ring-offset-black`
- **Alt Text**: "Concrete brutalist architecture background for The Explorimentalist"
- **Semantic HTML**: Proper h1 heading hierarchy
- **ARIA Labels**: Clear labels for all interactive elements

## Responsive Design

### Mobile Layout (<768px)
- **Single Column**: Stack all elements vertically with `text-center`
- **Headline**: Scale to `text-4xl md:text-6xl font-black`
- **Touch Targets**: Minimum 44px height for buttons with `py-4 px-8`
- **Spacing**: `p-4 space-y-6` for mobile optimization
- **Typography**: Maintain brutalist impact on smaller screens

### Desktop Layout (≥1024px)
- **Asymmetric Grid**: 70/30 split using CSS Grid
- **Left Column**: Hero content with left alignment
- **Right Column**: Geometric accent element or featured article preview
- **Full Impact**: Maximum typography scale and spacing
- **Horizontal CTAs**: Side-by-side button layout with `flex gap-6`

## Brutalist Design Elements

### Typography Characteristics
- **Weight**: Exclusively heavy fonts (`font-black`, `font-extrabold`)
- **Tracking**: Super tight letter spacing (`tracking-tighter`)
- **Leading**: Condensed line height (`leading-none`)
- **Case**: Strategic `uppercase` usage for impact
- **Hierarchy**: Dramatic scale differences between elements

### Geometric Elements
- **Sharp Dividers**: Angular section breaks with `clip-path`
- **Rectangular Overlays**: Color blocks for visual hierarchy
- **Visible Grid**: Subtle grid lines integrated into design
- **Raw Edges**: No rounded corners anywhere (`rounded-none`)
- **Monolithic Forms**: Large, imposing visual blocks

## Interactivity & Animation

### Load Animations
- **Fade-in Effect**: `animate-fade-in-up` with 0.8s duration
- **Staggered Typography**: Letters appear sequentially
- **Geometric Movement**: Accent shapes slide in from edges
- **Performance**: Optimized for 60fps, no layout shift

### Hover States
- **Button Inversions**: Complete black/white color flip
- **Scale Effects**: `hover:scale-105` for CTAs
- **Typography**: Subtle `hover:tracking-widest` expansion

### Scroll Interactions
- **Scroll Indicator**: Bold geometric arrow pointing down
- **Progress Bar**: Stark white bar indicating scroll progress

## Content Structure

### Primary Content
```jsx
<div className="space-y-8 lg:space-y-12">
  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-white uppercase">
    The<br />
    Explorimentalist
  </h1>
  
  <p className="text-xl md:text-2xl font-bold tracking-wide text-gray-200 max-w-2xl">
    Raw explorations in design, technology, and culture. 
    Unfiltered perspectives on the intersection of creativity and code.
  </p>
  
  <div className="flex flex-col sm:flex-row gap-6">
    <button className="bg-white text-black px-8 py-4 font-bold text-lg tracking-wide border-4 border-white hover:bg-black hover:text-white transition-all duration-300 uppercase">
      Explore Articles
    </button>
    <button className="bg-transparent text-white px-8 py-4 font-bold text-lg tracking-wide border-4 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase">
      Subscribe
    </button>
  </div>
</div>
```

## Technical Implementation

### Performance Optimization
- **Next.js Image**: Priority loading for hero background
- **Critical CSS**: Inline essential brutalist styles
- **Font Loading**: Optimize Mori font delivery with `font-display: swap`
- **Core Web Vitals**: Target 95+ Lighthouse performance score

### CMS Integration
- **Headline**: Editable via DecapCMS with rich text support
- **Subtext**: Configurable supporting copy
- **CTAs**: Dynamic button text and links
- **Background**: Media library integration for hero images

This implementation creates a powerful, uncompromising brutalist hero section that embodies "The Explorimentalist" brand while maintaining modern web standards and accessibility.