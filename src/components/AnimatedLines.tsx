  "use client";

import { useRef, useEffect } from "react";

interface FlowLine {
  points: { x: number; y: number }[];
  speed: number;
  offset: number;
  width: number;
  opacity: number;
  hue: number;
}

export default function AnimatedLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lines: FlowLine[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initLines();
    };

    const initLines = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      lines = [];

      const lineCount = 18;
      for (let i = 0; i < lineCount; i++) {
        const pointCount = 5 + Math.floor(Math.random() * 4);
        const points: { x: number; y: number }[] = [];

        // Create flowing sine-wave-like curves that span the width
        const startY = (h * 0.15) + (Math.random() * h * 0.7);
        for (let j = 0; j < pointCount; j++) {
          const t = j / (pointCount - 1);
          points.push({
            x: t * w,
            y: startY + (Math.random() - 0.5) * h * 0.35,
          });
        }

        lines.push({
          points,
          speed: 0.15 + Math.random() * 0.35,
          offset: Math.random() * Math.PI * 2,
          width: 0.5 + Math.random() * 1.2,
          opacity: 0.03 + Math.random() * 0.08,
          hue: 210 + Math.random() * 60, // blue to purple range
        });
      }
    };

    let time = 0;

    const drawCurve = (line: FlowLine, t: number) => {
      const { points, width, opacity, hue, speed, offset } = line;
      if (points.length < 2) return;

      // Animate y positions with sine waves
      const animatedPoints = points.map((p, i) => ({
        x: p.x,
        y: p.y + Math.sin(t * speed + offset + i * 0.8) * 30,
      }));

      ctx.beginPath();
      ctx.moveTo(animatedPoints[0].x, animatedPoints[0].y);

      // Draw smooth curve through points using bezier curves
      for (let i = 0; i < animatedPoints.length - 1; i++) {
        const current = animatedPoints[i];
        const next = animatedPoints[i + 1];
        const cpx = (current.x + next.x) / 2;
        const cpy1 = current.y;
        const cpy2 = next.y;
        ctx.bezierCurveTo(cpx, cpy1, cpx, cpy2, next.x, next.y);
      }

      ctx.strokeStyle = `hsla(${hue}, 60%, 65%, ${opacity})`;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.stroke();
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      for (const line of lines) {
        drawCurve(line, time);
      }

      // Draw a few brighter accent lines
      for (let i = 0; i < 3; i++) {
        if (lines[i]) {
          const brightLine = { ...lines[i], opacity: lines[i].opacity * 2.5, width: lines[i].width * 0.7 };
          drawCurve(brightLine, time);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
