import { useState } from 'react';
import { ArrowLeft, Clock, QrCode, Shield, Target, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SportsClashPage() {
  const [activeTab, setActiveTab] = useState<'live' | 'schedule' | 'standings' | 'stats'>('live');

  const liveGames = [
    {
      id: 1,
      sport: 'Basketball',
      teams: 'Lions vs Eagles',
      status: 'LIVE',
      score: { a: 78, b: 82 },
      moment: '4th QTR — 2:45',
      attendance: '2,341'
    },
    {
      id: 2,
      sport: 'Soccer',
      teams: 'United vs City',
      status: 'LIVE',
      score: { a: 2, b: 2 },
      moment: '65th minute',
      attendance: '5,123'
    },
    {
      id: 3,
      sport: 'Tennis',
      teams: 'Williams vs Johnson',
      status: 'UPCOMING',
      score: { a: 0, b: 0 },
      moment: '3:00 PM',
      attendance: '890'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-400/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <Link to="/event-os" className="inline-flex items-center text-sky-300 mb-6 hover:text-sky-200">
            <ArrowLeft size={18} className="mr-2" />
            Back to Event OS
          </Link>

          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white">
                <span className="font-graffiti text-sky-300">Sports Clash</span>
              </h1>
              <p className="mt-2 text-lg text-gray-400">Live sports event management</p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-sky-300">
                <div className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-sm font-semibold">LIVE GAMES</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                <Clock size={14} className="inline mr-1" />
                {liveGames.filter((g) => g.status === 'LIVE').length} games active
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-b border-sky-400/20">
          <div className="flex gap-2">
            {(['live', 'schedule', 'standings', 'stats'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTab(t)}
                className={`px-5 py-3 text-sm font-medium transition-all ${
                  activeTab === t ? 'text-sky-300 border-b-2 border-sky-300' : 'text-gray-400 hover:text-white'
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
          {liveGames.map((game) => (
            <div key={game.id} className="rounded-xl border border-sky-400/15 bg-brand-panel">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">{game.sport}</div>
                    <div className="text-white font-semibold">{game.teams}</div>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      game.status === 'LIVE' ? 'bg-sky-500 text-white' : 'bg-gray-600 text-gray-200'
                    }`}
                  >
                    {game.status}
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-brand-bg/60 p-4">
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-semibold text-white">
                      {game.score.a} - {game.score.b}
                    </div>
                    <div className="text-sm text-gray-400">{game.moment}</div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Attendance: {game.attendance}</div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-gray-400">
                  {[Trophy, Target, Shield].map((Icon, idx) => (
                    <div key={idx} className="rounded-lg bg-brand-bg/50 p-2">
                      <Icon size={16} className="mx-auto mb-1 text-sky-300" />
                      Live
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <button type="button" className="flex-1 rounded-lg bg-sky-400 px-4 py-2 font-medium text-brand-ink hover:bg-sky-300">
                    <Users size={16} className="inline mr-2" />
                    Engage
                  </button>
                  <button type="button" className="rounded-lg border border-sky-400/30 px-3 hover:border-sky-400/60">
                    <QrCode size={16} className="text-sky-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
