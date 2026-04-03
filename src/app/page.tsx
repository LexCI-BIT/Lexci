"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Shield, Brain, Globe, BookOpen, Smartphone, Cloud, Lock, Zap } from "lucide-react";
import CyberShield from "@/components/CyberShield";
import CyberBrain from "@/components/CyberBrain";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Animate progress circle on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(91);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const menuLinks = ["Home", "About Us", "Services", "Projects", "Contact"];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white" style={{ fontFamily: "'Geist', sans-serif" }}>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative min-h-screen flex flex-col">

        {/* Video Background — no overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "37% center" }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4" type="video/mp4" />
        </video>

        {/* ── NAVBAR ── */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-[120px] py-5">
          {/* Left: Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/10 transition-all"
          >
            <div className="flex flex-col gap-[4px]">
              <span className="block w-7 h-[2px] bg-white" />
              <span className="block w-7 h-[2px] bg-white" />
            </div>
            <span className="text-white text-sm font-medium uppercase tracking-widest">Menu</span>
          </button>

          {/* Center: Logo */}
          <span className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider text-white">
            LEXCI
          </span>

          {/* Right: Nav pills (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/about" className="px-5 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all">
              About Us
            </Link>
            <Link href="#services" className="px-5 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all">
              Services
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full text-black text-sm font-medium uppercase bg-gradient-to-r from-[hsl(220,70%,78%)] to-[hsl(40,80%,82%)] hover:opacity-90 transition-all"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* ── FULL-SCREEN MENU OVERLAY ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-white flex flex-col"
              initial={{ clipPath: "circle(0% at 80px 40px)" }}
              animate={{ clipPath: "circle(150% at 80px 40px)" }}
              exit={{ clipPath: "circle(0% at 80px 40px)" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Menu Navbar */}
              <div className="flex items-center justify-between px-6 md:px-[120px] py-5">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/30 hover:bg-black/5 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-black">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-black text-sm font-medium uppercase tracking-widest">Close</span>
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider text-black">
                  LEXCI
                </span>
              </div>

              {/* Menu Links */}
              <div className="flex-1 flex flex-col justify-center px-6 md:px-[120px]">
                {[
                  {
                    label: "Platform", href: "#platform", children: [
                      { label: "Cybersecurity", href: "/platform/cybersecurity" },
                      { label: "InMind AI", href: "/platform/inmind" },
                    ]
                  },
                  { label: "Services", href: "#services" },
                  { label: "Capabilities", href: "/capabilities" },
                  { label: "Clients", href: "/clients" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item, i) => (
                  <div key={item.label}>
                    <motion.a
                      href={item.href}
                      onClick={() => !item.children && setMenuOpen(false)}
                      className="group flex items-center justify-between py-4 md:py-5 border-b border-black/10 transition-all"
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.08,
                        duration: 0.6,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                    >
                      <span
                        className="text-black font-light -tracking-[0.06em] transition-transform group-hover:translate-x-1"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                      >
                        {item.label}
                      </span>
                      <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-black/40 transition-all group-hover:translate-x-0.5 group-hover:text-black" />
                    </motion.a>
                    {item.children && item.children.map((child, ci) => (
                      <motion.a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-3 md:py-3.5 pl-6 md:pl-10 border-b border-black/5 transition-all"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15 + i * 0.08 + (ci + 1) * 0.06,
                          duration: 0.6,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                      >
                        <span
                          className="text-black/60 font-light -tracking-[0.04em] transition-all group-hover:translate-x-1 group-hover:text-black"
                          style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)" }}
                        >
                          {child.label}
                        </span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black/20 transition-all group-hover:translate-x-0.5 group-hover:text-black/50" />
                      </motion.a>
                    ))}
                  </div>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="flex items-center justify-between px-6 md:px-[120px] py-6">
                <span className="text-black/40 text-xs tracking-[0.2em] uppercase">Lexci Platform</span>
                <span className="text-black/40 text-xs tracking-[0.2em] uppercase">© 2026</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-start pt-6 px-6 pb-2 md:justify-end md:pt-0 md:px-10 md:pb-16">
          {/* Subheading Row */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-white">AI-Native Platform</span>
          </div>

          {/* Heading + Stats */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            {/* Heading */}
            <div className="max-w-2xl">
              <h1 className="leading-[0.95] -tracking-[0.03em] mb-6" style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", fontFamily: "'Poppins', sans-serif" }}>
                <span className="block font-light">AI-Powered Security</span>
                <span className="block font-light">Infrastructure for a</span>
                <span className="block mt-2" style={{ fontFamily: "'Gilda Display', serif" }}>Scalable World</span>
              </h1>
              <p className="text-white/50 text-sm md:text-[15px] font-light leading-[1.8] max-w-lg mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                A unified platform combining cybersecurity, artificial intelligence, and engineering systems to build, protect, and scale digital ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link href="#platform" className="bg-white text-black px-7 py-3.5 text-sm font-medium rounded-full inline-flex items-center gap-2 group hover:bg-white/90 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                  Explore Platform
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/contact" className="border border-white/25 text-white px-7 py-3.5 text-sm font-medium rounded-full hover:bg-white/[0.06] hover:border-white/40 transition-all">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Stats / Progress Circle */}
            <div className="mt-8 md:mt-0 lg:max-w-xs lg:pb-4">
              <div className="flex items-start gap-5">
                <svg width="120" height="120" viewBox="0 0 120 120" className="shrink-0">
                  <circle
                    cx="60" cy="60" r="54"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="60" cy="60" r="54"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />
                  <text x="60" y="60" textAnchor="middle" dominantBaseline="central" className="fill-white text-lg font-medium" style={{ fontFamily: "'Geist', sans-serif" }}>
                    91%
                  </text>
                </svg>
                <p className="text-white/70 text-sm leading-relaxed pt-1">
                  Average increase in digital infrastructure resilience by unifying cybersecurity, AI, and engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── MARQUEE BAR ── */}
        <div className="relative z-10 px-6 md:px-10 pb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white">Our Clients</span>
            <span className="hidden md:block text-xs font-medium tracking-[0.2em] uppercase text-white">Trusted by leading organizations</span>
          </div>
          <div className="border-t border-white/10 overflow-hidden py-5">
            <div className="animate-marquee-evr whitespace-nowrap flex items-center">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-16 mr-16">
                  {["Onyx Edutech", "Onyx EduVoyage", "Camplyft", "Bidryde", "Evacodes", "Smart Clues", "NexGenTechno Consulting"].map((brand) => (
                    <span key={`${setIdx}-${brand}`} className="text-white/50 text-lg font-medium tracking-wide">
                      {brand}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REST OF PAGE (Poppins) ═══════════ */}
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>

        {/* STATS */}
        <section className="py-14 bg-black/50 border-y border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "99.9%", label: "Uptime SLA" },
                { value: "< 5ms", label: "Threat Response" },
                { value: "50+", label: "Enterprise Clients" },
                { value: "24/7", label: "Active Monitoring" },
              ].map((stat, i) => (
                <FadeIn delay={i * 0.06} key={i}>
                  <div className="group cursor-default">
                    <div className="text-2xl md:text-3xl font-semibold text-white mb-1 tracking-tight transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">{stat.value}</div>
                    <div className="text-[11px] font-light text-white/30 tracking-[0.15em]">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section id="platform" className="py-24 md:py-32 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="mb-14 md:mb-16 max-w-xl">
                <span className="text-[11px] font-medium tracking-[0.2em] text-white/30 mb-4 block">CORE PRODUCTS</span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                  The Lexci <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Platform</span>
                </h2>
                <p className="text-white/35 text-sm font-light leading-[1.8]">
                  Two integrated systems. One intelligent infrastructure designed to protect, analyze, and scale your digital operations.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-5">
              <FadeIn delay={0.1}>
                <div className="premium-card p-8 md:p-10 h-full flex flex-col group">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/[0.05] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-[11px] font-medium tracking-[0.15em] text-white/30">SECURITY</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Cybersecurity</h3>
                    <p className="text-white/35 text-sm mb-6 font-light leading-[1.8] max-w-sm">
                      Autonomous threat detection, zero-trust architecture, and real-time defense systems for enterprise scale.
                    </p>
                  </div>
                  <div className="w-full h-32 md:h-40 relative my-2 flex justify-center items-center transition-all duration-700 group-hover:scale-[1.03]">
                    <div className="w-full h-full absolute flex items-center justify-center pointer-events-none transform scale-[0.8] sm:scale-90">
                      <CyberShield />
                    </div>
                  </div>
                  <div className="relative z-10 pt-5 border-t border-white/[0.05]">
                    <Link href="/platform/cybersecurity" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-all group/link">
                      View Platform <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="premium-card p-8 md:p-10 h-full flex flex-col group">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/[0.05] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/15 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-[11px] font-medium tracking-[0.15em] text-white/30">INTELLIGENCE</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">InMind AI</h3>
                    <p className="text-white/35 text-sm mb-6 font-light leading-[1.8] max-w-sm">
                      Behavioral intelligence and mental wellness powered by adaptive AI systems for modern organizations.
                    </p>
                  </div>
                  <div className="w-full h-32 md:h-40 relative my-2 flex justify-center items-center transition-all duration-700 group-hover:-translate-y-1.5">
                    <div className="w-full h-full absolute flex items-center justify-center pointer-events-none transform scale-[0.8] sm:scale-90">
                      <CyberBrain />
                    </div>
                  </div>
                  <div className="relative z-10 pt-5 border-t border-white/[0.05]">
                    <Link href="/platform/inmind" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-all group/link">
                      Explore InMind <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="shimmer-line mt-24 md:mt-32" />
        </section>

        {/* CAPABILITIES */}
        <section id="services" className="py-24 md:py-32 relative z-10 bg-black overflow-hidden">
          <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-16 md:mb-20">
              <FadeIn>
                <div className="max-w-xl">
                  <span className="text-[11px] font-medium tracking-[0.2em] text-white/30 mb-4 block">SERVICES</span>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                    Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Capabilities</span>
                  </h2>
                  <p className="text-white/35 text-sm font-light leading-[1.8] mb-6">
                    Full-spectrum engineering services designed for modern digital infrastructure.
                  </p>
                  <div className="flex items-center gap-6 text-[11px] font-medium tracking-[0.15em] text-white/25">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" /> DESIGN</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" /> DEVELOP</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" /> DEPLOY</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="hidden lg:flex justify-center items-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.06] to-purple-500/[0.06] rounded-full blur-[80px] scale-75 pointer-events-none" />
                  <img src="https://static.wixstatic.com/media/11062b_3be7f4cbca03445db9529f685cb65ba2f000.png" alt="3D Element" className="w-[320px] h-auto object-contain animate-float drop-shadow-[0_0_40px_rgba(100,100,255,0.2)] relative z-10" />
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Globe, title: "Web Development", desc: "Scalable, high-performance web platforms.", accent: "from-blue-500/20 to-blue-500/0", iconColor: "text-blue-400/70 group-hover:text-blue-400" },
                { icon: BookOpen, title: "LMS Systems", desc: "Intelligent education platforms with analytics.", accent: "from-emerald-500/20 to-emerald-500/0", iconColor: "text-emerald-400/70 group-hover:text-emerald-400" },
                { icon: Smartphone, title: "App Development", desc: "Cross-platform apps for performance.", accent: "from-orange-500/20 to-orange-500/0", iconColor: "text-orange-400/70 group-hover:text-orange-400" },
                { icon: Cloud, title: "Cloud Development", desc: "Secure cloud-native system design.", accent: "from-cyan-500/20 to-cyan-500/0", iconColor: "text-cyan-400/70 group-hover:text-cyan-400" },
                { icon: Lock, title: "Cloud Security", desc: "Protection for distributed cloud environments.", accent: "from-red-500/20 to-red-500/0", iconColor: "text-red-400/70 group-hover:text-red-400" },
                { icon: Brain, title: "AI Integration", desc: "Custom AI deployment and automation.", accent: "from-purple-500/20 to-purple-500/0", iconColor: "text-purple-400/70 group-hover:text-purple-400" }
              ].map((cap, i) => (
                <FadeIn delay={i * 0.05} key={i}>
                  <div className="premium-card p-6 h-full group cursor-default">
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${cap.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                    <div className="relative z-10">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.12]">
                        <cap.icon className={`w-3.5 h-3.5 transition-colors duration-500 ${cap.iconColor}`} />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1.5">{cap.title}</h4>
                      <p className="text-[12px] text-white/30 leading-[1.7] font-light">{cap.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <div className="shimmer-line mt-24 md:mt-32" />
        </section>

        {/* CLIENTS */}
        <section className="py-20 md:py-24 bg-black overflow-hidden">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-[11px] font-medium tracking-[0.2em] text-white/30 mb-3 block">TRUST LAYER</span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Powering Modern Brands</h2>
              <p className="text-white/25 text-sm font-light">Trusted by digital-first organizations worldwide.</p>
            </div>
          </FadeIn>
          <div className="relative w-full flex overflow-x-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee whitespace-nowrap flex items-center space-x-8 px-4">
              {["Onyx Edutech", "Onyx EduVoyage", "Camplyft", "Bidryde", "Evacodes", "Smart Clues", "NexGenTechno"].map((c, i) => (
                <span key={i} className="text-xl md:text-2xl font-medium text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] tracking-wide px-4 hover:text-white hover:[-webkit-text-stroke:1px_transparent] transition-all duration-500 cursor-default">{c}</span>
              ))}
              {["Onyx Edutech", "Onyx EduVoyage", "Camplyft", "Bidryde", "Evacodes", "Smart Clues", "NexGenTechno"].map((c, i) => (
                <span key={`d-${i}`} className="text-xl md:text-2xl font-medium text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] tracking-wide px-4 hover:text-white hover:[-webkit-text-stroke:1px_transparent] transition-all duration-500 cursor-default">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/[0.06] to-purple-600/[0.06] rounded-full blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <FadeIn>
              <div className="text-center max-w-xl mx-auto">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-5 h-5 text-white/50" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">get started?</span>
                </h2>
                <p className="text-white/35 text-sm font-light leading-[1.8] mb-8">
                  Join the next generation of enterprises building on secure, intelligent infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/contact" className="bg-white text-black px-7 py-3.5 text-sm font-medium rounded-full inline-flex items-center gap-2 group hover:bg-white/90 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/contact" className="border border-white/20 text-white px-7 py-3.5 text-sm font-medium rounded-full hover:bg-white/[0.04] hover:border-white/30 transition-all">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
