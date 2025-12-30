import { Link } from 'react-router-dom';
import { Brain, Zap, CheckCircle, ArrowRight, TrendingUp, Users } from 'lucide-react';

export function LOAAssistantPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#222222] border border-[#FF7A00]/30 rounded-full text-[#FF7A00] text-sm">
              B2B AI WORKFLOW ASSISTANT
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl text-white mb-6">
            <span className="font-futuristic">LOA</span> - 
            <span className="font-graffiti text-[#FF7A00]">AI Assistant</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Licensed AI Assistant that streamlines business workflows using our proprietary 
            "9 Pillars" logic. Available for $500 - $5,000 annually.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all flex items-center justify-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] rounded-lg hover:bg-[#FF7A00]/10 transition-all"
            >
              View Pricing Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white text-center mb-16">
            The <span className="font-futuristic">9 Pillars</span> of 
            <span className="font-graffiti text-[#FF7A00]">Workflow Logic</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Process Automation',
                description: 'Automate repetitive tasks and streamline operations'
              },
              {
                icon: TrendingUp,
                title: 'Performance Analytics',
                description: 'Real-time insights into workflow efficiency'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Enhanced communication and project coordination'
              },
              {
                icon: CheckCircle,
                title: 'Smart Scheduling',
                description: 'AI-powered resource allocation and timing'
              },
              {
                icon: Zap,
                title: 'Integration Ready',
                description: 'Connects with existing business tools'
              },
              {
                icon: Brain,
                title: 'Custom Logic',
                description: 'Tailored to your specific industry needs'
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-[#222222] p-6 rounded-lg border border-[#FF7A00]/20 hover:border-[#FF7A00]/40 transition-all">
                <pillar.icon className="text-[#FF7A00] mb-4" size={32} />
                <h3 className="text-white text-xl mb-3">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white text-center mb-16">
            Choose Your <span className="font-graffiti text-[#FF7A00]">License Tier</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$500',
                period: '/year',
                features: [
                  'Basic Process Automation',
                  'Email Support',
                  'Up to 10 Users',
                  'Monthly Analytics'
                ],
                popular: false
              },
              {
                name: 'Professional',
                price: '$2,000',
                period: '/year',
                features: [
                  'Advanced Automation',
                  'Priority Support',
                  'Up to 50 Users',
                  'Real-time Analytics',
                  'Custom Integrations'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: '$5,000',
                period: '/year',
                features: [
                  'Full Automation Suite',
                  'Dedicated Support',
                  'Unlimited Users',
                  'Advanced Analytics',
                  'Custom Logic Development',
                  'White-label Options'
                ],
                popular: false
              }
            ].map((tier, index) => (
              <div key={index} className={`relative rounded-lg p-8 transition-all ${
                tier.popular
                  ? 'bg-[#222222] border-2 border-[#FF7A00]'
                  : 'bg-[#222222] border border-[#FF7A00]/20 hover:border-[#FF7A00]/40'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#FF7A00] text-[#1A1A1A] rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                
                <div className="mb-6">
                  <h3 className="text-white text-2xl mb-2">{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl text-[#FF7A00]">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="text-[#FF7A00] mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-lg transition-all text-center font-medium ${
                    tier.popular
                      ? 'bg-[#FF7A00] text-[#1A1A1A] hover:bg-[#FF7A00]/90'
                      : 'bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00]/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
