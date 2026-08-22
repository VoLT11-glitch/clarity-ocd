type MascotProps = {
  size?: number;
  label?: string;
  className?: string;
};

export default function Mascot({ size = 72, label = 'Friendly brain mascot', className }: MascotProps) {
  return (
    <div
      className={[
        'relative grid place-items-center rounded-full shadow-glow border border-white/60',
        'bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(255,255,255,0.2)_35%,transparent_60%),linear-gradient(135deg,#E9DDFF,#FFB4A2,#FFD166)]',
        'animate-bob',
        className ?? '',
      ].join(' ')}
      style={{ width: size, height: size }}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-2 rounded-full bg-white/55 backdrop-blur-[2px]" />
      <div className="relative flex items-center justify-center text-3xl" style={{ fontSize: Math.max(24, Math.round(size * 0.44)) }}>
        🧠💛
      </div>
    </div>
  );
}

