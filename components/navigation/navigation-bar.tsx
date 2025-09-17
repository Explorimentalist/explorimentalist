'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useState } from 'react'

import { cn } from '@/lib/utils'

type NavItem = {
  href: string
  label: string
}

type ActionItem = {
  href: string
  label: string
  variant?: 'solid' | 'outline'
}

type NavigationBarProps = {
  navItems?: NavItem[]
  actionItems?: ActionItem[]
  logoLabel?: string
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experiments', label: 'Experiments' },
  { href: '/journal', label: 'Journal' },
]

const DEFAULT_ACTION_ITEMS: ActionItem[] = [
  { href: '/login', label: 'Login', variant: 'outline' },
  { href: '/sign-up', label: 'Sign Up', variant: 'solid' },
]

export function NavigationBar({
  navItems = DEFAULT_NAV_ITEMS,
  actionItems = DEFAULT_ACTION_ITEMS,
  logoLabel = 'The Explorimentalist',
}: NavigationBarProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-60">
      <div className="glass-nav shadow-glass backdrop-saturate-150 backdrop-brightness-110">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-gray-900">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex text-sm uppercase tracking-tight no-underline"
            >
              <span className="font-black text-lg sm:text-xl">{logoLabel}</span>
            </Link>
          </div>

          <nav className="hidden gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group relative inline-flex items-center overflow-hidden px-3 py-2 text-sm font-black uppercase tracking-tight transition-all duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black no-underline',
                    'after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:origin-bottom after:scale-y-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out after:content-[""]',
                    isActive
                      ? 'text-white after:scale-y-100'
                      : 'text-black hover:text-white hover:after:scale-y-100 focus-visible:text-white focus-visible:after:scale-y-100'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {actionItems.map((action) => {
              const isSolid = action.variant === 'solid'
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className={cn(
                    'relative inline-flex items-center justify-center px-4 py-2 text-sm font-black uppercase tracking-tight shadow-brutal-sm transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black no-underline',
                    isSolid
                      ? 'border border-black bg-black text-white hover:bg-white hover:text-black'
                      : 'border border-black bg-white text-black hover:bg-black hover:text-white'
                  )}
                >
                  {action.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black bg-white/60 shadow-brutal-sm transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-white"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls={menuId}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
              <svg
                className={cn('h-5 w-5 transition-transform duration-300 ease-in-out', {
                  'rotate-45': isMenuOpen,
                })}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id={menuId}
        className={cn(
          'fixed inset-0 z-50 flex lg:hidden',
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={cn(
            'glass-overlay absolute inset-0 transition-opacity duration-300 ease-in-out',
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={cn(
            'ml-auto flex h-full w-full max-w-xs flex-col justify-between bg-white/85 p-6 text-gray-900 shadow-glass backdrop-blur-lg transition-transform duration-300 ease-in-out sm:max-w-sm',
            'border-l border-black/10',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-base font-black uppercase tracking-tight no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {logoLabel}
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black bg-white/60 shadow-brutal-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-4" aria-label="Mobile navigation links">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group relative flex items-center justify-between rounded-lg border border-black bg-white px-4 py-4 text-base font-black uppercase tracking-tight shadow-brutal-sm transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black no-underline',
                    isActive ? 'text-black' : 'text-black hover:bg-black hover:text-white'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  <span className="h-2 w-2 rounded-full bg-black" aria-hidden="true" />
                </Link>
              )
            })}
          </nav>

          <div className="mt-10 flex flex-col gap-3">
            {actionItems.map((action) => {
              const isSolid = action.variant === 'solid'
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className={cn(
                    'inline-flex items-center justify-center px-4 py-3 text-sm font-black uppercase tracking-tight shadow-brutal-sm transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black no-underline',
                    isSolid
                      ? 'border border-black bg-black text-white hover:bg-white hover:text-black'
                      : 'border border-black bg-white text-black hover:bg-black hover:text-white'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {action.label}
                </Link>
              )
            })}
          </div>

          <p className="mt-12 text-xs font-medium uppercase tracking-[0.15em] text-gray-600">
            Crafted for explorers • Brutal clarity · Glassy flow
          </p>
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
