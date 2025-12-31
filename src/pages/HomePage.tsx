import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Zap, Palette, Code, TrendingUp, Shield, Bot, BarChart3, Settings, Plus, Eye, Edit3, Trash2, LayoutGrid, Sparkles, Calendar, Package, Share2, FileText } from 'lucide-react';

export function HomePage() {
  const [activeAgentTab, setActiveAgentTab] = useState('overview');

  // Force redeploy for Vercel settings update
  console.log('9LMNTS Studio v2.0 - Updated');

  const featuredProjects = [
    {
      title: "Sound Clash OS",
      category: "Nightlife & Entertainment",
      image: "/assets/featured/index-SOUND-CLASH-OS.jpg",
      link: "/event-os/sound-clash",
      features: ["Live Voting", "Power Tips", "Battle Mode", "Real-time Chat"]
    },
    {
      title: "The Union: Wedding OS",
      category: "Lifestyle & Events", 
      image: "/assets/featured/index-Juliette's- Wedding.jpg",
      link: "/event-os/wedding",
      features: ["Guest Management", "Live Streaming", "Digital Invitations", "Photo Gallery"]
    },
    {
      title: "Corporate Clash",
      category: "Business & Tech",
      image: "/assets/featured/index-Corporate-V2-MAIN.jpg",
      link: "/event-os/pitch-battle",
      features: ["Pitch Battles", "Investor Voting", "Live Analytics", "Networking Hub"]
    }
  ];

  const services = [
    { icon: Palette, title: "Logo & Brand Identity Design", description: "Craft memorable brand identities that stand out" },
    { icon: Users, title: "Apparel & Merchandise Graphics", description: "Design stunning apparel and merchandise" },
    { icon: Package, title: "Packaging & Print Design", description: "Create eye-catching packaging and print materials" },
    { icon: Share2, title: "Social Media Visual Assets", description: "Develop engaging social media content" },
    { icon: FileText, title: "Style Guide Development", description: "Build comprehensive brand guidelines" }
  ];

  const aiAgents = [
    { id: 'brand', name: 'Brand Agent', icon: Palette, status: 'active', description: 'Manages brand identity and visual assets' },
    { id: 'event', name: 'Event Agent', icon: Calendar, status: 'active', description: 'Coordinates event logistics and scheduling' },
    { id: 'content', name: 'Content Agent', icon: FileText, status: 'active', description: 'Creates and manages content strategy' },
    { id: 'analytics', name: 'Analytics Agent', icon: BarChart3, status: 'active', description: 'Tracks performance and provides insights' },
    { id: 'automation', name: 'Automation Agent', icon: Bot, status: 'idle', description: 'Handles automated workflows and tasks' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-black to-purple-900/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <img 
            src="/assets/brand/Main website logo 9lmnts studio.png" 
            alt="9LMNTS Studio" 
            className="w-64 h-64 mx-auto mb-8 object-contain"
          />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            9LMNTS Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Where Hip-Hop Culture Meets Cutting-Edge Digital Design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/start-project" 
              className="bg-gradient-to-r from-orange-600 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              START YOUR PROJECT
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/admin-dashboard" 
              className="border-2 border-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              ADMIN DASHBOARD
              <Settings className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Event OS Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Event OS Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete event management operating systems for every occasion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Link key={index} to={project.link} className="group block">
                <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-orange-500">
                  <div className="h-48 bg-gray-800 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${project.title}/400/300.jpg`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-orange-500 text-sm mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="bg-orange-500/20 text-orange-500 px-2 py-1 rounded text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-orange-500 group-hover:text-orange-400">
                      <span className="mr-2">View Platform</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/event-os" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold text-lg"
            >
              View All Event OS Platforms
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Graffiti Element Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                The Graffiti Element:
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Your Brand's Visual Identity
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Just as graffiti artists leave their mark on the urban landscape, we craft bold, unforgettable brand identities that stand out in the digital space. From apparel design to comprehensive brand systems, we make your mark impossible to ignore.
              </p>
              
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/start-project" 
                className="bg-gradient-to-r from-orange-600 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-purple-700 transition-all inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/assets/featured/9LMNTS hero section.jpg" 
                alt="Brand Showcase 1"
                className="rounded-lg w-full h-48 object-cover"
                onError={(e) => e.target.src = `https://picsum.photos/seed/brand1/400/300.jpg`}
              />
              <img 
                src="/assets/featured/9LMNTS concept section.jpg" 
                alt="Brand Showcase 2"
                className="rounded-lg w-full h-48 object-cover"
                onError={(e) => e.target.src = `https://picsum.photos/seed/brand2/400/300.jpg`}
              />
              <img 
                src="/assets/featured/9LMNTS Custom service.jpg" 
                alt="Brand Showcase 3"
                className="rounded-lg w-full h-48 object-cover"
                onError={(e) => e.target.src = `https://picsum.photos/seed/brand3/400/300.jpg`}
              />
              <img 
                src="/assets/featured/9LMNTS AI Assitance .jpg" 
                alt="Brand Showcase 4"
                className="rounded-lg w-full h-48 object-cover"
                onError={(e) => e.target.src = `https://picsum.photos/seed/brand4/400/300.jpg`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Multi-Agent AI Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent agent team works together to create and manage your Event OS
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="border-b border-gray-800">
              <div className="flex space-x-1 p-1">
                {['overview', 'agents', 'activity'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveAgentTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeAgentTab === tab
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8">
              {activeAgentTab === 'overview' && (
                <div className="text-center">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="text-3xl font-bold text-orange-500 mb-2">5</div>
                      <div className="text-gray-300">Active Agents</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                      <div className="text-gray-300">Availability</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="text-3xl font-bold text-purple-500 mb-2">AI</div>
                      <div className="text-gray-300">Powered</div>
                    </div>
                  </div>
                  <Link 
                    to="/admin-dashboard" 
                    className="inline-flex items-center gap-2 bg-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
                  >
                    Manage Agents
                    <Settings className="w-5 h-5" />
                  </Link>
                </div>
              )}

              {activeAgentTab === 'agents' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiAgents.map((agent) => (
                    <div key={agent.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <agent.icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          agent.status === 'active' 
                            ? 'bg-green-500/20 text-green-500' 
                            : 'bg-gray-600/20 text-gray-400'
                        }`}>
                          {agent.status}
                        </div>
                      </div>
                      <h3 className="font-semibold text-white mb-2">{agent.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{agent.description}</p>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm transition-colors">
                          Configure
                        </button>
                        <button className="flex-1 bg-orange-600/20 hover:bg-orange-600/30 text-orange-500 px-3 py-2 rounded text-sm transition-colors">
                          View Logs
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeAgentTab === 'activity' && (
                <div className="space-y-4">
                  {[/* Add activity logs here */].map((activity, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-white">{activity.agent}</div>
                          <div className="text-gray-400 text-sm">{activity.action}</div>
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm">{activity.time}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/founder/my bro wedding.jpg" 
                alt="Darnley Sanon - Founder"
                className="rounded-2xl w-full max-w-md mx-auto lg:max-w-full object-cover"
                onError={(e) => e.target.src = `https://picsum.photos/seed/founder/400/500.jpg`}
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Meet the Founder
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Darnley Sanon - Founder
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Founder & Creative Director
              </p>
              <p className="text-gray-300 mb-8">
                With over a decade of experience in graphic design and UI/UX, Darnley founded 9LMNTS Studio to merge his passion for Hip-Hop culture with cutting-edge digital design. His unique approach combines artistic authenticity with technical excellence.
              </p>
              <p className="text-gray-300 mb-8">
                As a freelance graphic designer and UI/UX specialist, he has worked with clients across Southeast Asia, bringing a fresh perspective that honors cultural roots while embracing innovation.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-300 mb-8">
                "Every project is an opportunity to tell a story, to create something that resonates beyond the screen. That's the power of combining art, culture, and technology."
              </blockquote>
              <div className="flex flex-wrap gap-3">
                {['Graphic Design', 'UI/UX Design', 'Brand Strategy', 'Art Direction'].map((skill) => (
                  <span key={skill} className="bg-orange-500/20 text-orange-500 px-4 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Our Work
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Portfolio of Digital Excellence
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of projects where Hip-Hop culture meets cutting-edge design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[/* Add work items here */].map((work, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-orange-500 transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`/assets/featured/${work.img}`}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => e.target.src = `https://picsum.photos/seed/${work.title}/400/300.jpg`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                    <button className="text-orange-500 hover:text-orange-400 font-medium flex items-center gap-2">
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOA Link Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            LOA Event OS
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Live Event Operating System - Powered by AI Agents
          </p>
          
          {/* Video Game Trailer Placeholder */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Video Game Trailer</h3>
                <p className="text-gray-400">Coming Soon - Experience the future of live events</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="text-left">
                <span className="text-orange-500">🎮</span> Interactive Gameplay
              </div>
              <div className="text-left">
                <span className="text-orange-500">🤖</span> AI-Powered Events
              </div>
              <div className="text-left">
                <span className="text-orange-500">🌐</span> Multi-Platform Support
              </div>
              <div className="text-left">
                <span className="text-orange-500">⚡</span> Real-Time Processing
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link 
              to="/loa-funds" 
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all group"
            >
              <div className="text-orange-500 mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                Fund Your LOA
              </h3>
              <p className="text-gray-400">
                Support and invest in live event operating systems
              </p>
            </Link>
            <Link 
              to="/loa-admin" 
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
            >
              <div className="text-purple-500 mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-500 transition-colors">
                LOA Admin
              </h3>
              <p className="text-gray-400">
                Manage your live events with AI agents
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
