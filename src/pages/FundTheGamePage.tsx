import { ArrowRight, Gamepad2 } from 'lucide-react';

export function FundTheGamePage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-brand-accent/15 bg-brand-panel p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
            <Gamepad2 className="text-brand-accent" />
          </div>
          <div>
            <h1 className="text-3xl text-white">LOA Game</h1>
            <p className="text-gray-400">Legend of Arcadom — fund the next build.</p>
          </div>
        </div>

        <div className="mt-6 text-gray-300">
          This is a funding page placeholder. Next iteration can include tiered funding, perks, and a live roadmap.
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3 font-medium text-brand-ink hover:bg-brand-accent/90"
            href="#"
          >
            Fund this game
            <ArrowRight size={18} />
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-accent/30 px-6 py-3 font-medium text-brand-accent hover:bg-brand-accent/10"
            href="#"
          >
            Join updates
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
