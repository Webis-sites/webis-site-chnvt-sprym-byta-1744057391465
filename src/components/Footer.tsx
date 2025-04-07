import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-light text-right rtl" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and About */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">חנות ספרים ביתא</h2>
            <p className="text-gray-700 mb-4">
              חנות הספרים המובילה בישראל, עם מבחר עצום של ספרים בכל הקטגוריות. אנו מחויבים לשירות איכותי ומקצועי.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="https://facebook.com" className="text-secondary hover:text-secondary-dark transition-colors">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-secondary hover:text-secondary-dark transition-colors">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-secondary hover:text-secondary-dark transition-colors">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-secondary">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-secondary transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-700 hover:text-secondary transition-colors">
                  חנות
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-700 hover:text-secondary transition-colors">
                  קטגוריות
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-gray-700 hover:text-secondary transition-colors">
                  רבי מכר
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-gray-700 hover:text-secondary transition-colors">
                  חדש על המדף
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-secondary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-secondary transition-colors">
                  בלוג
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-secondary">קטגוריות</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/fiction" className="text-gray-700 hover:text-secondary transition-colors">
                  ספרות יפה
                </Link>
              </li>
              <li>
                <Link href="/categories/non-fiction" className="text-gray-700 hover:text-secondary transition-colors">
                  עיון
                </Link>
              </li>
              <li>
                <Link href="/categories/children" className="text-gray-700 hover:text-secondary transition-colors">
                  ילדים ונוער
                </Link>
              </li>
              <li>
                <Link href="/categories/academic" className="text-gray-700 hover:text-secondary transition-colors">
                  ספרי לימוד ואקדמיה
                </Link>
              </li>
              <li>
                <Link href="/categories/religion" className="text-gray-700 hover:text-secondary transition-colors">
                  יהדות ודת
                </Link>
              </li>
              <li>
                <Link href="/categories/cooking" className="text-gray-700 hover:text-secondary transition-colors">
                  בישול ואפייה
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-secondary">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="ml-2 text-secondary" />
                <span className="text-gray-700">רחוב הרצל 123, תל אביב</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="ml-2 text-secondary" />
                <span className="text-gray-700">03-1234567</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="ml-2 text-secondary" />
                <span className="text-gray-700">050-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-2 text-secondary" />
                <span className="text-gray-700">info@betabooks.co.il</span>
              </li>
              <li className="mt-4">
                <h4 className="font-semibold mb-2">שעות פעילות:</h4>
                <p className="text-gray-700">ימים א'-ה': 9:00 - 21:00</p>
                <p className="text-gray-700">יום ו': 9:00 - 14:00</p>
                <p className="text-gray-700">שבת: סגור</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-300 pt-6 mt-6">
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="text-xl font-bold mb-4 text-secondary">הצטרפו לניוזלטר שלנו</h3>
            <p className="text-gray-700 mb-4">קבלו עדכונים על ספרים חדשים ומבצעים מיוחדים</p>
            <form className="flex">
              <input
                type="email"
                placeholder="כתובת המייל שלך"
                className="flex-grow px-4 py-2 rounded-r-md focus:outline-none border border-gray-300"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded-l-md hover:bg-secondary-dark transition-colors"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-700 mb-4 md:mb-0">
            © {currentYear} חנות ספרים ביתא. כל הזכויות שמורות.
          </p>
          <div className="flex justify-center md:justify-end space-x-4 space-x-reverse">
            <Link href="/terms" className="text-gray-700 hover:text-secondary transition-colors">
              תנאי שימוש
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-secondary transition-colors">
              מדיניות פרטיות
            </Link>
            <Link href="/shipping" className="text-gray-700 hover:text-secondary transition-colors">
              משלוחים והחזרות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;