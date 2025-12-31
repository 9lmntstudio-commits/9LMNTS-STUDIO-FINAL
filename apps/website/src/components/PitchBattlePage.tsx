import { useState } from 'react';
import { ArrowLeft, TrendingUp, Clock, Users, Award, DollarSign, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PitchBattlePage() {
  const [activeTab, setActiveTab] = useState('live');
  
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
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#06D6A0]/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <Link to="/event-os" className="inline-flex items-center text-[#06D6A0] mb-6 hover:text-[#06D6A0]/80">
            <ArrowLeft size={20} className="mr-2" />
            Back to Event OS
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white mb-4">
                <span className="font-graffiti text-[#06D6A0]">Pitch Battle</span>
              </h1>
              <p className="text-xl text-gray-400">Corporate Pitch Competition Finals</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2 text-green-500 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold">LIVE EVENT</span>
              </div>
              <div className="text-gray-400">
                <Clock size={16} className="inline mr-1" />
                Started 30 min ago
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 border-b border-[#06D6A0]/20">
            {['live', 'upcoming', 'results', 'investors'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === tab
                    ? 'text-[#06D6A0] border-b-2 border-[#06D6A0]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Live Pitches */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {livePitches.map((pitch) => (
              <div key={pitch.id} className="bg-[#222222] rounded-lg overflow-hidden border border-[#06D6A0]/20">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-lg font-bold">{pitch.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      pitch.status === 'LIVE' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {pitch.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-300 font-medium">{pitch.company}</p>
                    <p className="text-gray-400 text-sm mb-2">by {pitch.entrepreneur}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500">
                        <Clock size={14} className="inline mr-1" />
                        {pitch.timeLeft}
                      </span>
                      <span className="text-gray-500">
                        <DollarSign size={14} className="inline mr-1" />
                        {pitch.investment}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Investor Votes</span>
                      <span className="text-[#06D6A0] font-bold">{pitch.votes}</span>
                    </div>
                    <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                      <div 
                        className="bg-[#06D6A0] h-2 rounded-full transition-all"
                        style={{ width: `${Math.min((pitch.votes / 200) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-[#06D6A0] text-[#1A1A1A] rounded-lg hover:bg-[#06D6A0]/90 transition-all flex items-center justify-center gap-2">
                      <Award size={16} />
                      Vote
                    </button>
                    <button className="p-2 bg-[#1A1A1A] border border-[#06D6A0]/30 rounded-lg hover:border-[#06D6A0]/60 transition-all">
                      <QrCode size={16} className="text-[#06D6A0]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            <span className="font-graffiti text-[#06D6A0]">Live</span> Analytics
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Investors', value: '145', icon: Users, color: 'text-[#06D6A0]' },
              { label: 'Total Investment', value: '$425K', icon: DollarSign, color: 'text-green-500' },
              { label: 'Active Pitches', value: '3', icon: TrendingUp, color: 'text-blue-500' },
              { label: 'Avg. Engagement', value: '89%', icon: Award, color: 'text-purple-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-[#222222] p-6 rounded-lg border border-[#06D6A0]/20">
                <stat.icon className={`${stat.color} mb-3`} size={24} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
