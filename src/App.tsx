import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ScrollToTop } from './components/ScrollToTop';
import { ChatAssistant } from './components/ChatAssistant';

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HomePage />
      <Footer />
      <ScrollToTop />
      <ChatAssistant />
    </div>
  );
}

export default App;