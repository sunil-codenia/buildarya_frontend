'use client';
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point: connect to your CRM or email service here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-display text-2xl text-fg font-semibold">We received your message</h3>
        <p className="text-sm text-fg-muted leading-relaxed max-w-sm">
          Thank you for reaching out. Our team will contact you within 1 business day to schedule your demo.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-bg-alt p-8">
      <h2 className="font-display text-2xl text-fg font-semibold mb-2">Send us a message</h2>
      <p className="text-sm text-fg-muted mb-7">
        Fill in the form below and we will get back to you within 1 business day.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-fg mb-1.5">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Rajesh Sharma"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-fg mb-1.5">
              Company / Business Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Sharma Constructions"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-fg mb-1.5">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="rajesh@example.com"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-fg mb-1.5">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-fg mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your business and what you need help with..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="btn-accent w-full py-3.5 rounded-xl text-sm font-semibold shadow-accent hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          Send Message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
    </div>
  );
}