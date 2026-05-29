"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock 
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function GeatalentFinalPage() {
  return (
    <div className="bg-[#050505] text-white antialiased overflow-x-hidden min-h-screen font-sans">
      
      {/* 动态背景光晕 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-[#002366]/5 blur-[140px] rounded-full" />
      </div>

      {/* 导航栏 - 已彻底去掉 .uk */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">
          GEATALENT
        </div>
        
        <div className="hidden md:flex gap-12 items-center text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">
          <a href="#talent" className="hover:text-white transition-colors">Global Talent</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#intelligence" className="hover:text-white transition-colors">Intelligence</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all duration-500">
                Connect
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="mb-10 flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-[#004225]" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">London • Singapore • Global</span>
              <span className="w-8 h-[1px] bg-[#002366]" />
            </div>
            
            <h1 className="text-5xl md:text-[120px] font-bold tracking-tighter leading-[0.85] mb-12">
              BUILD YOUR <br />
              <span className="italic font-serif font-light text-zinc-300">GLOBAL TALENT</span>
            </h1>
            
            <p className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto mb-16 leading-relaxed opacity-80">
              Strategic portfolio architecture and PR positioning for high-tier professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-14 py-5 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-[#002366] transition-all duration-1000 shadow-[0_0_50px_rgba(0,66,37,0.2)]">
                    Start Consultation
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <button className="px-14 py-5 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-[#002366] transition-all">
                  Go to Dashboard
                </button>
              </SignedIn>
            </div>
          </motion.div>
        </section>

        {/* 业务网格 */}
        <section id="talent" className="py-40 px-8 border-t border-white/5 bg-zinc-950/20">
          <div className="max-w-7xl mx-auto">
             <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 text-left">
                {[
                  { title: "Portfolio Audit", desc: "A 360° deep-dive into your career narrative.", icon: <ShieldCheck /> },
                  { title: "Media Strategy", desc: "Securing strategic PR in global publications.", icon: <Globe /> },
                  { title: "Visa Roadmap", desc: "Expert guidance for the UK Global Talent ecosystem.", icon: <Zap /> },
                ].map((s, i) => (
                  <div key={i} className="bg-[#050505] p-12 group hover:bg-[#004225]/5 transition-all duration-700">
                    <div className="text-zinc-700 group-hover:text-[#004225] transition-colors mb-10">{s.icon}</div>
                    <h3 className="text-2xl font-medium mb-6 tracking-tight text-white">{s.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      {/* 页脚 - 已彻底去掉 .uk */}
      <footer className="py-24 border-t border-white/5 text-center px-6">
        <div className="text-2xl font-bold tracking-[0.2em] mb-8 uppercase text-white">
          GEATALENT
        </div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em]">
          © 2024 GEATALENT UK. Based in London.
        </p>
      </footer>
    </div>
  );
}
