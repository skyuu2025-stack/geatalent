"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Shield, Zap, Globe, Star, Award, Building2, Binary } from "lucide-react";
import Link from "next/link";

export default function VisaPathwaysDetail() {
  return (
    <div className="bg-gradient-to-br from-[#001a33] to-[#002b1b] text-white min-h-screen font-sans selection:bg-[#004225]">
      <nav className="p-8 flex justify-between items-center border-b border-white/5">
        <Link href="/" className="text-white/40 hover:text-white transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Intelligence
        </Link>
        <div className="text-xl font-bold tracking-[0.1em] uppercase">GEATALENT</div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[#004225] font-serif italic text-lg mb-4 block">Endorsement & Migration</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 italic">UK & US <br/>Extraordinary Ability.</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="p-10 bg-white/[0.03] border border-white/10 rounded-3xl">
               <h3 className="text-[#004225] font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">UK Route</h3>
               <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Global Talent Visa</h4>
               <ul className="text-zinc-400 text-sm space-y-4 font-light">
                 <li className="flex gap-2"><Check className="w-4 h-4 text-[#004225]"/> Digital Technology (Tech Nation)</li>
                 <li className="flex gap-2"><Check className="w-4 h-4 text-[#004225]"/> Arts & Culture (Arts Council)</li>
                 <li className="flex gap-2"><Check className="w-4 h-4 text-[#004225]"/> Science & Research (Royal Academy)</li>
               </ul>
            </div>
            <div className="p-10 bg-white/[0.03] border border-white/10 rounded-3xl">
               <h3 className="text-[#002366] font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">US Route</h3>
               <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">EB-1A & NIW</h4>
               <ul className="text-zinc-400 text-sm space-y-4 font-light">
                 <li className="flex gap-2"><Check className="w-4 h-4 text-[#002366]"/> EB-1A: Extraordinary Ability</li>
                 <li className="flex gap-2"><Check className="w-4 h-4 text-[#002366]"/> NIW: National Interest Waiver</li>
                 <li className="flex gap-2"><Check className="w-4 h-4 text-[#002366]"/> Employment-Based First Preference</li>
               </ul>
            </div>
          </div>

          {/* 重点体现领域 */}
          <div className="space-y-24 mb-24">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <Binary className="text-[#004225] w-8 h-8" />
                <h2 className="text-3xl font-bold uppercase tracking-tight">01. AI & Technology</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed font-light mb-6">针对 AI 算法专家、Web3 架构师和高增长科技创始人。我们协助您整理开源贡献、专利引证及关键商业角色证据，满足 Tech Nation 的硬核审计。</p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <Palette className="text-[#002366] w-8 h-8" />
                <h2 className="text-3xl font-bold uppercase tracking-tight">02. Fine Art & Visual Culture</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed font-light mb-6">服务于画家、策展人及多媒体艺术家。我们利用伦敦、巴黎及纽约的艺术展览资源，为您建立无可置疑的“国际公认艺术成就”证据链路。</p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <Star className="text-white w-8 h-8" />
                <h2 className="text-3xl font-bold uppercase tracking-tight">03. High Fashion & Architecture</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed font-light mb-6">时装设计师与建筑师的精英通道。通过四大时装周资源及顶尖建筑刊物的公关植入，协助您完成从行业资深人士到“杰出人才”的叙事转变。</p>
            </section>
          </div>

          <div className="bg-[#004225]/10 border border-[#004225]/20 p-12 rounded-[40px] text-center mb-24">
             <h3 className="text-2xl font-serif italic mb-6">Integrated Success.</h3>
             <p className="text-zinc-300 text-sm mb-10 leading-relaxed">无论您是在实验室、画廊还是数字工坊，我们的闭环服务都涵盖了从最初的背景审计到最终签证获批的每一个节点。</p>
             <Link href="/assessment">
                <button className="px-12 py-5 bg-white text-[#002b1b] font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all">Submit Evaluation</button>
             </Link>
          </div>
        </motion.div>
      </main>

      <footer className="py-20 text-center text-[9px] text-white/20 uppercase tracking-widest border-t border-white/5">
        © 2024 GEATALENT COPYRIGHT
      </footer>
    </div>
  );
}
