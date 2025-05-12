import React, { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Viva a Experiência Turca</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Assista a este vídeo e sinta-se transportado para as ruas de Istambul, onde o Oriente 
            encontra o Ocidente em uma mistura fascinante de culturas.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer group"
            onClick={handlePlay}
          >
            <img 
              src="https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg" 
              alt="Vídeo sobre Istambul" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play className="h-10 w-10 text-white" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white p-2 z-10"
            onClick={handleClose}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="w-full max-w-4xl aspect-video">
            <iframe 
              ref={videoRef}
              width="100%" 
              height="100%" 
              src="https://www.youtube-nocookie.com/embed/7A1q7v4btbk?autoplay=1" 
              title="Istanbul, Turkey Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};