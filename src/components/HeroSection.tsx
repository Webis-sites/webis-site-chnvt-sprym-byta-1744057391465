'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="חנות ספרים"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            חנות ספרים מוביל בישראל
          </h1>
          <p className="mb-8 text-xl text-white/90 md:text-2xl">
            חווית לקוח מושלמת בכל ביקור
          </p>
          <button
            onClick={onCtaClick}
            className="transform rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            קבע תור עכשיו
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-primary/20 blur-xl" />
        <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-secondary/20 blur-xl" />
      </div>
    </div>
  );
};

export default HeroSection;