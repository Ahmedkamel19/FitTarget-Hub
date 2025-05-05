import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@/lib/auth-context';
import { toast } from 'sonner';

interface Price {
  id: string;
  nickname: string;
  unit_amount: number;
  product: {
    name: string;
    description: string;
  };
}

interface SubscriptionCardProps {
  priceId: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const backgroundColors: { [key: string]: string } = {
  'All-in-One Plan': 'bg-gradient-to-r from-fit-green-500 to-fit-green-600',
  'Workout Plan': 'bg-gradient-to-r from-blue-500 to-blue-600',
  'Nutrition Plan': 'bg-gradient-to-r from-purple-500 to-purple-600',
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  priceId,
  features,
  icon,
  popular
}) => {
  const [price, setPrice] = useState<Price | null>(null);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/subs/prices`);
        const priceData = data.data.find((p: Price) => p.id === priceId);
        setPrice(priceData);
      } catch (error) {
        console.error('Error fetching price:', error);
        toast.error('Failed to load subscription details');
      }
    };

    fetchPrice();
  }, [priceId]);

  const createSession = async () => {
    if (!isAuthenticated) {
      toast.error('Please log in to subscribe');
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post('http://localhost:3000/subs/session', {
        priceId,
      });
      window.location.href = data.url;
    } catch (error) {
      console.error('Error creating session:', error);
      toast.error('Failed to create checkout session');
    } finally {
      setLoading(false);
    }
  };

  if (!price) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full animate-pulse">
        <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
        <div className="space-y-3 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
        <div className="h-10 bg-gray-200 rounded mt-auto"></div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 flex flex-col h-full ${
      popular ? 'border-2 border-fit-green-500 relative' : 'border border-gray-200'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fit-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className={`text-center mb-6 p-4 rounded-lg ${backgroundColors[price.nickname] || 'bg-gray-100'}`}>
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-white/20 rounded-full text-white">
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{price.nickname}</h3>
        <p className="mt-2 text-white/80 text-sm">{price.product.description}</p>
      </div>
      
      <div className="text-center mb-6">
        <span className="text-4xl font-extrabold text-gray-900">${price.unit_amount / 100}</span>
        <span className="text-gray-600 ml-2">/month</span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-fit-green-500 shrink-0 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-fit-green-600 hover:bg-fit-green-700' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
          onClick={createSession}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Subscribe Now'
          )}
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionCard; 