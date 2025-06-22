"use client";

import { Pricing as NewPricing } from "@/components/ui/pricing";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const demoPlans = [
  {
    name: "MSME",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    features: [
      'Basic Fraud Detection',
      'Up to 1,000 Transactions/Month',
      'Email Support',
      'Standard Dashboard',
    ],
    description: "Perfect for small businesses and startups",
    buttonText: "Get Started",
    href: "/check",
    isPopular: false,
  },
  {
    name: "ENTERPRISE",
    price: "49",
    yearlyPrice: "39",
    period: "per month",
    features: [
      'Advanced AI Detection',
      'Up to 10,000 Transactions/Month',
      'Priority Support',
      'API Access',
      'Team Collaboration',
      'Custom Integrations',
    ],
    description: "Ideal for growing businesses and enterprises",
    buttonText: "Choose Plan",
    href: "/check",
    isPopular: true,
  },
  {
    name: "LARGE CORPORATIONS",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      'Unlimited Transactions',
      'Dedicated Fraud Analyst',
      '24/7 Phone Support',
      'Custom Model Training',
      'Advanced Security',
      'SLA Agreement',
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

function PricingPage() {
  return (
    <div className="h-full overflow-y-auto rounded-lg">
      <NewPricing 
        plans={demoPlans}
        title="Flexible Pricing for Any Business"
        description="Choose the plan that's right for you. No hidden fees, ever."
      />
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl md:text-4xl font-bold tracking-tight text-transparent"
        >
          Ready to Stop Fraud Losses?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-gray-300 mt-4 mb-8 max-w-2xl mx-auto text-center"
        >
          Join hundreds of e-commerce platforms already saving millions with FraudLens
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center gap-4"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Start Free Trial
          </button>
          <button className="border-gray-500 text-white hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded-lg border">
            Schedule Demo
          </button>
        </motion.div>
      </LampContainer>
    </div>
  );
}

export default PricingPage; 