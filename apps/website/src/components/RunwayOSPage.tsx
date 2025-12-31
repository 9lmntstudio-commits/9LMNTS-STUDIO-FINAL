import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, Star, Heart, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RunwayOSPage() {
  const [activeTab, setActiveTab] = useState('schedule');
  
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
    <div className="min-h-screen bg-[#000000] pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#CCFF00]/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <Link to="/event-os" className="inline-flex items-center text-[#CCFF00] mb-6 hover:text-[#CCFF00]/80">
            <ArrowLeft size={20} className="mr-2" />
            Back to Event OS
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white mb-4">
                <span className="font-graffiti text-[#CCFF00]">Runway OS</span>
              </h1>
              <p className="text-xl text-gray-400">Fashion Week Live Management</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2 text-[#CCFF00] mb-2">
                <div className="w-3 h-3 bg-[#CCFF00] rounded-full animate-pulse"></div>
                <span className="font-bold">LIVE EVENT</span>
              </div>
              <div className="text-gray-400">
                <Clock size={16} className="inline mr-1" />
                Day 2 - 6 Shows Remaining
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 border-b border-[#CCFF00]/20">
            {['schedule', 'designers', 'backstage', 'trends'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === tab
                    ? 'text-[#CCFF00] border-b-2 border-[#CCFF00]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Shows */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fashionShows.map((show) => (
              <div key={show.id} className="bg-[#121212] rounded-lg overflow-hidden border border-[#CCFF00]/20">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white text-lg font-bold">{show.designer}</h3>
                      <p className="text-gray-400 text-sm">{show.collection}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      show.status === 'NOW SHOWING' 
                        ? 'bg-[#CCFF00] text-black' 
                        : 'bg-gray-800 text-gray-300'
                    }`}>
                      {show.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <span>
                        <Calendar size={14} className="inline mr-1" />
                        {show.time}
                      </span>
                      <span>
                        <Users size={14} className="inline mr-1" />
                        {show.models} models
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{show.looks} looks</span>
                      <span className="text-gray-500 text-sm">{show.category}</span>
                    </div>
                  </div>
                  
                  {show.rating > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.floor(show.rating) ? 'text-[#CCFF00]' : 'text-gray-600'}
                            fill={i < Math.floor(show.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                        <span className="text-gray-400 text-sm ml-2">{show.rating}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-[#CCFF00] text-black rounded-lg hover:bg-[#CCFF00]/90 transition-all flex items-center justify-center gap-2 font-medium">
                      {show.status === 'NOW SHOWING' ? 'Watch Live' : 'View Details'}
                    </button>
                    <button className="p-2 bg-[#1A1A1A] border border-[#CCFF00]/30 rounded-lg hover:border-[#CCFF00]/60 transition-all">
                      <QrCode size={16} className="text-[#CCFF00]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Profiles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            <span className="font-graffiti text-[#CCFF00]">Featured</span> Designers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {fashionShows.slice(0, 3).map((show, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-[#CCFF00]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-[#CCFF00]" size={32} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{show.designer}</h3>
                <p className="text-gray-400 text-sm mb-3">{show.category}</p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < Math.floor(show.rating || 4) ? 'text-[#CCFF00]' : 'text-gray-600'}
                      fill={i < Math.floor(show.rating || 4) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Trends */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            <span className="font-graffiti text-[#CCFF00]">Live</span> Trends
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { trend: 'Neon Colors', votes: 234, change: '+12%' },
              { trend: 'Tech Fabrics', votes: 189, change: '+8%' },
              { trend: 'Minimalist', votes: 156, change: '-3%' },
              { trend: 'Sustainable', votes: 298, change: '+15%' }
            ].map((trend, index) => (
              <div key={index} className="bg-[#121212] p-6 rounded-lg border border-[#CCFF00]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{trend.trend}</span>
                  <Heart className="text-[#CCFF00]" size={16} />
                </div>
                <div className="text-2xl font-bold text-[#CCFF00] mb-1">{trend.votes}</div>
                <div className={`text-sm ${trend.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {trend.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
