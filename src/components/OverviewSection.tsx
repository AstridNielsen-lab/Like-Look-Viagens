import React from 'react';
import { Clock, MapPin, Calendar, Users, Utensils, Bus, Hotel, Shield } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Turquia: Onde Dois Continentes Se Encontram</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Um roteiro exclusivo que combina os tesouros históricos, culturais e arquitetônicos de Istambul
            com experiências autênticas e momentos inesquecíveis.
          </p>
          <div className="mt-6">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold">
              A partir de R$ 12.000,00 por pessoa
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Duração</h3>
            <p className="text-gray-600">7 dias e 6 noites de imersão completa na cultura turca</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Destino</h3>
            <p className="text-gray-600">Istambul, a única cidade no mundo que se estende por dois continentes</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Próximas Saídas</h3>
            <p className="text-gray-600">Saídas garantidas mensais com grupos pequenos</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tamanho do Grupo</h3>
            <p className="text-gray-600">Grupos de até 16 pessoas para uma experiência personalizada</p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">O Que Está Incluído</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Hotel className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">Hospedagem</h4>
                <p className="mt-1 text-sm text-gray-600">6 noites em hotel 5 estrelas no centro histórico</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Utensils className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">Alimentação</h4>
                <p className="mt-1 text-sm text-gray-600">Café da manhã diário e 4 refeições especiais incluídas</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Bus className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">Transporte</h4>
                <p className="mt-1 text-sm text-gray-600">Transfers e deslocamentos em veículo privativo</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">Segurança</h4>
                <p className="mt-1 text-sm text-gray-600">Seguro viagem completo e assistência 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
