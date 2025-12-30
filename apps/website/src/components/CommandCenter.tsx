import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Gamepad2, Brain } from 'lucide-react';

interface CommandCenterProps {
  currentPage: string;
}

export function CommandCenter({ currentPage }: CommandCenterProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const ecosystemNav = [
    {
      name: 'Agency Services',
      id: '/',
      icon: Zap,
      description: 'Web Design, Brand Identity, Digital Strategy'
    },
    {
      name: 'Event OS',
      id: '/event-os',
      icon: Menu,
      description: 'QR-based Event Management System'
    },
    {
      name: 'LOA Assistant',
      id: '/loa-assistant',
      icon: Brain,
      description: 'B2B Workflow Optimization AI'
    },
    {
      name: 'LOA Game',
      id: '/loa-game',
      icon: Gamepad2,
      description: 'Legend of Arcadom - Cyber Action Game'
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#FF7A00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="9LMNTS Studio" 
              className="h-10 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Command Center */}
          <div className="hidden lg:flex items-center space-x-2">
            {ecosystemNav.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  to={item.id}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.id
                      ? 'bg-[#FF7A00] text-[#1A1A1A]'
                      : 'text-white hover:bg-[#FF7A00]/10'
                  }`}
                >
                  <item.icon size={18} />
                  <div className="text-left">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs opacity-75">{item.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Command Center */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-[#FF7A00]/20">
          <div className="px-4 py-4 space-y-2">
            {ecosystemNav.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-all ${
                  location.pathname === item.id
                    ? 'bg-[#FF7A00] text-[#1A1A1A]'
                    : 'text-white hover:bg-[#FF7A00]/10'
                }`}
              >
                <item.icon size={20} />
                <div className="text-left">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm opacity-75">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
