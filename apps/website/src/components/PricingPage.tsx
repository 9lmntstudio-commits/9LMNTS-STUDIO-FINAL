import { Check, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricingTiers = [
    {
      name: 'Flow Element',
      price: '750,000',
      description: 'Perfect for startups and small projects',
      features: [
        'Basic Web Design',
        '3 Page Website',
        'Mobile Responsive',
        'Basic SEO Setup',
        '1 Month Support',
        'Contact Form',
      ],
      cta: 'Select Plan',
      popular: false,
    },
    {
      name: 'Beat Element',
      price: '2,500,000',
      description: 'Great for growing businesses',
      features: [
        'Advanced Design System',
        'Up to 10 Pages',
        'Custom Animations',
        'Advanced SEO',
        '3 Months Support',
        'CMS Integration',
        'E-commerce Ready',
        'Analytics Setup',
      ],
      cta: 'Select Plan',
      popular: false,
    },
    {
      name: 'Cypher Element',
      price: '5,000,000',
      description: 'Ultimate solution for serious brands',
      features: [
        'Premium Design System',
        'Unlimited Pages',
        'Full Stack Development',
        'Advanced Animations',
        '6 Months Support',
        'AI Integration',
        'Custom CMS',
        'Full E-commerce',
        'Performance Optimization',
        'Advanced Analytics',
        'Priority Support',
      ],
      cta: 'Select Plan',
      popular: true,
    },
    {
      name: 'Apex Element',
      price: 'Custom',
      description: 'Enterprise-level solutions',
      features: [
        'Everything in Cypher',
        'Custom Features',
        'Dedicated Team',
        'White Label Solutions',
        'SLA Guarantee',
        'Custom Integrations',
        'Ongoing Development',
        '24/7 Support',
        'Training & Workshops',
      ],
      cta: 'Contact for Quote',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'What is included in the support period?',
      answer: 'Support includes bug fixes, minor content updates, hosting assistance, and technical guidance. Major feature additions are quoted separately.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade at any time. We\'ll credit your previous payment toward the higher tier.',
    },
    {
      question: 'What is AI Integration?',
      answer: 'AI Integration includes features like chatbots, content generation, personalization, and intelligent search powered by cutting-edge AI technology.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for projects over 2,500,000 IDR. Contact us to discuss options.',
    },
    {
      question: 'What happens after the support period ends?',
      answer: 'You can choose to extend support on a monthly basis or handle maintenance yourself. Your website remains fully functional and you own all the code.',
    },
    {
      question: 'Do prices include hosting?',
      answer: 'Hosting is not included but we can recommend providers and help with setup. We also offer managed hosting as an add-on service.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#222222] border border-[#FF7A00]/30 rounded-full text-[#FF7A00] text-sm">
              Transparent Pricing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            <span className="font-futuristic">The</span> <span className="font-graffiti text-[#FF7A00]">Element Levels</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect tier for your project. All plans include our signature 
            9 Elements approach to digital excellence
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-8 transition-all ${
                  tier.popular
                    ? 'bg-[#222222] border-2 border-[#FF7A00] shadow-2xl shadow-[#FF7A00]/20 lg:scale-105'
                    : 'bg-[#222222] border border-[#FF7A00]/20 hover:border-[#FF7A00]/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#FF7A00] text-[#1A1A1A] rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white text-2xl mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>

                <div className="mb-8">
                  {tier.price === 'Custom' ? (
                    <div className="text-4xl text-[#FF7A00]">Custom</div>
                  ) : (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-4xl text-[#FF7A00]">{tier.price}</span>
                        <span className="text-gray-400 ml-2">IDR</span>
                      </div>
                      <div className="text-gray-500 text-sm mt-1">per project</div>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <Check className="text-[#FF7A00] mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg transition-all ${
                    tier.popular
                      ? 'bg-[#FF7A00] text-[#1A1A1A] hover:bg-[#FF7A00]/90'
                      : tier.price === 'Custom'
                      ? 'bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00]/10'
                      : 'bg-transparent border border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00]/10'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              All prices are in Indonesian Rupiah (IDR). Need a custom solution?{' '}
              <a href="#" className="text-[#FF7A00] hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              <span className="font-futuristic">Available</span> <span className="font-graffiti text-[#FF7A00]">Add-ons</span>
            </h2>
            <p className="text-gray-400">Enhance your package with these extras</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Managed Hosting', price: '200,000/mo' },
              { name: 'Extended Support', price: '500,000/mo' },
              { name: 'Content Creation', price: '1,000,000/mo' },
              { name: 'SEO Management', price: '750,000/mo' },
              { name: 'Social Media Graphics', price: '500,000/mo' },
              { name: 'Email Marketing Setup', price: '350,000' },
            ].map((addon, index) => (
              <div
                key={index}
                className="bg-[#222222] p-6 rounded-lg border border-[#FF7A00]/20 hover:border-[#FF7A00]/40 transition-all"
              >
                <h4 className="text-white mb-2">{addon.name}</h4>
                <p className="text-[#FF7A00]">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              <span className="font-futuristic">Frequently Asked</span> <span className="font-graffiti text-[#FF7A00]">Questions</span>
            </h2>
            <p className="text-gray-400">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#222222] rounded-lg border border-[#FF7A00]/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#FF7A00]/5 transition-colors"
                >
                  <span className="text-white pr-4">{faq.question}</span>
                  <HelpCircle
                    className={`text-[#FF7A00] flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
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
            <span className="font-futuristic">Still Have</span> <span className="font-graffiti text-[#FF7A00]">Questions?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our team is ready to help you choose the perfect plan
          </p>
          <button className="px-8 py-4 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
