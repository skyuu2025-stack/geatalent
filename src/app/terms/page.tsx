"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001a33] to-[#002b1b] text-white font-sans p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-12 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-5xl font-serif italic mb-12">Terms of Service.</h1>
        
        <div className="space-y-12 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">01. Acceptance of Terms</h2>
            <p>By accessing GEATALENT.UK, you agree to be bound by these Terms of Service. Our services are exclusively for high-tier professionals seeking strategic career positioning.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">02. Description of Service</h2>
            <p>GEATALENT provides strategic portfolio auditing, recommendation letter drafting, PR placement, and visa pathway guidance for UK Global Talent and US EB-1A routes. We are a consultancy, not a law firm.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">03. Fees & No-Refund Policy</h2>
            <p>Due to the bespoke nature of our digital intelligence and consulting services, all payments (including Stripe and USDC transfers) are final and non-refundable once the initial career diagnostic has commenced.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">04. Limitation of Liability</h2>
            <p>While GEATALENT boasts a high success rate, we do not guarantee visa approval. Final decisions are solely at the discretion of the UK Home Office or US USCIS.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">05. Intellectual Property</h2>
            <p>All narrative structures and strategic methodologies developed by GEATALENT remain the intellectual property of GEATALENT until full project completion.</p>
          </section>
        </div>

        <p className="mt-24 text-white/20 text-[9px] uppercase tracking-widest">Last updated: May 2024</p>
      </div>
    </div>
  );
}
