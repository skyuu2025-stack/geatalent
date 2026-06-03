"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock, Coins, Copy, X as CloseIcon,
  Twitter, Youtube, Instagram, Star, Award, MapPin
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function GeatalentFinalHomePage() {
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
    { name: "Basic Alpha", price: "£190", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC, features: ["Evidence Audit", "Initial Narrative Strategy", "Telegram Signal Feed"] },
    { name: "Intel Pro", price: "£490", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, features: ["Full Portfolio Build", "PR Placement Strategy", "UK/US Legal Roadmap"], popular: true },
    { name: "Strategic Premium", price: "£990", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM, features: ["Fashion Week/Exhibition Access", "End-to-End Visa Filing", "Bespoke PR Campaigns"] },
  ];

  return (
    <div className="bg-[#050505] text-white antialiased overflow-x-hidden min-h-screen font-sans selection:bg-[#004225]">
      
      {/* 动态背景光晕 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#004225]/15 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-[#002366]/15 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white cursor-default">GEATALENT</div>
        <div className="hidden lg:flex gap-10 items-center text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px]">
          <Link href="/global-talent" className="hover:text-white transition-colors">Pathways</Link>
          <Link href="/portfolio-audit" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/pr-media" className="hover:text-white transition-colors">PR & Events</Link>
          <a href="#pricing" className="hover:text-white transition-colors">Investment</a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-4 border-r border-white/10 pr-6 mr-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">{s.icon}</a>
            ))}
          </div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all">Connect</button>
            </SignInButton>
          </SignedOut>
          <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className="mb-10 flex items-center justify-center gap-4 text-zinc-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
              <span className="w-6 md:w-8 h-[1px] bg-[#004225]" />
              LONDON • NEW YORK • MILAN • PARIS
              <span className="w-6 md:w-8 h-[1px] bg-[#002366]" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[115px] font-bold tracking-tighter leading-[1.0] mb-8 text-white uppercase">
              The Path to <br />
              <span className="font-serif italic font-light text-zinc-300 tracking-tight">Exceptional.</span>
            </h1>
            <p className="text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed opacity-90 italic">
              Strategic Portfolio, Global PR, and Fashion Week Credentials for <br className="hidden md:block" />
              <strong>UK Global Talent</strong> and <strong>US EB-1A</strong> Visa Applicants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/assessment" className="px-12 py-4 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(0,66,37,0.4)] transition-all">Free Assessment</Link>
              <Link href="/global-talent" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2">Visa Pathways <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>
        </section>

        {/* --- NEW: THE BUSINESS LIFECYCLE (业务闭环展示) --- */}
        <section className="py-40 px-6 border-y border-white/5 bg-zinc-950/20">
          <div className="max-w-7xl mx-auto text-left">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#004225] mb-20 text-center md:text-left">Endorsement Lifecycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-1">
              {[
                { step: "01", title: "Portfolio Audit", desc: "证据深度诊断与叙事重构" },
                { step: "02", title: "Recommendation", desc: "国际顶尖专家推荐信策略" },
                { step: "03", title: "PR & Authority", desc: "全球主流媒体权威报道植入" },
                { step: "04", title: "Global Circuit", desc: "四大时装周/顶级艺术展入驻" },
                { step: "05", title: "Visa Success", desc: "英国GT / 美国EB1A 获批" }
              ].map((item, i) => (
                <div key={i} className="relative p-10 bg-[#050505] border border-white/5 group hover:bg-[#004225]/5 transition-all">
                  <div className="text-[10px] font-serif italic text-zinc-700 mb-6 group-hover:text-[#004225]">{item.step}</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed group-hover:text-zinc-400">{item.desc}</p>
                  {i < 4 && <div className="hidden md:block absolute top-1/2 -right-4 z-20 text-white/10"><ChevronRight /></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEW: FASHION & ART CIRCUIT (资源背书展示) --- */}
        <section className="py-40 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Star className="text-[#004225] w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#002366]">Elite Resources</span>
              </div>
              <h2 className="text-5xl font-serif italic mb-8">Fashion Week & <br />Global Exhibition.</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                我们不仅协助签证，更助力您的全球职业高度。GEATALENT 与伦敦、纽约、米兰、巴黎时装周及顶级画廊深度合作，为您提供作为“杰出人才”必备的国际现场证据。
              </p>
              <div className="space-y-4">
                {["London Fashion Week Access", "NY/Milan/Paris Industry Placement", "Museum-grade Art Exhibition Strategy"].map(f => (
                  <div key={f} className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-zinc-500">
                    <Check className="text-[#004225] w-4 h-4" /> {f}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {["LONDON", "NEW YORK", "MILAN", "PARIS"].map(city => (
                <div key={city} className="aspect-square bg-zinc-950 border border-white/5 flex flex-col items-center justify-center group hover:border-[#004225]/30 transition-all cursor-default">
                   <MapPin className="text-zinc-800 group-hover:text-[#004225] mb-4 transition-colors" />
                   <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-700 group-hover:text-white">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 定价与支付 (Stripe & USDC) */}
        <section id="pricing" className="py-40 px-6 border-t border-white/10">
           <div className="max-w-7xl mx-auto text-left">
              <div className="text-center mb-24 md:text-left">
                <h2 className="text-5xl font-serif italic mb-6">Invest in Your Legacy.</h2>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Integrated Success: Visa + Branding + PR.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`p-10 border ${plan.popular ? 'border-[#004225] bg-[#004225]/5' : 'border-white/5'} flex flex-col justify-between hover:bg-zinc-900/50 transition-all group`}>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-8">{plan.name}</h4>
                      <div className="text-5xl font-medium mb-12 text-white">{plan.price}<span className="text-xs text-zinc-700 font-normal"> / mo</span></div>
                      <ul className="space-y-4 mb-16">
                        {plan.features.map(f => (
                          <li key={f} className="text-[11px] text-zinc-400 flex items-center gap-3"><Check className="w-3.5 h-3.5 text-[#004225]" /> {f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <button onClick={() => { if (plan.priceLink) window.location.href = plan.priceLink; }} className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all duration-500">Access with Card</button>
                      <button onClick={() => { setSelectedPlan({ name: plan.name, price: plan.price }); setIsPayModalOpen(true); }} className="flex items-center justify-center gap-2 w-full py-4 text-[10px] font-bold uppercase tracking-widest rounded-full border border-royal-blue/30 text-zinc-500 hover:bg-[#002366] hover:text-white transition-all"><Coins className="w-3.5 h-3.5" /> Pay with USDC</button>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>

      {/* USDC 支付弹窗（略，保持原有逻辑） */}
      <AnimatePresence>
        {isPayModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPayModalOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-md bg-zinc-950 border border-white/10 p-8 rounded-3xl shadow-2xl text-left">
              <button onClick={() => setIsPayModalOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><CloseIcon className="w-5 h-5" /></button>
              <h3 className="text-xl font-serif italic mb-2 text-white text-left">Direct USDC Payment</h3>
              <p className="text-[10px] text-zinc-500 uppercase mb-8">Plan: {selectedPlan.name} • {selectedPlan.price}</p>
              <div className="space-y-6">
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500"><span>Network</span><span className="text-white">Solana</span></div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500"><span>Asset</span><span className="text-racing-green font-bold text-xs uppercase tracking-tighter">USDC (SPL)</span></div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">Wallet Address</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-[#050505] p-4 rounded-xl border border-white/5 text-[10px] font-mono break-all text-zinc-300 leading-tight">{walletAddress}</div>
                    <button onClick={() => { navigator.clipboard.writeText(walletAddress); setCopied(true); setTimeout(()=>setCopied(false),2000); }} className="p-4 bg-white text-black rounded-xl hover:bg-[#004225] hover:text-white transition-all flex items-center justify-center">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="p-6 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl text-center">
                  <p className="text-[10px] text-zinc-500 uppercase leading-relaxed font-bold tracking-widest">After payment, please send your transaction hash and login email to our concierge.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 border-t border-white/5 text-center px-6">
        <div className="text-2xl font-bold tracking-[0.2em] mb-10 uppercase text-white">GEATALENT</div>
        <div className="flex justify-center gap-8 mb-12">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <div className="p-3 rounded-full border border-white/5 bg-zinc-950 text-zinc-500 group-hover:text-white group-hover:border-[#004225] group-hover:bg-[#004225]/10 transition-all">{s.icon}</div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-700 group-hover:text-zinc-400">{s.name}</span>
            </a>
          ))}
        </div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-medium">© 2024 GEATALENT COPYRIGHT</p>
      </footer>
    </div>
  );
}
