import { Mic2, Disc3, Paintbrush, Users, Radio, BookOpen, Lightbulb, Code, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      icon: Mic2,
      title: 'MCing Element',
      description: 'Brand voice & messaging strategy that speaks to your audience with authentic rhythm',
      color: '#FF7A00',
    },
    {
      icon: Disc3,
      title: 'DJing Element',
      description: 'Mixing user experience flows to create seamless digital journeys',
      color: '#FF7A00',
    },
    {
      icon: Paintbrush,
      title: 'Graffiti Element',
      description: 'Bold visual design and brand identity that makes your mark on the digital landscape',
      color: '#FF7A00',
    },
    {
      icon: Users,
      title: 'Breaking Element',
      description: 'Breaking conventional design patterns with innovative UI/UX solutions',
      color: '#FF7A00',
    },
    {
      icon: Radio,
      title: 'Beatboxing Element',
      description: 'Creating rhythmic interactions and animations that bring your site to life',
      color: '#FF7A00',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Element',
      description: 'Content strategy and information architecture that educates and engages',
      color: '#FF7A00',
    },
    {
      icon: Lightbulb,
      title: 'Fashion Element',
      description: 'Trendsetting design aesthetics that keep your brand ahead of the curve',
      color: '#FF7A00',
    },
    {
      icon: Code,
      title: 'Entrepreneurship Element',
      description: 'Full-stack development and technical solutions for your business growth',
      color: '#FF7A00',
    },
    {
      icon: Palette,
      title: 'Language Element',
      description: 'Multi-platform design language systems for consistent brand expression',
      color: '#FF7A00',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#222222] border border-[#FF7A00]/30 rounded-full text-[#FF7A00] text-sm">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            <span className="font-futuristic">The Nine Pillars of</span><br />
            <span className="font-graffiti text-[#FF7A00]">Digital Dominance</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Each element represents a core discipline of Hip-Hop culture, 
            reimagined for the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-[#222222] p-8 rounded-lg border border-[#FF7A00]/20 hover:border-[#FF7A00] transition-all hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className="mb-4 inline-block p-3 bg-[#FF7A00]/10 rounded-lg group-hover:bg-[#FF7A00]/20 transition-colors">
                    <Icon className="text-[#FF7A00]" size={32} />
                  </div>
                  <h3 className="text-white text-xl mb-3 group-hover:text-[#FF7A00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Graffiti Element Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl text-white mb-6">
                <span className="font-graffiti text-[#FF7A00]">Graffiti Element:</span><br />
                <span className="font-futuristic">Your Brand's Visual Identity</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Just as graffiti artists leave their mark on the urban landscape, 
                we craft bold, unforgettable brand identities that stand out in 
                the digital space. From apparel design to comprehensive brand systems, 
                we make your mark impossible to ignore.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Logo & Brand Identity Design',
                  'Apparel & Merchandise Graphics',
                  'Packaging & Print Design',
                  'Social Media Visual Assets',
                  'Style Guide Development',
                ].map((item, index) => (
                  <li key={index} className="text-gray-400 flex items-start">
                    <span className="text-[#FF7A00] mr-3 text-xl">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all">
                Get Started
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-[#FF7A00]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1511742667815-af572199b23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc2NDI2ODIxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Apparel Design Showcase"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF7A00]/20 rounded-lg blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF7A00]/20 rounded-lg blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl text-white mb-4">
              <span className="font-futuristic">Our</span> <span className="font-graffiti text-[#FF7A00]">Process</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A systematic flow from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision and goals' },
              { step: '02', title: 'Design', desc: 'Crafting the visual experience' },
              { step: '03', title: 'Develop', desc: 'Building with cutting-edge tech' },
              { step: '04', title: 'Deploy', desc: 'Launching your digital presence' },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-6xl text-[#FF7A00]/20 mb-4">{phase.step}</div>
                <h3 className="text-white text-xl mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-[#FF7A00]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl text-white mb-6">
            <span className="font-futuristic">Ready to Create Something</span><br />
            <span className="font-graffiti text-[#FF7A00]">Legendary?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's combine our 9 elements to build your digital masterpiece
          </p>
          <button className="px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
