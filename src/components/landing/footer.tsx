
import React from 'react';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { companyName, contactEmail, contactPhone, location, socialLinks } from '@/company-config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web Development',
    'Mobile Apps',
    'Technical Consulting',
    'FinTech Solutions',
    'Cloud Architecture',
    'DevOps Setup'
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AE</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{companyName}</h3>
                  <p className="text-slate-400">Senior Software Engineer & Tech Consultant</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                Passionate about creating innovative digital solutions that drive business growth. 
                Specializing in full-stack development, fintech, and technical consulting.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-300">{contactEmail}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-300">{contactPhone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-300">{location}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h5 className="font-semibold mb-3">Get Started</h5>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="#contact">Start Your Project</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} {companyName}. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
