import { Link } from 'react-router-dom';
import { type ComponentType } from 'react';
import {
  Activity,
  Calendar,
  ChefHat,
  Coins,
  Gavel,
  Heart,
  Mic2,
  Shirt,
  Swords,
  Trophy
} from 'lucide-react';

type Platform = {
  title: string;
  tagline: string;
  to: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  status: 'live' | 'prototype';
};

export function EventOSHubPage() {
  const platforms: Platform[] = [
    {
      title: 'Culture Clash',
      tagline: 'Street tournament engine',
      to: '/event-os/culture-clash',
      icon: Swords,
      status: 'live'
    },
    {
      title: 'Wedding OS',
      tagline: 'Luxury wedding experience',
      to: '/event-os/wedding',
      icon: Heart,
      status: 'live'
    },
    {
      title: 'Pitch Battle',
      tagline: 'Investor + pitch finals',
      to: '/event-os/pitch-battle',
      icon: Trophy,
      status: 'live'
    },
    {
      title: 'Runway OS',
      tagline: 'Fashion week operations',
      to: '/event-os/runway',
      icon: Shirt,
      status: 'live'
    },
    {
      title: 'Sports Clash',
      tagline: 'Live sports engagement',
      to: '/event-os/sports-clash',
      icon: Activity,
      status: 'live'
    },
    {
      title: 'Summit OS',
      tagline: 'Conference mode + badges',
      to: '/event-os/summit',
      icon: Calendar,
      status: 'prototype'
    },
    {
      title: 'Chef Battle',
      tagline: 'Food competition brackets',
      to: '/event-os/chef-battle',
      icon: ChefHat,
      status: 'prototype'
    },
    {
      title: 'Sound Clash',
      tagline: 'Live music crowd control',
      to: '/event-os/sound-clash',
      icon: Mic2,
      status: 'prototype'
    },
    {
      title: 'Wager OS',
      tagline: 'Fan wagering + rewards',
      to: '/event-os/wager',
      icon: Coins,
      status: 'prototype'
    }
  ];

  return (
    <div className="bg-brand-bg">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-panel px-4 py-2 text-sm text-brand-accent">
              <Gavel size={16} />
              Event OS — Top 9 Platforms
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl text-white">
              <span className="font-futuristic">Event OS</span>{' '}
              <span className="font-graffiti text-brand-accent">Revenue Suite</span>
            </h1>
            <p className="mt-4 max-w-3xl text-gray-400">
              We’re restructuring Event OS around the most complete + profitable platforms first. The first 5 are live UI builds; the next 4 are
              being rebuilt into the 9LMNTS Studio brand system.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group rounded-xl border border-brand-accent/15 bg-brand-panel p-6 transition-all hover:border-brand-accent/35 hover:bg-brand-accent/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10">
                      <p.icon size={22} className="text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{p.title}</div>
                      <div className="text-sm text-gray-400">{p.tagline}</div>
                    </div>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold border ${
                      p.status === 'live'
                        ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                        : 'border-yellow-400/30 bg-yellow-400/10 text-yellow-300'
                    }`}
                  >
                    {p.status === 'live' ? 'LIVE UI' : 'REBUILDING'}
                  </div>
                </div>

                <div className="mt-5 text-sm text-gray-300">
                  Open platform
                  <span className="ml-2 inline-block translate-x-0 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-brand-accent/15 bg-brand-ink p-6 text-sm text-gray-300">
            Next: Tell me the exact “Top 9” you want prioritized (names + order), and I’ll refactor the hub + pages accordingly.
          </div>
        </div>
      </section>
    </div>
  );
}
