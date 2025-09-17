# Typography System Guide

## Overview

The Explorimentalist uses a sophisticated typography system combining:
- **Mori** (Pangram Pangram) for headings - Japanese-inspired, modern Gothic sans serif
- **Inter** (Google Fonts) for body text - Optimized for digital interfaces

This system follows ShadCN principles with semantic utility classes for consistent typography hierarchy.

## Font Configuration

### Mori (Headings)
- **Source**: Pangram Pangram (local WOFF2 files)
- **Weights**: Extralight (200), Regular (400), SemiBold (600)
- **Usage**: All headings (h1-h6), brutalist typography
- **CSS Variable**: `--font-mori`

### Inter (Body Text)
- **Source**: Google Fonts
- **Weights**: Variable (100-900)
- **Usage**: Body text, paragraphs, UI text
- **CSS Variable**: `--font-geist` (maintains naming consistency)

## ShadCN Typography Classes

### Headings
```tsx
<h1 className="typography-h1">Main Page Title</h1>
<h2 className="typography-h2">Section Header</h2>
<h3 className="typography-h3">Subsection Header</h3>
<h4 className="typography-h4">Small Header</h4>
```

### Body Text
```tsx
<p className="typography-p">Regular paragraph text</p>
<p className="typography-lead">Lead paragraph for introductions</p>
<div className="typography-large">Large emphasis text</div>
<small className="typography-small">Small text for captions</small>
<p className="typography-muted">Muted text for secondary info</p>
```

### Special Elements
```tsx
<blockquote className="typography-blockquote">Quote text</blockquote>
<ul className="typography-list">List items</ul>
<code className="typography-inline-code">inline code</code>
```

## Font Family Utilities

### Direct Font Application
```tsx
<div className="font-heading">Uses Mori font</div>
<div className="font-body">Uses Inter font</div>
```

## Brutalist Typography Variations

For the brutalist aesthetic of The Explorimentalist:

```tsx
<div className="text-brutalist">UPPERCASE BRUTALIST</div>
<div className="text-heading-light">Light Mori heading</div>
<div className="text-heading-semibold">SemiBold Mori heading</div>
<div className="glass-text">White text with drop shadow</div>
```

## Typography Scale

### Standard Sizes
- `text-xs` (12px)
- `text-sm` (14px)
- `text-base` (16px)
- `text-lg` (18px)
- `text-xl` (20px)
- `text-2xl` (24px)
- `text-3xl` (30px)
- `text-4xl` (36px)
- `text-5xl` (48px)

### Brutalist Sizes
- `text-huge` (64px) - Page titles
- `text-massive` (96px) - Section headers
- `text-display` (128px) - Hero headlines

## Implementation Examples

### Hero Section
```tsx
<section>
  <h1 className="text-massive text-heading-semibold tracking-tighter leading-none">
    THE EXPLORIMENTALIST
  </h1>
  <p className="typography-lead">
    A brutalist + glassmorphism blog
  </p>
</section>
```

### Article Content
```tsx
<article>
  <h1 className="typography-h1">Article Title</h1>
  <p className="typography-lead">Article introduction</p>
  
  <h2 className="typography-h2">Section Title</h2>
  <p className="typography-p">Regular paragraph content...</p>
  
  <blockquote className="typography-blockquote">
    Important quote or callout
  </blockquote>
</article>
```

### Navigation
```tsx
<nav className="font-body">
  <div className="font-heading font-semibold text-xl">Logo</div>
  <div className="text-sm">Navigation items</div>
</nav>
```

## CSS Variables Available

```css
:root {
  --font-mori: 'Mori', 'Inter', system-ui, sans-serif;
  --font-geist: 'Inter', system-ui, sans-serif;
}
```

## Best Practices

1. **Use semantic classes**: Prefer `typography-h1` over manual size classes
2. **Maintain hierarchy**: Follow h1 > h2 > h3 > h4 order
3. **Consistent spacing**: Use built-in spacing from typography classes
4. **Font pairing**: Mori for impact, Inter for readability
5. **Brutalist accents**: Use sparingly for emphasis and brand identity

## Performance Notes

- Mori fonts are WOFF2 optimized for web performance
- Inter is loaded via Google Fonts with `font-display: swap`
- Both fonts use CSS variables for consistent application
- Typography system includes proper fallbacks

This typography system provides the foundation for The Explorimentalist's unique brutalist + glassmorphism aesthetic while maintaining excellent readability and web performance.