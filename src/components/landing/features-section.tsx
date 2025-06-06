
import React from 'react';
import { Badge } from '../ui/badge';
import { CheckCircle, Zap, Shield, Globe, Clock, Users } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern technologies and best practices for speed.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built with security in mind, following industry standards and best practices.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business needs and user base.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Reliable project management ensuring on-time delivery of high-quality solutions.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces crafted with user experience as the top priority.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality checks for reliable, bug-free applications.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              Why Choose Me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Features That Set Me Apart
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I bring a unique combination of technical expertise, business understanding, 
              and commitment to excellence in every project.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 rounded-xl hover:bg-slate-50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-slate-300">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">8+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-slate-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">99%</div>
                <div className="text-slate-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
