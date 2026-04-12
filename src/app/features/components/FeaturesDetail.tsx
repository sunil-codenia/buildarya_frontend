'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const featuresData = [
{
  id: 'expense',
  title: 'Expense Management',
  tag: 'Finance',
  desc: 'Track and manage daily site expenses in one place. Record cash payments, vendor bills, and labour costs without losing track.',
  details: [
  'Log daily cash and card expenses per site',
  'Categorize by type — labour, material, transport, miscellaneous',
  'Attach receipts and notes to each expense entry',
  'View expense summaries by date or site',
  'Track who recorded each entry'],

  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  imageAlt: 'Clean financial dashboard with expense charts on bright white background, well-lit modern office environment',
  accent: 'primary'
},
{
  id: 'material',
  title: 'Material Tracking',
  tag: 'Inventory',
  desc: 'Monitor purchase and usage of materials across your construction sites. Know exactly what was ordered, received, and consumed.',
  details: [
  'Record material purchase orders and receipts',
  'Track stock levels at each site',
  'Log material consumption against work done',
  'View purchase history per vendor',
  'Export material records for review'],

  image: "https://images.unsplash.com/photo-1581444957407-470e1264856f",
  imageAlt: 'Construction materials stacked on site in bright daylight, organized cement bags and steel rods, clear sky background',
  accent: 'accent'
},
{
  id: 'site',
  title: 'Site & Team Management',
  tag: 'Operations',
  desc: 'Manage multiple construction sites and your workforce from a single dashboard. Keep each site\'s data separate and organized.',
  details: [
  'Create and manage multiple site profiles',
  'Add team members and assign roles',
  'Control access — who sees which site',
  'View all site activity from one dashboard',
  'Keep contractor and subcontractor records'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1610c55e9-1764720226721.png",
  imageAlt: 'Construction team meeting outdoors in bright daylight, workers with hard hats reviewing plans, clear natural light',
  accent: 'primary'
},
{
  id: 'docs',
  title: 'Document Management',
  tag: 'Documents',
  desc: 'Store and organize project documents for easy access. Keep drawings, contracts, approvals, and site photos in one place.',
  details: [
  'Upload and attach documents to each site',
  'Organize by document type or date',
  'Access documents from any device',
  'Share specific files with team members',
  'Keep approval and compliance records organized'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1760a238a-1772690320969.png",
  imageAlt: 'Organized office desk with documents and blueprints, bright airy workspace, natural daylight, clean and minimal',
  accent: 'accent'
},
{
  id: 'org',
  title: 'Smart Organization',
  tag: 'System',
  desc: 'The system helps you structure your data so you can find what you need quickly and keep records consistent across your team.',
  details: [
  'Consistent data entry format across the team',
  'Search and filter across sites and records',
  'Organized view by date, site, or category',
  'No data gets lost or duplicated',
  'Easy to review records during audits'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10b31d26e-1767257076418.png",
  imageAlt: 'Clean organized data dashboard on laptop screen, bright office setting, white desk, modern minimal workspace',
  accent: 'primary'
}];


export default function FeaturesDetail() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fd-animate')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {featuresData?.map((feature, i) =>
        <div
          key={feature?.id}
          className={`fd-animate grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-100 ${
          i % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`
          }
          style={{ animation: `animationIn 0.8s ease-out 0.1s both` }}>
          
            {/* Text */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className={`text-2xs uppercase tracking-widest font-bold mb-3 block ${
              feature?.accent === 'accent' ? 'text-accent-dark' : 'text-primary'}`
              }>
                  {feature?.tag}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-fg mb-4 leading-tight">
                  {feature?.title}
                </h2>
                <p className="text-base text-fg-muted leading-relaxed mb-8 border-l-2 border-primary/25 pl-4">
                  {feature?.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {feature?.details?.map((d) =>
                <li key={d} className="flex items-start gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`mt-0.5 flex-shrink-0 ${feature?.accent === 'accent' ? 'text-accent-dark' : 'text-primary'}`}>
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-fg-muted">{d}</span>
                    </li>
                )}
                </ul>
              </div>
              <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors w-fit">
              
                Book a Demo to See This
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>

            {/* Image */}
            <div className="image-zoom rounded-3xl overflow-hidden border border-border shadow-card aspect-[4/3] bg-bg-surface">
              <img
              src={feature?.image}
              alt={feature?.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy" />
            
            </div>
          </div>
        )}
      </div>
    </section>);

}