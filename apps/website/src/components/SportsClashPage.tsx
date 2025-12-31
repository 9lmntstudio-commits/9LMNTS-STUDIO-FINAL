import { useState } from 'react';
import { ArrowLeft, Trophy, Clock, Users, Target, Shield, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SportsClashPage() {
  const [activeTab, setActiveTab] = useState('live');
  
  const liveGames = [
    {
      id: 1,
      sport: 'Basketball',
      teams: 'Lions vs Eagles',
      status: 'LIVE',
      score: { lions: 78, eagles: 82 },
      quarter: '4th QTR - 2:45',
      attendance: '2,341',
      league: 'Pro League'
    },
    {
      id: 2,
      sport: 'Soccer',
      teams: 'United vs City',
      status: 'LIVE',
      score: { united: 2, city: 2 },
      time: '65th minute',
      attendance: '5,123',
      league: 'Premier Division'
    },
    {
      id: 3,
      sport: 'Tennis',
      teams: 'Williams vs Johnson',
      status: 'UPCOMING',
      score: { williams: 0, johnson: 0 },
      time: '3:00 PM',
      attendance: '890',
      league: 'Open Championship'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3B82F6]/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <Link to="/event-os" className="inline-flex items-center text-[#3B82F6] mb-6 hover:text-[#3B82F6]/80">
            <ArrowLeft size={20} className="mr-2" />
            Back to Event OS
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white mb-4">
                <span className="font-graffiti text-[#3B82F6]">Sports Clash</span>
              </h1>
              <p className="text-xl text-gray-400">Live Sports Event Management</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-bold">LIVE GAMES</span>
              </div>
              <div className="text-gray-400">
                <Clock size={16} className="inline mr-1" />
                {liveGames.filter(g => g.status === 'LIVE').length} games active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 border-b border-[#3B82F6]/20">
            {['live', 'schedule', 'standings', 'stats'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === tab
                    ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Live Games */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveGames.map((game) => (
              <div key={game.id} className="bg-[#222222] rounded-lg overflow-hidden border border-[#3B82F6]/20">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white text-lg font-bold">{game.sport}</h3>
                      <p className="text-gray-400 text-sm">{game.league}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      game.status === 'LIVE' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium">{game.teams}</span>
                      <span className="text-gray-500 text-sm">{game.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users size={14} />
                      <span>{game.attendance} fans</span>
                    </div>
                  </div>
                  
                  {game.status === 'LIVE' && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-300">Score</span>
                        <span className="text-[#3B82F6] font-bold text-xl">
                          {Object.values(game.score).join(' - ')}
                        </span>
                      </div>
                      <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                          style={{ 
                            width: `${(Object.values(game.score)[0] / (Object.values(game.score)[0] + Object.values(game.score)[1])) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#3B82F6]/90 transition-all flex items-center justify-center gap-2">
                      <Target size={16} />
                      {game.status === 'LIVE' ? 'Follow Live' : 'Set Reminder'}
                    </button>
                    <button className="p-2 bg-[#1A1A1A] border border-[#3B82F6]/30 rounded-lg hover:border-[#3B82F6]/60 transition-all">
                      <QrCode size={16} className="text-[#3B82F6]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            <span className="font-graffiti text-[#3B82F6]">Live</span> Player Stats
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Active Players', value: '24', icon: Users, color: 'text-[#3B82F6]' },
              { label: 'Total Points', value: '162', icon: Trophy, color: 'text-yellow-500' },
              { label: 'Live Fans', value: '8,354', icon: Shield, color: 'text-green-500' },
              { label: 'Games Today', value: '12', icon: Target, color: 'text-purple-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-[#222222] p-6 rounded-lg border border-[#3B82F6]/20">
                <stat.icon className={`${stat.color} mb-3`} size={24} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* League Standings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            <span className="font-graffiti text-[#3B82F6]">League</span> Standings
          </h2>
          
          <div className="bg-[#222222] rounded-lg overflow-hidden border border-[#3B82F6]/20">
            <table className="w-full">
              <thead className="bg-[#1A1A1A] border-b border-[#3B82F6]/20">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-400">Team</th>
                  <th className="px-6 py-3 text-center text-gray-400">W</th>
                  <th className="px-6 py-3 text-center text-gray-400">L</th>
                  <th className="px-6 py-3 text-center text-gray-400">PCT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { team: 'Lions', wins: 12, losses: 3 },
                  { team: 'Eagles', wins: 11, losses: 4 },
                  { team: 'United', wins: 10, losses: 5 },
                  { team: 'City', wins: 9, losses: 6 }
                ].map((team, index) => (
                  <tr key={index} className="border-b border-[#3B82F6]/10">
                    <td className="px-6 py-4 text-white font-medium">{team.team}</td>
                    <td className="px-6 py-4 text-center text-green-500">{team.wins}</td>
                    <td className="px-6 py-4 text-center text-red-500">{team.losses}</td>
                    <td className="px-6 py-4 text-center text-[#3B82F6]">
                      {((team.wins / (team.wins + team.losses)) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
