'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  href: string
  text: string
  active?: boolean
}

const NavItem = ({ href, text, active }: NavItemProps) => {
  return (
    <Button variant="ghost" asChild className={cn(active && 'text-primary font-medium')}>
      <Link href={href}>{text}</Link>
    </Button>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const pathname = usePathname()

  return (
    <header className="max-w-5xl mx-auto w-full py-6 px-4 md:px-6 border-b relative z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          Yehtet Aung
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex gap-2">
            <NavItem href="/" text="Home" active={pathname === '/'} />
            <NavItem href="/contact" text="Contact" active={pathname === '/contact'} />
          </nav>
          <ThemeToggle />
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0 z-50" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation slider */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-0 z-40 bg-background/95 backdrop-blur-sm shadow-lg border-b transform transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="container max-w-5xl mx-auto px-4 pt-24 pb-8 flex flex-col">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-4 h-8 w-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>

          <nav className="flex flex-col items-center gap-4 mt-4">
            <Button
              variant="ghost"
              asChild
              className="w-full justify-center text-lg py-5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="w-full justify-center text-lg py-5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <div className="mt-8">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
