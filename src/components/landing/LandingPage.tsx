
import { Button } from '../ui/button';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUp, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { HeroSection } from './hero-section';
import { AboutSection } from './about-section';
import { ServicesSection } from './services-section';
import { FeaturesSection } from './features-section';
import { PricingSection } from './pricing-section';
import { PortfolioSection } from './portfolio-section';
import { TestimonialsSection } from './testimonials-section';
import { ContactSection } from './contact-section';
import { Footer } from './footer';
import {
  companyName,
  tagline,
  contactEmail,
  contactPhone,
  location,
} from '@/company-config';

export interface LandingPageProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onBackToTop: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  isScrolled,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onBackToTop,
}) => {
  return (
    <div className="landing-page min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{contactPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{contactEmail}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">{location}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-green-400 font-medium">● Available for Projects</span>
              <Button asChild size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="#contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200' 
            : 'bg-transparent'
        }`}
        id="header"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AE</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">{companyName}</h1>
                <p className="text-sm text-slate-600">{tagline}</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#features', label: 'Features' },
                  {
                    href: '#services',
                    label: 'Services',
                    dropdown: [
                      'Web Development',
                      'Software Engineering',
                      'Technical Consulting',
                      'Financial Technology'
                    ]
                  },
                  { href: '#pricing', label: 'Pricing' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#testimonials', label: 'Testimonials' },
                  { href: '#contact', label: 'Contact' }
                ].map((item) => (
                  <div key={item.href} className="relative group">
                    <a 
                      href={item.href} 
                      className="flex items-center font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                    </a>
                    {item.dropdown && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-slate-200">
                <Button asChild variant="outline" size="sm">
                  <Link to="/login">Client Login</Link>
                </Button>
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="text-slate-900"
                onClick={onToggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <Button
        type="button"
        size="icon"
        className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl z-40 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        onClick={onBackToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      {/* Professional Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onToggleMobileMenu}
      >
        <div 
          className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AE</span>
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">{companyName}</h2>
                  <p className="text-xs text-slate-600">{tagline}</p>
                </div>
              </div>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="text-slate-900"
                onClick={onToggleMobileMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="space-y-4">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#features', label: 'Features' },
                  { href: '#services', label: 'Services' },
                  { href: '#pricing', label: 'Pricing' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#testimonials', label: 'Testimonials' },
                  { href: '#contact', label: 'Contact' }
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-4 text-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={onToggleMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>{contactPhone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span>{contactEmail}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="p-6 border-t border-slate-200 space-y-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <a href="#contact">Start Project</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/login">Client Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
