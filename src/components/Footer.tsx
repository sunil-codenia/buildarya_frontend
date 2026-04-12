import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AppLogo size={110} />
            </div>
            <p className="text-sm text-fg-muted max-w-xs leading-relaxed">
              Construction management software built for Indian contractors.
            </p>
          </div>

          {/* Link groups */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {/* Product */}
            <div className="flex flex-col gap-3">
              <Link href="/features" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">Features</Link>
              <Link href="/modules" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">Modules</Link>
              <Link href="/pricing" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">Pricing</Link>
            </div>
            {/* Company */}
            <div className="flex flex-col gap-3">
              <Link href="/homepage" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">About</Link>
              <Link href="/contact" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">Contact</Link>
              <a href="mailto:hello@buildarya.in" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">hello@buildarya.in</a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-subtle">© 2026 Buildarya. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-fg-subtle hover:text-fg-muted transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-fg-subtle hover:text-fg-muted transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}