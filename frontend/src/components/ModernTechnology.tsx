import React from 'react';
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Lock, Globe, Code } from 'lucide-react';

const slugs = [
  "figma",
  "react",
  "javascript",
  "typescript",
  "html5",
  "css3",
  "nodedotjs",
  "docker",
  "git",
  "github",
];

export default function ModernTechnology() {
  return (
    <div className="py-20 md:py-32 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Built with Modern Technology & 
              </h2>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Transparent AI
              </h2>
              <p className="text-gray-400">
                FraudNinja architecture blends secure, scalable payment processing with AI-powered fraud detection that is transparent and auditable. Our platform is engineered with enterprise-grade infrastructure and explainable AI models to meet the demands of real-time digital transactions.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <Lock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Enterprise Security</h3>
                  <p className="text-gray-400 text-sm">
                    Bank-level encryption, PCI DSS compliance, and SHAP-based explainability ensure your data is both secure and understandable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-2 rounded-full">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Global Infrastructure</h3>
                  <p className="text-gray-400 text-sm">
                    99.9% uptime with a microservice backend, Kafka for real-time data ingestion, and deployment-ready models in ONNX.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-2 rounded-full">
                  <Code className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Developer-First</h3>
                  <p className="text-gray-400 text-sm">
                    RESTful APIs built with Flask, React-based dashboards, and tools like Chart.js & Plotly for visualization. Full SDK support and auto-scalable containers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-[350px] w-full items-center justify-center">
            <IconCloud />
          </div>
        </div>
      </div>
    </div>
  );
}