'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'Features', href: '/features' },
  { label: 'Modules', href: '/modules' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center flex-shrink-0">
              <AppLogo size={240} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="px-4 py-2 text-sm font-medium text-fg-muted hover:text-fg hover:bg-bg-surface rounded-lg transition-all duration-200"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-border text-fg hover:bg-bg-surface transition-all duration-200"
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 btn-accent px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-accent"
              >
                Book Free Demo
              </Link>
              {/* Hamburger */}
              <button
                className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span
                  className={`w-5 h-0.5 bg-fg rounded-full transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-fg rounded-full transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-fg rounded-full transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-md flex flex-col pt-20 px-6"
          onClick={() => setMenuOpen(false)}
        >
          <nav className="flex flex-col gap-2">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="py-4 px-4 text-lg font-medium text-fg border-b border-border hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="mt-8 btn-accent text-center py-4 rounded-xl text-base font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Book Free Demo
          </Link>
        </div>
      )}
    </>
  );
}