"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock, Coins, Copy, X as CloseIcon,
  Twitter, Youtube, Instagram, MessageCircle, Send, Palette, Sparkles, Binary, Building2, Microscope
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function GeatalentGlobalTalentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Welcome. How can I assist with your UK Global Talent, US EB-1A, or NIW journey?' }]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const MEETING_LINK = "https://calendly.com/skyuu2025"; 
  const EMAIL_ADDRESS = "skyuu2025@gmail.com"; 
  const walletAddress = "BQeaNnGCRtBnFye7ynSGhFtgzUgUjiCo4QmAKNbgqWh1";

  const socials = [
    { name: "X", icon: <Twitter className="w-4 h-4" />, href: "https://x.com/GEATalent" },
    { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/@gea_talent?si=0ipqOP-VayiFhymp" },
    { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/geatalent?igsh=aWtncTB4azMxM2Qy&utm_source=qr" },
    { name: "TikTok", icon: <TikTokIcon className="w-4 h-4" />, href: "https://www.tiktok.com/@geatalent?_r=1&_t=ZS-96nKO9SfUgO" },
  ];

  const corePillars = [
    { title: "AI & Technology", icon: <Binary className="w-8 h-8" />, desc: "Focusing on AI Founders, SaaS Architects, and Machine Learning Researchers for Tech Nation (UK) & NIW (US).", color: "text-[#004225]" },
    { title: "Fine Art & Culture", icon: <Palette className="w-8 h-8" />, desc: "Positioning Painters, Curators, and Sculptors for Arts Council England & US Extraordinary Ability routes.", color: "text-[#002366]" },
    { title: "Fashion & Design", icon: <Sparkles className="w-8 h-8" />, desc: "Strategic credentials for Designers and Creative Directors entering the global fashion circuit.", color: "text-white" }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-[#002b1b]">
      
      {/* 沉浸式杂志背景 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#001a33] to-[#002b1b]" />
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#001a33]/40 backdrop-blur-xl border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">GEATALENT</div>
        <div className="hidden lg:flex gap-10 items-center text-white/40 font-bold uppercase tracking-[0.4em] text-[10px]">
          <Link href="/global-talent" className="hover:text-white transition-colors">Visa Matrix</Link>
          <Link href="/portfolio-audit" className="hover:text-white transition-colors">Strategy</Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">Success</Link>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <SignedOut><SignInButton mode="modal"><button className="px-6 py-2 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all">Connect</button></SignInButton></SignedOut>
          <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="mb-10 flex items-center justify-center gap-4 text-white/40 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
              <span className="w-12 h-[1px] bg-white/20" />
              UK GLOBAL TALENT • US EB-1A • US NIW
              <span className="w-12 h-[1px] bg-white/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-bold tracking-tighter leading-[0.9] mb-12 text-white uppercase">
              ARCHITECTING <br />
              <span className="font-serif italic font-light text-zinc-300">EXCELLENCE.</span>
            </h1>
            <p className="text-white/80 text-sm md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed font-light italic">
              A bespoke strategic agency for high-tier professionals in <br className="hidden md:block" />
              <strong>AI & Tech</strong>, <strong>Fine Arts</strong>, and <strong>Luxury Design</strong> seeking permanent residency in the UK & US.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/assessment" className="px-14 py-5 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all duration-700 shadow-2xl">Start Evaluation</Link>
              <Link href="/global-talent" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2 transition-all">Explore Pathways <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>
        </section>

        {/* --- THE THREE PILLARS (AI, ART, FASHION) --- */}
        <section className="py-40 px-6 border-y border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto text-left">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30 mb-24 text-center">Primary Sectors of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {corePillars.map((pillar, i) => (
                <div key={i} className="group p-12 bg-white/[0.03] border border-white/5 rounded-[40px] hover:bg-white hover:text-black transition-all duration-700">
                  <div className={`mb-10 ${pillar.color} group-hover:text-black transition-colors`}>{pillar.icon}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">{pillar.title}</h3>
                  <p className="text-white/40 group-hover:text-black/60 text-sm leading-relaxed mb-10">{pillar.desc}</p>
                  <div className="pt-6 border-t border-white/10 group-hover:border-black/10 flex items-center justify-between">
                     <span className="text-[10px] font-bold uppercase tracking-widest">Case Files</span>
                     <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECONDARY SECTORS TICKER (展示全行业覆盖) --- */}
        <section className="py-20 bg-black/20 border-b border-white/5 overflow-hidden whitespace-nowrap">
           <div className="flex animate-marquee gap-20">
              {["ARCHITECTURE", "DIGITAL MEDIA", "SCIENCE & RESEARCH", "ENGINEERING", "BUSINESS LEADERSHIP", "SPORTS EXCELLENCE", "MUSIC & PERFORMANCE"].map(s => (
                <span key={s} className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{s}</span>
              ))}
              {/* 重复一遍以实现无缝滚动 */}
              {["ARCHITECTURE", "DIGITAL MEDIA", "SCIENCE & RESEARCH", "ENGINEERING", "BUSINESS LEADERSHIP", "SPORTS EXCELLENCE", "MUSIC & PERFORMANCE"].map(s => (
                <span key={s+"2"} className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">{s}</span>
              ))}
           </div>
        </section>

        {/* --- 业务闭环可视化 --- */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30 mb-24 text-center">The Integrated Service Loop</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
              {[
                { title: "Audit", desc: "证据完整度与国家利益映射" },
                { title: "Narrative", desc: "EB1A/GT 申请人叙事重构" },
                { title: "PR Hub", desc: "全球主流媒体影响力构建" },
                { title: "Credentials", desc: "时装周/顶级展/行业委员会入驻" },
                { title: "Success", desc: "全套案卷封装与递交策略" }
              ].map((item, i) => (
                <div key={i} className="bg-[#050505] p-10 hover:bg-[#004225] transition-all duration-700 group cursor-default text-left">
                  <div className="text-[10px] font-mono text-zinc-700 group-hover:text-white/60 mb-6">0{i+1}.</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-white">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INITIAL ANALYSIS FORM --- */}
        <section id="assessment" className="py-40 px-6 border-t border-white/10 bg-[#001a33]/20">
          <div className="max-w-2xl mx-auto text-left">
            <div className="mb-16">
              <span className="text-[#004225] font-serif italic text-lg mb-4 block">Eligibility Check</span>
              <h1 className="text-5xl font-bold tracking-tight mb-6 text-white uppercase">Start <br/>Analysis.</h1>
              <p className="text-white/60 text-sm leading-relaxed">提交您的初步意向，我们的资深策略师将为您进行英美双重路径匹配。</p>
            </div>
            <form className="space-y-8">
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white transition-all" placeholder="Full Name" />
              <select className="w-full bg-[#001a33] border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white/70 appearance-none">
                <option>AI & Digital Technology</option>
                <option>Fine Art & Visual Culture</option>
                <option>Fashion & Design</option>
                <option>Science & Engineering</option>
                <option>Architecture & Sustainability</option>
              </select>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white" placeholder="Career Narrative (e.g. Major Awards, Citations, Media Coverage)..." />
              <button type="button" onClick={() => setIsSubmitted(true)} className="w-full py-5 bg-[#004225] text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all duration-700 shadow-2xl">Submit Initial Assessment</button>
            </form>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="py-24 border-t border-white/5 text-center px-6">
        <div className="text-3xl font-bold tracking-[0.2em] mb-12 uppercase text-white">GEATALENT</div>
        <div className="flex justify-center gap-12 mb-12">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-all transform hover:scale-125">{s.icon}</a>
          ))}
        </div>
        <div className="flex justify-center gap-10 mb-8">
          <Link href="/terms" className="text-white/20 hover:text-white text-[9px] uppercase tracking-[0.3em] font-bold">Terms</Link>
          <Link href="/privacy" className="text-white/20 hover:text-white text-[9px] uppercase tracking-[0.3em] font-bold">Privacy</Link>
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium">© 2024 GEATALENT COPYRIGHT</p>
      </footer>

      {/* --- CHAT SYSTEM --- */}
      <div className="fixed bottom-8 right-8 z-[150]">
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="w-16 h-16 bg-[#004225] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 group relative">
          {isChatOpen ? <CloseIcon className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!isChatOpen && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505] animate-bounce" />}
        </button>
        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-[#001a33]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl flex flex-col overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#004225] animate-pulse" /><span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Strategy Concierge</span></div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-[20px] text-xs leading-relaxed ${msg.role === 'user' ? 'bg-[#004225] text-white' : 'bg-white/5 text-white/70 border border-white/5'}`}>{msg.content}</div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={(e) => { e.preventDefault(); if(!inputValue) return; setMessages([...messages, {role:'user', content: inputValue}]); setInputValue(""); }} className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-2">
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Ask about EB-1A or NIW..." className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-xs outline-none focus:border-[#004225] text-white" />
                <button type="submit" className="w-10 h-10 bg-white text-[#001a33] rounded-full flex items-center justify-center hover:bg-[#004225] hover:text-white transition-all"><Send className="w-4 h-4" /></button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- ACTION OVERLAY --- */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSubmitted(false)} className="absolute inset-0 bg-[#001a33]/95 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-white text-[#001a33] p-10 rounded-[40px] shadow-2xl text-left">
              <button onClick={() => setIsSubmitted(false)} className="absolute top-8 right-8 text-[#001a33]/30 hover:text-[#001a33]"><CloseIcon className="w-5 h-5" /></button>
              <div className="mb-12"><span className="text-[#004225] font-serif italic text-lg mb-2 block">Case Initiated.</span><h3 className="text-3xl font-bold tracking-tight uppercase leading-none">Connect with <br/>a Strategist.</h3></div>
              <div className="space-y-4">
                <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-6 bg-[#001a33] text-white rounded-3xl hover:bg-[#004225] transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">Strategy Call</p><p className="text-sm font-bold text-white">Book via Calendly</p></div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center justify-between w-full p-6 border border-[#001a33]/10 rounded-3xl hover:border-[#001a33] transition-all group">
                  <div className="flex items-center gap-4 text-left"><div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Secure File Upload</p><p className="text-sm font-bold text-[#001a33]">Email Portfolio</p></div></div>
                  <ChevronRight className="w-5 h-5 text-[#001a33]/30 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
  );
}
