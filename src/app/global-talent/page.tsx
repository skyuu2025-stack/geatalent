"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function GlobalTalentDetail() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#004225]">
      {/* 极简导航 */}
      <nav className="p-8 flex justify-between items-center border-b border-white/5">
        <Link href="/" className="text-zinc-500 hover:text-white transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="text-xl font-bold tracking-[0.1em] uppercase">GEATALENT</div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[#004225] font-serif italic text-lg mb-4 block">The Pathway to Excellence</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Global Talent <br/>Visa Strategy.</h1>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-16 font-light">
            The UK Global Talent visa is the most prestigious route for leaders in Tech, Arts, and Research. 
            We provide the strategic narrative required to secure endorsement from Tech Nation and Arts Council England.
          </p>

          {/* 三大支柱 */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-4">
              <Shield className="text-[#004225] w-8 h-8" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Portfolio Audit</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We perform a 360° deep-dive into your 10+ years of career evidence, selecting only the artifacts that prove "Exceptional Talent".
              </p>
            </div>
            <div className="space-y-4">
              <Globe className="text-[#002366] w-8 h-8" />
              <h3 className="text-xl font-bold uppercase tracking-tight">PR Positioning</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We bridge the gap in your public profile by securing placements in authoritative global journals and media outlets.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/5 p-12 rounded-3xl mb-24">
            <h2 className="text-2xl font-serif italic mb-8">Service Inclusions:</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "Evidence Selection & Structuring",
                "Personal Statement Drafting",
                "Recommendation Letter Strategy",
                "Media Placement Audit",
                "Fast-track Endorsement Route",
                "Post-visa Career Positioning"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
                  <Check className="w-4 h-4 text-[#004225]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center border-t border-white/5 pt-24">
            <h3 className="text-3xl font-serif italic mb-8">Ready to start?</h3>
            <Link href="/#pricing">
              <button className="px-12 py-5 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#002366] transition-all">
                View Investment Plans
              </button>
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="py-20 text-center text-[9px] text-zinc-800 uppercase tracking-widest border-t border-white/5">
        © 2024 GEATALENT COPYRIGHT
      </footer>
    </div>
  );
}
