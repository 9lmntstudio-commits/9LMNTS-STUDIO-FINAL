import { useState } from 'react';
import { ArrowLeft, Users, Clock, TrendingUp, QrCode, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CultureClashPage() {
  const [activeTab, setActiveTab] = useState('live');
  
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
      votes: { flow: 892, rhyme: 756 },
      timeLeft: '1:30'
    },
    {
      id: 3,
      title: 'Art Battle',
      participants: 'Visual King vs Art Master',
      status: 'UPCOMING',
      votes: { visual: 0, art: 0 },
      timeLeft: '15:00'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FF5E00]/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <Link to="/event-os" className="inline-flex items-center text-[#FF7A00] mb-6 hover:text-[#FF7A00]/80">
            <ArrowLeft size={20} className="mr-2" />
            Back to Event OS
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white mb-4">
                <span className="font-graffiti text-[#FF5E00]">Culture Clash</span>
              </h1>
              <p className="text-xl text-gray-400">Street Tournament Live Event Platform</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2 text-red-500 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-bold">LIVE EVENT</span>
              </div>
              <div className="text-gray-400">
                <Clock size={16} className="inline mr-1" />
                Started 45 min ago
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 border-b border-[#FF7A00]/20">
            {['live', 'upcoming', 'results'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === tab
                    ? 'text-[#FF7A00] border-b-2 border-[#FF7A00]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Live Battles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveBattles.map((battle) => (
              <div key={battle.id} className="bg-[#222222] rounded-lg overflow-hidden border border-[#FF7A00]/20">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-lg font-bold">{battle.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      battle.status === 'LIVE' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {battle.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">{battle.participants}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        <Clock size={14} className="inline mr-1" />
                        {battle.timeLeft}
                      </span>
                      <span className="text-gray-500">
                        <Users size={14} className="inline mr-1" />
                        {battle.votes.alpha + battle.votes.beta} votes
                      </span>
                    </div>
                  </div>
                  
                  {battle.status === 'LIVE' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Crew Alpha</span>
                        <span className="text-[#FF5E00] font-bold">{battle.votes.alpha}</span>
                      </div>
                      <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                        <div 
                          className="bg-[#FF5E00] h-2 rounded-full transition-all"
                          style={{ width: `${(battle.votes.alpha / (battle.votes.alpha + battle.votes.beta)) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Crew Beta</span>
                        <span className="text-[#FF5E00] font-bold">{battle.votes.beta}</span>
                      </div>
                    </div>
                  )}
                  
                  <button className="w-full mt-4 py-2 bg-[#FF5E00] text-[#1A1A1A] rounded-lg hover:bg-[#FF5E00]/90 transition-all flex items-center justify-center gap-2">
                    <QrCode size={16} />
                    Vote with QR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            <span className="font-graffiti text-[#FF5E00]">Platform</span> Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Live Battle Tracking', description: 'Real-time battle progress and scoring' },
              { icon: TrendingUp, title: 'Real-time Scoring', description: 'Instant vote counting and leaderboards' },
              { icon: Star, title: 'Audience Voting', description: 'QR-based voting system' },
              { icon: QrCode, title: 'QR Check-in', description: 'Seamless guest registration' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="text-[#FF5E00] mx-auto mb-4" size={32} />
                <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
