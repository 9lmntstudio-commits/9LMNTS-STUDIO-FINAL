import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Check, Shield, Zap, Crown, Star } from 'lucide-react';

export function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const plans = [
    {
      id: 'startup',
      name: 'Startup Package',
      price: '$5,000',
      duration: 'one-time',
      features: [
        'Complete Brand Identity Design',
        'Professional Website Development',
        'Basic Digital Marketing Setup',
        '3 Months Support',
        'Project Management Access'
      ],
      icon: Star,
      popular: false
    },
    {
      id: 'business',
      name: 'Business Package',
      price: '$15,000',
      duration: 'one-time',
      features: [
        'Complete Brand System',
        'Website + Mobile App',
        'Event OS Platform',
        'Full Marketing Campaign',
        '6 Months Support',
        'AI Agent Integration',
        'Priority Support'
      ],
      icon: Zap,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      price: '$50,000',
      duration: 'one-time',
      features: [
        'Full Digital Ecosystem',
        'Custom Event OS Development',
        'Advanced AI Integration',
        'White-label Solutions',
        '12 Months Support',
        'Dedicated Team',
        'Custom Training',
        'Ongoing Optimization'
      ],
      icon: Crown,
      popular: false
    }
  ];

  const addOns = [
    { id: 'seo', name: 'SEO Optimization', price: '$1,000' },
    { id: 'maintenance', name: 'Monthly Maintenance', price: '$500/month' },
    { id: 'training', name: 'Team Training', price: '$2,000' },
    { id: 'hosting', name: 'Premium Hosting', price: '$200/month' }
  ];

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
            to="/start-project" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Project Setup
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Complete Your Project
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your package and secure your spot. Flexible payment options available.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-gray-900 rounded-2xl border-2 p-8 transition-all ${
                  selectedPlan === plan.id 
                    ? 'border-orange-500 bg-orange-500/5 scale-105' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                {selectedPlan === plan.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.duration}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    selectedPlan === plan.id
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Enhance Your Package</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {addOns.map((addon) => (
              <label key={addon.id} className="flex items-center justify-between bg-gray-900 rounded-xl p-6 border border-gray-800 cursor-pointer hover:border-orange-500 transition-all">
                <div className="flex items-center gap-4">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-orange-600 bg-gray-800 border-gray-600 rounded focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-medium text-white">{addon.name}</div>
                  </div>
                </div>
                <div className="text-orange-500 font-semibold">{addon.price}</div>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Method */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Payment Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Choose Payment Method</h3>
              <div className="space-y-4">
                {[
                  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
                  { id: 'bank', name: 'Bank Transfer', icon: Shield },
                  { id: 'crypto', name: 'Cryptocurrency', icon: Zap }
                ].map((method) => (
                  <label key={method.id} className="flex items-center gap-4 bg-gray-900 rounded-xl p-6 border border-gray-800 cursor-pointer hover:border-orange-500 transition-all">
                    <input 
                      type="radio" 
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-orange-600 bg-gray-800 border-gray-600"
                    />
                    <method.icon className="w-6 h-6 text-orange-500" />
                    <span className="text-white font-medium">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Billing Information</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
                <input 
                  type="text" 
                  placeholder="Company Name (Optional)"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Summary */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Selected Plan:</span>
                <span>{plans.find(p => p.id === selectedPlan)?.name || 'No plan selected'}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Base Price:</span>
                <span>{plans.find(p => p.id === selectedPlan)?.price || '$0'}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Add-ons:</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax:</span>
                <span>$0</span>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total:</span>
                  <span className="text-orange-500">{plans.find(p => p.id === selectedPlan)?.price || '$0'}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <strong>Secure Payment:</strong> Your payment information is encrypted and secure. We offer a 30-day money-back guarantee on all packages.
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => {
                if (!selectedPlan) {
                  alert('Please select a plan first');
                  return;
                }
                alert('Payment processing... This is a demo. In production, this would connect to a payment processor.');
              }}
              className="w-full bg-gradient-to-r from-orange-600 to-purple-600 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-purple-700 transition-all"
            >
              Complete Payment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
