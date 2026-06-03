"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001a33] to-[#002b1b] text-white font-sans p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-12 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-5xl font-serif italic mb-12">Privacy Policy.</h1>
        
        <div className="space-y-12 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Data Collection</h2>
            <p>We collect essential information to facilitate your membership, including email (via Clerk), transaction hashes for crypto payments, and professional data provided during assessments.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Data Use</h2>
            <p>Your data is used solely to provide bespoke consulting and to grant access to our AI-driven Web3 intelligence dashboard. We never sell your personal narrative to third parties.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Security</h2>
            <p>We utilize Clerk for industry-standard authentication and Stripe for secure fiat processing. Crypto transactions are natively secured by the Solana blockchain.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Third-Party Services</h2>
            <p>Our platform integrates with Vercel (hosting), Clerk (auth), and Stripe (payments). Each service maintains its own privacy compliance standards.</p>
          </section>
        </div>

        <p className="mt-24 text-white/20 text-[9px] uppercase tracking-widest">© 2024 GEATALENT PRIVACY PROTECTION</p>
      </div>
    </div>
  );
}
