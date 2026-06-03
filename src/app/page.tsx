"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock, Coins, Copy, X as CloseIcon,
  Twitter, Youtube, Instagram, Star, Award, MapPin, Layers, FileText
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function GeatalentEditorialPage() {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [copied, setCopied] = useState(false);
  const walletAddress = "BQeaNnGCRtBnFye7ynSGhFtgzUgUjiCo4QmAKNbgqWh1";

  const socials = [
    { name: "X", icon: <Twitter className="w-4 h-4" />, href: "https://x.com/GEATalent" },
    { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/@gea_talent?si=0ipqOP-VayiFhymp" },
    { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/geatalent?igsh=aWtncTB4azMxM2Qy&utm_source=qr" },
    { name: "TikTok", icon: <TikTokIcon className="w-4 h-4" />, href: "https://www.tiktok.com/@geatalent?_r=1&_t=ZS-96nKO9SfUgO" },
  ];

  const pricingPlans = [
    { name: "Basic Alpha", price: "£190", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC, features: ["Evidence Audit", "Narrative Strategy", "UK/US Route Map"] },
    { name: "Intel Pro", price: "£490", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, features: ["Full Portfolio Build", "LoR Drafting Strategy", "Authority PR Placement"], popular: true },
    { name: "Strategic Premium", price: "£990", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM, features: ["Fashion Week/Exhibition Access", "US EB-1A & UK GT Filing", "Concierge PR Support"] },
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-[#002b1b]">
      
      {/* 动态光晕 - 采用流行的孔雀蓝和翡翠绿 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[800px] h-[800px] bg-[#002366]/20 blur-[150px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#001a33]/40 backdrop-blur-xl border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">GEATALENT</div>
        <div className="hidden lg:flex gap-10 items-center text-white/60 font-bold uppercase tracking-[0.4em] text-[10px]">
          <Link href="/global-talent" className="hover:text-white transition-colors">Visa Pathways</Link>
          <Link href="/portfolio-audit" className="hover:text-white transition-colors">Audit</Link>
          <Link href="/pr-media" className="hover:text-white transition-colors">PR & Events</Link>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all">Connect</button>
            </SignInButton>
          </SignedOut>
          <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO: 杂志大片感 --- */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <div className="mb-10 flex items-center justify-center gap-4 text-white/40 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
              <span className="w-12 h-[1px] bg-white/20" />
              LONDON • NEW YORK • MILAN • PARIS
              <span className="w-12 h-[1px] bg-white/20" />
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[130px] font-bold tracking-tighter leading-[0.85] mb-12 text-white">
              MASTER <br />
              <span className="font-serif italic font-light text-zinc-300">THE CIRCUIT.</span>
            </h1>
            <p className="text-white/80 text-sm md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed font-light italic">
              Strategic Portfolio, Global PR, and Fashion Week Credentials for <br className="hidden md:block" />
              <strong>UK Global Talent</strong> and <strong>US EB-1A</strong> Extraordinary Ability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/assessment" className="px-14 py-5 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-2xl">Start Assessment</Link>
              <Link href="/global-talent" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2 transition-all">Service Loop <ArrowUpRight className="w-4 h-4" /></Link>
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
                { icon: <Layers />, title: "Evidences", desc: "背书材料精准封装与法条对齐" },
                { icon: <Award />, title: "Approval", desc: "英国GT / 美国EB1A 终审获批" }
              ].map((item, i) => (
                <div key={i} className="bg-[#002b1b]/40 p-12 hover:bg-white hover:text-black transition-all duration-700 group cursor-default">
                  <div className="mb-10 text-white group-hover:text-[#002b1b] transition-colors">{item.icon}</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed group-hover:text-black/60 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 时装周资源 --- */}
        <section className="py-40 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <motion.div whileInView={{ x: [-20, 0], opacity: [0, 1] }}>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#004225] shadow-[0_0_10px_#004225]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-mono">Industry_Credentials_Access</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif italic mb-10 leading-tight">Fashion Week <br />Placement.</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12 font-light">
                我们为申请人提供直接通往伦敦、米兰、巴黎时装周的行业门票。通过举办展览、联合发布或官方Showroom计划，为您累积作为“杰出人才”最具说服力的现场证据。
              </p>
              <ul className="space-y-6">
                {["LFW/PFW Official Listing Support", "Industry-Grade Media Kit Build", "Curatorial Recognition Strategy"].map(list => (
                  <li key={list} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/50">
                    <Check className="w-4 h-4 text-white" /> {list}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {["LONDON", "PARIS", "MILAN", "NEW YORK"].map((city, idx) => (
                  <div key={city} className="aspect-square border border-white/10 flex flex-col items-center justify-center bg-white/[0.03] hover:border-white transition-all group">
                    <MapPin className="mb-4 text-white/20 group-hover:text-white transition-all" />
                    <span className="text-[10px] font-bold tracking-[0.5em] text-white/40 group-hover:text-white">{city}</span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#002366]/30 blur-[100px] rounded-full" />
            </div>
          </div>
        </section>

        {/* --- 定价模块 --- */}
        <section id="pricing" className="py-40 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32">
              <h2 className="text-6xl md:text-8xl font-serif italic mb-8">Investment.</h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.6em]">Visa + Narrative + Global Recognition</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`flex flex-col justify-between p-12 rounded-[40px] border transition-all duration-700 ${plan.popular ? 'bg-white text-black border-white scale-105 shadow-2xl' : 'bg-transparent text-white border-white/10 hover:border-white/40'}`}>
                  <div>
                    <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-10 ${plan.popular ? 'text-[#001a33]' : 'text-white/40'}`}>{plan.name}</h4>
                    <div className="text-6xl font-medium mb-12">{plan.price}<span className="text-sm opacity-60"> / mo</span></div>
                    <ul className="space-y-6 mb-20">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-center gap-4 text-xs font-medium uppercase tracking-tighter">
                          <Check className="w-4 h-4" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <button onClick={() => { if (plan.priceLink) window.location.href = plan.priceLink; }} className={`w-full py-5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${plan.popular ? 'bg-[#001a33] text-white hover:bg-black' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}>Pay with Card</button>
                    <button onClick={() => { setSelectedPlan({ name: plan.name, price: plan.price }); setIsPayModalOpen(true); }} className={`flex items-center justify-center gap-3 w-full py-5 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all ${plan.popular ? 'border-[#001a33]/20 text-[#001a33]' : 'border-white/10 text-white/60 hover:border-white hover:text-white'}`}>
                      <Coins className="w-4 h-4" /> USDC Transfer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-white/10 text-center px-6 bg-[#001a33]/20 backdrop-blur-md">
        <div className="text-3xl font-bold tracking-[0.2em] mb-12 uppercase text-white">GEATALENT</div>
        <div className="flex justify-center gap-12 mb-16">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-all transform hover:scale-125">{s.icon}</a>
          ))}
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium">© 2024 GEATALENT COPYRIGHT</p>
      </footer>

      {/* USDC 支付弹窗 (保持不变，已更新背景) */}
      <AnimatePresence>
        {isPayModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPayModalOpen(false)} className="absolute inset-0 bg-[#001a33]/90 backdrop-blur-lg" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-md bg-[#002b1b] border border-white/10 p-10 rounded-[40px] shadow-2xl">
              <button onClick={() => setIsPayModalOpen(false)} className="absolute top-8 right-8 text-white/40 hover:text-white"><CloseIcon className="w-5 h-5" /></button>
              <h3 className="text-2xl font-serif italic mb-2 text-white">Direct Transfer</h3>
              <p className="text-[10px] text-white/40 uppercase mb-10">Plan: {selectedPlan.name} • {selectedPlan.price}</p>
              <div className="space-y-6">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40"><span>Network</span><span className="text-white font-mono uppercase">Solana</span></div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40"><span>Asset</span><span className="text-white font-bold text-xs">USDC (SPL)</span></div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Wallet Address</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-black/40 p-5 rounded-2xl border border-white/5 text-[10px] font-mono break-all text-white/80 leading-relaxed">{walletAddress}</div>
                    <button onClick={() => { navigator.clipboard.writeText(walletAddress); setCopied(true); setTimeout(()=>setCopied(false),2000); }} className="w-16 bg-white text-[#002b1b] rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center">
                      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
