
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Check, Star } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Consultation',
      price: '€150',
      period: '/hour',
      description: 'Perfect for technical advice and project planning',
      features: [
        'Technical consultation',
        'Architecture review',
        'Technology recommendations',
        'Project planning',
        'Code review',
        'Best practices guidance'
      ],
      popular: false,
      buttonText: 'Book Consultation'
    },
    {
      name: 'Project Development',
      price: 'Custom',
      period: 'Quote',
      description: 'Full-scale project development from concept to deployment',
      features: [
        'Complete project development',
        'Frontend & backend',
        'Database design',
        'API development',
        'Testing & QA',
        'Deployment & hosting',
        '3 months support',
        'Documentation'
      ],
      popular: true,
      buttonText: 'Get Quote'
    },
    {
      name: 'Ongoing Support',
      price: '€2,500',
      period: '/month',
      description: 'Continuous development and maintenance services',
      features: [
        'Dedicated development time',
        'Priority support',
        'Regular updates',
        'Performance monitoring',
        'Security updates',
        'Feature enhancements',
        'Monthly reports'
      ],
      popular: false,
      buttonText: 'Start Retainer'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the engagement model that best fits your project needs. 
              All packages include my commitment to quality and excellence.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-8 hover:shadow-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg scale-105' 
                    : 'border-slate-200 hover:-translate-y-2'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                    size="lg"
                  >
                    <a href="#contact">{plan.buttonText}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Need Something Different?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Every project is unique. I'm happy to discuss custom arrangements 
                that fit your specific requirements, timeline, and budget.
              </p>
              <Button variant="outline" size="lg" className="border-slate-300">
                <a href="#contact">Discuss Custom Solution</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
