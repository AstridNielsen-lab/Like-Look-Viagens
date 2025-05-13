import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ScrollToTop } from './components/ScrollToTop';
import { ChatAssistant } from './components/ChatAssistant';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;