"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Shield, Brain } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on home page — it has its own custom navbar
  if (pathname === "/") return null;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
              Lexci
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPlatformOpen(true)}
              onMouseLeave={() => setIsPlatformOpen(false)}
            >
              <button className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
                <span>Platform</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPlatformOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-3 transition-all duration-300 ${
                  isPlatformOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-black/95 backdrop-blur-2xl border border-white/[0.08] p-2 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                  <Link
                    href="/platform/cybersecurity"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Shield className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Cybersecurity</div>
                      <div className="text-xs text-white/35 font-light mt-0.5">Autonomous cyber defense</div>
                    </div>
                  </Link>
                  <Link
                    href="/platform/inmind"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                      <Brain className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">InMind AI</div>
                      <div className="text-xs text-white/35 font-light mt-0.5">Behavioral intelligence</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/capabilities" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Capabilities
            </Link>
            <Link href="/clients" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Clients
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium text-white/60 hover:text-white transition-colors px-3 py-2">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black px-5 py-2 text-sm font-medium rounded-full hover:bg-white/90 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
            >
              Request Demo
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-black/98 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-8 space-y-1">
          <Link href="/platform/cybersecurity" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-all" onClick={() => setIsOpen(false)}>
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="font-medium">Cybersecurity</span>
          </Link>
          <Link href="/platform/inmind" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-all" onClick={() => setIsOpen(false)}>
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="font-medium">InMind AI</span>
          </Link>
          <Link href="/capabilities" className="block px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-all font-medium" onClick={() => setIsOpen(false)}>
            Capabilities
          </Link>
          <Link href="/clients" className="block px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-all font-medium" onClick={() => setIsOpen(false)}>
            Clients
          </Link>
          <Link href="/contact" className="block px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-all font-medium" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="pt-4">
            <Link href="/contact" className="block text-center bg-white text-black px-6 py-3 text-sm font-medium rounded-full" onClick={() => setIsOpen(false)}>
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
