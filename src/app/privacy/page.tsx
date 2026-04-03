"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <span className="text-[11px] font-medium tracking-[0.25em] text-white/40 uppercase mb-4 block">
              Legal Information
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
            </h1>
            <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Last updated: March 31, 2026. This Privacy Policy outlines how Lexci collects, uses, and protects your data across our platforms and services.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-10 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-white/60 prose-p:font-light prose-p:leading-[1.8] prose-p:text-[15px] prose-h2:text-2xl prose-h2:font-medium prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-6 prose-li:text-white/60 prose-li:font-light prose-li:text-[15px] prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline">
          <FadeIn delay={0.1}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you explicitly provide to us when using our platform, including but not limited to your name, email address, company details, and billing information. In addition, our systems automatically collect telemetric hardware data and generic platform usage statistics to improve AI model optimizations and enhance security protocols (like InMind AI and CyberShield).
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              The information we collect is primarily used to provide, maintain, and improve our unified cybersecurity and intelligent systems ecosystem. Specifically, we use your data to:
            </p>
            <ul>
              <li>Deliver adaptive threat detection tailored to your infrastructure.</li>
              <li>Provide personalized insights through the InMind AI platform.</li>
              <li>Process transactions and send related notifications.</li>
              <li>Monitor and prevent fraudulent activity across our scaling digital world.</li>
            </ul>

            <h2>3. Security Infrastructure</h2>
            <p>
              Security is the core of Lexci. We utilize enterprise-grade encryption (AES-256 for data at rest and TLS 1.3 for data in transit), decentralized zero-trust architecture, and our proprietary autonomous threat defense networks to ensure your data remains completely compartmentalized and protected from unauthorized access.
            </p>

            <h2>4. Data Sharing and Third Parties</h2>
            <p>
              We do not sell, rent, or monetize your personal information. Data may be shared with trusted third-party service providers entirely for operational and legal compliance purposes under strict data processing agreements. In the event of a merger, acquisition, or asset sale, we will notify you of any change in ownership or the use of your personal information.
            </p>

            <h2>5. International Data Transfers</h2>
            <p>
              By utilizing our global capabilities, your information may be processed in countries outside of your residence. Lexci ensures that international data transfers comply with applicable data protection laws, providing adequate safeguards for transferred data through Standard Contractual Clauses mapping.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Depending on your location, you have the right to request access to, correction of, or deletion of your personal data. You may also object to or restrict processing by contacting our Data Protection Officer at <strong>hr@lexci.in</strong>.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
              This Privacy Policy may be updated periodically to reflect changes in our robust engineering practices or legal obligations. We will notify you of significant changes via our platform interface or standard email communication.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
