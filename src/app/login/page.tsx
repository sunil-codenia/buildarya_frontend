'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    companyId: '',
    userId: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration to be added later
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Top bar */}
      <div className="w-full px-6 py-5 flex items-center justify-between border-b border-border bg-bg-alt/60 backdrop-blur-sm">
        <Link href="/homepage" className="flex items-center">
          <AppLogo size={180} />
        </Link>
        <Link
          href="/homepage"
          className="text-sm font-medium text-fg-muted hover:text-fg transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-bg-alt border border-border rounded-2xl shadow-soft overflow-hidden">
            {/* Card header */}
            <div className="px-8 pt-8 pb-6 border-b border-border">
              <h1 className="font-display text-2xl font-semibold text-fg leading-tight">
                Welcome back
              </h1>
              <p className="mt-1.5 text-sm text-fg-muted">
                Sign in to your BuildArya account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
              {/* Company ID */}
              <div className="space-y-1.5">
                <label
                  htmlFor="companyId"
                  className="block text-sm font-medium text-fg"
                >
                  Company ID
                </label>
                <input
                  id="companyId"
                  name="companyId"
                  type="text"
                  autoComplete="organization"
                  value={formData.companyId}
                  onChange={handleChange}
                  placeholder="Enter your company ID"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg placeholder:text-fg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>

              {/* User ID */}
              <div className="space-y-1.5">
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium text-fg"
                >
                  User ID
                </label>
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  autoComplete="username"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="Enter your user ID"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg placeholder:text-fg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-fg"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pr-11 rounded-xl border border-border bg-bg text-fg placeholder:text-fg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-fg-muted hover:text-fg transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-accent py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-accent hover:opacity-90"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-fg-muted">
            Need help?{' '}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
