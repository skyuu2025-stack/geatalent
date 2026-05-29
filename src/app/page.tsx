
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
      
      {/* 动态背景光晕 - 提升了亮度以便看得更清楚 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#004225]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-[#002366]/15 blur-[120px] rounded-full" />
      </div>

      {/* 导航栏 Navbar - 纯净大写的 GEATALENT */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">
          GEATALENT
        </div>
        
        <div className="hidden lg:flex gap-12 items-center text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px]">
          <a href="#talent" className="hover:text-white transition-colors">Global Talent</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#intelligence" className="hover:text-white transition-colors">Intelligence</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all duration-500 shadow-lg">
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
        
        {/* HERO SECTION - 核心修改位置 */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* 更新后的地理定位标签 */}
            <div className="mb-10 flex items-center justify-center gap-4">
              <span className="w-6 md:w-8 h-[1px] bg-[#004225]" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold text-zinc-300">
                HONGKONG • VIETNAM • UK • US • GLOBAL
              </span>
              <span className="w-6 md:w-8 h-[1px] bg-[#002366]" />
            </div>
            
            {/* 优化后的标题字体：针对电脑和手机做了完美适配 */}
            <h1 className="text-4xl md:text-7xl lg:text-[110px] font-bold tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 text-white uppercase">
              Build Your <br />
              <span className="font-serif italic font-light text-zinc-400">Global Talent</span>
            </h1>
            
            <p className="text-zinc-300 text-sm md:text-lg max-w-xl mx-auto mb-12 leading-relaxed opacity-90 px-4">
              Strategic portfolio architecture and PR positioning for high-tier professionals entering the UK market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full sm:w-auto px-12 py-4 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(0,66,37,0.4)] transition-all">
                    Start Consultation
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <button className="w-full sm:w-auto px-12 py-4 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all">
                  Go to Dashboard
                </button>
              </SignedIn>
              <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-2 transition-all group">
                Case Studies <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 业务网格 - 提升了易读性和亮度 */}
        <section id="talent" className="py-24 md:py-40 px-6 border-t border-white/10 bg-black/40">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 text-left">
                {[
                  { title: "Portfolio Audit", desc: "Deep-dive career narrative and endorsement audit.", icon: <ShieldCheck className="text-[#004225]" /> },
                  { title: "Media Strategy", desc: "Strategic PR placement in global authoritative journals.", icon: <Globe className="text-[#004225]" /> },
                  { title: "Visa Roadmap", desc: "Expert guidance for the UK Global Talent ecosystem.", icon: <Zap className="text-[#004225]" /> },
                ].map((s, i) => (
                  <div key={i} className="bg-[#050505] p-10 md:p-16 hover:bg-[#0a0a0a] transition-all duration-700">
                    <div className="mb-10">{s.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-white">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      {/* 页脚 - 保持要求的版权格式 */}
      <footer className="py-20 border-t border-white/10 text-center px-6">
        <div className="text-xl font-bold tracking-[0.2em] mb-8 uppercase text-white">
          GEATALENT
        </div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-medium">
          © 2024 GEATALENT COPYRIGHT
        </p>
      </footer>
    </div>
  );
}
