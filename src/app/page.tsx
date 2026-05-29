"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Globe, Zap } from "lucide-react";

export default function GeatalentV2() {
  return (
    <div className="relative min-h-screen">
      
      {/* 增强背景光斑亮度 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#004225]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-[#002366]/15 blur-[120px] rounded-full" />
      </div>

      {/* 导航栏 - 解决手机端拥挤问题 */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
        <div className="text-xl md:text-2xl font-bold tracking-tighter uppercase text-white">
          GEATALENT
        </div>
        <div className="hidden lg:flex gap-10 items-center text-zinc-300 font-bold uppercase tracking-[0.3em] text-[10px]">
          <a href="#talent" className="hover:text-white transition-colors text-zinc-400">Global Talent</a>
          <a href="#pricing" className="hover:text-white transition-colors text-zinc-400">Pricing</a>
        </div>
        <button className="px-5 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all">
          Connect
        </button>
      </nav>

      <main className="relative z-10">
        
        {/* HERO - 核心：text-4xl (手机小字) 到 text-[110px] (电脑大字) */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-[#004225]" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300">
                London • Singapore • Global
              </span>
              <span className="w-6 h-[1px] bg-[#002366]" />
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-[110px] font-bold tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 text-white">
              BUILD YOUR <br />
              <span className="font-serif italic font-light text-zinc-300">GLOBAL TALENT</span>
            </h1>
            
            <p className="text-zinc-300 text-sm md:text-lg max-w-xl mx-auto mb-12 leading-relaxed px-4 opacity-80">
              Strategic positioning and portfolio architecture for high-tier professionals entering the UK market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(0,66,37,0.4)] transition-all">
                Start Consultation
              </button>
              <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-2 transition-all">
                Case Studies <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 业务网格 - 手机端会自动变成一列 */}
        <section id="talent" className="py-24 md:py-40 px-6 border-t border-white/10 bg-black/40">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {[
                  { title: "Portfolio Audit", desc: "Deep-dive career narrative and endorsement audit.", icon: <ShieldCheck className="text-[#004225]" /> },
                  { title: "Media Strategy", desc: "Strategic PR placement in global authoritative journals.", icon: <Globe className="text-[#004225]" /> },
                  { title: "Visa Roadmap", desc: "Expert guidance for the UK Global Talent ecosystem.", icon: <Zap className="text-[#004225]" /> },
                ].map((s, i) => (
                  <div key={i} className="bg-[#050505] p-10 md:p-16 hover:bg-[#0a0a0a] transition-all">
                    <div className="mb-8">{s.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white tracking-tight">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

      </main>

      <footer className="py-20 border-t border-white/10 text-center px-6">
        <div className="text-xl font-bold tracking-tighter mb-6 uppercase text-white">
          GEATALENT
        </div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em]">
          © 2024 GEATALENT UK. London Based.
        </p>
      </footer>
    </div>
  );
}
