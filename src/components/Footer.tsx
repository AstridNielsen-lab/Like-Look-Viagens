import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Plane } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-5">
              <Plane className="h-8 w-8 text-blue-400" />
              <h3 className="ml-2 text-xl font-bold">Like Look Viagens</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Sua operadora de turismo especializada em experiências únicas e inesquecíveis em destinos ao redor do mundo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/likelooksolutions" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/radiotatuapefm" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/DevJulioMachado" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@JulioCamposMachado" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Início</a></li>
              <li><a href="#itinerary" className="text-gray-400 hover:text-white transition-colors duration-200">Roteiro Turquia</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-200">Galeria</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">Depoimentos</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white transition-colors duration-200">Reservas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinos Populares</h3>
            <ul className="space-y-2">
              <li><a href="https://wa.me/5511970603441?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Like%20Look%20Viagens%20%7C%20Operadora%20de%20Turismo.
" className="text-gray-400 hover:text-white transition-colors duration-200">Turquia</a></li>
              <li><a href="https://wa.me/5511970603441?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Like%20Look%20Viagens%20%7C%20Operadora%20de%20Turismo.
" className="text-gray-400 hover:text-white transition-colors duration-200">Grécia</a></li>
              <li><a href="https://wa.me/5511970603441?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Like%20Look%20Viagens%20%7C%20Operadora%20de%20Turismo.
" className="text-gray-400 hover:text-white transition-colors duration-200">Itália</a></li>
              <li><a href="https://wa.me/5511970603441?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Like%20Look%20Viagens%20%7C%20Operadora%20de%20Turismo.
" className="text-gray-400 hover:text-white transition-colors duration-200">Egito</a></li>
              <li><a href="https://wa.me/5511970603441?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Like%20Look%20Viagens%20%7C%20Operadora%20de%20Turismo.
" className="text-gray-400 hover:text-white transition-colors duration-200">Marrocos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-400">(11) 3680-8030</p>
                  <p className="text-gray-400">WhatsApp: (11) 99294-6628</p>
                  <p className="text-gray-400">WhatsApp: (11) 97060-3441</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">juliocamposmachado@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">Rua Dante Pellacani, 92 - Anália Franco<br />São Paulo - SP, CEP: 03334-070</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Like Look Viagens | Desenvolvido por <a href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Like Look Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
