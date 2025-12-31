import { Link } from 'react-router-dom';
import { Zap, QrCode, Brain, Gamepad2, ArrowRight, CheckCircle, Calendar, Users, TrendingUp, Shield } from 'lucide-react';

export function EventOSPage() {
  const eventTypes = [
    {
      title: 'Culture Clash',
      description: 'Street Tournament Live Event Platform',
      icon: Users,
      features: ['Live Battle Tracking', 'Real-time Scoring', 'Audience Voting', 'QR Check-in'],
      route: '/event-os/culture-clash',
      color: '#FF5E00'
    },
    {
      title: 'Pitch Battle',
      description: 'Corporate Pitch Competition Finals',
      icon: TrendingUp,
      features: ['Live Pitch Tracking', 'Investor Voting', 'Real-time Analytics', 'QR Networking'],
      route: '/event-os/pitch-battle',
      color: '#06D6A0'
    },
    {
      title: 'Runway OS',
      description: 'Fashion Week Live Management',
      icon: Calendar,
      features: ['Model Tracking', 'Show Scheduling', 'Designer Profiles', 'QR Access'],
      route: '/event-os/runway',
      color: '#CCFF00'
    },
    {
      title: 'Sports Clash',
      description: 'Live Sports Event Management',
      icon: Shield,
      features: ['Game Tracking', 'Player Stats', 'Fan Engagement', 'QR Tickets'],
      route: '/event-os/sports-clash',
      color: '#3B82F6'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#222222] border border-[#FF7A00]/30 rounded-full text-[#FF7A00] text-sm">
              EVENT MANAGEMENT SYSTEM
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl text-white mb-6">
            <span className="font-futuristic">Event OS</span> - 
            <span className="font-graffiti text-[#FF7A00]">Live Experience Engine</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            QR-based real-time event management powered by the L.O.A. AI Agent. 
            Transform your events with cutting-edge logistics and engagement tracking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all flex items-center justify-center gap-2 group"
            >
              Request Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] rounded-lg hover:bg-[#FF7A00]/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white text-center mb-16">
            <span className="font-futuristic">Event</span> 
            <span className="font-graffiti text-[#FF7A00]">Platforms</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="group cursor-pointer">
                <div 
                  className="bg-[#222222] rounded-lg overflow-hidden border border-[#FF7A00]/20 hover:border-[#FF7A00]/40 transition-all"
                  style={{ borderTop: `4px solid ${event.color}` }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <event.icon 
                        className="mr-3" 
                        size={32} 
                        style={{ color: event.color }}
                      />
                      <div>
                        <h3 className="text-white text-xl font-bold">{event.title}</h3>
                        <p className="text-gray-400 text-sm">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {event.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <QrCode className="mr-2" size={16} style={{ color: event.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={event.route}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-medium"
                      style={{
                        backgroundColor: `${event.color}20`,
                        border: `1px solid ${event.color}`,
                        color: event.color
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = event.color;
                        e.currentTarget.style.color = '#1A1A1A';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${event.color}20`;
                        e.currentTarget.style.color = event.color;
                      }}
                    >
                      Launch Platform
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white text-center mb-16">
            <span className="font-futuristic">Powered</span> by <span className="font-graffiti text-[#FF7A00]">L.O.A.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: QrCode,
                title: 'QR-Based Check-in',
                description: 'Seamless guest registration with QR code scanning technology'
              },
              {
                icon: Zap,
                title: 'Real-Time Analytics',
                description: 'Live event metrics and engagement tracking'
              },
              {
                icon: Brain,
                title: 'AI-Powered Logistics',
                description: 'Intelligent resource allocation and crowd management'
              },
              {
                icon: CheckCircle,
                title: 'Multi-Event Support',
                description: 'Handle conferences, festivals, and corporate events'
              },
              {
                icon: Zap,
                title: 'Mobile First Design',
                description: 'Manage events from anywhere with our mobile app'
              },
              {
                icon: QrCode,
                title: 'Custom Branding',
                description: 'White-label solution with your event branding'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#222222] p-6 rounded-lg border border-[#FF7A00]/20 hover:border-[#FF7A00]/40 transition-all">
                <feature.icon className="text-[#FF7A00] mb-4" size={32} />
                <h3 className="text-white text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-white mb-6">
            Ready to <span className="font-graffiti text-[#FF7A00]">Transform</span> Your Events?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join the venues using Event OS for next-generation event management
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all"
          >
            Schedule Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
