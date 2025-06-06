
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'FinTech Trading Platform',
      description: 'A comprehensive trading platform with real-time data, advanced charting, and portfolio management.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Node.js', 'WebSocket'],
      category: 'Financial Technology'
    },
    {
      title: 'E-Commerce Mobile App',
      description: 'Cross-platform mobile application with seamless shopping experience and payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tags: ['React Native', 'Redux', 'Stripe API', 'Firebase'],
      category: 'Mobile Development'
    },
    {
      title: 'Healthcare Management System',
      description: 'Complete patient management system with appointment scheduling and medical records.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      tags: ['React', 'PostgreSQL', 'Express.js', 'AWS'],
      category: 'Healthcare'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search, virtual tours, and agent management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Prisma', 'Mapbox', 'Cloudinary'],
      category: 'Real Estate'
    },
    {
      title: 'Logistics Dashboard',
      description: 'Real-time logistics tracking system with analytics and route optimization.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop',
      tags: ['Vue.js', 'D3.js', 'MongoDB', 'Docker'],
      category: 'Logistics'
    },
    {
      title: 'Educational Platform',
      description: 'Online learning platform with video streaming, assignments, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      tags: ['React', 'GraphQL', 'Video.js', 'Kubernetes'],
      category: 'Education'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of recent projects demonstrating my expertise across different 
              industries and technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs border-blue-200 text-blue-700 bg-blue-50">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-600 mb-6">
              Want to see more of my work or discuss a similar project?
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="#contact">View More Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
