import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg",
    alt: "Basílica de Santa Sofia",
    title: "Basílica de Santa Sofia"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
    alt: "Mesquita Azul",
    title: "Mesquita Azul"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg",
    alt: "Palácio de Topkapi",
    title: "Palácio de Topkapi"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg",
    alt: "Grande Bazar",
    title: "Grande Bazar"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4101351/pexels-photo-4101351.jpeg",
    alt: "Bazar das Especiarias",
    title: "Bazar das Especiarias"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1112304/pexels-photo-1112304.jpeg",
    alt: "Cruzeiro pelo Bósforo",
    title: "Cruzeiro pelo Bósforo"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/13094291/pexels-photo-13094291.jpeg",
    alt: "Palácio Dolmabahçe",
    title: "Palácio Dolmabahçe"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg",
    alt: "Torre Galata",
    title: "Torre Galata"
  }
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeria de Fotos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Vislumbre a beleza de Istambul através destas imagens que capturam a essência 
            dos locais que você irá visitar nesta jornada inesquecível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg h-64 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-medium p-4">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-white p-2 z-10"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-4 z-10"
            onClick={handlePrevImage}
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <img 
            src={galleryImages[selectedImage].src} 
            alt={galleryImages[selectedImage].alt} 
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-4 z-10"
            onClick={handleNextImage}
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white text-lg">
            {galleryImages[selectedImage].title}
          </div>
        </div>
      )}
    </section>
  );
};