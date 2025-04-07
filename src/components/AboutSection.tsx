import React from 'react';
import Image from 'next/image';
import { FaBook, FaUserGraduate, FaAward } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              אודות חנות ספרים ביתא
            </h2>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              אנחנו חנות ספרים מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaBook className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">מבחר עשיר של ספרים</h3>
                  <p className="text-gray-600">אוסף מגוון של ספרים בנושאי חינוך ובריאות</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaUserGraduate className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">צוות מקצועי</h3>
                  <p className="text-gray-600">צוות מומחים שישמח לסייע בבחירת הספרים המתאימים</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaAward className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">איכות ללא פשרות</h3>
                  <p className="text-gray-600">מחויבים לאיכות גבוהה ושירות מצוין</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              קראו עוד עלינו
            </button>
          </div>
          
          <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="חנות ספרים ביתא - פנים החנות"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 right-6 text-white">
              <p className="text-lg font-semibold">חנות ספרים ביתא</p>
              <p>המקום שלך לספרות איכותית</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;