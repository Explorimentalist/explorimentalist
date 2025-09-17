// Typography utility functions and constants

export const typographyClasses = {
  // ShadCN Typography Classes
  h1: "typography-h1",
  h2: "typography-h2", 
  h3: "typography-h3",
  h4: "typography-h4",
  p: "typography-p",
  lead: "typography-lead",
  large: "typography-large",
  small: "typography-small",
  muted: "typography-muted",
  blockquote: "typography-blockquote",
  list: "typography-list",
  inlineCode: "typography-inline-code",
  
  // Font families
  heading: "font-heading", // Mori
  body: "font-body",       // Geist
  
  // Brutalist variations
  brutalist: "text-brutalist",
  headingLight: "text-heading-light",
  headingSemibold: "text-heading-semibold", 
  headingBold: "text-heading-bold",
  glassText: "glass-text",
} as const

export const fontWeights = {
  extralight: "200",
  normal: "400", 
  semibold: "600",
  extrabold: "800",
  black: "900",
} as const

export const fontSizes = {
  // Standard sizes
  xs: "0.75rem",
  sm: "0.875rem", 
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  
  // Brutalist sizes  
  huge: "4rem",      // 64px
  massive: "6rem",   // 96px
  display: "8rem",   // 128px
} as const

// Helper function to combine typography classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Typography component props
export interface TypographyProps {
  variant?: keyof typeof typographyClasses
  className?: string
  children: React.ReactNode
}