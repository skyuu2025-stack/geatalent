"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, ShieldCheck, Layers, FileCheck, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PortfolioAuditPage() {
  const phases = [
    {
      title: "Phase 01: Evidence Diagnosis",
      desc: "我们对您过去 10 年的职业生涯进行深度扫描，挖掘被低估的获奖经历、媒体报道或行业贡献。",
      icon: <Search className="text-[#004225]" />
    },
    {
      title: "Phase 02: Narrative Refinement",
      desc: "将零散的证据串联成符合 Tech Nation 或 Arts Council 标准的“卓越人才”叙事逻辑。",
      icon: <Layers className="text-[#002366]" />
    },
    {
      title: "Phase 03: Gap Analysis",
      desc: "精准识别目前背景与背书标准之间的差距，并制定未来 3-6 个月的补齐计划。",
      icon: <ShieldCheck className="text-[#004225]" />
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#004225]">
      <nav className="p-8 flex justify-between items-center border-b border-white/5">
        <Link href="/" className="text-zinc-500 hover:text-white transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="text-xl font-bold tracking-[0.1em] uppercase">GEATALENT</div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#004225] font-serif italic text-lg mb-4 block">Precision & Narrative</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Portfolio Audit.</h1>
          
          <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed mb-24 font-light">
            <p className="mb-6">
              在申请英国全球人才签证时，最致命的错误不是证据不足，而是**叙事混乱**。
            </p>
            <p>
              我们的审计服务不仅是检查文档，更是对您的职业价值进行重新“定价”。我们会站在评审委员会（Review Panel）的角度，审视您的每一份推荐信和案例研究。
            </p>
          </div>

          {/* 审计流程 */}
          <div className="grid md:grid-cols-1 gap-8 mb-24">
            {phases.map((phase, i) => (
              <div key={i} className="bg-zinc-950 border border-white/5 p-10 rounded-3xl group hover:border-[#004225]/50 transition-all">
                <div className="mb-6">{phase.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{phase.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

          {/* 交付成果 */}
          <div className="border-t border-white/5 pt-24">
            <h2 className="text-3xl font-serif italic mb-12">What You Get:</h2>
            <ul className="space-y-6">
              {[
                "15+ 页的深度职业审计报告 (PDF)",
                "3 场 1对1 叙事打磨咨询",
                "核心推荐信 (LoR) 逻辑架构图",
                "符合背书机构口味的个人陈述 (Personal Statement) 修改意见"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-zinc-300 tracking-wide uppercase text-xs">
                  <CheckCircle className="w-5 h-5 text-[#004225]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-24 text-center">
             <Link href="/#pricing">
                <button className="px-12 py-5 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
                  Start Your Audit Now
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
