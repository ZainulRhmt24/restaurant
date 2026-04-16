'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md py-4 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-white">
          <Link href="/" className={`flex items-center gap-3 text-2xl font-serif tracking-widest transition-colors ${isScrolled ? 'text-foreground' : 'text-white/90 drop-shadow-md'}`}>
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Elegance Logo"
                fill
                className="object-contain"
              />
            </div>
            ELEGANCE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            <Link
              href="/"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground/80' : 'text-white/80'}`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground/80' : 'text-white/80'}`}
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground/80' : 'text-white/80'}`}
            >
              Reservations
            </Link>
            <Link
              href="/contact"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground/80' : 'text-white/80'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col items-center space-y-6 animate-in slide-in-from-top-4 duration-300 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary text-sm uppercase tracking-[0.2em] w-full py-2 border-b border-border/50"
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary text-sm uppercase tracking-[0.2em] w-full py-2 border-b border-border/50"
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary text-sm uppercase tracking-[0.2em] w-full py-2 border-b border-border/50"
            >
              Reservations
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary text-sm uppercase tracking-[0.2em] w-full py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
