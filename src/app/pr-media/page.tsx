"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Newspaper, Award, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function PRMediaPage() {
  const capabilities = [
    { title: "Top-tier Placement", desc: "在 Wired, Forbes, TechCrunch 或行业顶尖杂志（如 Vogue, ArchDaily）中策划深度专访。" },
    { title: "Authority Building", desc: "通过受邀作为行业评审、演讲嘉宾或专家评论员，快速建立“国际权威”身份。" },
    { title: "SEO Optimization", desc: "确保当内政部官员在 Google 搜索您的名字时，第一页全是对您有利的正面、权威报道。" }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans">
      <nav className="p-8 flex justify-between items-center border-b border-white/5">
        <Link href="/" className="text-zinc-500 hover:text-white transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="text-xl font-bold tracking-[0.1em] uppercase text-white">GEATALENT</div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#002366] font-serif italic text-lg mb-4 block">Authority & Influence</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">PR & Media.</h1>
          
          <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed mb-24 font-light italic">
            "We don't just tell them who you are. We make the world say it for you."
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 mb-24">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-[#050505] p-12 hover:bg-zinc-950 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter flex items-center gap-3">
                  <Star className="w-4 h-4 text-[#002366]" /> {cap.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* 媒体墙模拟 */}
          <div className="bg-[#002366]/5 border border-[#002366]/20 p-12 rounded-3xl mb-24">
            <h2 className="text-xl font-serif mb-8 text-center uppercase tracking-widest text-[#002366]">Target Network</h2>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
              <span className="font-bold text-2xl tracking-tighter">WIRED</span>
              <span className="font-bold text-2xl tracking-tighter">VOGUE</span>
              <span className="font-bold text-2xl tracking-tighter">FORBES</span>
              <span className="font-bold text-2xl tracking-tighter">ADWEEK</span>
            </div>
          </div>

          <div className="text-center">
             <h3 className="text-2xl font-serif italic mb-8">Ready to build your authority?</h3>
             <Link href="/#pricing">
                <button className="px-12 py-5 bg-[#002366] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
                  Consult PR Strategy
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
