import { useState } from 'react';
import { ArrowLeft, Clock, QrCode, Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CultureClashPage() {
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'results'>('live');

  const liveBattles = [
    {
      id: 1,
      title: 'Street Dance Finals',
      participants: 'Crew Alpha vs Crew Beta',
      status: 'LIVE',
      votes: { alpha: 1245, beta: 1189 },
      timeLeft: '2:45'
    },
    {
      id: 2,
      title: 'Freestyle Battle',
      participants: 'MC Flow vs MC Rhyme',
      status: 'LIVE',
      votes: { alpha: 892, beta: 756 },
      timeLeft: '1:30'
    },
    {
      id: 3,
      title: 'Art Battle',
      participants: 'Visual King vs Art Master',
      status: 'UPCOMING',
      votes: { alpha: 0, beta: 0 },
      timeLeft: '15:00'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-accent/15 to-transparent">
        <div className="mx-auto max-w-6xl">
          <Link to="/event-os" className="inline-flex items-center text-brand-accent mb-6 hover:text-brand-accent/80">
            <ArrowLeft size={18} className="mr-2" />
            Back to Event OS
          </Link>

          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white">
                <span className="font-graffiti text-brand-accent">Culture Clash</span>
              </h1>
              <p className="mt-2 text-lg text-gray-400">Street tournament live platform</p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-red-400">
                <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse" />
                <span className="text-sm font-semibold">LIVE EVENT</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                <Clock size={14} className="inline mr-1" />
                Started 45 min ago
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-b border-brand-accent/20">
          <div className="flex gap-2">
            {(['live', 'upcoming', 'results'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTab(t)}
                className={`px-5 py-3 text-sm font-medium transition-all ${
                  activeTab === t ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveBattles.map((battle) => (
            <div key={battle.id} className="rounded-xl border border-brand-accent/15 bg-brand-panel">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{battle.title}</div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      battle.status === 'LIVE' ? 'bg-red-500 text-white' : 'bg-gray-600 text-gray-200'
                    }`}
                  >
                    {battle.status}
                  </div>
                </div>

                <div className="mt-3 text-sm text-gray-400">{battle.participants}</div>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>
                    <Clock size={12} className="inline mr-1" />
                    {battle.timeLeft}
                  </span>
                  <span>
                    <Users size={12} className="inline mr-1" />
                    {battle.votes.alpha + battle.votes.beta} votes
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Alpha</span>
                    <span className="text-brand-accent font-semibold">{battle.votes.alpha}</span>
                  </div>
                  <div className="h-2 rounded-full bg-brand-bg">
                    <div
                      className="h-2 rounded-full bg-brand-accent"
                      style={{
                        width:
                          battle.votes.alpha + battle.votes.beta === 0
                            ? '0%'
                            : `${(battle.votes.alpha / (battle.votes.alpha + battle.votes.beta)) * 100}%`
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Beta</span>
                    <span className="text-brand-accent font-semibold">{battle.votes.beta}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-5 w-full rounded-lg bg-brand-accent px-4 py-2 font-medium text-brand-ink hover:bg-brand-accent/90"
                >
                  <QrCode size={16} className="inline mr-2" />
                  Vote with QR
                </button>

                <div className="mt-4 grid grid-cols-4 gap-3 text-center text-xs text-gray-400">
                  {[Users, TrendingUp, Star, QrCode].map((Icon, idx) => (
                    <div key={idx} className="rounded-lg bg-brand-bg/50 p-2">
                      <Icon size={16} className="mx-auto mb-1 text-brand-accent" />
                      Live
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
