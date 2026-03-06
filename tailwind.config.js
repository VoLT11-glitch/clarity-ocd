/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#2A1638',
          plum: '#6E4BE8',
          grape: '#3C2563',
          lavender: '#E9DDFF',
          cream: '#FFF5E6',
          butter: '#FFE7A3',
          sun: '#FFD166',
          peach: '#FFB4A2',
          coral: '#FF6B6B',
          mint: '#B9FBC0',
          rose: '#FF9BD5',
        },
      },
      borderRadius: {
        bubble: '28px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(42, 22, 56, 0.14)',
        softSm: '0 10px 24px rgba(42, 22, 56, 0.12)',
        glow: '0 18px 55px rgba(110, 75, 232, 0.22)',
        insetSoft: 'inset 0 2px 10px rgba(42, 22, 56, 0.10)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        bounceTiny: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-2px) scale(1.01)' },
        },
        shine: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        pop: {
          '0%': { transform: 'scale(0.96)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        confetti: {
          '0%': { transform: 'translateY(-30px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
      },
      animation: {
        bob: 'bob 2.2s ease-in-out infinite',
        bounceTiny: 'bounceTiny 220ms ease-out',
        shine: 'shine 1200ms ease-out infinite',
        pop: 'pop 180ms ease-out',
        confetti: 'confetti var(--confetti-duration, 1600ms) ease-in forwards',
      },
    },
  },
  plugins: [],
};
