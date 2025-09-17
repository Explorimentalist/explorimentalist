# Claude Code Troubleshooting - The Explorimentalist

## Common Issues & Solutions

### 1. Claude Code Context Problems
**Issue**: Claude Code doesn't understand project requirements
**Solution**: Always reference your local docs and use the exact project name
```bash
# Instead of:
claude-code "make a hero section"

# Do this:
claude-code "Create a hero section for 'The Explorimentalist' following the specifications in docs/hero-section-prompt.md: full-screen height, brutalist + glassmorphism aesthetic with backdrop-blur effects, text-6xl+ headlines, and accent colors #FF522A, #2BB673, #8642F4"
```

### 2. Component Integration Issues
**Issue**: Components don't work together properly
**Solution**: Build incrementally and test integration
```bash
# Build one component at a time
claude-code "Create navigation component for 'The Explorimentalist' with glassmorphism effects and test it in isolation"
# Then integrate
claude-code "Integrate the navigation component into app/layout.tsx with proper brutalist + glassmorphism styling and TypeScript types"
```

### 3. Styling Inconsistencies  
**Issue**: Brutalist + glassmorphism theme not applied consistently
**Solution**: Reference design system explicitly
```bash
claude-code "Audit all components for 'The Explorimentalist' design consistency: ensure brutalist typography (font-black, no rounded corners for structure), glassmorphism effects (backdrop-blur, transparency), and only use approved colors (black/white/grays + #FF522A/#2BB673/#8642F4 accents)"
```

### 4. DecapCMS + Netlify Configuration Errors
**Issue**: CMS admin panel doesn't load or save content on Netlify
**Solution**: Debug Netlify-specific setup
```bash
# Check Netlify CMS setup
claude-code "Verify DecapCMS configuration for Netlify hosting: ensure public/admin/index.html loads correctly, validate config.yml with git-gateway backend, check Netlify Identity settings, and test with local backend first"

# Test Netlify deployment
claude-code "Configure Netlify deployment with proper redirects for /admin panel, ensure build commands are correct for Next.js static export, and verify environment variables for DecapCMS"
```

## Effective Development Workflow

### 1. Start Small, Build Up
```bash
# Week 1: Foundation
claude-code "Set up basic Next.js project with Tailwind and basic layout"

# Week 2: Core Components  
claude-code "Build navigation and hero section"

# Week 3: Content System
claude-code "Integrate DecapCMS and content utilities"

# Week 4: Polish & Deploy
claude-code "Optimize performance and deploy to Vercel"
```

### 2. Test Early, Test Often
```bash
# After each component
claude-code "Test the navigation component on mobile devices and ensure accessibility compliance"

# Before major features
claude-code "Run lighthouse audit and fix any performance issues before adding more complexity"
```

### 3. Keep Documentation Updated
```bash
# After significant changes
claude-code "Update docs/component-library.md with new components and their APIs"

# Document decisions
claude-code "Create docs/architecture-decisions.md explaining key technical choices and brutalist design implementations"
```

## Best Practices for The Explorimentalist

### 1. Maintain Brutalist + Glassmorphism Consistency
- Always specify "brutalist typography with glassmorphism effects" in commands
- Reference the exact accent colors: #FF522A, #2BB673, #8642F4  
- Emphasize "backdrop-blur and transparency" for glass elements
- Mention "sharp edges for structure, subtle rounding for glass cards"

### 2. Netlify-First Approach
```bash
claude-code "Implement this feature with Netlify deployment in mind - configure static export, ensure admin panel redirects work, and optimize for Netlify's CDN"
```

### 3. Accessibility + Glassmorphism
```bash
claude-code "Include accessibility features with glassmorphism considerations: ensure text contrast meets 4.5:1 ratio over glass backgrounds, provide fallbacks for backdrop-filter, and maintain keyboard navigation visibility"
```

### 4. TypeScript + Design System Integration
```bash
claude-code "Ensure proper TypeScript types for The Explorimentalist components with design system integration - type accent color props, glassmorphism effect variants, and content interfaces"
```

## Advanced Claude Code Techniques

### 1. Multi-Step Commands
```bash
claude-code "Create the blog post component, then immediately create its TypeScript interface file, and finally add comprehensive JSDoc comments explaining the props and usage"
```

### 2. Cross-Reference Multiple Requirements
```bash
claude-code "Build the article feed component that satisfies both the brutalist design requirements from docs/design-system.md AND the content filtering requirements from docs/decap-cms-implementation.md"
```

### 3. Iterative Refinement
```bash
# First pass
claude-code "Create basic hero section with brutalist styling"

# Review and improve
claude-code "The hero section needs better mobile responsiveness and more dramatic typography scaling"

# Final polish
claude-code "Add subtle load animations and geometric accent elements to the hero section"
```

## When to Use Claude.ai vs Claude Code

### Use Claude.ai for:
- Planning and architecture decisions for The Explorimentalist
- Complex brutalist + glassmorphism design questions
- Code review and debugging analysis
- DecapCMS + Netlify integration strategy
- Color palette and accent color usage decisions

### Use Claude Code for:
- Writing actual component files with design system
- Netlify configuration and deployment setup
- Package installations and file system operations  
- Local development tasks and builds
- DecapCMS admin panel configuration

## Emergency Debugging for The Explorimentalist

### If Everything Breaks:
```bash
# Start fresh with minimal setup
claude-code "Create a minimal Next.js page for 'The Explorimentalist' with just basic Tailwind styling and the custom color palette to test the foundation"

# Add complexity gradually
claude-code "Add brutalist + glassmorphism components one at a time and test thoroughly before proceeding"

# Use git for safety
git commit -m "Working state before adding [feature] to The Explorimentalist"
```

### Common Reset Commands:
```bash
# Reset package issues
npm install --force
npm run build

# Reset styling issues  
claude-code "Remove all custom CSS and rebuild with just Tailwind utilities and The Explorimentalist design tokens"

# Reset Netlify deployment
claude-code "Simplify netlify.toml to basic configuration and rebuild deployment step by step"
```

This approach ensures you get the most out of both Claude.ai (for planning) and Claude Code (for implementation) while building your brutalist blog!