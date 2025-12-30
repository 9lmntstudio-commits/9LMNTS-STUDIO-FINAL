import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import logoImage from '@assets/images/66355c9cd4c14b7fec10c18b34ee5fc85c12f93e.png';

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#FF7A00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <img 
              src={logoImage} 
              alt="9LMNTS Studio" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Where Digital Design Enters the <span className="font-graffiti text-[#FF7A00]">CYBER CYPHER</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">App Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              contact@9lmnts.studio
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FF7A00]/20 text-center text-gray-400 text-sm">
          <p>© 2024 9LMNTS Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
