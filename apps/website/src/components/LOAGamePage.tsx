import { Link } from 'react-router-dom';
import { Gamepad2, Zap, Sword, Shield, Star, ArrowRight } from 'lucide-react';

export function LOAGamePage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#222222] border border-[#FF7A00]/30 rounded-full text-[#FF7A00] text-sm">
              SCI-FI CYBER ACTION GAME
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl text-white mb-6">
            <span className="font-futuristic">Legend of</span> 
            <span className="font-graffiti text-[#FF7A00]">Arcadom</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Set in Neo-Ottawa, 2087. Experience the ultimate cyber-action adventure 
            built in Unreal Engine 5.7. Featuring Damian Kane and KJ "Krezzy Bear" Kane.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://store.steampowered.com/app/LOAGAME"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all flex items-center justify-center gap-2 group"
            >
              Play Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] rounded-lg hover:bg-[#FF7A00]/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white text-center mb-16">
            <span className="font-futuristic">Game</span> 
            <span className="font-graffiti text-[#FF7A00]">Features</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sword,
                title: 'Combat System',
                description: 'Advanced melee and ranged combat mechanics'
              },
              {
                icon: Shield,
                title: 'Cyber Augmentations',
                description: 'Enhance abilities with neural implants'
              },
              {
                icon: Zap,
                title: 'Neon Ottawa',
                description: 'Explore the cyber-enhanced cityscape'
              },
              {
                icon: Star,
                title: 'Character Progression',
                description: 'Deep skill trees and customization'
              },
              {
                icon: Gamepad2,
                title: 'Multiplayer Modes',
                description: 'Co-op missions and competitive battles'
              },
              {
                icon: Zap,
                title: 'Dynamic Story',
                description: 'Choices that impact Neo-Ottawa\'s fate'
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

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white text-center mb-16">
            The <span className="font-futuristic">Story</span> of 
            <span className="font-graffiti text-[#FF7A00]">Neo-Ottawa</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl text-white mb-4">2087: The Cyber Revolution</h3>
              <p className="text-gray-300 leading-relaxed">
                In the neon-drenched streets of Neo-Ottawa, corporate AI has merged with 
                street-level cybernetics. Players navigate a world where technology and humanity 
                collide, making choices that shape the future of the city.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As operatives for the underground resistance, you'll uncover the truth behind 
                the corporate facade and fight for the soul of Neo-Ottawa.
              </p>
            </div>
            
            <div className="bg-[#222222] p-6 rounded-lg border border-[#FF7A00]/20">
              <h4 className="text-[#FF7A00] text-xl mb-3">Key Characters</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-white font-medium">Damian Kane</h5>
                  <p className="text-gray-400 text-sm">Veteran operative with mysterious past</p>
                </div>
                <div>
                  <h5 className="text-white font-medium">KJ "Krezzy Bear" Kane</h5>
                  <p className="text-gray-400 text-sm">Tech specialist and demolitions expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-16">
            <span className="font-futuristic">Media</span> & 
            <span className="font-graffiti text-[#FF7A00]">Screenshots</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Neon Streets',
                description: 'Explore the cyber-enhanced cityscape'
              },
              {
                title: 'Combat Arena',
                description: 'Intense multiplayer battles'
              },
              {
                title: 'Corporate Tower',
                description: 'Infiltrate enemy headquarters'
              }
            ].map((media, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-[#222222] rounded-lg overflow-hidden border border-[#FF7A00]/20 hover:border-[#FF7A00]/40 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-[#FF7A00]/20 to-[#222222] flex items-center justify-center">
                    <Gamepad2 className="text-[#FF7A00]" size={48} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white mb-2">{media.title}</h3>
                    <p className="text-gray-400 text-sm">{media.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
