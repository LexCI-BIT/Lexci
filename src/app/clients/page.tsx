import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Brain, Building2, Quote, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Clients | Lexci",
  description: "Trusted by visionaries. Empowering the world's most innovative enterprises with autonomous defense and behavioral intelligence.",
};

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift-reverse" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Trusted by Visionaries</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-[1.05] max-w-4xl mx-auto">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Partners</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-[1.8] mb-12">
              Empowering the world's most innovative enterprises with autonomous defense, behavioral intelligence, and elite engineering capabilities.
            </p>
          </FadeIn>
        </div>
        <div className="shimmer-line mt-28 md:mt-36" />
      </section>

      {/* MARQUEE LOGO GRID */}
      <section className="py-16 bg-black overflow-hidden relative border-b border-white/[0.06]">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 md:space-x-24">
          {[
            "ONYX EDUTECH", "ONYX EDUVOYAGE", "CAMPLYFT", 
            "BIDRYDE", "EVACODES", "SMART CLUES", "NEXGENTECHNO CONSULTING"
          ].map((client, i) => (
            <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
              <Building2 className={`w-6 h-6 ${i % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
              <span className="text-xl md:text-2xl font-bold tracking-widest text-white">
                {client}
              </span>
            </div>
          ))}
          {[
            "ONYX EDUTECH", "ONYX EDUVOYAGE", "CAMPLYFT", 
            "BIDRYDE", "EVACODES", "SMART CLUES", "NEXGENTECHNO CONSULTING"
          ].map((client, i) => (
            <div key={`d-${i}`} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
              <Building2 className={`w-6 h-6 ${i % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
              <span className="text-xl md:text-2xl font-bold tracking-widest text-white">
                {client}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="py-28 md:py-36 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-4 block uppercase">Featured Work</span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Success Stories</h2>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <FadeIn delay={0.1}>
              <div className="premium-card p-10 md:p-12 h-full flex flex-col group">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="badge-pill !bg-blue-500/10 !text-blue-400 !border-blue-500/20 uppercase">Cybersecurity</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                  Securing Global Transactions for NexGenTechno Consulting
                </h3>
                <p className="text-white/40 text-sm md:text-base font-light leading-[1.8] mb-12 flex-grow">
                  NexGenTechno required a zero-trust architecture robust enough to handle complex consulting workflows while remaining imperceptible to end-users. Lexci deployed an autonomous defense grid that reduced incident response time to milliseconds.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                  <div>
                    <div className="text-3xl font-light text-blue-400 mb-1">99.9%</div>
                    <div className="text-xs text-white/35 font-medium tracking-wider uppercase">Threat Mitigation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-blue-400 mb-1">&lt;2ms</div>
                    <div className="text-xs text-white/35 font-medium tracking-wider uppercase">Response Latency</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Case Study 2 */}
            <FadeIn delay={0.2}>
              <div className="premium-card p-10 md:p-12 h-full flex flex-col group">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="badge-pill !bg-purple-500/10 !text-purple-400 !border-purple-500/20 uppercase">InMind AI</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                  Predictive Behavior Mapping for Camplyft
                </h3>
                <p className="text-white/40 text-sm md:text-base font-light leading-[1.8] mb-12 flex-grow">
                  Using our InMind behavioral intelligence suite, Camplyft optimized their platform operations, anticipating user drop-offs and preventing crucial systemic failures before they occurred.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                  <div>
                    <div className="text-3xl font-light text-purple-400 mb-1">40%</div>
                    <div className="text-xs text-white/35 font-medium tracking-wider uppercase">Incidents Predicted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-purple-400 mb-1">2.4x</div>
                    <div className="text-xs text-white/35 font-medium tracking-wider uppercase">Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="shimmer-line mt-28 md:mt-36" />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Words of Trust</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Lexci's platform didn't just upgrade our security; it entirely re-architected how we approach digital trust. It feels like we are living in the future.",
                author: "Sarah Jenkins",
                role: "CISO, Onyx Edutech"
              },
              {
                quote: "The seamless integration of their AI systems into our legacy infrastructure was flawless. We saw immediate ROI within the first quarter.",
                author: "Marcus Chen",
                role: "VP Engineering, Bidryde"
              },
              {
                quote: "Unparalleled engineering precision. Lexci provides the only autonomous defense system we trust for our zero-day vulnerabilities.",
                author: "Elena Rostova",
                role: "CTO, Smart Clues"
              }
            ].map((testimonial, i) => (
              <FadeIn delay={i * 0.15} key={i}>
                <div className="glass-panel-sharp p-8 h-full flex flex-col relative group hover:bg-white/[0.05] transition-colors duration-500">
                  <Quote className="w-8 h-8 text-white/10 absolute top-6 right-6 group-hover:text-blue-400/20 transition-colors duration-500" />
                  <p className="text-white/60 text-sm font-light leading-[1.8] mb-10 flex-grow pt-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <span className="text-xs font-semibold text-white/70">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/90">{testimonial.author}</div>
                      <div className="text-xs text-white/40 font-light">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 md:py-48 bg-black relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-[1.1]">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">transform</span> your enterprise?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-[1.8]">
              Join the vanguard of secure, AI-driven organizations. Schedule an architecture review with our engineering team today.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="aiera-button-solid inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center group">
                <span className="font-semibold">Become a Partner</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="aiera-button inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                <span className="font-semibold">Request Platform Demo</span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
             <div className="mt-12 flex items-center justify-center gap-6 text-sm text-white/30">
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white/20"/> <span className="font-light tracking-wide">Enterprise SLA</span></div>
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white/20"/> <span className="font-light tracking-wide">SOC2 Certified</span></div>
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white/20"/> <span className="font-light tracking-wide">24/7 Support</span></div>
             </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
