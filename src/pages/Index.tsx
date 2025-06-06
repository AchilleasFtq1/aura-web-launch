
import React, { useState, useEffect } from 'react';
import { LandingPage } from '@/components/landing/LandingPage';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LandingPage
      isScrolled={isScrolled}
      isMobileMenuOpen={isMobileMenuOpen}
      onToggleMobileMenu={handleToggleMobileMenu}
      onBackToTop={handleBackToTop}
    />
  );
};

export default Index;
