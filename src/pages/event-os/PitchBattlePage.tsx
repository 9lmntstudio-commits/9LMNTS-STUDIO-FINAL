import { useState } from 'react';
import { ArrowLeft, Award, Clock, DollarSign, QrCode, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PitchBattlePage() {
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'results' | 'investors'>('live');

  const livePitches = [
    {
      id: 1,
      title: 'Tech Startup Finals',
      company: 'AI Solutions Inc.',
      entrepreneur: 'Sarah Chen',
      status: 'LIVE',
      votes: 145,
      investment: '$250K',
      timeLeft: '3:20',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Social Impact Pitch',
      company: 'Green Future',
      entrepreneur: 'Marcus Johnson',
      status: 'LIVE',
      votes: 128,
      investment: '$100K',
      timeLeft: '5:45',
      category: 'Sustainability'
    },
    {
      id: 3,
      title: 'E-commerce Innovation',
      company: 'ShopSmart',
      entrepreneur: 'Emily Rodriguez',
      status: 'UPCOMING',
      votes: 0,
      investment: '$75K',
      timeLeft: '12:00',
      category: 'Retail'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-400/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <Link to="/event-os" className="inline-flex items-center text-emerald-300 mb-6 hover:text-emerald-200">
            <ArrowLeft size={18} className="mr-2" />
            Back to Event OS
          </Link>

          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white">
                <span className="font-graffiti text-emerald-300">Pitch Battle</span>
              </h1>
              <p className="mt-2 text-lg text-gray-400">Corporate pitch competition finals</p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-emerald-300">
                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold">LIVE EVENT</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                <Clock size={14} className="inline mr-1" />
                Started 30 min ago
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-b border-emerald-400/20">
          <div className="flex gap-2">
            {(['live', 'upcoming', 'results', 'investors'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTab(t)}
                className={`px-5 py-3 text-sm font-medium transition-all ${
                  activeTab === t ? 'text-emerald-300 border-b-2 border-emerald-300' : 'text-gray-400 hover:text-white'
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
          {livePitches.map((pitch) => (
            <div key={pitch.id} className="rounded-xl border border-emerald-400/15 bg-brand-panel">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{pitch.title}</div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      pitch.status === 'LIVE' ? 'bg-emerald-500 text-white' : 'bg-gray-600 text-gray-200'
                    }`}
                  >
                    {pitch.status}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-gray-200 font-medium">{pitch.company}</div>
                  <div className="text-sm text-gray-400">by {pitch.entrepreneur}</div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>
                    <Clock size={12} className="inline mr-1" />
                    {pitch.timeLeft}
                  </span>
                  <span>
                    <DollarSign size={12} className="inline mr-1" />
                    {pitch.investment}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Investor Votes</span>
                    <span className="text-emerald-300 font-semibold">{pitch.votes}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-brand-bg">
                    <div
                      className="h-2 rounded-full bg-emerald-400"
                      style={{ width: `${Math.min((pitch.votes / 200) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    className="flex-1 rounded-lg bg-emerald-400 px-4 py-2 font-medium text-brand-ink hover:bg-emerald-300"
                  >
                    <Award size={16} className="inline mr-2" />
                    Vote
                  </button>
                  <button type="button" className="rounded-lg border border-emerald-400/30 px-3 hover:border-emerald-400/60">
                    <QrCode size={16} className="text-emerald-300" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-400">
                  {[Users, TrendingUp, DollarSign].map((Icon, idx) => (
                    <div key={idx} className="rounded-lg bg-brand-bg/50 p-2">
                      <Icon size={16} className="mx-auto mb-1 text-emerald-300" />
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
