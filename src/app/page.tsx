"use client";

import React, { useState, useEffect } from "react";
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

export default function GeatalentFinalHomePage() {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [copied, setCopied] = useState(false);
  
  const [liveSignals, setLiveSignals] = useState([
    { name: "ANALYZING...", action: "SCANNING", trend: "0.0%", color: "text-zinc-500" },
    { name: "INITIATING...", action: "MONITORING", trend: "0.0%", color: "text-zinc-500" },
    { name: "CONNECTING...", action: "FEEDING", trend: "0.0%", color: "text-zinc-500" },
  ]);

  const walletAddress = "BQeaNnGCRtBnFye7ynSGhFtgzUgUjiCo4QmAKNbgqWh1";

  const socials = [
    { name: "X", icon: <Twitter className="w-4 h-4" />, href: "https://x.com/GEATalent" },
    { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/@gea_talent?si=0ipqOP-VayiFhymp" },
    { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/geatalent?igsh=aWtncTB4azMxM2Qy&utm_source=qr" },
    { name: "TikTok", icon: <TikTokIcon className="w-4 h-4" />, href: "https://www.tiktok.com/@geatalent?_r=1&_t=ZS-96nKO9SfUgO" },
  ];

  useEffect(() => {
    const fetchSignals = async () => {
      try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/search?q=solana%20ai');
        const data = await response.json();
        if (data.pairs) {
          const freshSignals = data.pairs.slice(0, 3).map((pair: any) => ({
            name: pair.baseToken.symbol,
            action: pair.priceUsd ? `$${parseFloat(pair.priceUsd).toFixed(4)}` : "TRACKING",
            trend: `${pair.priceChange.h1 > 0 ? '+' : ''}${pair.priceChange.h1}%`,
            color: pair.priceChange.h1 > 0 ? "text-[#004225]" : "text-[#002366]"
          }));
          setLiveSignals(freshSignals);
        }
      } catch (error) {}
    };
    fetchSignals();
    const interval = setInterval(fetchSignals, 15000);
    return () => clearInterval(interval);
  }, []);

  const pricingPlans = [
    { name: "Basic Alpha", price: "£190", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC, features: ["Evidence Audit", "Narrative Strategy", "UK/US Route Map"] },
    { name: "Intel Pro", price: "£490", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, features: ["Full Portfolio Build", "LoR Drafting Strategy", "Authority PR Placement"], popular: true },
    { name: "Strategic Premium", price: "£990", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM, features: ["Fashion Week/Exhibition Access", "US EB-1A & UK GT Filing", "Concierge PR Support"] },
  ];

  return (
    <div className="bg-[#050505] text-white antialiased overflow-x-hidden min-h-screen font-sans selection:bg-white selection:text-[#002b1b]">
      
      {/* 动态背景光晕 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/15 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[800px] h-[800px] bg-[#002366]/15 blur-[150px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#001a33]/40 backdrop-blur-xl border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white cursor-default">GEATALENT</div>
        <div className="hidden lg:flex gap-10 items-center text-white/60 font-bold uppercase tracking-[0.4em] text-[10px]">
          <Link href="/global-talent" className="hover:text-white transition-colors">Visa Pathways</Link>
          <Link href="/portfolio-audit" className="hover:text-white transition-colors">Audit</Link>
          <Link href="/pr-media" className="hover:text-white transition-colors">PR & Events</Link>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-4 border-r border-white/10 pr-6 mr-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-all transform hover:scale-125">{s.icon}</a>
            ))}
          </div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all">Connect</button>
            </SignInButton>
          </SignedOut>
          <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
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
            <p className="text-white/80 text-sm md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed font-light italic opacity-90">
              Strategic Portfolio, Global PR, and Fashion Week Credentials for <br className="hidden md:block" />
              <strong>UK Global Talent</strong> and <strong>US EB-1A</strong> Extraordinary Ability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/assessment" className="px-14 py-5 bg-white text-[#001a33] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-2xl">Start Assessment</Link>
              <Link href="/case-studies" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2 transition-all">Benchmarks <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>
        </section>

        {/* 业务闭环可视化 */}
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
                <div key={i} className="bg-[#002b1b]/40 p-12 hover:bg-white hover:text-black transition-all duration-700 group cursor-default text-left">
                  <div className="mb-10 text-white group-hover:text-[#002b1b] transition-colors">{item.icon}</div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed group-hover:text-black/60 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI 看板预览 */}
        <section id="intelligence" className="py-40 px-8 text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Signals in <br />the Noise.</h2>
              <p className="text-zinc-500 text-lg mb-12 leading-relaxed max-w-md">Our AI monitoring engine tracks smart money movements and founder narratives 24/7 across the UK Web3 ecosystem.</p>
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#004225] hover:text-white transition-colors group">Explore Alpha Dashboard <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></button>
            </div>
            <div className="relative bg-zinc-950/50 rounded-3xl p-10 overflow-hidden border border-white/5 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4"><Activity className="w-4 h-4 text-[#004225] animate-pulse" /><span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-bold">Live SOL Data Feed</span></div>
                <div className="text-[9px] font-mono text-zinc-600 uppercase">Status: Connected</div>
              </div>
              <div className="space-y-6 font-mono text-[11px]">
                {liveSignals.map((log, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                    <span className="text-zinc-500 w-20">$ {log.name}</span>
                    <span className="font-bold text-zinc-300 flex-1 text-center">{log.action}</span>
                    <span className={`font-bold text-right w-16 ${log.color}`}>{log.trend}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 定价方案 */}
        <section id="pricing" className="py-40 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="text-center mb-32 md:text-left">
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

      {/* --- 页脚: 包含 Terms & Privacy 入口 --- */}
      <footer className="py-24 border-t border-white/10 text-center px-6 bg-[#001a33]/20 backdrop-blur-md">
        <div className="text-3xl font-bold tracking-[0.2em] mb-12 uppercase text-white">GEATALENT</div>
        <div className="flex justify-center gap-12 mb-16">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-all transform hover:scale-125">{s.icon}</a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-8 border-t border-white/5">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium">© 2024 GEATALENT COPYRIGHT</p>
          <div className="flex gap-8">
            <Link href="/terms" className="text-white/20 hover:text-white text-[9px] uppercase tracking-[0.3em] font-bold transition-colors">Terms</Link>
            <Link href="/privacy" className="text-white/20 hover:text-white text-[9px] uppercase tracking-[0.3em] font-bold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

      {/* USDC 支付弹窗 */}
      <AnimatePresence>
        {isPayModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPayModalOpen(false)} className="absolute inset-0 bg-[#001a33]/90 backdrop-blur-lg" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-md bg-[#002b1b] border border-white/10 p-10 rounded-[40px] shadow-2xl">
              <button onClick={() => setIsPayModalOpen(false)} className="absolute top-8 right-8 text-white/40 hover:text-white"><CloseIcon className="w-5 h-5" /></button>
              <h3 className="text-2xl font-serif italic mb-2 text-white">Direct Transfer</h3>
              <p className="text-[10px] text-white/40 uppercase mb-10 text-left">Plan: {selectedPlan.name} • {selectedPlan.price}</p>
              <div className="space-y-6">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-4 text-left">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40"><span>Network</span><span className="text-white font-mono uppercase">Solana</span></div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40"><span>Asset</span><span className="text-racing-green font-bold text-xs uppercase tracking-tighter">USDC (SPL)</span></div>
                </div>
                <div className="space-y-3 text-left">
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
