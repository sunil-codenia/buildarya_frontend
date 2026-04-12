import React from 'react';

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Email',
    value: 'hello@buildarya.in',
    href: 'mailto:hello@buildarya.in',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Office',
    value: 'Pune, Maharashtra, India',
    href: null,
  },
];

const officeHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM IST' },
  { day: 'Saturday', time: '10:00 AM – 2:00 PM IST' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact details card */}
      <div className="rounded-3xl border border-border bg-bg-alt p-7">
        <h2 className="font-display text-xl font-semibold text-fg mb-6">Contact Details</h2>
        <div className="space-y-5">
          {contactDetails?.map((item) => (
            <div key={item?.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                {item?.icon}
              </div>
              <div>
                <p className="text-2xs uppercase tracking-widest font-bold text-fg-subtle mb-0.5">{item?.label}</p>
                {item?.href ? (
                  <a
                    href={item?.href}
                    className="text-sm font-medium text-fg hover:text-primary transition-colors"
                  >
                    {item?.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-fg">{item?.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Office hours card */}
      <div className="rounded-3xl border border-border bg-bg-alt p-7">
        <h2 className="font-display text-xl font-semibold text-fg mb-5">Office Hours</h2>
        <div className="space-y-3">
          {officeHours?.map((row) => (
            <div key={row?.day} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="text-sm text-fg-muted">{row?.day}</span>
              <span className="text-sm font-medium text-fg">{row?.time}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Demo note */}
      <div className="rounded-3xl bg-primary p-7 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="font-display text-lg font-semibold text-white mb-2">Free Demo Available</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            We offer a free 30-minute demo where we show you how Buildarya works and answer your questions.
          </p>
        </div>
      </div>
    </div>
  );
}