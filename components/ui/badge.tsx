import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm font-normal tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
  {
    variants: {
      variant: {
        default: 'border-black bg-white text-black hover:bg-black hover:text-white',
        inverse: 'border-black bg-black text-white hover:bg-white hover:text-black',
        glass:
          'border-white/60 bg-white/20 backdrop-blur-md text-white hover:border-white hover:bg-white/40',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
