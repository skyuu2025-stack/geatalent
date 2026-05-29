"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, Globe, Cpu, Zap, 
  Check, ChevronRight, Activity, Lock, Coins, Copy, X, Smartphone 
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function GeatalentFinalPage() {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [copied, setCopied] = useState(false);

  // 你的 Solana 钱包地址
  const walletAddress = "BQeaNnGCRtBnFye7ynSGhFtgzUgUjiCo4QmAKNbgqWh1";

  // 定义三个档位的价格和环境变量 ID
  const pricingPlans = [
    { 
      name: "Basic Alpha", 
      price: "£190", 
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC,
      features: ["Telegram Feed", "Weekly Trend Analysis", "Initial Strategy Audit"] 
    },
    { 
      name: "Intel Pro", 
      price: "£490", 
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO,
      features: ["Smart Wallet Tracking", "AI Narrative Alerts", "Full Dashboard Access", "Priority Support"], 
      popular: true 
    },
    { 
      name: "Strategic Premium", 
      price: "£990", 
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM,
      features: ["1-on-1 Consultation", "VIP Early Signals", "Bespoke Portfolio Roadmap", "Full PR Strategy"] 
    },
  ];

  const openPayModal = (planName: string, planPrice: string) => {
    setSelectedPlan({ name: planName, price: planPrice });
    setIsPayModalOpen(true);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#050505] text-white antialiased overflow-x-hidden min-h-screen font-sans">
      
      {/* 动态背景光晕 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#004225]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-[#002366]/15 blur-[120px] rounded-full" />
      </div>

      {/* 导航栏 Navbar */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-white">
          GEATALENT
        </div>
        <div className="hidden lg:flex gap-12 items-center text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px]">
          <a href="#talent" className="hover:text-white transition-colors">Global Talent</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#intelligence" className="hover:text-white transition-colors">Intelligence</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#004225] hover:text-white transition-all duration-500">
                Connect
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
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
              <span className="italic font-serif font-light text-zinc-400">Global Talent</span>
            </h1>
            <p className="text-zinc-300 text-sm md:text-lg max-w-xl mx-auto mb-12 leading-relaxed opacity-90 px-4 italic font-light">
              Strategic portfolio architecture and AI-driven intelligence for high-tier professionals.
            </p>
            <a href="#pricing" className="px-12 py-4 bg-[#004225] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(0,66,37,0.4)] transition-all inline-block">
              Start Your Journey
            </a>
          </motion.div>
        </section>

        {/* 定价方案 Pricing - 已更新为 190, 490, 990 */}
        <section id="pricing" className="py-40 px-6 border-t border-white/10 bg-black/40">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-5xl font-serif italic mb-6">Invest in Excellence.</h2>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Stripe & Direct USDC Payments.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`p-10 border ${plan.popular ? 'border-[#004225] bg-[#004225]/5' : 'border-white/5'} flex flex-col justify-between hover:bg-zinc-900/50 transition-all group`}>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-8">{plan.name}</h4>
                      <div className="text-5xl font-medium mb-12">{plan.price}<span className="text-xs text-zinc-700 font-normal"> / mo</span></div>
                      <ul className="space-y-4 mb-16 text-[11px] text-zinc-400">
                        {plan.features.map(f => (
                          <li key={f} className="flex items-center gap-3"><Check className="w-3.5 h-3.5 text-[#004225]" /> {f}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Stripe 支付逻辑 */}
                      <button 
                        onClick={() => {
                          if (plan.priceId) {
                            // 这里可以对接具体的 Stripe Checkout 逻辑，或者跳转到你的 Stripe 支付链接
                            window.location.href = `https://buy.stripe.com/${plan.priceId}`;
                          }
                        }}
                        className={`w-full py-4 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${plan.popular ? 'bg-white text-black hover:bg-zinc-200' : 'border border-zinc-800 text-zinc-400 hover:text-white'}`}
                      >
                        Access with Card
                      </button>
                      
                      {/* USDC 支付弹窗 */}
                      <button 
                        onClick={() => openPayModal(plan.name, plan.price)}
                        className="flex items-center justify-center gap-2 w-full py-4 text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#002366]/30 text-zinc-500 hover:bg-[#002366] hover:text-white transition-all"
                      >
                        <Coins className="w-3.5 h-3.5" /> Pay with USDC
                      </button>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>

      {/* --- WEB3 PAYMENT MODAL --- */}
      <AnimatePresence>
        {isPayModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsPayModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-zinc-950 border border-white/10 p-8 rounded-3xl shadow-2xl"
            >
              <button onClick={() => setIsPayModalOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-8 text-left">
                <h3 className="text-xl font-serif italic mb-2">Direct USDC Payment</h3>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">Plan: {selectedPlan.name} • {selectedPlan.price}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <span>Network</span>
                    <span className="text-white flex items-center gap-2 font-mono uppercase tracking-tighter">Solana</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <span>Asset</span>
                    <span className="text-white font-mono uppercase tracking-tighter text-racing-green font-bold text-xs">USDC (SPL)</span>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">Wallet Address</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-[#050505] p-4 rounded-xl border border-white/5 text-[10px] font-mono break-all text-zinc-300 leading-tight">
                      {walletAddress}
                    </div>
                    <button 
                      onClick={copyAddress}
                      className="p-4 bg-white text-black rounded-xl hover:bg-[#004225] hover:text-white transition-all flex items-center justify-center"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl text-center">
                  <p className="text-[10px] text-zinc-500 uppercase leading-relaxed font-bold tracking-widest">
                    After payment, please send your transaction hash and login email to our concierge.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 border-t border-white/5 text-center px-6">
        <div className="text-2xl font-bold tracking-[0.2em] mb-8 uppercase text-white">GEATALENT</div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-medium">© 2024 GEATALENT COPYRIGHT</p>
      </footer>
    </div>
  );
}
