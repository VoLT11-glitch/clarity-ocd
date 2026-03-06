import { type CSSProperties, useEffect, useMemo, useState } from 'react';

type Piece = {
  id: string;
  leftPct: number;
  size: number;
  rotate: number;
  delayMs: number;
  durationMs: number;
  color: string;
  radius: number;
  driftPx: number;
};

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

const COLORS = ['#6E4BE8', '#FF6B6B', '#FFD166', '#FFB4A2', '#B9FBC0', '#FF9BD5'];

export default function Confetti({ enabled = true, pieces = 42 }: { enabled?: boolean; pieces?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (prefersReducedMotion()) return;
    setMounted(true);
    const t = window.setTimeout(() => setMounted(false), 2200);
    return () => window.clearTimeout(t);
  }, [enabled]);

  const data = useMemo<Piece[]>(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    return Array.from({ length: pieces }).map((_, idx) => {
      const size = Math.round(rand(6, 12));
      return {
        id: `${Date.now()}-${idx}-${Math.random().toString(16).slice(2)}`,
        leftPct: rand(5, 95),
        size,
        rotate: rand(0, 360),
        delayMs: Math.round(rand(0, 320)),
        durationMs: Math.round(rand(1200, 2000)),
        color: COLORS[Math.floor(Math.random() * COLORS.length)] ?? COLORS[0]!,
        radius: Math.random() > 0.6 ? Math.round(rand(2, 9999)) : Math.round(rand(2, 6)),
        driftPx: Math.round(rand(-40, 40)),
      };
    });
  }, [pieces]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {data.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 animate-confetti"
          style={
            {
              left: `${p.leftPct}%`,
              width: p.size,
              height: Math.max(8, Math.round(p.size * 1.4)),
              background: p.color,
              borderRadius: p.radius,
              transform: `translateX(${p.driftPx}px) rotate(${p.rotate}deg)`,
              animationDelay: `${p.delayMs}ms`,
              ['--confetti-duration' as never]: `${p.durationMs}ms`,
              boxShadow: '0 10px 30px rgba(42, 22, 56, 0.12)',
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

