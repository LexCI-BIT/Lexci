import FadeIn from "@/components/FadeIn";
import { Globe, BookOpen, Smartphone, Cloud, Lock, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* HERO with 3D Element */}
      <section className="pt-36 pb-24 overflow-hidden relative">
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-gradient-pulse" />
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <FadeIn>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                  <span className="text-[11px] font-medium tracking-[0.2em] text-white/40">ENGINEERING</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold tracking-tight mb-5 leading-[1.08] max-w-lg">
                  Engineering <br /><span className="text-transparent text-gradient-white">Capabilities</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-sm md:text-base text-white/35 max-w-md mb-8 font-light leading-[1.9]">
                  Full-spectrum engineering services designed for modern digital infrastructure. From concept to deployment — we build systems that scale.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-6 text-[11px] font-medium tracking-[0.15em] text-white/25 mb-8">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" /> DESIGN</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" /> DEVELOP</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" /> DEPLOY</span>
                </div>
                <Link href="/contact" className="bg-white text-black px-6 py-3 text-sm font-medium rounded-full inline-flex items-center gap-2 group hover:bg-white/90 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="hidden lg:flex justify-center items-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.06] to-purple-500/[0.06] rounded-full blur-[80px] scale-90 pointer-events-none" />
                <img
                  src="https://static.wixstatic.com/media/11062b_3be7f4cbca03445db9529f685cb65ba2f000.png"
                  alt="Engineering 3D Element"
                  className="w-[360px] h-auto object-contain animate-float drop-shadow-[0_0_50px_rgba(100,100,255,0.2)] relative z-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="shimmer-line mt-8" />
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Globe, title: "Web Development", desc: "Scalable, high-performance web platforms with modern architecture and responsive design.", accent: "from-blue-500/20 to-blue-500/0", iconColor: "text-blue-400/70 group-hover:text-blue-400" },
              { icon: BookOpen, title: "LMS Systems", desc: "Intelligent education platforms with analytics, automation, and adaptive learning.", accent: "from-emerald-500/20 to-emerald-500/0", iconColor: "text-emerald-400/70 group-hover:text-emerald-400" },
              { icon: Smartphone, title: "App Development", desc: "Cross-platform applications designed for performance and user engagement.", accent: "from-orange-500/20 to-orange-500/0", iconColor: "text-orange-400/70 group-hover:text-orange-400" },
              { icon: Cloud, title: "Cloud Architecture", desc: "Secure and scalable cloud-native system design with multi-region support.", accent: "from-cyan-500/20 to-cyan-500/0", iconColor: "text-cyan-400/70 group-hover:text-cyan-400" },
              { icon: Lock, title: "Cloud Security", desc: "Advanced protection for distributed cloud environments and compliance.", accent: "from-red-500/20 to-red-500/0", iconColor: "text-red-400/70 group-hover:text-red-400" },
              { icon: Brain, title: "AI Integration", desc: "Custom AI model deployment and intelligent automation pipelines.", accent: "from-purple-500/20 to-purple-500/0", iconColor: "text-purple-400/70 group-hover:text-purple-400" }
            ].map((cap, i) => (
              <FadeIn delay={i * 0.06} key={i}>
                <div className="premium-card p-7 h-full group cursor-default">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${cap.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.12]">
                      <cap.icon className={`w-4 h-4 transition-colors duration-500 ${cap.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{cap.title}</h3>
                    <p className="text-[13px] text-white/30 leading-[1.7] font-light">{cap.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
