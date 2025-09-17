# Claude Code Workflow for The Explorimentalist

## Setup Phase

### 1. Initial Project Setup
```bash
# After saving all docs locally, run Claude Code:
claude-code "Initialize a Next.js 14 project with TypeScript for 'The Explorimentalist' blog. Set up Tailwind CSS with brutalist + glassmorphism design tokens, ShadCN UI, and configure for Netlify deployment. Include the project structure from docs/master-requirements.md with proper TypeScript configs."
```

### 2. Reference Pattern for Claude Code Commands

**Always include context in your commands:**
```bash
claude-code "Based on docs/navigation-design-brief.md, create a responsive navigation component for 'The Explorimentalist' that combines brutalist typography with glassmorphism effects. Include sticky behavior, mobile hamburger menu, and accessibility features with the black/white/gray color scheme plus accent colors #FF522A, #2BB673, #8642F4."
```

## Iterative Development Strategy

### Phase 1: Core Setup
```bash
# 1. Project initialization
claude-code "Set up Next.js project for 'The Explorimentalist' with TypeScript, Tailwind, ShadCN configured for Netlify deployment"

# 2. Design system setup
claude-code "Configure Tailwind with brutalist + glassmorphism design tokens: black/white/gray base colors, accent colors #FF522A #2BB673 #8642F4, backdrop-blur utilities, and Inter typography"

# 3. Basic layout structure
claude-code "Create app layout with proper HTML structure and global styles for brutalist + glassmorphism theme"
```

### Phase 2: Navigation Component
```bash
# Reference the navigation brief
claude-code "Create navigation component for 'The Explorimentalist' combining brutalist typography with glassmorphism effects. Use bg-white/80 backdrop-blur-md, black text, and accent colors for interactive elements."

# Test and refine
claude-code "Add smooth animations to mobile menu, ensure 4.5:1 contrast ratio, and implement proper keyboard navigation with glassmorphism styling"
```

### Phase 3: Hero Section
```bash
# Build hero following the brutalist + glassmorphism prompt
claude-code "Create hero section for 'The Explorimentalist' combining brutalist typography (text-6xl+ font-black) with glassmorphism cards and overlays. Use full-screen layout with backdrop-blur effects and strategic accent color placement."

# Add interactivity
claude-code "Add load animations, hover effects, and scroll indicators to hero section while maintaining the brutalist + glassmorphism aesthetic"
```

### Phase 4: DecapCMS Integration for Netlify
```bash
# CMS setup for Netlify
claude-code "Set up DecapCMS for Netlify hosting following docs/decap-cms-implementation.md. Configure git-gateway backend, create admin interface, config.yml with collections, and ensure proper Netlify Identity integration."

# Content processing
claude-code "Create markdown processing utilities and getStaticProps/getStaticPaths for blog posts with proper ISR configuration for Netlify deployment"
```

## Effective Command Patterns

### 1. Context-Rich Commands
**Good:**
```bash
claude-code "Following the brutalist design system in docs/, create a blog post card component with sharp edges, high contrast typography using font-black, and hover effects that maintain the architectural aesthetic"
```

**Avoid:**
```bash
claude-code "make a blog card"
```

### 2. Incremental Building
```bash
# Start with structure
claude-code "Create basic blog listing page layout with grid system"

# Add styling
claude-code "Style the blog grid with brutalist design principles - sharp edges, high contrast, geometric layouts"

# Add functionality
claude-code "Add filtering functionality for year and category using URL parameters"

# Add CMS integration
claude-code "Connect blog listing to DecapCMS content using lib/content.js utilities"
```

### 3. Reference Specific Documentation
```bash
claude-code "Based on the DecapCMS configuration in docs/decap-cms-implementation.md, create the blog post template page with proper frontmatter handling, SEO meta tags, and responsive typography hierarchy"
```

## Testing and Refinement Pattern

### 1. Build → Test → Refine
```bash
# Build component
claude-code "Create component X following docs/requirements"

# Test in browser, then refine
claude-code "The navigation menu isn't closing on mobile when clicking outside. Fix this and ensure proper focus management for accessibility"

# Performance check
claude-code "Optimize the hero section for Core Web Vitals - ensure images load efficiently and animations don't cause layout shift"
```

### 2. Accessibility Validation
```bash
claude-code "Audit the navigation component for WCAG compliance - ensure 4.5:1 contrast ratios, proper ARIA labels, and keyboard navigation works correctly"
```

## Documentation Update Workflow

### Keep Local Docs Current
```bash
# After major changes, update documentation
claude-code "Update docs/component-library.md with the navigation component API and usage examples"

# Generate documentation
claude-code "Create a README.md that documents the current project structure, available components, and how to run the development server"
```

## Pro Tips for Claude Code Success

### 1. **Be Specific About Files**
```bash
claude-code "Modify app/layout.tsx to include the navigation component and ensure proper TypeScript types"
```

### 2. **Reference Multiple Docs**
```bash
claude-code "Create blog post page template combining requirements from docs/decap-cms-implementation.md and docs/brutalist-design-system.md"
```

### 3. **Ask for Explanations**
```bash
claude-code "Explain the blog filtering logic you just implemented and document it in comments"
```

### 4. **Iterative Refinement**
```bash
claude-code "The hero section looks good but needs better mobile responsiveness. Improve the typography scaling and layout for screens under 768px"
```

This workflow ensures you maintain context between our documentation discussion and your local development with Claude Code!