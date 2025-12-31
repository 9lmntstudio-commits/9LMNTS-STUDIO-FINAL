import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Camera,
  Gift,
  Heart,
  MapPin,
  MessageSquare,
  QrCode,
  Users,
  Vote,
  Zap,
  Share2,
  Settings,
  Clock,
  Star,
  TrendingUp
} from 'lucide-react';

type TabKey = 'overview' | 'schedule' | 'guests' | 'gifts' | 'gallery';

type TimelineItem = {
  time: string;
  title: string;
  location: string;
};

type Guest = {
  name: string;
  team: 'Bride' | 'Groom' | 'Friends';
};

export function WeddingOSPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  const timeline = useMemo<TimelineItem[]>(
    () => [
      { time: '2:00 PM', title: 'Ceremony', location: 'Main Hall' },
      { time: '3:30 PM', title: 'Cocktail Hour', location: 'Garden Terrace' },
      { time: '5:00 PM', title: 'Reception', location: 'Ballroom' },
      { time: '7:30 PM', title: 'Toast + Speeches', location: 'Ballroom Stage' },
      { time: '9:00 PM', title: 'Dance Floor Opens', location: 'Ballroom' }
    ],
    []
  );

  const guests = useMemo<Guest[]>(
    () => [
      { name: 'Ava Carter', team: 'Bride' },
      { name: 'Noah Brooks', team: 'Groom' },
      { name: 'Mia Rivera', team: 'Friends' },
      { name: 'Liam Hayes', team: 'Friends' },
      { name: 'Sophia Nguyen', team: 'Bride' },
      { name: 'Ethan Price', team: 'Groom' }
    ],
    []
  );

  const tabs = [
    {
      key: 'overview',
      label: 'Overview',
      icon: Heart
    },
    {
      key: 'schedule',
      label: 'Schedule',
      icon: Calendar
    },
    {
      key: 'guests',
      label: 'Guests',
      icon: Users
    },
    {
      key: 'gifts',
      label: 'Gifts',
      icon: Gift
    },
    {
      key: 'gallery',
      label: 'Gallery',
      icon: Camera
    }
  ];

  const features = [
    { icon: Vote, title: 'Live Voting', description: 'Guests can vote on wedding decisions' },
    { icon: MessageSquare, title: 'Live Chat', description: 'Real-time messaging with attendees' },
    { icon: QrCode, title: 'QR Check-in', description: 'Digital invitations and check-in' },
    { icon: Share2, title: 'Social Sharing', description: 'Share moments across platforms' },
    { icon: Clock, title: 'Timeline Updates', description: 'Live schedule and notifications' },
    { icon: Star, title: 'Wish Registry', description: 'Digital gift and wish management' }
  ];

  const gold = '#D4AF37';

  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-r from-[#D4AF37]/10 via-brand-accent/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <Link to="/event-os" className="inline-flex items-center text-brand-accent mb-6 hover:text-brand-accent/80">
            <ArrowLeft size={18} className="mr-2" />
            Back to Event OS
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-brand-panel px-4 py-2 text-xs font-semibold text-[#D4AF37]">
                <Heart size={14} />
                WEDDING OS
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl text-white">
                <span className="font-futuristic">Wedding</span>{' '}
                <span className="font-graffiti" style={{ color: gold }}>
                  Event OS
                </span>
              </h1>
              <p className="mt-3 max-w-2xl text-gray-400">
                Luxury wedding experience engine with RSVP, schedule, guest networking, gifting, and a live photo mosaic.
              </p>
            </div>

            <div className="rounded-xl border border-[#D4AF37]/20 bg-brand-panel p-5 sm:w-[360px]">
              <div className="text-sm text-gray-400">Event</div>
              <div className="mt-1 text-lg font-semibold text-white">Romeo & Juliet</div>
              <div className="mt-2 text-sm text-gray-400">
                <Calendar size={14} className="inline mr-2" />
                Saturday · 6:00 PM
              </div>
              <div className="mt-1 text-sm text-gray-400">
                <MapPin size={14} className="inline mr-2" />
                Downtown Venue
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="rounded-lg px-4 py-2 font-medium text-brand-ink"
                  style={{ backgroundColor: gold }}
                >
                  RSVP
                </button>
                <button type="button" className="rounded-lg border border-[#D4AF37]/30 px-4 py-2 font-medium text-[#D4AF37] hover:bg-[#D4AF37]/10">
                  <QrCode size={16} className="inline mr-2" />
                  Check-in
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-b border-[#D4AF37]/20">
          <div className="flex gap-2 overflow-x-auto py-3">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key as TabKey)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === t.key
                    ? 'border-[#D4AF37] bg-[#D4AF37] text-black'
                    : 'border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {activeTab === 'overview' && (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#D4AF37]/15 bg-brand-panel p-6 lg:col-span-2">
                <div className="text-white text-lg font-semibold">Welcome Message</div>
                <div className="mt-3 text-gray-300">
                  Welcome to Wedding OS — interactive experience layer with live voting, real-time chat, QR check-in, social sharing, timeline updates, and digital wish registry.
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-[#D4AF37]/20 bg-brand-bg/60">
                      <feature.icon className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">{feature.title}</div>
                        <div className="text-sm text-gray-400">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button type="button" className="rounded-xl border border-[#D4AF37]/25 bg-brand-bg/60 p-4 text-left hover:bg-[#D4AF37]/10">
                    <Users className="text-[#D4AF37]" />
                    <div className="mt-2 text-white font-medium">Guest Network</div>
                    <div className="text-sm text-gray-400">See who's here, connect, and coordinate.</div>
                  </button>
                  <button type="button" className="rounded-xl border border-[#D4AF37]/25 bg-brand-bg/60 p-4 text-left hover:bg-[#D4AF37]/10">
                    <MessageSquare className="text-[#D4AF37]" />
                    <div className="mt-2 text-white font-medium">Toast Queue</div>
                    <div className="text-sm text-gray-400">Drop a message for speeches + highlights.</div>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/15 bg-brand-panel p-6">
                <div className="text-white text-lg font-semibold">Quick Actions</div>
                <div className="mt-4 space-y-3">
                  <button type="button" className="w-full rounded-lg bg-[#D4AF37] px-4 py-3 font-medium text-black">
                    <Gift size={18} className="inline mr-2" />
                    Send a Gift
                  </button>
                  <button type="button" className="w-full rounded-lg border border-[#D4AF37]/30 px-4 py-3 font-medium text-[#D4AF37] hover:bg-[#D4AF37]/10">
                    <Camera size={18} className="inline mr-2" />
                    Upload a Moment
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="rounded-2xl border border-[#D4AF37]/15 bg-brand-panel p-6">
              <div className="text-white text-lg font-semibold">Timeline</div>
              <div className="mt-6 space-y-3">
                {timeline.map((item) => (
                  <div key={item.time} className="rounded-xl border border-[#D4AF37]/15 bg-brand-bg/60 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-white font-medium">{item.title}</div>
                        <div className="text-sm text-gray-400">
                          <MapPin size={14} className="inline mr-2" />
                          {item.location}
                        </div>
                      </div>
                      <div className="text-sm font-semibold" style={{ color: gold }}>
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guests' && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {guests.map((g) => (
                <div key={g.name} className="rounded-2xl border border-[#D4AF37]/15 bg-brand-panel p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Users size={18} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{g.name}</div>
                      <div className="text-xs font-semibold" style={{ color: gold }}>
                        TEAM {g.team.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <button type="button" className="mt-4 w-full rounded-lg border border-[#D4AF37]/30 px-4 py-2 font-medium text-[#D4AF37] hover:bg-[#D4AF37]/10">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'gifts' && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#D4AF37]/15 bg-brand-panel p-6">
                <div className="text-white text-lg font-semibold">Registry</div>
                <div className="mt-3 text-gray-400 text-sm">
                  Plug in Stripe or external registry links later. For now, we keep a clean conversion flow.
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { title: 'Honeymoon Fund', amount: '$50+' },
                    { title: 'Dinner Date Fund', amount: '$25+' },
                    { title: 'Home Upgrade', amount: '$100+' },
                    { title: 'Surprise Gift', amount: 'Any' }
                  ].map((card) => (
                    <button
                      key={card.title}
                      type="button"
                      className="rounded-xl border border-[#D4AF37]/20 bg-brand-bg/60 p-4 text-left hover:bg-[#D4AF37]/10"
                    >
                      <div className="text-white font-medium">{card.title}</div>
                      <div className="mt-1 text-sm" style={{ color: gold }}>
                        {card.amount}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/15 bg-brand-panel p-6">
                <div className="text-white text-lg font-semibold">Gift Status</div>
                <div className="mt-4 space-y-3">
                  {[
                    { label: 'Total Gifts', value: '38' },
                    { label: 'Total Raised', value: '$4,250' },
                    { label: 'Top Category', value: 'Honeymoon' }
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-[#D4AF37]/15 bg-brand-bg/60 p-4">
                      <div className="text-xs text-gray-400">{s.label}</div>
                      <div className="mt-1 text-white font-semibold">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="rounded-2xl border border-[#D4AF37]/15 bg-brand-panel p-6">
              <div className="text-white text-lg font-semibold">Live Mosaic</div>
              <div className="mt-3 text-sm text-gray-400">
                Guests upload photos and they appear here. Next step is a storage + moderation pipeline.
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <div key={idx} className="aspect-square rounded-xl border border-[#D4AF37]/15 bg-brand-bg/60" />
                ))}
              </div>
              <button type="button" className="mt-6 w-full rounded-lg border border-[#D4AF37]/30 px-4 py-3 font-medium text-[#D4AF37] hover:bg-[#D4AF37]/10">
                <Camera size={18} className="inline mr-2" />
                Upload a moment
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
