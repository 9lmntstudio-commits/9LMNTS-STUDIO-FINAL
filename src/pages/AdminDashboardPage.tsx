import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  BarChart3, 
  Settings, 
  Users, 
  Calendar, 
  FileText, 
  Palette, 
  Zap, 
  Plus, 
  Eye, 
  Edit3, 
  Trash2, 
  ArrowLeft,
  Activity,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Database,
  Globe,
  Shield,
  Cpu
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  icon: any;
  status: 'active' | 'idle' | 'busy' | 'offline';
  description: string;
  uptime: string;
  tasks: number;
  performance: number;
}

interface LOAEvent {
  id: string;
  name: string;
  type: string;
  status: 'planning' | 'active' | 'completed';
  date: string;
  attendees: number;
  revenue: string;
}

export function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents: Agent[] = [
    { 
      id: 'brand', 
      name: 'Brand Agent', 
      icon: Palette, 
      status: 'active', 
      description: 'Manages brand identity and visual assets',
      uptime: '99.9%',
      tasks: 142,
      performance: 98
    },
    { 
      id: 'event', 
      name: 'Event Agent', 
      icon: Calendar, 
      status: 'active', 
      description: 'Coordinates event logistics and scheduling',
      uptime: '99.7%',
      tasks: 89,
      performance: 95
    },
    { 
      id: 'content', 
      name: 'Content Agent', 
      icon: FileText, 
      status: 'busy', 
      description: 'Creates and manages content strategy',
      uptime: '98.5%',
      tasks: 234,
      performance: 92
    },
    { 
      id: 'analytics', 
      name: 'Analytics Agent', 
      icon: BarChart3, 
      status: 'active', 
      description: 'Tracks performance and provides insights',
      uptime: '100%',
      tasks: 567,
      performance: 99
    },
    { 
      id: 'automation', 
      name: 'Automation Agent', 
      icon: Bot, 
      status: 'idle', 
      description: 'Handles automated workflows and tasks',
      uptime: '99.2%',
      tasks: 423,
      performance: 96
    }
  ];

  const loaEvents: LOAEvent[] = [
    {
      id: '1',
      name: 'Sound Clash 2025',
      type: 'Entertainment',
      status: 'active',
      date: '2025-01-15',
      attendees: 2500,
      revenue: '$125,000'
    },
    {
      id: '2',
      name: 'Corporate Summit',
      type: 'Business',
      status: 'planning',
      date: '2025-02-20',
      attendees: 500,
      revenue: '$75,000'
    },
    {
      id: '3',
      name: 'Fashion Week Runway',
      type: 'Lifestyle',
      status: 'completed',
      date: '2024-12-10',
      attendees: 1800,
      revenue: '$95,000'
    }
  ];

  const systemMetrics = {
    totalEvents: 47,
    activeUsers: 12847,
    revenue: '$2.4M',
    uptime: '99.9%',
    dataProcessed: '1.2TB',
    apiCalls: '8.7M'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500 bg-green-500/20';
      case 'idle': return 'text-gray-500 bg-gray-500/20';
      case 'busy': return 'text-yellow-500 bg-yellow-500/20';
      case 'offline': return 'text-red-500 bg-red-500/20';
      case 'planning': return 'text-blue-500 bg-blue-500/20';
      case 'completed': return 'text-green-500 bg-green-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                LOA Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-800">
        <div className="px-6">
          <div className="flex space-x-1">
            {['overview', 'agents', 'events', 'analytics', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium transition-all border-b-2 ${
                  activeTab === tab
                    ? 'text-orange-500 border-orange-500'
                    : 'text-gray-400 border-transparent hover:text-white hover:border-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* System Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="text-xs text-green-500">+12%</span>
                </div>
                <div className="text-2xl font-bold">{systemMetrics.totalEvents}</div>
                <div className="text-sm text-gray-400">Total Events</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-xs text-green-500">+23%</span>
                </div>
                <div className="text-2xl font-bold">{systemMetrics.activeUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-xs text-green-500">+8%</span>
                </div>
                <div className="text-2xl font-bold">{systemMetrics.revenue}</div>
                <div className="text-sm text-gray-400">Revenue</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-5 h-5 text-purple-500" />
                  <span className="text-xs text-green-500">Stable</span>
                </div>
                <div className="text-2xl font-bold">{systemMetrics.uptime}</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Database className="w-5 h-5 text-yellow-500" />
                  <span className="text-xs text-green-500">+15%</span>
                </div>
                <div className="text-2xl font-bold">{systemMetrics.dataProcessed}</div>
                <div className="text-sm text-gray-400">Data Processed</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Globe className="w-5 h-5 text-cyan-500" />
                  <span className="text-xs text-green-500">+31%</span>
                </div>
                <div className="text-2xl font-bold">{systemMetrics.apiCalls}</div>
                <div className="text-sm text-gray-400">API Calls</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/create-loa"
                className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all group"
              >
                <Plus className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Create New LOA</h3>
                <p className="text-sm opacity-90">Launch a new Live Event OS</p>
              </Link>
              
              <button className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all text-left">
                <Bot className="w-8 h-8 mb-4 text-purple-500" />
                <h3 className="text-lg font-bold mb-2">Manage Agents</h3>
                <p className="text-sm text-gray-400">Configure AI agents</p>
              </button>
              
              <button className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all text-left">
                <BarChart3 className="w-8 h-8 mb-4 text-blue-500" />
                <h3 className="text-lg font-bold mb-2">View Analytics</h3>
                <p className="text-sm text-gray-400">Performance insights</p>
              </button>
              
              <button className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all text-left">
                <Settings className="w-8 h-8 mb-4 text-gray-500" />
                <h3 className="text-lg font-bold mb-2">System Settings</h3>
                <p className="text-sm text-gray-400">Configure platform</p>
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-900 rounded-xl border border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-bold">Recent Activity</h2>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { agent: 'Brand Agent', action: 'Updated brand guidelines for Sound Clash', time: '2 mins ago', status: 'success' },
                  { agent: 'Event Agent', action: 'Scheduled new event: Corporate Summit', time: '15 mins ago', status: 'success' },
                  { agent: 'Content Agent', action: 'Generated 50 social media posts', time: '1 hour ago', status: 'success' },
                  { agent: 'Analytics Agent', action: 'Generated weekly performance report', time: '2 hours ago', status: 'success' },
                  { agent: 'Automation Agent', action: 'Processed 234 ticket requests', time: '3 hours ago', status: 'success' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
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
            </div>
          </div>
        )}

        {/* Agents Tab */}
        {activeTab === 'agents' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">AI Agent Management</h2>
              <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Agent
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <div 
                  key={agent.id}
                  className={`bg-gray-900 rounded-xl border-2 p-6 cursor-pointer transition-all ${
                    selectedAgent === agent.id 
                      ? 'border-orange-500 bg-orange-500/5' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                  onClick={() => setSelectedAgent(agent.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <agent.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                      {agent.status}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-white mb-2">{agent.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{agent.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-green-500">{agent.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Tasks</span>
                      <span className="text-white">{agent.tasks}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Performance</span>
                      <span className="text-orange-500">{agent.performance}%</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-sm transition-colors">
                      Configure
                    </button>
                    <button className="flex-1 bg-orange-600/20 hover:bg-orange-600/30 text-orange-500 px-3 py-2 rounded text-sm transition-colors">
                      View Logs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">LOA Events Management</h2>
              <Link 
                to="/create-loa"
                className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Create Event
              </Link>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Event Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Attendees</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Revenue</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {loaEvents.map((event) => (
                      <tr key={event.id} className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">{event.name}</td>
                        <td className="px-6 py-4 text-gray-300">{event.type}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{event.date}</td>
                        <td className="px-6 py-4 text-gray-300">{event.attendees.toLocaleString()}</td>
                        <td className="px-6 py-4 text-gray-300">{event.revenue}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                              <Eye className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                              <Edit3 className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Analytics & Insights</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-bold mb-4">Performance Overview</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Event Success Rate', value: '94%', change: '+5%' },
                    { metric: 'User Engagement', value: '87%', change: '+12%' },
                    { metric: 'Revenue Growth', value: '$2.4M', change: '+18%' },
                    { metric: 'Agent Efficiency', value: '96%', change: '+3%' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-400">{item.metric}</span>
                      <div className="text-right">
                        <div className="font-bold text-white">{item.value}</div>
                        <div className="text-xs text-green-500">{item.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-bold mb-4">Agent Performance</h3>
                <div className="space-y-4">
                  {agents.map((agent) => (
                    <div key={agent.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{agent.name}</span>
                        <span className="text-orange-500">{agent.performance}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-purple-600 h-2 rounded-full"
                          style={{ width: `${agent.performance}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">System Settings</h2>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6">General Configuration</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">System Name</label>
                  <input 
                    type="text" 
                    defaultValue="9LMNTS LOA System"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Default Timezone</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none">
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC+0 (GMT)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">API Rate Limit</label>
                  <input 
                    type="number" 
                    defaultValue="1000"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6">AI Agent Settings</h3>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <span className="text-gray-300">Enable Auto-scaling</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600 bg-gray-800 border-gray-600 rounded focus:ring-orange-500" />
                </label>
                
                <label className="flex items-center justify-between">
                  <span className="text-gray-300">Performance Monitoring</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600 bg-gray-800 border-gray-600 rounded focus:ring-orange-500" />
                </label>
                
                <label className="flex items-center justify-between">
                  <span className="text-gray-300">Auto-recovery</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600 bg-gray-800 border-gray-600 rounded focus:ring-orange-500" />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
