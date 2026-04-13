import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Terms & Conditions — Buildarya',
    description: 'These terms and conditions govern your use of the Buildarya platform and services.',
};

export default function TermsAndConditions() {
    return (
        <main className="relative min-h-screen bg-bg overflow-x-hidden">
            {/* Grid overlay */}
            <div className="grid-overlay hidden lg:flex" aria-hidden="true">
                <div className="grid-inner">
                    <div className="grid-line-v" />
                    <div className="grid-line-v" />
                    <div className="grid-line-v" />
                    <div className="grid-line-v" />
                </div>
            </div>

            <Header />

            {/* Hero Header */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Abstract background element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 mb-8 animate-on-scroll opacity-100" style={{ animation: 'fadeIn 0.6s ease-out forwards' }}>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                            Legal Documentation
                        </span>
                        <div className="h-px w-8 bg-border" />
                        <span className="text-fg-subtle text-xs font-medium">Effective Date: April 13, 2026</span>
                    </div>

                    <h1 className="font-display text-5xl sm:text-6xl text-fg mb-8 leading-[1.1] tracking-tight">
                        Terms & <span className="text-teal-gradient italic">Conditions</span>
                    </h1>

                    <p className="text-xl text-fg-muted max-w-2xl leading-relaxed border-l-2 border-primary/20 pl-6">
                        Please read these terms carefully. They define the legal agreement between you and Buildarya regarding the use of our platform.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-alt/50 backdrop-blur-sm border-y border-border">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-20">

                        {/* 1. Introduction */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">01</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Introduction</h2>
                                    <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                                        <p>
                                            These Terms & Conditions (“Terms”) govern the access to and use of the BuildArya platform, including its web portal and mobile application (collectively, the “Platform”).
                                        </p>
                                        <p>
                                            BuildArya (“Company”, “we”, “our”, “us”) provides a cloud-based ERP and AI-powered platform designed for construction and infrastructure businesses.
                                        </p>
                                        <p>
                                            By accessing or using the Platform, you (“User”, “Customer”, “Company”) agree to be legally bound by these Terms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 2. Legal Compliance */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">02</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Legal Compliance</h2>
                                    <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                                        <p>
                                            The Platform operates in compliance with applicable Indian laws, including:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 space-y-2">
                                            <li>Information Technology Act, 2000</li>
                                            <li>Digital Personal Data Protection Act, 2023</li>
                                        </ul>
                                        <p>
                                            Users agree to comply with all applicable laws while using the Platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 3. Eligibility */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">03</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Eligibility</h2>
                                    <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Users must be at least 18 years of age</li>
                                            <li>If accessing on behalf of an organization, the User represents that they have authority to bind such entity</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 4. Services Overview */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">04</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Services Overview</h2>
                                    <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                                        <p>BuildArya provides:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>ERP modules for construction management (projects, finance, HR, inventory, etc.)</li>
                                            <li>AI-powered insights and automation</li>
                                            <li>Web and mobile-based access</li>
                                            <li>Subscription-based services</li>
                                        </ul>
                                        <p>The scope of services may evolve over time.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 5. Multi-Company Licensing */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">05</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Multi-Company Licensing</h2>
                                    <div className="relative p-8 rounded-3xl bg-primary/5 border border-primary/10 mb-6">
                                        <p className="text-fg-muted text-lg leading-relaxed">
                                            BuildArya operates as a multi-tenant SaaS platform where strict data segregation is enforced between different companies. Cross-company access is prohibited unless explicitly authorized.
                                        </p>
                                    </div>
                                    <div className="text-fg-muted leading-relaxed space-y-4">
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Each subscribing company is provided a separate account environment.</li>
                                            <li>Access to modules and features is governed by the selected subscription plan.</li>
                                            <li>Company administrators may assign roles and permissions to users.</li>
                                        </ul>
                                        <p className="font-bold text-fg">Any attempt to bypass access controls is a material breach of these Terms.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 6. User Accounts */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">06</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">User Responsibilities</h2>
                                    <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Provide accurate and complete information</li>
                                            <li>Maintain confidentiality of login credentials</li>
                                            <li>Be responsible for all activities under their account</li>
                                        </ul>
                                        <p>Users must immediately notify BuildArya of any unauthorized access.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 7. Payments */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">07</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Subscription & Payments</h2>
                                    <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Services are provided on a subscription or license basis.</li>
                                            <li>Fees are payable as per agreed plans.</li>
                                            <li>Payments are generally non-refundable unless otherwise agreed.</li>
                                            <li>Failure to pay may result in suspension or termination.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 8. Acceptable Use */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">08</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Acceptable Use Policy</h2>
                                    <div className="bg-bg p-8 rounded-3xl border border-border">
                                        <p className="font-bold text-fg mb-4">Users shall NOT:</p>
                                        <ul className="list-disc pl-5 text-fg-muted space-y-2">
                                            <li>Use the Platform for unlawful or fraudulent purposes</li>
                                            <li>Attempt unauthorized access to systems or data</li>
                                            <li>Upload malware, harmful code, or disruptive content</li>
                                            <li>Interfere with platform functionality or security</li>
                                            <li>Misuse data belonging to other users or entities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 9. Data Ownership */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">09</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Data Ownership</h2>
                                    <div className="text-fg-muted leading-relaxed space-y-4 text-lg">
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Customers retain full ownership of their data.</li>
                                            <li>BuildArya acts as a data processor on behalf of the customer.</li>
                                            <li>Data is processed solely for providing and improving services.</li>
                                        </ul>
                                        <p>BuildArya does not claim ownership over customer business data.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* 10-11 IP and Security */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">10</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Intellectual Property</h2>
                                    <p className="text-fg-muted leading-relaxed text-lg">
                                        All software, platform architecture, AI models, and branding are the exclusive property of BuildArya. Users shall not copy, modify, or reverse engineer the Platform.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* 15. Liability */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">11</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Limitation of Liability</h2>
                                    <p className="text-fg-muted leading-relaxed text-lg">
                                        BuildArya shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed the fees paid by the customer in the preceding period.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* 21. Governing Law */}
                        <article className="group">
                            <div className="flex items-start gap-6">
                                <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 pt-1">12</span>
                                <div>
                                    <h2 className="font-display text-2xl text-fg mb-6 group-hover:translate-x-1 transition-transform inline-block">Governing Law</h2>
                                    <p className="text-fg-muted leading-relaxed text-lg">
                                        These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of competent courts in India.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Disclaimer */}
                        <div className="bg-fg rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
                            <h2 className="font-display text-3xl mb-6 relative z-10">Disclaimer</h2>
                            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed relative z-10">
                                BuildArya is a technology platform only and does not provide legal, financial, or engineering consultancy. Users are solely responsible for decisions made using the Platform.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
