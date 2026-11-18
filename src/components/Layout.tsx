import type { ReactNode } from 'react';
import { go } from '../router';

export function Logo() {
  return (
    <button
      onClick={() => go('home')}
      className="inline-flex items-center gap-2 text-lg font-bold text-brand-ink"
      aria-label="ClarityOCD home"
    >
      <img src="/favicon.svg" alt="" className="h-7 w-7" />
      ClarityOCD
    </button>
  );
}

export function Helplines({ className = '' }: { className?: string }) {
  return (
    <p className={['text-sm text-brand-ink/70', className].join(' ')}>
      Struggling right now? Call <strong className="text-brand-ink">Tele-MANAS 14416</strong> (free, 24/7, any
      language) or <strong className="text-brand-ink">iCall 9152987821</strong>. If you're in immediate danger, call{' '}
      <strong className="text-brand-ink">112</strong>.
    </p>
  );
}

export default function Layout({
  children,
  nav,
  footerHelplines = true,
}: {
  children: ReactNode;
  nav?: ReactNode;
  footerHelplines?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col app-bg">
      <header className="px-4 pt-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Logo />
          {nav}
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-4 pb-10 pt-6">
        <div className="mx-auto max-w-5xl border-t border-brand-ink/10 pt-6">
          {footerHelplines && <Helplines />}
          <p className="mt-2 text-xs text-brand-ink/55">
            ClarityOCD is a self-check, not a diagnosis. Your answers stay on your device.
          </p>
        </div>
      </footer>
    </div>
  );
}
