import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '@assets/images/66355c9cd4c14b7fec10c18b34ee5fc85c12f93e.png';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', id: '/' },
    { name: 'Services', id: '/services' },
    { name: 'Pricing', id: '/pricing' },
    { name: 'About', id: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#FF7A00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logoImage} 
              alt="9LMNTS Studio" 
              className="h-10 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                className={`transition-colors ${
                  location.pathname === link.id
                    ? 'text-[#FF7A00]'
                    : 'text-white hover:text-[#FF7A00]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              className="px-6 py-2 bg-[#FF7A00] text-[#1A1A1A] rounded hover:bg-[#FF7A00]/90 transition-colors"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#FF7A00]/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  location.pathname === link.id
                    ? 'text-[#FF7A00] bg-[#222222]'
                    : 'text-white hover:bg-[#222222]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-2 px-6 py-2 bg-[#FF7A00] text-[#1A1A1A] rounded hover:bg-[#FF7A00]/90 transition-colors"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
