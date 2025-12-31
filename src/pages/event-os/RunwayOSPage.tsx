import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Heart, QrCode, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RunwayOSPage() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'designers' | 'backstage' | 'trends'>('schedule');

  const fashionShows = [
    {
      id: 1,
      designer: 'Alexander Chen',
      collection: 'Future Forward 2025',
      time: '2:00 PM',
      status: 'NOW SHOWING',
      models: 12,
      looks: 24,
      rating: 4.8,
      category: 'Avant-Garde'
    },
    {
      id: 2,
      designer: 'Maria Santos',
      collection: 'Urban Elegance',
      time: '3:30 PM',
      status: 'UPCOMING',
      models: 8,
      looks: 16,
      rating: 0,
      category: 'Ready-to-Wear'
    },
    {
      id: 3,
      designer: 'James Williams',
      collection: 'Digital Dreams',
      time: '5:00 PM',
      status: 'UPCOMING',
      models: 10,
      looks: 20,
      rating: 0,
      category: 'Tech Fashion'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-r from-lime-300/15 to-transparent">
        <div className="mx-auto max-w-6xl">
          <Link to="/event-os" className="inline-flex items-center text-lime-300 mb-6 hover:text-lime-200">
            <ArrowLeft size={18} className="mr-2" />
            Back to Event OS
          </Link>

          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white">
                <span className="font-graffiti text-lime-300">Runway OS</span>
              </h1>
              <p className="mt-2 text-lg text-gray-400">Fashion week live management</p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-lime-300">
                <div className="h-3 w-3 rounded-full bg-lime-300 animate-pulse" />
                <span className="text-sm font-semibold">LIVE EVENT</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                <Clock size={14} className="inline mr-1" />
                Day 2 — 6 shows remaining
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-b border-lime-300/20">
          <div className="flex gap-2">
            {(['schedule', 'designers', 'backstage', 'trends'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTab(t)}
                className={`px-5 py-3 text-sm font-medium transition-all ${
                  activeTab === t ? 'text-lime-300 border-b-2 border-lime-300' : 'text-gray-400 hover:text-white'
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
          {fashionShows.map((show) => (
            <div key={show.id} className="rounded-xl border border-lime-300/15 bg-zinc-950">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{show.collection}</div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      show.status === 'NOW SHOWING' ? 'bg-lime-300 text-black' : 'bg-zinc-800 text-zinc-200'
                    }`}
                  >
                    {show.status}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-gray-200 font-medium">{show.designer}</div>
                  <div className="text-sm text-gray-500">{show.category}</div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-400">
                  <div className="rounded-lg bg-black/40 p-2">
                    <Clock size={16} className="mx-auto mb-1 text-lime-300" />
                    {show.time}
                  </div>
                  <div className="rounded-lg bg-black/40 p-2">
                    <Users size={16} className="mx-auto mb-1 text-lime-300" />
                    {show.models} models
                  </div>
                  <div className="rounded-lg bg-black/40 p-2">
                    <Calendar size={16} className="mx-auto mb-1 text-lime-300" />
                    {show.looks} looks
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-sm text-gray-400">Rating</div>
                  <div className="text-lime-300 font-semibold">
                    <Star size={14} className="inline mr-1" />
                    {show.rating || '—'}
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button type="button" className="flex-1 rounded-lg bg-lime-300 px-4 py-2 font-medium text-black hover:bg-lime-200">
                    <Heart size={16} className="inline mr-2" />
                    Favorite
                  </button>
                  <button type="button" className="rounded-lg border border-lime-300/30 px-3 hover:border-lime-300/60">
                    <QrCode size={16} className="text-lime-300" />
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
