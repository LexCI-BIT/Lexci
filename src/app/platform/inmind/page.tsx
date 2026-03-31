import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { MessageCircleHeart, ScanFace, BarChart3, Route, ArrowRight } from "lucide-react";
import CyberBrain from "@/components/CyberBrain";

export default function InMindPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-purple-600/12 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift" />
        
        <div className="absolute top-[12%] right-0 w-[550px] h-[550px] opacity-80 hidden lg:block">
          <CyberBrain />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/40">INTELLIGENCE PLATFORM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.05] max-w-3xl">
              AI That Understands <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Human Behavior</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-white/40 max-w-xl mb-10 font-light leading-[1.8]">
              An AI-powered mental intelligence system designed for institutions to monitor and enhance well-being.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link 
              href="/InMind-pitch-deck.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="aiera-button-solid inline-flex items-center gap-2 px-7 py-3.5 text-sm group"
            >
              Experience Wellness
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
        <div className="shimmer-line mt-28" />
      </section>

      {/* CORE SYSTEMS */}
      <section className="py-28 md:py-36 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-4 block">INTERACTIVE SYSTEMS</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Emotional Intelligence</h2>
              <p className="text-white/35 text-sm font-light leading-[1.8]">
                Neural architectures built to understand and support human behavior at scale.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: MessageCircleHeart, title: "AI Companion", desc: "A responsive, empathetic conversational agent providing psychological support." },
              { icon: ScanFace, title: "Emotion Detection", desc: "Real-time biometric and sentiment analysis to identify stress markers." },
              { icon: BarChart3, title: "Analytics Engine", desc: "Aggregated organizational wellness metrics for proactive leadership." },
              { icon: Route, title: "Optimization", desc: "Dynamically generated actionable roadmaps from behavioral patterns." }
            ].map((sys, i) => (
              <FadeIn delay={i * 0.08} key={i}>
                <div className="premium-card p-8 md:p-9 h-full group">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/15 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-purple-500/15 group-hover:border-purple-500/25">
                    <sys.icon className="w-4 h-4 text-purple-400/70 transition-colors duration-500 group-hover:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{sys.title}</h3>
                  <p className="text-white/35 text-sm leading-[1.7] font-light">{sys.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
