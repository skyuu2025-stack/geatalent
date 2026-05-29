"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock 
} from "lucide-react";
// 引入 Clerk 登录组件
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function GeatalentFinalPage() {
  return (
    <div className="bg-[#050505] text-white antialiased overflow-x-hidden min-h-screen font-sans">
      
      {/* 动态背景光晕 (赛车绿 & 皇室蓝点缀) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-[#002366]/5 blur-[140px] rounded-full" />
      </div>

      {/* 导航栏 Navbar */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-1 uppercase">
          GEATALENT<span className="text-[#004225] font-serif italic font-light lowercase">.uk</span>
        </div>
        
        {/* 桌面端菜单 */}
        <div className="hidden md:flex gap-12 items-center text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">
          <a href="#talent" className="hover:text-white transition-colors">Global Talent</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#intelligence" className="hover:text-white transition-colors">Intelligence</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        {/* 登录控制区 */}
        <div className="flex items-center gap-4">
          {/* 状态 A：未登录时显示 Connect 按钮 */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all duration-500 shadow-lg">
                Connect
              </button>
            </SignInButton>
          </SignedOut>

          {/* 状态 B：登录成功后显示用户头像 */}
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/" 
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9 border border-[#004225] hover:scale-110 transition-transform"
                }
              }}
            />
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
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500 text-zinc-400">London • Singapore • Global</span>
              <span className="w-8 h-[1px] bg-[#002366]" />
            </div>
            
            <h1 className="text-5xl md:text-[120px] font-bold tracking-tighter leading-[0.85] mb-12">
              BUILD YOUR <br />
              <span className="italic font-serif font-light text-zinc-300">GLOBAL TALENT</span>
            </h1>
            
            <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-light italic opacity-80">
              Strategic portfolio architecture, PR positioning, and AI intelligence for the world's most ambitious professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-14 py-5 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-[#002366] transition-all duration-1000 shadow-[0_0_50px_rgba(0,66,37,0.2)]">
                    Start Your Application
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <button className="px-14 py-5 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-[#002366] transition-all">
                  Go to Dashboard
                </button>
              </SignedIn>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors group">
                Success Case Studies <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 核心业务网格 */}
        <section id="talent" className="py-40 px-8 border-y border-white/5 bg-zinc-950/20">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-700 mb-24 text-center">Core Expertise</h2>
             <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 text-left">
                {[
                  { title: "Portfolio Audit", desc: "A 360° deep-dive into your career narrative to ensure endorsement readiness.", icon: <ShieldCheck /> },
                  { title: "Media Strategy", desc: "Securing strategic PR in global publications to establish industry authority.", icon: <Globe /> },
                  { title: "Visa Roadmap", desc: "Expert guidance through the UK Global Talent endorsement ecosystem.", icon: <Zap /> },
                ].map((s, i) => (
                  <div key={i} className="bg-[#050505] p-12 group hover:bg-[#004225]/5 transition-all duration-700">
                    <div className="text-zinc-700 group-hover:text-[#004225] transition-colors mb-10">{s.icon}</div>
                    <h3 className="text-2xl font-medium mb-6 tracking-tight group-hover:text-white transition-colors">{s.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* AI 监控看板预览 */}
        <section id="intelligence" className="py-40 px-8 text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Signals in <br />the Noise.</h2>
              <p className="text-zinc-500 text-lg mb-12 leading-relaxed max-w-md">
                Our proprietary AI monitoring engine tracks smart money movements and founder narratives 24/7 across the UK Web3 ecosystem.
              </p>
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#004225] hover:text-[#002366] transition-colors group">
                Explore Alpha Dashboard <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="relative bg-zinc-950/50 rounded-3xl p-10 overflow-hidden border border-white/5 backdrop-blur-xl">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800 uppercase">Live_Mode_v1.0</div>
              <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
                <Activity className="w-4 h-4 text-[#004225] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-bold">Live Data Stream</span>
              </div>
              <div className="space-y-6">
                {[
                  { wallet: "Whale_0x89...ENTRY", action: "BOUGHT $AGI-CORE", trend: "Now", color: "text-[#004225]" },
                  { wallet: "Founder_Alpha", action: "MONITORING NARRATIVE", trend: "High", color: "text-[#002366]" },
                  { wallet: "SmartMoney_7", action: "BOUGHT $SOL-AI", trend: "3m ago", color: "text-[#004225]" },
                ].map((log, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px] font-mono border-b border-white/5 pb-4 last:border-0">
                    <span className="text-zinc-600">{log.wallet}</span>
                    <span className="font-bold text-zinc-300 uppercase">{log.action}</span>
                    <span className={`font-bold ${log.color}`}>{log.trend}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 定价方案 Pricing */}
        <section id="pricing" className="py-40 px-8 border-t border-white/5 text-left">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-5xl font-serif italic mb-6">Invest in Excellence.</h2>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Transparent Access to the UK Frontier.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { name: "Basic Alpha", price: "£19", features: ["Telegram Feed", "Weekly Trend Analysis"] },
                  { name: "Intel Pro", price: "£49", features: ["Wallet Tracking", "AI Narrative Alerts", "Full Dashboard"], popular: true },
                  { name: "Strategic Premium", price: "£99", features: ["1-on-1 Consultation", "VIP Early Signals", "Full Analytics"] },
                ].map((plan, i) => (
                  <div key={i} className={`p-12 border ${plan.popular ? 'border-[#004225] bg-[#004225]/5' : 'border-white/5'} hover:border-[#002366] transition-all duration-700 flex flex-col justify-between`}>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-8">{plan.name}</h4>
                      <div className="text-5xl font-medium mb-12">{plan.price}<span className="text-xs text-zinc-700 font-normal"> / mo</span></div>
                      <ul className="space-y-4 mb-16">
                        {plan.features.map(f => (
                          <li key={f} className="text-[11px] text-zinc-400 flex items-center gap-3">
                            <Check className="w-3.5 h-3.5 text-[#004225]" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className={`w-full py-4 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${plan.popular ? 'bg-[#004225] text-white hover:bg-[#002366]' : 'border border-zinc-800 text-zinc-500 hover:text-white hover:border-white'}`}>
                      Access Now
                    </button>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>

      <footer className="py-24 border-t border-white/5 text-center">
        <div className="text-2xl font-bold tracking-tighter mb-8 uppercase">
          GEATALENT<span className="text-[#004225] font-serif italic lowercase font-light">.uk</span>
        </div>
        <p className="text-[8px] text-zinc-800 uppercase tracking-widest">
          © 2024 GEATALENT UK. Operating Globally from London.
        </p>
      </footer>
    </div>
  );
}
