"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function CyberBrain() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* OUTER SCANNING RINGS */}
      <motion.div
        className="absolute w-[120%] h-[120%] border border-purple-500/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[100%] h-[100%] border border-dashed border-purple-400/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* PULSING GLOW */}
      <motion.div
        className="absolute w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CORE BRAIN ELEMENT */}
      <div className="relative z-10 w-40 h-40 flex items-center justify-center">
        {/* NETWORK GRID BACKDROP */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-purple-400">
            <path d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 20 L72 36 L72 64 L50 80 L28 64 L28 36 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* FLOATING ICON */}
        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-400/20 backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <Brain className="w-16 h-16 text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]" strokeWidth={1.5} />
          </div>
          
          {/* ORBITING SYNAPSES */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"
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

      {/* SYNAPTIC DATA STREAMS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full mask-image:radial-gradient(ellipse_at_center,black,transparent)">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent via-purple-400/40 to-transparent transform rotate-45"
            style={{
              left: `${15 + i * 15}%`,
              top: "-20%",
            }}
            animate={{
              top: ["120%", "-20%"],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
