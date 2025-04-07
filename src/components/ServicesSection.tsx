import React from 'react';
import { FaBook, FaChalkboardTeacher, FaSearch, FaBoxOpen, FaPencilRuler, FaLaptop } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col items-center text-center">
        <div className="text-primary text-3xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaBook />,
      title: "הזמנת ספרים",
      description: "שירות הזמנה מהיר ויעיל של ספרי לימוד וספרות מקצועית לפי דרישה",
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "ייעוץ חינוכי",
      description: "ייעוץ מקצועי בבחירת חומרי לימוד מתאימים לתוכניות הלימודים השונות",
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaSearch />,
      title: "איתור ספרי לימוד",
      description: "שירות איתור ספרי לימוד נדירים או מהדורות ספציפיות לפי דרישת המוסד החינוכי",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaBoxOpen />,
      title: "חבילות לימוד מותאמות",
      description: "הרכבת חבילות ספרים וחומרי לימוד מותאמים אישית לבתי ספר ומוסדות חינוך",
      imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaPencilRuler />,
      title: "ציוד לימודי",
      description: "מגוון רחב של ציוד לימודי איכותי לתלמידים, מורים ומוסדות חינוך",
      imageUrl: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FaLaptop />,
      title: "משאבים דיגיטליים",
      description: "גישה למשאבים דיגיטליים ופתרונות למידה מקוונים המשלימים את חומרי הלימוד המודפסים",
      imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            חנות הספרים ביתא מציעה מגוון רחב של שירותים חינוכיים המותאמים לצרכי מוסדות חינוך, מורים ותלמידים
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;