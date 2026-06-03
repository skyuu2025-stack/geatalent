"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, Shield, Calendar, Mail, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AssessmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- 已更新的真实联系方式 ---
  const MEETING_LINK = "https://calendly.com/skyuu2025"; 
  const EMAIL_ADDRESS = "skyuu2025@gmail.com"; 

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-[#002b1b]">
      
      {/* 杂志色背景 (Midnight Blue to Deep Forest) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#001a33] to-[#002b1b]" />
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004225]/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* 顶部导航 */}
      <nav className="relative z-10 p-8 flex justify-between items-center border-b border-white/5">
        <Link href="/" className="text-white/50 hover:text-white transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Exit
        </Link>
        <div className="text-xl font-bold tracking-[0.1em] uppercase text-white">GEATALENT</div>
      </nav>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-16">
            <span className="text-white/40 font-serif italic text-lg mb-4 block">Confidential Assessment</span>
            <h1 className="text-5xl font-bold tracking-tight mb-6 text-white uppercase">Initial <br/>Analysis.</h1>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">提交您的初步意向，或通过以下通道直接开启战略对话。</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none transition-all text-white" placeholder="Alexander Chen" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Industry Sector</label>
              <select className="w-full bg-[#001a33] border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none transition-all text-white/70">
                <option>Fashion & Creative Arts</option>
                <option>AI & Digital Technology</option>
                <option>Web3 & Blockchain</option>
                <option>Academic Research</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Career Narrative (Short)</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#004225] outline-none transition-all text-white" placeholder="请简述您的核心成就与获奖经历..." />
            </div>

            <div className="pt-8">
              <button 
                type="button"
                onClick={() => setIsSubmitted(true)}
                className="w-full py-5 bg-[#004225] text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all duration-700 shadow-2xl flex items-center justify-center gap-3"
              >
                Submit Initial Assessment
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[8px] text-white/20 uppercase tracking-widest mt-12">
              <Shield className="w-3 h-3" /> GDPR Compliant • Encrypted Protocol
            </div>
          </form>
        </motion.div>
      </main>

      {/* --- ACTION OVERLAY (跳转预约/邮件) --- */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsSubmitted(false)}
              className="absolute inset-0 bg-[#001a33]/95 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white text-[#001a33] p-10 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
            >
              <button onClick={() => setIsSubmitted(false)} className="absolute top-8 right-8 text-[#001a33]/30 hover:text-[#001a33]">
                <X className="w-5 h-5" />
              </button>

              <div className="mb-12 text-left">
                <span className="text-[#004225] font-serif italic text-lg mb-2 block">Step Complete.</span>
                <h3 className="text-3xl font-bold tracking-tight uppercase">Ready for <br/>Dialogue.</h3>
              </div>

              <div className="space-y-4">
                {/* 预约会议入口 - 已指向 skyuu2025 */}
                <a 
                  href={MEETING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-6 bg-[#001a33] text-white rounded-3xl hover:bg-[#004225] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-white/70" />
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">Strategy Call</p>
                      <p className="text-sm font-bold text-white">Book via Calendly</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:translate-x-2 transition-transform" />
                </a>

                {/* 发送邮件入口 - 已指向 skyuu2025@gmail.com */}
                <a 
                  href={`mailto:${EMAIL_ADDRESS}?subject=GEATALENT Assessment Request`}
                  className="flex items-center justify-between w-full p-6 border border-[#001a33]/10 rounded-3xl hover:border-[#001a33] transition-all group"
                >
                  <div className="flex items-center gap-4 text-left">
                    <Mail className="w-6 h-6 text-[#001a33]/60" />
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Direct Contact</p>
                      <p className="text-sm font-bold">Send Formal Email</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#001a33]/30 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              <p className="mt-12 text-[9px] text-center text-[#001a33]/40 uppercase tracking-widest leading-relaxed">
                Our concierge will also review your form <br/> and contact you within 24 hours.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="relative z-10 py-12 text-center border-t border-white/5">
         <p className="text-white/20 text-[9px] uppercase tracking-widest">© 2024 GEATALENT COPYRIGHT</p>
      </footer>
    </div>
  );
}
