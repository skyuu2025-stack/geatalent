"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, Check, ChevronRight, Activity, Lock } from "lucide-react";

export default function GeatalentLivePage() {
  return (
    <div className="bg-[#050505] text-white antialiased min-h-screen font-sans">
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-1 uppercase">
          GEATALENT<span className="text-[#004225] font-serif italic lowercase">.uk</span>
        </div>
        <button className="px-6 py-2 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#002366] transition-all">
          Get Started
        </button>
      </nav>

      <main className="pt-32 text-center">
        <section className="h-[70vh] flex flex-col items-center justify-center px-6">
            <h1 className="text-6xl md:text-[120px] font-medium tracking-tighter leading-[0.85] mb-12">
              BUILD YOUR <br />
              <span className="italic font-serif font-light text-zinc-400 text-5xl md:text-[100px]">GLOBAL TALENT</span>
            </h1>
            <p className="text-zinc-500 text-lg max-w-2xl mb-12">Strategic positioning for professionals entering the UK market.</p>
            <div className="flex gap-6">
              <button className="px-10 py-4 bg-[#004225] rounded-full text-[10px] font-bold uppercase tracking-widest">Start Now</button>
            </div>
        </section>
      </main>
    </div>
  );
}
