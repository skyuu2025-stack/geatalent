"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Shield, Zap, Globe, Star, Award } from "lucide-react";
import Link from "next/link";

export default function GlobalTalentDetail() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#004225]">
      <nav className="p-8 flex justify-between items-center border-b border-white/5">
        <Link href="/" className="text-zinc-500 hover:text-white transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="text-xl font-bold tracking-[0.1em] uppercase">GEATALENT</div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#004225] font-serif italic text-lg mb-4 block">The Strategic Outcome</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">UK Global Talent & <br/>US EB-1A Visa.</h1>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-16 font-light">
            我们不仅是签证咨询，我们是顶级人才的叙事架构师。通过**作品集重构、推荐信优化、媒体公关**以及**国际时装周/艺术展入驻**，我们为创意、AI 及 Web3 领域的精英打造无可争议的背书证据链路。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="p-10 bg-zinc-950 border border-white/5 rounded-3xl">
               <h3 className="text-[#004225] font-bold uppercase tracking-widest text-xs mb-6">UK Route</h3>
               <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Global Talent Visa</h4>
               <p className="text-zinc-500 text-sm leading-relaxed">针对科技、艺术、建筑领域的顶级背书，无需雇主担保，3-5年直接获得永居权。</p>
            </div>
            <div className="p-10 bg-zinc-950 border border-white/5 rounded-3xl">
               <h3 className="text-[#002366] font-bold uppercase tracking-widest text-xs mb-6">US Route</h3>
               <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">EB-1A Extraordinary</h4>
               <p className="text-zinc-500 text-sm leading-relaxed">美国第一优先移民类别。专为在科学、艺术、教育或商业领域拥有杰出能力的人士量身定制。</p>
            </div>
          </div>

          <div className="bg-[#004225]/5 border border-[#004225]/20 p-12 rounded-3xl mb-24">
            <h2 className="text-2xl font-serif italic mb-8">The Lifecycle Loop:</h2>
            <div className="space-y-6">
              {[
                { t: "Step 01: Audit", d: "深度挖掘您的获奖经历、评审经验及媒体报道证据。" },
                { t: "Step 02: Narrative", d: "撰写符合英美移民局审美的高端个人陈述与推荐信。" },
                { t: "Step 03: PR", d: "在主流国际媒体刊登您的深度报道，拉升谷歌搜索权重。" },
                { t: "Step 04: Exhibition", d: "对接伦敦、米兰、巴黎等时装周/艺术展资源，提供实锤现场证据。" },
                { t: "Step 05: Filing", d: "由资深策略团队协助完成背书申请及签证递交。" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 pb-6 border-b border-white/5 last:border-0">
                  <span className="text-[#004225] font-bold text-xs">{item.t}</span>
                  <p className="text-zinc-400 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/assessment">
              <button className="px-12 py-5 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
                Submit Initial Assessment
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
