import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { OverviewSection } from '../components/OverviewSection';
import { ItinerarySection } from '../components/ItinerarySection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { VideoSection } from '../components/VideoSection';
import { BookingSection } from '../components/BookingSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Like Look Viagens | Roteiro Exclusivo Turquia";
  }, []);

  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <ItinerarySection />
      <VideoSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
    </main>
  );
};