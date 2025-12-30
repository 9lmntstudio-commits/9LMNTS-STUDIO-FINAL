import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Layers } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const featuredWorks = [
    {
      title: 'Rockin\' Smiles',
      category: 'Brand Identity & Web Design',
      image: 'https://images.unsplash.com/photo-1758770478140-e45dac838d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0MjI2MDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Cake Bite UI',
      category: 'Mobile App Design',
      image: 'https://images.unsplash.com/photo-1762279389053-d5a30239ae45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGFic3RyYWN0fGVufDF8fHx8MTc2NDI2ODIxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Urban Apparel',
      category: 'Fashion & E-commerce',
      image: 'https://images.unsplash.com/photo-1511742667815-af572199b23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc2NDI2ODIxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const pricingTiers = [
    {
      name: 'Flow Element',
      price: '750,000',
      features: ['Basic Web Design', '3 Page Website', 'Mobile Responsive', '1 Month Support'],
    },
    {
      name: 'Beat Element',
      price: '2,500,000',
      features: ['Advanced Design', 'Up to 10 Pages', 'Custom Animations', '3 Months Support', 'SEO Optimization'],
      highlighted: false,
    },
    {
      name: 'Cypher Element',
      price: '5,000,000',
      features: ['Premium Design', 'Unlimited Pages', 'Full Stack Development', '6 Months Support', 'AI Integration', 'Custom CMS'],
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-[#222222] border border-[#FF7A00]/30 rounded-full text-[#FF7A00] text-sm">
              Welcome to the Future
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 tracking-tight">
            <span className="font-futuristic">9LMNTS</span> <span className="font-graffiti text-[#FF7A00]">Studio</span>: Where<br />
            Digital Design Enters the<br />
            <span className="text-[#FF7A00] font-futuristic">CYBER CYPHER</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Blending Hip-Hop culture with cutting-edge AI technology to create 
            unforgettable digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] rounded-lg hover:bg-[#FF7A00]/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 9 Elements Concept */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl text-white mb-4">
              The <span className="font-futuristic">9LMNTS</span> <span className="font-graffiti text-[#FF7A00]">Concept</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Just like the 9 elements of Hip-Hop culture, we bring together 
              diverse creative pillars to craft your digital presence
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div
                key={num}
                className="aspect-square bg-[#222222] border-2 border-[#FF7A00]/30 rounded-lg flex items-center justify-center group hover:border-[#FF7A00] transition-all hover:scale-110 cursor-pointer"
              >
                <span className="text-4xl text-[#FF7A00] group-hover:scale-125 transition-transform">
                  {num}
                </span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#222222] p-6 rounded-lg border border-[#FF7A00]/20 hover:border-[#FF7A00]/50 transition-all">
              <Sparkles className="text-[#FF7A00] mb-4" size={32} />
              <h3 className="text-white text-xl mb-2">Creative Flow</h3>
              <p className="text-gray-400">
                Each element represents a unique aspect of digital creation, flowing together seamlessly
              </p>
            </div>
            <div className="bg-[#222222] p-6 rounded-lg border border-[#FF7A00]/20 hover:border-[#FF7A00]/50 transition-all">
              <Zap className="text-[#FF7A00] mb-4" size={32} />
              <h3 className="text-white text-xl mb-2">AI-Powered</h3>
              <p className="text-gray-400">
                Leveraging artificial intelligence to enhance every stage of the design process
              </p>
            </div>
            <div className="bg-[#222222] p-6 rounded-lg border border-[#FF7A00]/20 hover:border-[#FF7A00]/50 transition-all">
              <Layers className="text-[#FF7A00] mb-4" size={32} />
              <h3 className="text-white text-xl mb-2">Layered Excellence</h3>
              <p className="text-gray-400">
                Building complex solutions through thoughtful layering of design elements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl text-white mb-4">
              <span className="font-futuristic">Featured</span> <span className="font-graffiti text-[#FF7A00]">Work</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our latest digital masterpieces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-[#222222]">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <ArrowRight className="text-[#FF7A00]" size={24} />
                  </div>
                </div>
                <h3 className="text-white text-xl mb-1">{work.title}</h3>
                <p className="text-gray-400">{work.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl text-white mb-4">
              <span className="font-futuristic">Choose Your</span> <span className="font-graffiti text-[#FF7A00]">Element</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Flexible pricing for every stage of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg transition-all ${
                  tier.highlighted
                    ? 'bg-[#222222] border-2 border-[#FF7A00] shadow-lg shadow-[#FF7A00]/20 scale-105'
                    : 'bg-[#222222] border border-[#FF7A00]/20'
                }`}
              >
                {tier.highlighted && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-[#FF7A00] text-[#1A1A1A] text-sm rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-white text-2xl mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl text-[#FF7A00]">{tier.price}</span>
                  <span className="text-gray-400 ml-2">IDR</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg transition-all ${
                    tier.highlighted
                      ? 'bg-[#FF7A00] text-[#1A1A1A] hover:bg-[#FF7A00]/90'
                      : 'bg-transparent border border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00]/10'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] rounded-lg hover:bg-[#FF7A00]/10 transition-all inline-flex items-center gap-2"
            >
              View All Plans
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
