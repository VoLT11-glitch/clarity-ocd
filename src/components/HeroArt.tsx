/* A tangled loop on the left that settles into one calm circle on the right.
   Decorative only: thoughts that loop, and then ease. */
export default function HeroArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 200"
      className={className}
      role="img"
      aria-label="A tangled scribble on the left that settles into a calm circle on the right"
    >
      <defs>
        <linearGradient id="ha-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EFE7FF" />
          <stop offset="1" stopColor="#FFE9DD" />
        </linearGradient>
      </defs>
      <rect width="480" height="200" rx="24" fill="url(#ha-bg)" />
      <circle cx="400" cy="40" r="46" fill="#FFD98A" opacity="0.55" />
      <circle cx="60" cy="170" r="54" fill="#FFB4A2" opacity="0.28" />

      {/* tangle */}
      <path
        d="M40 118 C 70 40, 120 40, 100 100 S 40 170, 90 150 S 150 60, 150 110 S 90 60, 130 90 S 180 150, 200 100"
        fill="none"
        stroke="#6E4BE8"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M52 132 C 90 60, 140 70, 118 120 S 70 150, 120 132 S 170 90, 176 118"
        fill="none"
        stroke="#3C2563"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* easing line */}
      <path
        d="M200 100 C 235 100, 250 100, 290 100"
        fill="none"
        stroke="#6E4BE8"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />

      {/* calm loop */}
      <circle cx="368" cy="100" r="46" fill="none" stroke="#6E4BE8" strokeWidth="5" />
      <circle cx="368" cy="100" r="12" fill="#FFD166" />
    </svg>
  );
}
