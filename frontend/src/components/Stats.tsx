import React from 'react';
import { TrendingUp, Shield, DollarSign, Users } from 'lucide-react';
import { BentoGrid, BentoItem } from './ui/bento-grid'; // Adjust the import path as needed

const Stats = () => {
  const stats = [
    {
      icon: <DollarSign className="h-4 w-4 text-blue-500" />,
      title: '$41B',
      description: 'Annual E-commerce Fraud Losses',
      meta: 'Global fraud losses in 2023'
    },
    {
      icon: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      title: '98.7%',
      description: 'Detection Accuracy',
      meta: 'AI-powered fraud identification'
    },
    {
      icon: <Shield className="h-4 w-4 text-purple-500" />,
      title: '< 2s',
      description: 'Real-time Analysis',
      meta: 'Average transaction screening time'
    },
    {
      icon: <Users className="h-4 w-4 text-sky-500" />,
      title: '500+',
      description: 'Protected Platforms',
      meta: 'Businesses using FraudGuard'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Fraud Crisis in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            E-commerce fraud is growing exponentially. Don't let your business become another statistic.
          </p>
        </div>
        <BentoGrid items={stats.map(stat => ({
          title: stat.title,
          description: stat.description,
          icon: stat.icon,
          meta: stat.meta,
          colSpan: 1,
          hasPersistentHover: false
        }))} />
      </div>
    </section>
  );
};

export default Stats;