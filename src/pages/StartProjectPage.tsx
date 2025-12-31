import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CreditCard, Users, Calendar, Palette, Zap, Star, ArrowLeft } from 'lucide-react';

export function StartProjectPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');

  const services = [
    { id: 'brand', name: 'Brand Identity', icon: Palette, description: 'Complete brand design system' },
    { id: 'website', name: 'Website Design', icon: Star, description: 'Custom website development' },
    { id: 'event-os', name: 'Event OS Platform', icon: Calendar, description: 'Complete event management system' },
    { id: 'app', name: 'Mobile App', icon: Zap, description: 'iOS and Android development' },
    { id: 'marketing', name: 'Digital Marketing', icon: Users, description: 'Full marketing campaign' }
  ];

  const projectTypes = [
    { id: 'startup', name: 'Startup Package', price: 'Starting at $5,000', features: ['Brand Identity', 'Website', 'Basic Marketing'] },
    { id: 'business', name: 'Business Package', price: 'Starting at $15,000', features: ['Complete Brand System', 'Website + App', 'Event OS', 'Marketing Campaign'] },
    { id: 'enterprise', name: 'Enterprise Package', price: 'Starting at $50,000', features: ['Full Digital Ecosystem', 'Custom Event OS', 'AI Integration', 'Ongoing Support'] }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Start Your Project
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's create something extraordinary together. Tell us about your vision and we'll bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Project Type Selection */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Package</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {projectTypes.map((type) => (
              <div 
                key={type.id}
                className={`relative bg-gray-900 rounded-2xl border-2 p-8 cursor-pointer transition-all ${
                  projectType === type.id 
                    ? 'border-orange-500 bg-orange-500/5' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
                onClick={() => setProjectType(type.id)}
              >
                {projectType === type.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                <div className="text-orange-500 font-semibold mb-6">{type.price}</div>
                
                <ul className="space-y-3">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Select Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-gray-900 rounded-xl border-2 p-6 cursor-pointer transition-all ${
                  selectedServices.includes(service.id)
                    ? 'border-orange-500 bg-orange-500/5'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  {selectedServices.includes(service.id) && (
                    <Check className="w-6 h-6 text-orange-500" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget & Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Budget & Timeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="block text-lg font-medium mb-4">Budget Range</label>
              <select 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-lg font-medium mb-4">Project Timeline</label>
              <select className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white focus:border-orange-500 focus:outline-none">
                <option value="">Select timeline</option>
                <option value="1-2-months">1-2 months</option>
                <option value="3-4-months">3-4 months</option>
                <option value="5-6-months">5-6 months</option>
                <option value="6-months+">6+ months</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Details</h2>
          
          <div className="space-y-6 mb-12">
            <div>
              <label className="block text-lg font-medium mb-4">Project Name</label>
              <input 
                type="text" 
                placeholder="Enter your project name"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-lg font-medium mb-4">Project Description</label>
              <textarea 
                rows={6}
                placeholder="Tell us about your project, goals, and vision..."
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none resize-none"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium mb-4">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-4">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600/10 to-purple-600/10 rounded-2xl p-12 border border-orange-500/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Submit your project details and our team will get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  // Handle form submission
                  alert('Project submitted! We will contact you within 24 hours.');
                }}
                className="bg-gradient-to-r from-orange-600 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
              >
                Submit Project
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <Link 
                to="/payment" 
                className="border-2 border-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
