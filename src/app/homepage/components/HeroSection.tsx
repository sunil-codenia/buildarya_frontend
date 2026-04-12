'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const badgeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // IntersectionObserver for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8 flex items-end overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">

        {/* Left: Content */}
        <div
          className="lg:col-span-5 flex flex-col justify-center pb-8 lg:pb-16 animate-on-scroll opacity-100"
          style={{ animation: 'animationIn 1s ease-out 0.1s both' }}>
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Built for India
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-fg mb-5">
            Manage Your<br />
            <span className="text-teal-gradient italic">Construction Work</span>
            <br />in One Place
          </h1>

          {/* Subtext */}
          <p className="text-base text-fg-muted leading-relaxed max-w-md mb-8 border-l-2 border-primary/30 pl-4">
            Track sites, expenses, materials, and documents with a simple and reliable system designed for construction businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/contact"
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold shadow-accent hover:shadow-lg transition-all duration-200">
              
              Book Free Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border bg-bg-alt text-fg hover:border-primary/40 hover:bg-primary/5 transition-all duration-200">
              
              View Features
            </Link>
          </div>

          {/* Mini stats removed */}
        </div>

        {/* Right: Arch image + dashboard */}
        <div
          className="lg:col-span-7 h-[55vh] sm:h-[65vh] lg:h-[88vh] relative"
          style={{ animation: 'animationIn 1.1s ease-out 0.3s both' }}>
          
          {/* Rotating badge */}
          <div className="absolute top-8 left-4 z-20 pointer-events-none hidden md:block">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg ref={badgeRef} className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
                <path
                  id="heroBadgePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent" />
                
                <text fontSize="9.5" fontFamily="DM Sans" fontWeight="600" letterSpacing="2.2px" fill="#0B6E6E">
                  <textPath href="#heroBadgePath" startOffset="0%">
                    CONSTRUCTION · INDIA · BUILDARYA ·
                  </textPath>
                </text>
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="absolute text-primary">
                <path d="M3 21h18M3 7v1M21 7v1M9 21V7M15 21V7M3 7h18M3 3h18v4H3V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Arch container */}
          <div className="absolute inset-0 rounded-t-[10rem] rounded-b-2xl overflow-hidden shadow-2xl border border-border/50">
            <AppImage
              src="/assets/images/AB8C90EF-A174-4354-ADAA-7D90CD82C1E4-1775986258792.jpg"
              alt="Construction site with workers, building structure, scaffolding and materials under active development"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw" />
            
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-fg/60 via-fg/10 to-transparent" />
          </div>

          {/* Floating glassmorphism card */}
          <div className="absolute bottom-8 right-4 md:right-8 z-20 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white max-w-[180px] shadow-xl hidden sm:block">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold">Live Tracking</span>
            </div>
            <p className="text-[11px] leading-relaxed opacity-80">
              3 sites active right now across Mumbai, Pune, and Nagpur.
            </p>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50">
        <span className="text-2xs uppercase tracking-widest text-fg-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}