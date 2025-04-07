'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitSuccess(false);
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 font-heebo" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">צור קשר</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">שלח לנו הודעה</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                  placeholder="ישראל ישראלי"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                  placeholder="050-1234567"
                  dir="ltr"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                  placeholder="your@email.com"
                  dir="ltr"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                  placeholder="כתוב את הודעתך כאן..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin mr-2">⟳</span>
                ) : (
                  <FaPaperPlane className="ml-2" />
                )}
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
              
              {submitSuccess === true && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                  אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="צוות שירות לקוחות"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">כתובת</h4>
                    <p className="text-gray-600">רחוב הספרים 123, תל אביב</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">טלפון</h4>
                    <p className="text-gray-600 font-mono" dir="ltr">03-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">אימייל</h4>
                    <p className="text-gray-600 font-mono" dir="ltr">contact@bookstore.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full text-white mr-4">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">שעות פעילות</h4>
                    <p className="text-gray-600">ראשון - חמישי: 9:00 - 20:00</p>
                    <p className="text-gray-600">שישי: 9:00 - 14:00</p>
                    <p className="text-gray-600">שבת: סגור</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;