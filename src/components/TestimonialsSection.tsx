'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'רחל לוי',
    role: 'מורה לספרות',
    content: 'חנות הספרים ביתא היא המקום המושלם עבורי למצוא ספרי לימוד איכותיים לתלמידיי. השירות מעולה והצוות תמיד מוכן לעזור ולייעץ.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 2,
    name: 'דוד כהן',
    role: 'סטודנט לחינוך',
    content: 'כסטודנט, אני מעריך את המבחר הרחב והמחירים ההוגנים בחנות ביתא. הם גם מציעים הנחות לסטודנטים, מה שעוזר לי מאוד בתקציב הלימודים שלי.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 3,
    name: 'מיכל ברקוביץ',
    role: 'הורה',
    content: 'הילדים שלי אוהבים לבקר בחנות ביתא. הצוות יודע להמליץ על ספרים מתאימים לגילם ולתחומי העניין שלהם, והאווירה בחנות נעימה ומזמינה.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 4,
    name: 'יוסי אברהם',
    role: 'מנהל בית ספר',
    content: 'אנחנו עובדים עם חנות ביתא כבר שנים רבות לרכישת ספרי לימוד לבית הספר שלנו. השירות האמין והמקצועי שלהם הופך את תהליך הרכישה לפשוט ויעיל.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalTestimonials = testimonials.length;
  const displayCount = window?.innerWidth >= 1024 ? 3 : window?.innerWidth >= 768 ? 2 : 1;
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === totalTestimonials - displayCount ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalTestimonials - displayCount : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Force re-render on window resize to update displayCount
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 overflow-hidden rtl" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            מה הלקוחות שלנו אומרים
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו גאים לשרת את קהילת החינוך בישראל עם מגוון רחב של ספרים ושירות מעולה
          </p>
        </div>

        <div className="relative">
          <div 
            ref={testimonialsRef}
            className="overflow-hidden mx-auto"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(${currentIndex * (100 / totalTestimonials)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-t-4 border-secondary">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      </div>
                      <div className="mr-4">
                        <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="relative mb-4 flex-grow">
                      <FaQuoteRight className="text-primary opacity-20 text-4xl absolute top-0 right-0" />
                      <p className="text-gray-700 leading-relaxed pr-8 pt-2">{testimonial.content}</p>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="w-12 h-1 bg-secondary"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full p-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="הקודם"
            >
              <FaChevronRight className="text-lg" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalTestimonials - displayCount + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`עבור לעדות ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full p-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="הבא"
            >
              <FaChevronLeft className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;