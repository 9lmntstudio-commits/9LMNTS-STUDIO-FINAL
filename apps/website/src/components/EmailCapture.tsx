import { useState } from 'react';
import { Mail } from 'lucide-react';

interface EmailCaptureProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

export function EmailCapture({ 
  className = '', 
  placeholder = 'Enter your email',
  buttonText = 'Get Started'
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // In production, this would call your backend API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: '9lmnts-studio-website'
        }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-[#FF7A00]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00]/20"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-[#FF7A00] text-[#1A1A1A] rounded-lg hover:bg-[#FF7A00]/90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Subscribing...' : buttonText}
        </button>
      </div>
      {message && (
        <p className={`text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
