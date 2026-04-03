import FadeIn from "@/components/FadeIn";
import { Mail, MapPin, Globe, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact | Lexci",
  description: "Get in touch with the Lexci engineering team for inquiries regarding autonomous defense and behavioral intelligence.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        {/* Ambient Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift-reverse" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col items-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Lexci</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Our engineering team is ready to discuss how our AI-native platform can secure and optimize your digital infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="pb-28 md:pb-36 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Form Side */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <div className="premium-card p-8 md:p-12 relative group">
                  <form className="space-y-8" action="#">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Full Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Subject</label>
                      <input
                        type="text"
                        placeholder="Inquiry regarding Cybersecurity"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase ml-1">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="aiera-button-solid w-full py-4 text-sm font-semibold flex items-center justify-center gap-3 group"
                    >
                      Send Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 flex flex-col justify-between py-4">
              <div className="space-y-12">
                <FadeIn delay={0.3}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium tracking-tight">Direct Contact</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                          <Mail className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">Human Resources</p>
                          <a href="mailto:hr@lexci.in" className="text-white/70 hover:text-white transition-colors font-light">hr@lexci.in</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                          <Mail className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">General inquiries</p>
                          <a href="mailto:lexciinovations@gmail.com" className="text-white/70 hover:text-white transition-colors font-light text-xs sm:text-sm">lexciinovations@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium tracking-tight">Global Presence</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                          <MapPin className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">Bangalore Office</p>
                          <p className="text-white/70 font-light leading-relaxed">
                            HSR Layout,<br />
                            Bangalore, Karnataka<br />
                            India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                          <MapPin className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">Hyderabad Office</p>
                          <p className="text-white/70 font-light leading-relaxed">
                            Kharkhana,<br />
                            Hyderabad, Telangana<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.5}>
                <div className="glass-panel-sharp p-8 mt-12 bg-white/[0.02]">
                  <p className="text-sm text-white/40 font-light leading-relaxed">
                    Looking for technical support or documentation? Visit our <Link href="/capabilities" className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-all">Engineering Resource Portal</Link>.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SHIMMER DIVIDER */}
      <div className="shimmer-line opacity-50" />
    </div>
  );
}
