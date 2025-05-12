import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/2925146/pexels-photo-2925146.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="block">Descubra a magia de</span>
          <span className="block text-blue-400">Istambul, Turquia</span>
        </h1>
        
        <meta itemProp="name" content="Like Look Viagens | Roteiro Exclusivo Turquia" />
        <meta itemProp="description" content="Uma jornada inesquecível de 7 dias pela cidade onde o Oriente encontra o Ocidente, repleta de história, cultura e experiências únicas." />
        <meta itemProp="image" content="https://images.pexels.com/photos/2925146/pexels-photo-2925146.jpeg" />
        
        <p 
          className={`text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Uma jornada inesquecível de 7 dias pela cidade onde o Oriente encontra o Ocidente, 
          repleta de história, cultura e experiências únicas.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a 
            href="#itinerary" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full inline-flex items-center transition-colors duration-200"
          >
            Ver Roteiro Completo
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#booking" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-full inline-flex items-center transition-colors duration-200"
          >
            Reservar Agora
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#overview" 
          className="text-white animate-bounce"
          aria-label="Role para baixo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};