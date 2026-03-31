import CyberShield from "@/components/CyberShield";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { Shield, Eye, CloudCog, Siren, ArrowRight } from "lucide-react";

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift" />
        
        <div className="absolute top-[12%] right-0 w-[550px] h-[550px] opacity-80 hidden lg:block">
          <CyberShield />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/40">CYBERSECURITY PLATFORM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.05] max-w-3xl">
              Autonomous <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Cyber Defense</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-white/40 max-w-xl mb-10 font-light leading-[1.8]">
              A self-evolving security system that continuously monitors, detects, and neutralizes threats in real-time.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link href="/contact" className="aiera-button-solid inline-flex items-center gap-2 px-7 py-3.5 text-sm group">
              Secure Your Environment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
        <div className="shimmer-line mt-28" />
      </section>

      {/* CORE MODULES */}
      <section className="py-28 md:py-36 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-4 block">CORE MODULES</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Defense Architecture</h2>
              <p className="text-white/35 text-sm font-light leading-[1.8]">
                Defend against next-generation threats with intelligent automation.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Eye, title: "Threat Intelligence", desc: "Predictive AI models anticipating and blocking zero-day vulnerabilities." },
              { icon: Shield, title: "Zero Trust Model", desc: "Continuous identity verification and complex micro-segmentation." },
              { icon: CloudCog, title: "Cloud Security", desc: "Deep visibility and automated remediation across multi-cloud." },
              { icon: Siren, title: "Incident Response", desc: "Automated isolation and containment protocols within milliseconds." }
            ].map((mod, i) => (
              <FadeIn delay={i * 0.08} key={i}>
                <div className="premium-card p-8 md:p-9 h-full group">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-blue-500/15 group-hover:border-blue-500/25">
                    <mod.icon className="w-4 h-4 text-blue-400/70 transition-colors duration-500 group-hover:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{mod.title}</h3>
                  <p className="text-white/35 text-sm leading-[1.7] font-light">{mod.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="shimmer-line mt-28 md:mt-36" />
      </section>

      {/* MARQUEE */}
      <section className="py-16 bg-black overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-12">
          {["Fully integrated with AI Cloud", "Secure AI Infrastructure", "Real-time Threat Analysis", "Zero-Trust Architecture"].map((text, i) => (
            <span key={i} className={`text-2xl md:text-3xl font-medium tracking-wide px-6 ${i % 2 === 0 ? 'text-white/60' : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'}`}>
              • {text}
            </span>
          ))}
          {["Fully integrated with AI Cloud", "Secure AI Infrastructure", "Real-time Threat Analysis", "Zero-Trust Architecture"].map((text, i) => (
            <span key={`d-${i}`} className={`text-2xl md:text-3xl font-medium tracking-wide px-6 ${i % 2 === 0 ? 'text-white/60' : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'}`}>
              • {text}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
