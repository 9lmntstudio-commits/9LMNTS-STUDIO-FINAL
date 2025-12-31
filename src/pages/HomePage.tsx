import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid, Sparkles } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-panel px-4 py-2 text-sm text-brand-accent">
            <Sparkles size={16} />
            9LMNTS Studio — Brand + Product + Platforms
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            <span className="font-futuristic">9LMNTS</span>{' '}
            <span className="font-graffiti text-brand-accent">Studio</span>
            <span className="block mt-4 text-xl sm:text-2xl text-gray-400 font-normal tracking-normal">
              Build the brand. Launch the platform. Scale the experience.
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/event-os"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-8 py-4 font-medium text-brand-ink transition-all hover:bg-brand-accent/90"
            >
              Explore Event OS
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/loa-game"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-accent px-8 py-4 font-medium text-brand-accent transition-all hover:bg-brand-accent/10"
            >
              Fund the Game
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: 'Studio Systems',
                body: 'Brand + web + product design that converts attention into revenue.'
              },
              {
                title: 'Event OS',
                body: 'Your money-maker platform suite. QR-first, live analytics, engagement engines.'
              },
              {
                title: 'LOA Layer',
                body: 'AI assistance can be layered in when you’re ready — no rebuild needed.'
              }
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-brand-accent/15 bg-brand-panel p-6 text-left">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10">
                  <LayoutGrid size={18} className="text-brand-accent" />
                </div>
                <div className="text-lg font-semibold text-white">{c.title}</div>
                <div className="mt-2 text-sm text-gray-400">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
