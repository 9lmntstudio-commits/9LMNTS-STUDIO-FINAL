import { PropsWithChildren } from 'react';
import { CommandCenter } from '@/components/nav/CommandCenter';
import { Footer } from '@/components/Footer';

export function StudioShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <CommandCenter />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
