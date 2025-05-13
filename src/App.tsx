import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ScrollToTop } from './components/ScrollToTop';
import { ChatAssistant } from './components/ChatAssistant';

function App() {
  const path = window.location.pathname;

  return (
    <div className="font-sans antialiased">
      <Navbar />
      {path === '/about' ? <AboutPage /> : <HomePage />}
      <Footer />
      <ScrollToTop />
      <ChatAssistant />
    </div>
  );
}

export default App;