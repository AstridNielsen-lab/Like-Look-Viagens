import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Plane className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <div className={`ml-2 font-bold text-lg md:text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <span>Like Look Viagens</span>
              <span className="hidden md:inline"> | Operadora de Turismo ✈️</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Início</a>
            <a href="#itinerary" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Roteiro</a>
            <a href="#gallery" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Galeria</a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Depoimentos</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Contato</a>
            <a 
              href="#booking" 
              className={`${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              } px-4 py-2 rounded-full font-medium transition-colors duration-200 flex items-center`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Reservar
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`
          md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          <a href="#home" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#itinerary" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>Roteiro</a>
          <a href="#gallery" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>Galeria</a>
          <a href="#testimonials" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>Depoimentos</a>
          <a href="#contact" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>Contato</a>
          <a 
            href="#booking" 
            className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-center"
            onClick={() => setIsOpen(false)}
          >
            Reservar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};