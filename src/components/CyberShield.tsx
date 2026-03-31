"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function CyberShield() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* OUTER SCANNING RINGS */}
      <motion.div
        className="absolute w-[120%] h-[120%] border border-blue-500/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[100%] h-[100%] border border-dashed border-blue-400/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* PULSING GLOW */}
      <motion.div
        className="absolute w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CORE SHIELD ELEMENT */}
      <div className="relative z-10 w-40 h-40 flex items-center justify-center">
        {/* HEXAGON GRID BACKDROP */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-400">
            <path d="M50 5 L90 27 L90 73 L50 95 L10 73 L10 27 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 15 L82 33 L82 67 L50 85 L18 67 L18 33 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* FLOATING ICON */}
        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-400/20 backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <Shield className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" strokeWidth={1.5} />
          </div>
          
          {/* ORBITING NODES */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              animate={{
                rotate: [angle, angle + 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-4px",
                marginLeft: "-4px",
                transformOrigin: "80px center",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* DATA STREAMS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: "-20%",
            }}
            animate={{
              top: ["120%", "-20%"],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
