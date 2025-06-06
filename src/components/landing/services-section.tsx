
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Monitor, Smartphone, Cloud, Cog, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, TypeScript, and cutting-edge technologies.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that deliver native performance and user experience.',
      features: ['React Native Apps', 'iOS Development', 'Android Development', 'App Store Deployment'],
      color: 'green'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps practices for modern application deployment.',
      features: ['AWS Architecture', 'Docker Containers', 'CI/CD Pipelines', 'Monitoring & Analytics'],
      color: 'purple'
    },
    {
      icon: Cog,
      title: 'Technical Consulting',
      description: 'Strategic technical guidance to help your business make informed technology decisions.',
      features: ['Architecture Review', 'Technology Stack Selection', 'Performance Optimization', 'Team Training'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              How I Can Help Your Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive software development 
              services tailored to your specific business needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-slate-200 group hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600">
                          <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="outline" className={`${colors.border} ${colors.text} hover:bg-slate-50 group`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives your business forward.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
