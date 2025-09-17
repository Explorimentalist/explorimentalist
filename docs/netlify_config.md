# netlify.toml - Configuration for The Explorimentalist

[build]
  # Build command
  command = "npm run build"
  
  # Publish directory (Next.js static export)
  publish = "out"
  
  # Environment variables
  [build.environment]
    NODE_VERSION = "18"
    NPM_VERSION = "9"
    NEXT_TELEMETRY_DISABLED = "1"

# Build hooks for different branches
[context.production]
  command = "npm run build"
  
[context.deploy-preview]
  command = "npm run build"

[context.branch-deploy]
  command = "npm run build"

# Redirects and rewrites
[[redirects]]
  # Redirect admin to CMS
  from = "/admin"
  to = "/admin/index.html"
  status = 200
  
[[redirects]]
  # Redirect admin/* to handle CMS routing
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200
  force = true

[[redirects]]
  # Handle SPA routing for blog
  from = "/blog/*"
  to = "/blog/[slug].html"
  status = 200

[[redirects]]
  # Handle 404s
  from = "/*"
  to = "/404.html"
  status = 404

# Headers for security and performance
[[headers]]
  for = "/*"
  [headers.values]
    # Security headers
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    
    # Cache control for static assets
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/admin/*"
  [headers.values]
    # Admin panel security
    X-Frame-Options = "SAMEORIGIN"
    X-Robots-Tag = "noindex, nofollow"
    
[[headers]]
  for = "*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/api/*"
  [headers.values]
    Cache-Control = "no-cache"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    
# Functions (if needed for API routes)
[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

# Dev server settings
[dev]
  command = "npm run dev"
  port = 3000
  publish = "public"
  autoLaunch = false

# Plugin configurations
[[plugins]]
  package = "netlify-plugin-submit-sitemap"
  
  [plugins.inputs]
    baseUrl = "https://explorimentalist.netlify.app"
    sitemapPath = "/sitemap.xml"
    ignorePeriod = 0
    providers = [
      "google",
      "bing"
    ]

# Large Media (if needed for large images)
# [[plugins]]
#   package = "netlify-plugin-git-lfs"

# Environment variables (set in Netlify dashboard)
# NEXTAUTH_SECRET
# GITHUB_TOKEN (for CMS)
# NEXT_PUBLIC_SITE_URL
# CMS_WEBHOOK_SECRET

# Build optimization
[build.processing]
  skip_processing = false
  
[build.processing.css]
  bundle = true
  minify = true

[build.processing.js]
  bundle = true
  minify = true

[build.processing.images]
  compress = true

# Edge functions (for dynamic content if needed)
# [[edge_functions]]
#   path = "/api/preview"
#   function = "preview"