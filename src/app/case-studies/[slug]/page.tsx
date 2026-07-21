"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Star, Globe, Zap, Quote } from "lucide-react";
import Link from "next/link";

export default function CaseStudyDetail() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-[#001a33] to-[#002b1b] text-white selection:bg-[#004225]">
      <nav className="relative z-10 p-8 flex justify-between items-center border-b border-white/5 bg-[#001a33]/20 backdrop-blur-md">
        <Link href="/case-studies" className="text-white/40 hover:text-white transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Benchmarks
        </Link>
        <div className="text-xl font-bold tracking-[0.1em] uppercase">GEATALENT</div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* 案例头部 */}
          <div className="mb-20">
            <span className="text-[#004225] font-serif italic text-xl mb-4 block">Case File: AI-2024-09</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">From SaaS Architect <br/>to US EB-1A.</h1>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-1 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/60">AI & Tech Sector</span>
              <span className="px-4 py-1 border border-[#004225]/30 bg-[#004225]/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#004225]">Visa Approved</span>
            </div>
          </div>

          {/* 核心挑战 */}
          <section className="mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-8 border-l-2 border-[#004225] pl-4">The Challenge</h2>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              该客户在 AI 领域拥有深厚的技术积淀，但缺乏“国际公认”的直接证据。其论文引用量处于行业中游，且未曾接受过主流媒体采访，直接申请 EB-1A 的风险极高。
            </p>
          </section>

          {/* GEATALENT 的闭环干预 */}
          <section className="mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-12 border-l-2 border-[#002366] pl-4">Strategic Intervention</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                   <h3 className="font-bold uppercase text-xs mb-4 text-[#004225]">Step 01: Narrative</h3>
                   <p className="text-zinc-400 text-sm">重新挖掘其在开源社区的领导力，将其定义为“关键商业环节的不可替代贡献者”。</p>
                </div>
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                   <h3 className="font-bold uppercase text-xs mb-4 text-[#002366]">Step 02: PR Hub</h3>
                   <p className="text-zinc-400 text-sm">在《TechCrunch》及《Wired》策划了两篇深度专访，确立其行业专家地位。</p>
                </div>
              </div>
              <div className="p-12 bg-white/[0.03] border border-[#004225]/20 rounded-[40px] relative overflow-hidden">
                <Quote className="absolute top-8 right-8 text-white/5 w-24 h-24" />
                <p className="text-xl font-serif italic text-zinc-200 relative z-10">
                  "GEATALENT 帮我把那些零散的 GitHub 提交记录和技术博客，串联成了一个符合美国移民局审美的‘天才叙事’。"
                </p>
                <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#004225]">— AI Founder (Based in Singapore)</p>
              </div>
            </div>
          </section>

          {/* 最终结果 */}
          <section className="border-t border-white/10 pt-24 text-center">
             <div className="inline-block p-4 bg-[#004225]/20 rounded-2xl mb-8">
                <Zap className="text-[#004225] w-8 h-8" />
             </div>
             <h2 className="text-4xl font-bold mb-6">Outcome: Approval in 12 Days.</h2>
             <p className="text-zinc-400 max-w-xl mx-auto mb-12">通过加急处理（Premium Processing），客户顺利拿到了美国 EB-1A 批准，现已成功登陆伦敦与纽约开展新业务。</p>
             <Link href="/assessment">
                <button className="px-12 py-5 bg-white text-[#001a33] font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all">
                  Evaluate My Success Odds
                </button>
             </Link>
          </section>
        </motion.div>
      </main>

      <footer className="py-20 text-center text-[9px] text-white/20 uppercase tracking-widest border-t border-white/5">
        © 2024 GEATALENT COPYRIGHT
      </footer>
    </div>
  );
}
