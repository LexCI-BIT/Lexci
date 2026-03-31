import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, Shield, Brain, Cpu, Globe2, Activity, Zap } from "lucide-react";

export const metadata = {
  title: "About Us | Lexci",
  description: "Lexci is an AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* CORE PILLARS OVERVIEW */}
      <section className="pt-40 pb-28 md:pt-52 md:pb-36 bg-black relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="mb-20 max-w-2xl">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-4 block uppercase">The Core Pillars</span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Our DNA</h2>
              <p className="text-white/40 text-lg md:text-xl font-light leading-[1.8]">
                We don't just build software; we engineer resilient ecosystems capable of anticipating threats and optimizing themselves.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 1 */}
            <FadeIn delay={0.1}>
              <div className="premium-card p-10 h-full flex flex-col group hover:border-blue-500/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-blue-500/20 duration-500">
                  <Shield className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Cybersecurity</h3>
                <p className="text-white/40 font-light leading-[1.8] flex-grow">
                  A proprietary zero-trust architecture driven by machine learning that actively hunts, isolates, and neutralizes unprecedented network threats.
                </p>
              </div>
            </FadeIn>

            {/* Pillar 2 */}
            <FadeIn delay={0.2}>
              <div className="premium-card p-10 h-full flex flex-col group hover:border-purple-500/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-purple-500/20 duration-500">
                  <Brain className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Intelligent Systems</h3>
                <p className="text-white/40 font-light leading-[1.8] flex-grow">
                  Leveraging behavioral AI (InMind) to predict user interactions, automate complex workflows, and allocate computational resources dynamically.
                </p>
              </div>
            </FadeIn>

            {/* Pillar 3 */}
            <FadeIn delay={0.3}>
              <div className="premium-card p-10 h-full flex flex-col group hover:border-emerald-500/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-emerald-500/20 duration-500">
                  <Cpu className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Engineering</h3>
                <p className="text-white/40 font-light leading-[1.8] flex-grow">
                  Precision-built infrastructure designed for microscopic latency, hyper-scalability, and uncompromised uptime across distributed global networks.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="shimmer-line mt-28 md:mt-36" />
      </section>

      {/* GLOBAL STATS OVERLAY */}
      <section className="py-24 bg-black relative border-b border-white/[0.06] overflow-hidden">
        {/* Hexagon Grid Backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="text-white">
            <path d="M0 50 L20 20 L50 20 L70 50 L50 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            <path d="M50 50 L70 20 L100 20 L120 50 L100 80 L70 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center md:items-start group">
                <Globe2 className="w-6 h-6 text-blue-400/50 mb-4 group-hover:text-blue-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">12+</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Global Data Centers</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center md:items-start group">
                <Activity className="w-6 h-6 text-purple-400/50 mb-4 group-hover:text-purple-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">&lt;2ms</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Average Latency</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center md:items-start group">
                <Zap className="w-6 h-6 text-yellow-400/50 mb-4 group-hover:text-yellow-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">350k</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Threats Mitigated Daily</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center md:items-start group">
                <Shield className="w-6 h-6 text-emerald-400/50 mb-4 group-hover:text-emerald-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">24/7</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Autonomous Overwatch</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 md:py-48 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-[1.1]">
              Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">Future</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-[1.8]">
              We are constantly seeking brilliant engineers, cryptographers, and AI researchers to join our mission.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/capabilities" className="aiera-button inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center group">
                <span className="font-semibold">Explore Engineering</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/clients" className="aiera-button-solid inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center group">
                <span className="font-semibold">View Case Studies</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
