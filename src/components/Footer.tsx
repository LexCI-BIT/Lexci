import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-black py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-black mb-4 block">
              Lexci
            </Link>
            <p className="text-black/40 text-sm max-w-xs leading-[1.8] font-light">
              An AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities for modern enterprises.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-black/80 font-semibold mb-4 text-[12px] tracking-[0.15em]">PLATFORM</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/platform/cybersecurity", label: "Cybersecurity" },
                { href: "/platform/inmind", label: "InMind AI" },
                { href: "/capabilities", label: "Engineering" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black/40 hover:text-black transition-colors text-sm font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-black/80 font-semibold mb-4 text-[12px] tracking-[0.15em]">COMPANY</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/clients", label: "Clients" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black/40 hover:text-black transition-colors text-sm font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-black/80 font-semibold mb-4 text-[12px] tracking-[0.15em]">CONNECT</h4>
            <ul className="space-y-2.5">
              {["Twitter", "LinkedIn", "YouTube"].map((social) => (
                <li key={social}>
                  <span className="text-black/40 hover:text-black transition-colors text-sm font-light cursor-pointer">
                    {social}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] font-light text-black/30 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Lexci. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Built with precision. Powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
