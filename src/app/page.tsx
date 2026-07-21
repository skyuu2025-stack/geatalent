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

// --- 1. 自定义 TikTok 图标组件 ---
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function GeatalentFinalPage() {
  // --- 2. 状态管理 ---
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Welcome. I am your Strategy Concierge. How can I assist with your UK Global Talent, US EB-1A, or NIW journey?' }]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // --- 3. 配置数据 ---
  const MEETING_LINK = "https://calendly.com/skyuu2025"; 
  const EMAIL_ADDRESS = "skyuu2025@gmail.com"; 
  const walletAddress = "BQeaNnGCRtBnFye7ynSGhFtgzUgUjiCo4QmAKNbgqWh1";

  const socials = [
    { name: "X", icon: <Twitter className="w-4 h-4" />, href: "https://x.com/GEATalent" },
    { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/@gea_talent?si=0ipqOP-VayiFhymp" },
    { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/geatalent?igsh=aWtncTB4azMxM2Qy&utm_source=qr" },
    { name: "TikTok", icon: <TikTokIcon className="w-4 h-4" />, href: "https://www.tiktok.com/@geatalent?_r=1&_t=ZS-96nKO9SfUgO" },
  ];

  const coreSectors = [
    { title: "AI & Technology", icon: <Binary className="w-8 h-8" />, desc: "针对 AI 创始人、算法专家及 SaaS 架构师。强化开源贡献与商业价值映射，对接 Tech Nation (UK) 与 NIW (US)。", color: "text-[#004225]" },
    { title: "Fine Art & Culture", icon: <Palette className="w-8 h-8" />, desc: "为画家、策展人及多媒体艺术家提供顶尖画廊背书与国际展会入驻，构建符合 Arts Council 标准的证据链。", color: "text-[#002366]" },
    { title: "Fashion & Design", icon: <Sparkles className="w-8 h-8" />, desc: "协助设计师进驻四大时装周官方日程。将行业资历重构为符合英美杰出人才标准的叙事。", color: "text-white" }
  ];

  const pricingPlans = [
    { name: "Basic Alpha", price: "£190", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC, features: ["Evidence Audit", "Narrative Strategy", "UK/US Route Map"] },
    { name: "Intel Pro", price: "£490", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, features: ["Full Portfolio Build", "LoR Strategy", "Authority PR Hub"], popular: true },
    { name: "Strategic Premium", price: "£990", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM, features: ["Fashion Week/Exhibition", "EB-1A & GT Filing", "Concierge PR Support"] },
  ];

  // --- 4. 辅助函数 ---
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages([...messages, { role: 'user', content: inputValue }]);
    setInputValue("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: "Thank you. Our strategist will review your query. For a faster response, please complete the Initial Analysis form below." }]);
    }, 1000);
  };

  // --- 5. 渲染页面 ---
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-[#001a33]">
      
      {/* 背景层：杂志渐变色 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#001a33] to-[#002b1b]" />
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* 导航栏 */}
      <nav className="relative z-50 p-8 flex justify-between items-center border-b border-white/5 bg-[#001a33]/40 backdrop-blur-xl">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">GEATALENT</div>
        <div className="hidden lg:flex gap-10 items-center text-white/40 font-bold uppercase tracking-[0.4em] text-[10px]">
          <Link href="/global-talent" className="hover:text-white transition-colors">Pathways</Link>
          <Link href="/portfolio-audit" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/pr-media" className="hover:text-white transition-colors">Circuit</Link>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut><SignInButton mode="modal"><button className="px-6 py-2 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all">Connect</button></SignInButton></SignedOut>
          <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="mb-10 flex items-center justify-center gap-4 text-white/40 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
              <span className="w-12 h-[1px] bg-white/20" />
              UK GLOBAL TALENT • US EB-1A • US NIW
              <span className="w-12 h-[1px] bg-white/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[115px] font-bold tracking-tighter leading-[0.9] mb-12 text-white uppercase">
              ARCHITECTING <br />
              <span className="font-serif italic font-light text-zinc-300">EXCEPTIONAL.</span>
            </h1>
            <p className="text-white/80 text-sm md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed font-light italic">
              Strategic Portfolio, Global PR, and Fashion Week Credentials for <br className="hidden md:block" />
              <strong>AI & Technology</strong>, <strong>Fine Arts</strong>, and <strong>High Design</strong> Applicants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button onClick={() => document.getElementById('assessment')?.scrollIntoView({behavior: 'smooth'})} className="px-14 py-5 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-2xl">Start Evaluation</button>
              <Link href="/global-talent" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2">Visa matrix <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>
        </section>

        {/* --- 核心三大领域板块 (AI, ART, FASHION) --- */}
        <section className="py-40 px-6 border-y border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30 mb-24 text-center">Core Pillars of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {coreSectors.map((sector, i) => (
                <div key={i} className="group p-12 bg-[#001a33]/20 border border-white/5 rounded-[40px] hover:bg-white hover:text-[#001a33] transition-all duration-700">
                  <div className={`mb-10 ${sector.color} group-hover:text-[#001a33] transition-colors`}>{sector.icon}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">{sector.title}</h3>
                  <p className="text-white/40 group-hover:text-[#001a33]/60 text-sm leading-relaxed mb-10">{sector.desc}</p>
                  <div className="pt-6 border-t border-white/10 group-hover:border-[#001a33]/10 flex items-center justify-between">
                     <span className="text-[10px] font-bold uppercase tracking-widest">Benchmark Files</span>
                     <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 次要领域横向滚动条 --- */}
        <section className="py-20 bg-black/20 overflow-hidden whitespace-nowrap flex border-b border-white/5">
           <div className="flex animate-marquee gap-20">
              {["ARCHITECTURE", "SCIENTIFIC RESEARCH", "ENGINEERING", "BUSINESS LEADERSHIP", "SPORTS EXCELLENCE", "MUSIC & PERFORMANCE", "DIGITAL MEDIA"].map(s => (
                <span key={s} className="text-white/10 text-[10px] font-bold uppercase tracking-[0.5em]">{s}</span>
              ))}
              {/* 重复内容 */}
              {["ARCHITECTURE", "SCIENTIFIC RESEARCH", "ENGINEERING", "BUSINESS LEADERSHIP", "SPORTS EXCELLENCE", "MUSIC & PERFORMANCE", "DIGITAL MEDIA"].map(s => (
                <span key={s+"_repeat"} className="text-white/10 text-[10px] font-bold uppercase tracking-[0.5em]">{s}</span>
              ))}
           </div>
        </section>

        {/* --- 业务全闭环 --- */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30 mb-24 text-center">The Integrated Service Loop</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
              {[
                { icon: <ShieldCheck />, title: "Audit", desc: "证据诊断与国家利益映射" },
                { icon: <FileText />, title: "Narrative", desc: "高客单价案例所需的杰出人才叙事" },
                { icon: <Globe />, title: "PR Hub", desc: "全球主流媒体与行业权威背书" },
                { icon: <MapPin />, title: "Circuit", desc: "四大时装周/国际展会/评审入驻" },
                { icon: <Award />, title: "Success", desc: "全套案卷封装与签证最终获批" }
              ].map((item, i) => (
                <div key={i} className="bg-[#050505] p-10 hover:bg-[#004225] transition-all duration-700 group cursor-default text-left">
                  <div className="mb-10 text-white group-hover:text-white/60 transition-colors">{item.icon}</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-white">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ASSESSMENT FORM --- */}
        <section id="assessment" className="py-40 px-6 bg-[#001a33]/30">
          <div className="max-w-2xl mx-auto text-left">
            <div className="mb-16">
              <span className="text-white/40 font-serif italic text-lg mb-4 block">Confidential Analysis</span>
              <h1 className="text-5xl font-bold tracking-tight mb-6 text-white uppercase leading-none">Initial <br/>Audit.</h1>
              <p className="text-white/60 text-sm leading-relaxed">提交您的初步背景，我们的资深策略师将为您进行英美双重路径匹配。</p>
            </div>
            <form className="space-y-8">
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white transition-all" placeholder="Full Name" />
              <select className="w-full bg-[#001a33] border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white/70 appearance-none">
                <option>AI & Technology</option>
                <option>Fine Art & Visual Culture</option>
                <option>Fashion & Luxury Design</option>
                <option>Science & NIW Routes</option>
              </select>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none text-white" placeholder="Career Narrative (Awards, Press, Major Projects)..." />
              <button type="button" onClick={() => setIsSubmitted(true)} className="w-full py-5 bg-[#004225] text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all duration-700 shadow-2xl">Submit Initial Assessment</button>
            </form>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section id="pricing" className="py-40 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32 md:text-left">
              <h2 className="text-6xl md:text-8xl font-serif italic mb-8">Investment.</h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.6em]">Visa Pathways • Strategic Branding • PR</p>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`flex flex-col justify-between p-12 rounded-[40px] border transition-all duration-700 ${plan.popular ? 'bg-white text-black border-white scale-105 shadow-2xl' : 'bg-transparent text-white border-white/10 hover:border-white/40'}`}>
                  <div>
                    <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-10 ${plan.popular ? 'text-[#001a33]' : 'text-white/40'}`}>{plan.name}</h4>
                    <div className="text-6xl font-medium mb-12">{plan.price}<span className="text-sm opacity-60"> / mo</span></div>
                    <ul className="space-y-6 mb-20 text-xs font-bold uppercase tracking-widest">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-center gap-4"><Check className="w-4 h-4" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <button onClick={() => { if (plan.priceLink) window.location.href = plan.priceLink; }} className={`w-full py-5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${plan.popular ? 'bg-[#001a33] text-white hover:bg-black' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}>Pay with Card</button>
                    <button onClick={() => { setSelectedPlan({ name: plan.name, price: plan.price }); setIsPayModalOpen(true); }} className={`flex items-center justify-center gap-3 w-full py-5 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all ${plan.popular ? 'border-[#001a33]/20 text-[#001a33]' : 'border-white/10 text-white/60 hover:border-white'}`}>
                      <Coins className="w-4 h-4" /> USDC Transfer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

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
              <form onSubmit={handleSendMessage} className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-2">
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Type your inquiry..." className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-xs outline-none focus:border-[#004225] text-white" />
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
              <div className="mb-12"><span className="text-[#004225] font-serif italic text-lg mb-2 block">Case Initiated.</span><h3 className="text-3xl font-bold tracking-tight uppercase leading-none text-[#001a33]">Connect with <br/>a Strategist.</h3></div>
              <div className="space-y-4">
                <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-6 bg-[#001a33] text-white rounded-3xl hover:bg-[#004225] transition-all group">
                  <div className="flex items-center gap-4"><div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">Strategy Call</p><p className="text-sm font-bold text-white">Book via Calendly</p></div></div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center justify-between w-full p-6 border border-[#001a33]/10 rounded-3xl hover:border-[#001a33] transition-all group">
                  <div className="flex items-center gap-4 text-left"><div className="text-left"><p className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-[#001a33]">Secure Direct</p><p className="text-sm font-bold text-[#001a33]">Email Portfolio</p></div></div>
                  <ChevronRight className="w-5 h-5 text-[#001a33]/30 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- USDC MODAL --- */}
      <AnimatePresence>
        {isPayModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPayModalOpen(false)} className="absolute inset-0 bg-[#001a33]/95 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-md bg-[#002b1b] border border-white/10 p-10 rounded-[40px] shadow-2xl text-left">
              <button onClick={() => setIsPayModalOpen(false)} className="absolute top-8 right-8 text-white/30 hover:text-white"><CloseIcon className="w-5 h-5" /></button>
              <h3 className="text-xl font-serif italic mb-2 text-white">Direct USDC Transfer</h3>
              <p className="text-[10px] text-white/40 uppercase mb-10">Plan: {selectedPlan.name} • {selectedPlan.price}</p>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-3xl space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-white/40"><span>Network</span><span className="text-white">Solana</span></div>
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-white/40"><span>Asset</span><span className="text-racing-green font-bold text-xs uppercase">USDC (SPL)</span></div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-white/40">Wallet Address</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-black/40 p-4 rounded-xl border border-white/5 text-[10px] font-mono break-all text-white/80">{walletAddress}</div>
                    <button onClick={() => { navigator.clipboard.writeText(walletAddress); setCopied(true); setTimeout(()=>setCopied(false),2000); }} className="w-12 bg-white text-black rounded-xl flex items-center justify-center">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 border-t border-white/5 text-center px-6 bg-black/40">
        <div className="text-3xl font-bold tracking-[0.2em] mb-12 uppercase text-white">GEATALENT</div>
        <div className="flex justify-center gap-10 mb-12">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-all transform hover:scale-1
