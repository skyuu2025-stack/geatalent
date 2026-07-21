"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock, Coins, Copy, X as CloseIcon,
  Twitter, Youtube, Instagram, MessageCircle, Send, Palette, Sparkles, Binary, FileText, Award, MapPin
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

// 自定义 TikTok 图标
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function GeatalentFinalPage() {
  // --- 1. 状态管理 ---
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Welcome to GEATALENT. How can we assist with your UK Global Talent, US EB-1A, or NIW journey today?' }]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // --- 2. 配置信息 ---
  const MEETING_LINK = "https://calendly.com/skyuu2025"; 
  const EMAIL_ADDRESS = "skyuu2025@gmail.com"; 
  const walletAddress = "BQeaNnGCRtBnFye7ynSGhFtgzUgUjiCo4QmAKNbgqWh1";

  const socials = [
    { name: "X", icon: <Twitter className="w-4 h-4" />, href: "https://x.com/GEATalent" },
    { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/@gea_talent?si=0ipqOP-VayiFhymp" },
    { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/geatalent?igsh=aWtncTB4azMxM2Qy&utm_source=qr" },
    { name: "TikTok", icon: <TikTokIcon className="w-4 h-4" />, href: "https://www.tiktok.com/@geatalent?_r=1&_t=ZS-96nKO9SfUgO" },
  ];

  const pricingPlans = [
    { name: "Basic Alpha", price: "£190", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC, features: ["Evidence Audit", "Narrative Strategy", "UK/US Route Map"] },
    { name: "Intel Pro", price: "£490", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, features: ["Full Portfolio Build", "LoR Strategy", "Authority PR Hub"], popular: true },
    { name: "Strategic Premium", price: "£990", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM, features: ["Fashion Week/Exhibition", "US EB-1A & UK GT Filing", "Concierge PR Support"] },
  ];

  // --- 3. 辅助函数 ---
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages([...messages, { role: 'user', content: inputValue }]);
    setInputValue("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: "Thank you. Our senior strategist will review your query. For a faster response, please complete the Initial Analysis form." }]);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-[#002b1b]">
      
      {/* 4. 杂志色背景 (Midnight Blue to Deep Forest) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#001a33] to-[#002b1b]" />
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* 5. 导航栏 */}
      <nav className="relative z-50 p-8 flex justify-between items-center border-b border-white/5 bg-[#001a33]/40 backdrop-blur-xl">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">GEATALENT</div>
        <div className="hidden lg:flex gap-10 items-center text-white/40 font-bold uppercase tracking-[0.4em] text-[10px]">
          <Link href="/global-talent" className="hover:text-white transition-colors">Pathways</Link>
          <Link href="/portfolio-audit" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/pr-media" className="hover:text-white transition-colors">PR & Events</Link>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut><SignInButton mode="modal"><button className="px-6 py-2 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all duration-500">Connect</button></SignInButton></SignedOut>
          <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="mb-10 flex items-center justify-center gap-4 text-white/40 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
              <span className="w-12 h-[1px] bg-white/20" />
              UK GLOBAL TALENT • US EB-1A • US NIW
              <span className="w-12 h-[1px] bg-white/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[115px] font-bold tracking-tighter leading-[1.0] mb-12 text-white uppercase text-center">
              The Path to <br />
              <span className="font-serif italic font-light text-zinc-300 tracking-tight">Exceptional.</span>
            </h1>
            <p className="text-white/80 text-sm md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed font-light italic">
              Strategic Portfolio, Global PR, and Fashion Week Credentials for <br className="hidden md:block" />
              <strong>AI & Tech</strong>, <strong>Fine Arts</strong>, and <strong>Luxury Design</strong> Applicants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button onClick={() => { document.getElementById('assessment')?.scrollIntoView({behavior: 'smooth'}) }} className="px-14 py-5 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-2xl">Start Assessment</button>
              <Link href="/global-talent" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2">Visa Matrix <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>
        </section>

        {/* --- 业务闭环可视化 --- */}
        <section className="py-40 px-6 border-y border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30 mb-24 text-center">The Endorsement Lifecycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
              {[
                { icon: <ShieldCheck />, title: "Portfolio", desc: "作品集深度审计与叙事重构" },
                { icon: <FileText />, title: "Letters", desc: "顶尖推荐人筛选与信件起草" },
                { icon: <Globe />, title: "Global PR", desc: "四大时装周/顶级主流媒体曝光" },
                { icon: <Layers />, title: "Exhibition", desc: "伦敦/米兰/巴黎/纽约资源对接" },
                { icon: <Award />, title: "Visa", desc: "英国GT / 美国EB1A / NIW 获批" }
              ].map((item, i) => (
                <div key={i} className="bg-[#002b1b]/40 p-12 hover:bg-white hover:text-black transition-all duration-700 group cursor-default text-left">
                  <div className="mb-10 text-white group-hover:text-[#002b1b] transition-colors">{item.icon}</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed group-hover:text-black/60 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 核心三大领域板块 --- */}
        <section className="py-40 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto text-left">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { t: "AI & TECHNOLOGY", i: <Binary />, d: "针对 AI 创始人与 SaaS 专家，强化开源影响力与商业价值映射。" },
                 { t: "FINE ART & CULTURE", i: <Palette />, d: "为画家、策展人及多媒体艺术家提供顶尖画廊与国际展会背书。" },
                 { t: "FASHION & DESIGN", i: <Sparkles />, d: "协助设计师进驻四大时装周，确立行业公认的精英地位。" }
               ].map((p, idx) => (
                 <div key={idx} className="p-12 bg-white/[0.03] border border-white/10 rounded-[40px] hover:border-[#004225] transition-all">
                    <div className="mb-10 text-[#004225]">{p.i}</div>
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-white">{p.t}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- ASSESSMENT FORM --- */}
        <section id="assessment" className="py-40 px-6 bg-black/20">
          <div className="max-w-2xl mx-auto text-left">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <div className="mb-16">
                <span className="text-white/40 font-serif italic text-lg mb-4 block">Confidential Analysis</span>
                <h1 className="text-5xl font-bold tracking-tight mb-6 text-white uppercase">Start <br/>Evaluation.</h1>
              </div>
              <form className="space-y-8">
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white" placeholder="Full Name" />
                <select className="w-full bg-[#001a33] border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white/70 appearance-none">
                  <option>AI & Digital Technology</option>
                  <option>Fine Art & Visual Culture</option>
                  <option>Fashion & Luxury Design</option>
                  <option>Science & NIW Routes</option>
                </select>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white" placeholder="Brief Career Narrative (Awards, Press, Contributions)..." />
                <button type="button" onClick={() => setIsSubmitted(true)} className="w-full py-5 bg-[#004225] text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all shadow-2xl">Submit Initial Assessment</button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- ACTION OVERLAY --- */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSubmitted(false)} className="absolute inset-0 bg-[#001a33]/95 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-md bg-white text-[#001a33] p-10 rounded-[40px] shadow-2xl text-left">
              <button onClick={() => setIsSubmitted(false)} className="absolute top-8 right-8 text-[#001a33]/30 hover:text-[#001a33]"><CloseIcon className="w-5 h-5" /></button>
              <div className="mb-12"><span className="text-[#004225] font-serif italic text-lg mb-2 block">Step Complete.</span><h3 className="text-3xl font-bold tracking-tight uppercase">Ready for <br/>Dialogue.</h3></div>
              <div className="space-y-4">
                <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-6 bg-[#001a33] text-white rounded-3xl hover:bg-[#004225] transition-all group">
                  <div className="flex items-center gap-4"><Calendar className="w-6 h-6 text-white/70" /><div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">Strategy Call</p><p className="text-sm font-bold text-white">Book via Calendly</p></div></div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href={`mailto:${EMAIL_ADDRESS}?subject=Assessment`} className="flex items-center justify-between w-full p-6 border border-[#001a33]/10 rounded-3xl hover:border-[#001a33] transition-all group">
                  <div className="flex items-center gap-4 text-left"><Mail className="w-6 h-6 text-[#001a33]/60" /><div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Direct Contact</p><p className="text-sm font-bold">Send Email</p></div></div>
                  <ChevronRight className="w-5 h-5 text-[#001a33]/30 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CHAT SYSTEM --- */}
      <div className="fixed bottom-8 right-8 z-[150]">
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="w-16 h-16 bg-[#004225] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 relative">
          {isChatOpen ? <CloseIcon /> : <MessageCircle />}
          {!isChatOpen && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505] animate-bounce" />}
        </button>
        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-[#001a33]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl flex flex-col overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#004225] animate-pulse" /><span className="text-[10px] font-bold uppercase tracking-widest text-white/80">AI Concierge</span></div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-[20px] text-xs leading-relaxed ${msg.role === 'user' ? 'bg-[#004225] text-white' : 'bg-white/5 text-white/70 border border-white/5'}`}>{msg.content}</div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-2">
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Type your inquiry..." className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-xs outline-none focus:border-[#004225] text-white" />
                <button type="submit" className="w-10 h-10 bg-white text-[#001a33] rounded-full flex items-center justify-center hover:bg-[#004225] hover:text-white transition-all"><Send className="w-4 h-4" /></button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="py-24 border-t border-white/5 text-center px-6 bg-[#001a33]/20">
        <div className="text-3xl font-bold tracking-[0.2em] mb-12 uppercase text-white">GEATALENT</div>
        <div className="flex justify-center gap-10 mb-16">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-all transform hover:scale-125">{s.icon}</a>
          ))}
        </div>
        <div className="flex justify-center gap-8 mb-8">
          <Link href="/terms" className="text-white/20 hover:text-white text-[9px] uppercase tracking-[0.3em] font-bold">Terms</Link>
          <Link href="/privacy" className="text-white/20 hover:text-white text-[9px] uppercase tracking-[0.3em] font-bold">Privacy Policy</Link>
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium">© 2024 GEATALENT COPYRIGHT</p>
      </footer>
    </div>
  );
}

// 辅助图标组件
const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
);
const Mail = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const Binary = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 22V8m4 14V2m-8 4h16m-16 8h16m-16 4h16"/></svg>
);
