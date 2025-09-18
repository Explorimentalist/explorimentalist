Component Overview
Create a modern brutalist blog post card component for "The Explorimentalist" landing page using Next.js, Tailwind CSS, and ShadCN Card components. The design combines brutalist typography with subtle glassmorphism effects for a contemporary, high-impact aesthetic.
Visual Design Specifications
Card Container Structure
jsx// Base card with glassmorphism backdrop
<Card className="group relative overflow-hidden bg-gradient-to-br from-orange-100/30 to-white/30 backdrop-blur-xl border-0 rounded-3xl p-12 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
Styling Details

Background: bg-gradient-to-br from-orange-100/30 to-white/30 with backdrop-blur-xl
Border: border-0 rounded-3xl (24px equivalent)
Padding: p-12 (48px equivalent from CSS)
Dimensions: w-full max-w-2xl (responsive width up to 812px equivalent)
Height: min-h-[600px] to accommodate content
Shadow: hover:shadow-2xl for interaction feedback

Header Section Layout
Date and Category Row
jsx<CardHeader className="flex-row justify-between items-center p-0 mb-4">
  <time className="font-mono text-base font-normal tracking-wide text-black">
    03 March 2025
  </time>
  <span className="bg-white border border-black rounded-full px-4 py-2 font-mono text-sm font-normal text-black hover:bg-black hover:text-white transition-colors duration-200">
    process
  </span>
</CardHeader>
Typography Specifications

Date: font-mono text-base font-normal (Geist Mono equivalent)
Category Tag: bg-white border border-black rounded-full px-4 py-2
Tag Hover: hover:bg-black hover:text-white for brutal interaction
Spacing: justify-between items-center for horizontal alignment

Featured Image Section
Image Container
jsx<div className="relative w-full h-80 lg:h-96 mb-6 overflow-hidden rounded-2xl bg-gray-200">
  <Image
    src={post.featured_image || '/images/placeholder.jpg'}
    alt={post.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-700"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
Image Styling

Dimensions: h-80 lg:h-96 (320px mobile, 384px desktop)
Border: rounded-2xl for consistent card aesthetic
Hover Effect: group-hover:scale-105 for subtle zoom
Object Fit: object-cover to maintain aspect ratio
Placeholder: Gray background for loading state

Content Footer Section
Title and Description
jsx<CardContent className="p-0 space-y-6">
  <CardTitle className="text-2xl lg:text-3xl font-semibold leading-tight text-black group-hover:text-gray-800 transition-colors duration-300">
    What is happening?
  </CardTitle>
  <CardDescription className="font-mono text-lg lg:text-xl leading-relaxed text-black/80 line-clamp-3">
    Certainly things have changed and I don't know what to make of them I thought I was better.
  </CardDescription>
</CardContent>
Typography Hierarchy

Title: text-2xl lg:text-3xl font-semibold leading-tight (Geist font)
Description: font-mono text-lg lg:text-xl leading-relaxed (Geist Mono)
Text Colors: text-black for title, text-black/80 for description
Line Clamping: line-clamp-3 to prevent overflow
Hover States: Subtle color transitions on interaction

Accessibility Standards
Semantic HTML Structure
jsx<article role="article" aria-labelledby={`post-title-${post.slug}`}>
  <Card className="...">
    <CardHeader>
      <time dateTime={post.date} className="...">
        {formatDate(post.date)}
      </time>
      <span aria-label={`Category: ${post.category}`} className="...">
        {post.category}
      </span>
    </CardHeader>
    
    <div className="...">
      <Image
        src={post.featured_image}
        alt={post.imageAlt || `Featured image for ${post.title}`}
        // ... other props
      />
    </div>
    
    <CardContent>
      <CardTitle id={`post-title-${post.slug}`} className="...">
        {post.title}
      </CardTitle>
      <CardDescription className="...">
        {post.excerpt}
      </CardDescription>
    </CardContent>
  </Card>
</article>
Accessibility Features

ARIA Labels: Descriptive labels for categories and images
Semantic Time: <time dateTime=""> for proper date markup
Focus States: focus:ring-4 focus:ring-red-500 focus:ring-offset-4
Color Contrast: Maintain ≥4.5:1 ratio throughout
Keyboard Navigation: Full keyboard accessibility support

Responsive Design
Mobile Layout (<768px)

Padding: Reduce to p-6 for mobile optimization
Image Height: h-64 on mobile for better proportion
Typography: Scale down to text-xl for titles, text-base for descriptions
Touch Targets: Ensure minimum 44px for interactive elements

Desktop Layout (≥1024px)

Full Specifications: Use maximum sizes as specified
Hover Effects: Enable all hover states and transitions
Grid Integration: max-w-2xl to fit well in grid layouts

Interactive States
Hover Animations
jsx// Container hover effects
className="group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"

// Image zoom on hover
className="object-cover group-hover:scale-105 transition-transform duration-700"

// Category tag interaction
className="hover:bg-black hover:text-white transition-colors duration-200"

// Title color shift
className="group-hover:text-gray-800 transition-colors duration-300"
Focus States

Card Focus: focus-within:ring-4 focus-within:ring-red-500
Tag Focus: focus:ring-2 focus:ring-black focus:ring-offset-2
Keyboard Navigation: Full tab order support

CMS Integration
Content Structure
jsx// Expected data structure from DecapCMS
const postData = {
  title: "What is happening?",
  slug: "what-is-happening",
  excerpt: "Certainly things have changed...",
  featured_image: "/images/posts/post-image.jpg",
  imageAlt: "Descriptive alt text",
  category: "process",
  date: "2025-03-03T00:00:00Z",
  author: "Author Name",
  readTime: "5 min read"
};
Dynamic Content Loading

Image Optimization: Next.js Image component with proper sizing
Date Formatting: Use date-fns for consistent date display
Excerpt Handling: Automatic truncation with line-clamp-3
Category Mapping: Dynamic category colors and styling

Performance Optimizations
Core Web Vitals

LCP: Optimize image loading with priority={index < 3}
CLS: Fixed dimensions prevent layout shift
FID: Optimized hover effects with transform and opacity

Loading States
jsx// Skeleton loading state
<div className="animate-pulse">
  <div className="bg-gray-300 rounded-3xl h-96 mb-4"></div>
  <div className="bg-gray-300 h-6 rounded mb-2"></div>
  <div className="bg-gray-300 h-4 rounded w-3/4"></div>
</div>
This implementation creates a sophisticated, brutalist blog post card that perfectly embodies "The Explorimentalist" brand while maintaining exceptional user experience and accessibility standards.