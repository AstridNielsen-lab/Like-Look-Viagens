import React, { useState } from 'react';
import { itineraryData } from '../data/itinerary';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const ItinerarySection: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  const currentDay = itineraryData.find(day => day.day === activeDay) || itineraryData[0];

  const handlePrevDay = () => {
    setActiveDay(prev => (prev === 1 ? itineraryData.length : prev - 1));
  };

  const handleNextDay = () => {
    setActiveDay(prev => (prev === itineraryData.length ? 1 : prev + 1));
  };

  return (
    <section id="itinerary" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roteiro Exclusivo de 7 Dias</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Uma imersão pelos tesouros históricos, culturais e arquitetônicos de Istambul, 
            com experiências cuidadosamente selecionadas para cada dia da sua viagem.
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {itineraryData.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeDay === day.day
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              Dia {day.day}
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-72 md:h-full">
                <img 
                  src={currentDay.image} 
                  alt={`Dia ${currentDay.day}: ${currentDay.title}`} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center text-white">
                    <span className="text-3xl font-bold">Dia {currentDay.day}</span>
                    <div className="ml-auto flex space-x-2">
                      <button 
                        onClick={handlePrevDay}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                        aria-label="Dia anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={handleNextDay}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                        aria-label="Próximo dia"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentDay.title}</h3>
              <p className="text-gray-600 mb-6">{currentDay.description}</p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Destaques do Dia:</h4>
              <ul className="space-y-2">
                {currentDay.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#booking" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Reservar Esta Experiência
          </a>
        </div>
      </div>
    </section>
  );
};