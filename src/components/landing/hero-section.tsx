
import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700 bg-blue-50">
              🚀 Available for New Projects
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Building Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Solutions
              </span>
              That Scale
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Senior Software Engineer specializing in full-stack development, fintech solutions, and technical consulting. 
              Let's transform your ideas into powerful, scalable applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg px-8 py-4 text-lg">
                <a href="#contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">8+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Visual Elements */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Card */}
              <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Clean Code</h3>
                    <p className="text-slate-600">Maintainable, scalable, and well-documented solutions.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-100 rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full w-4/5"></div>
                    </div>
                    <div className="h-2 bg-green-100 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full w-3/4"></div>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-500 rounded-xl shadow-lg flex items-center justify-center animate-bounce">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
