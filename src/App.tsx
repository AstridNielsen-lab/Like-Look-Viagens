import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClass = (scrolled: boolean) =>
    `${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Plane className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <div className={`ml-2 font-bold text-lg md:text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Like Look Viagens <span className="hidden md:inline">| Operadora de Turismo ✈️</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={navLinkClass(isScrolled)}>Início</Link>
            <Link to="/about" className={navLinkClass(isScrolled)}>Sobre Nós</Link>
            <a href="/#itinerary" className={navLinkClass(isScrolled)}>Roteiro</a>
            <a href="/#gallery" className={navLinkClass(isScrolled)}>Galeria</a>
            <a href="/#testimonials" className={navLinkClass(isScrolled)}>Depoimentos</a>
            <a href="/#contact" className={navLinkClass(isScrolled)}>Contato</a>
            <a
              href="/#booking"
              className={`${
                isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'
              } px-4 py-2 rounded-full font-medium transition-colors duration-200 flex items-center`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Reservar
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">Início</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">Sobre Nós</Link>
            <a href="/#itinerary" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">Roteiro</a>
            <a href="/#gallery" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">Galeria</a>
            <a href="/#testimonials" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">Depoimentos</a>
            <a href="/#contact" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">Contato</a>
            <a
              href="/#booking"
              className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-center"
            >
              Reservar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
