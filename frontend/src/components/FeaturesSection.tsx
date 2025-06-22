import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Eye, 
  AlertTriangle, 
  TrendingDown, 
  Users, 
  CreditCard,
  ShoppingCart,
  MessageSquare 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'Machine learning algorithms analyze patterns in real-time to identify suspicious activities before they impact your business.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Payment Fraud Prevention',
      description: 'Detect stolen credit cards, chargebacks, and payment anomalies with 99.2% accuracy using advanced transaction analysis.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'Order Fraud Screening',
      description: 'Identify fake orders, bulk purchasing scams, and fraudulent return patterns that cost retailers millions annually.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Partner & Seller Monitoring',
      description: 'Monitor marketplace sellers and business partners for fraudulent activities, fake reviews, and policy violations.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of all transactions and user activities with instant alerts for suspicious behavior.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Review & Rating Fraud',
      description: 'Detect fake reviews, rating manipulation, and astroturfing campaigns that damage marketplace integrity.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Scoring Engine',
      description: 'Assign real-time risk scores to transactions, users, and activities based on hundreds of behavioral signals.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: TrendingDown,
      title: 'Loss Prevention Analytics',
      description: 'Comprehensive reporting and analytics to quantify fraud losses and measure the ROI of prevention efforts.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Fraud Protection
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform covers every aspect of e-commerce fraud detection and prevention, 
            protecting your revenue from all angles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-extrabold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-500 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 