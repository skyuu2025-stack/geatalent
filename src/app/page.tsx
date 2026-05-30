"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock, Coins, Copy, X as CloseIcon,
  Twitter, Youtube, Instagram
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

// 自定义 TikTok 图标组件
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

  // --- 更新后的真实社交媒体链接 ---
  const socials = [
    { 
      name: "X", 
      icon: <Twitter className="w-4 h-4" />, 
      href: "https://x.com/GEATalent" 
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="w-4 h-4" />, 
      href: "https://youtube.com/@gea_talent?si=0ipqOP-VayiFhymp" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="w-4 h-4" />, 
      href: "https://www.instagram.com/geatalent?igsh=aWtncTB4azMxM2Qy&utm_source=qr" 
    },
    { 
      name: "TikTok", 
      icon: <TikTokIcon className="w-4 h-4" />, 
      href: "https://www.tiktok.com/@geatalent?_r=1&_t=ZS-96nKO9SfUgO" 
    },
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
    { name: "Basic Alpha", price: "£190", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC, features: ["Strategy Audit", "Pathway Map", "Signal Feed"] },
    { name: "Intel Pro", price: "£490", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, features: ["Narrative Build", "Wallet Tracking", "Priority Support"], popular: true },
    { name: "Strategic Premium", price: "£990", priceLink: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM, features: ["Bespoke Consultation", "Full PR Strategy", "End-to-End"] },
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#050505] text-white antialiased overflow-x-hidden min-h-screen font-sans selection:bg-[#004225]">
      
      {/* 动态背景光晕 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#004225]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-[#002366]/15 blur-[120px] rounded-full" />
      </div>

      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">GEATALENT</div>
        
        <div className="hidden lg:flex gap-12 items-center text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px]">
          <Link href="/global-talent" className="hover:text-white transition-colors">Global Talent</Link>
          <Link href="/portfolio-audit" className="hover:text-white transition-colors">Portfolio</Link>
          <a href="#intelligence" className="hover:text-white transition-colors">Intelligence</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-6">
          {/* 导航栏微型社交链接 */}
          <div className="hidden sm:flex gap-4 border-r border-white/10 pr-6 mr-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                {s.icon}
              </a>
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
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className="mb-10 flex items-center justify-center gap-4 text-zinc-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
              <span className="w-6 md:w-8 h-[1px] bg-[#004225]" />
              HONGKONG • VIETNAM • UK • US • GLOBAL
              <span className="w-6 md:w-8 h-[1px] bg-[#002366]" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-bold tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 text-white uppercase">
              Build Your <br />
              <span className="font-serif italic font-light text-zinc-300">Global Talent</span>
            </h1>
            <p className="text-zinc-300 text-sm md:text-lg max-w-xl mx-auto mb-12 leading-relaxed opacity-90 px-4 italic font-light">
              Strategic portfolio architecture and AI-driven intelligence for high-tier professionals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/assessment" className="px-12 py-4 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(0,66,37,0.4)] transition-all inline-block">Start Consultation</Link>
              <Link href="/case-studies" className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-2 transition-all group">Case Studies <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></Link>
            </div>
          </motion.div>
        </section>

        {/* AI 看板预览 */}
        <section id="intelligence" className="py-40 px-8 text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Signals in <br />the Noise.</h2>
              <p className="text-zinc-500 text-lg mb-12 leading-relaxed max-w-md">Our AI monitoring engine tracks smart money movements and founder narratives 24/7 across the UK Web3 ecosystem.</p>
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#004225] hover:text-[#002366] transition-colors group">Explore Alpha Dashboard <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></button>
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
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24 text-left">
                <h2 className="text-5xl font-serif italic mb-6 text-white">Invest in Excellence.</h2>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Stripe & Direct USDC Payments Accepted.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`p-10 border ${plan.popular ? 'border-[#004225] bg-[#004225]/5' : 'border-white/5'} hover:border-[#002366] transition-all flex flex-col justify-between group`}>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-8">{plan.name}</h4>
                      <div className="text-5xl font-medium mb-12 text-white">{plan.price}<span className="text-xs text-zinc-700 font-normal"> / mo</span></div>
                      <ul className="space-y-4 mb-16 text-[11px] text-zinc-400">
                        {plan.features.map(f => (<li key={f} className="flex items-center gap-3"><Check className="w-3.5 h-3.5 text-[#004225]" /> {f}</li>))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <button onClick={() => { if (plan.priceLink) window.location.href = plan.priceLink; }} className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all">Access with Card</button>
                      <button onClick={() => { setSelectedPlan({ name: plan.name, price: plan.price }); setIsPayModalOpen(true); }} className="flex items-center justify-center gap-2 w-full py-4 text-[10px] font-bold uppercase tracking-widest rounded-full border border-royal-blue/30 text-zinc-500 hover:bg-[#002366] hover:text-white transition-all"><Coins className="w-3.5 h-3.5" /> Pay with USDC</button>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>

      {/* 页脚 - 社交链接展示 */}
      <footer className="py-24 border-t border-white/5 text-center px-6">
        <div className="text-2xl font-bold tracking-[0.2em] mb-10 uppercase text-white">GEATALENT</div>
        
        <div className="flex justify-center gap-8 mb-12">
          {socials.map((s) => (
            <a 
              key={s.name} 
              href={s.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-3 rounded-full border border-white/5 bg-zinc-950 text-zinc-500 group-hover:text-white group-hover:border-[#004225] group-hover:bg-[#004225]/10 transition-all duration-500">
                {s.icon}
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-700 group-hover:text-zinc-400 transition-colors">
                {s.name}
              </span>
            </a>
          ))}
        </div>

        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-medium">© 2024 GEATALENT COPYRIGHT</p>
      </footer>

      {/* USDC 支付弹窗 */}
      <AnimatePresence>
        {isPayModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPayModalOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-md bg-zinc-950 border border-white/10 p-8 rounded-3xl shadow-2xl text-left">
              <button onClick={() => setIsPayModalOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><CloseIcon className="w-5 h-5" /></button>
              <h3 className="text-xl font-serif italic mb-2 text-white">Direct USDC Payment</h3>
              <p className="text-[10px] text-zinc-500 uppercase mb-8">Plan: {selectedPlan.name} • {selectedPlan.price}</p>
              <div className="space-y-6">
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500"><span>Network</span><span className="text-white font-mono">Solana</span></div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500"><span>Asset</span><span className="text-racing-green font-bold text-xs uppercase tracking-tighter">USDC (SPL)</span></div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">Wallet Address</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-[#050505] p-4 rounded-xl border border-white/5 text-[10px] font-mono break-all text-zinc-300">{walletAddress}</div>
                    <button onClick={copyAddress} className="p-4 bg-white text-black rounded-xl hover:bg-[#004225] hover:text-white transition-all flex items-center justify-center">
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
    </div>
  );
}
