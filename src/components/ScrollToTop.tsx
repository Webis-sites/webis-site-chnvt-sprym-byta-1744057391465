'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopProps {
  scrollThreshold?: number;
  animationDuration?: number;
  position?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  scrollThreshold = 300,
  animationDuration = 500,
  position = 'left',
  size = 'md',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Determine button size based on prop
  const buttonSize = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14',
  }[size];
  
  // Determine position based on prop
  const buttonPosition = position === 'left' ? 'left-4' : 'right-4';
  
  // Check scroll position and update visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [scrollThreshold]);
  
  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  // RTL support for Hebrew
  const dir = document.documentElement.dir || 'rtl';
  const adjustedPosition = dir === 'rtl' ? (position === 'left' ? 'right-4' : 'left-4') : buttonPosition;
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 ${adjustedPosition} ${buttonSize} rounded-full bg-primary shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:shadow-xl z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="חזרה לראש העמוד"
      title="חזרה לראש העמוד"
    >
      <FaArrowUp className="text-white text-lg" />
    </button>
  );
};

export default ScrollToTop;