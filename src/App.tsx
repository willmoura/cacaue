import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Process from './pages/Process';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import { createWhatsappLink } from './lib/utils';
import { MessageCircle } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="font-sans antialiased text-foreground bg-background selection:bg-accent selection:text-white">
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/catalogo/:slug" element={<ProductDetail />} />
            <Route path="/processo" element={<Process />} />
            <Route path="/qualidade" element={<Quality />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/depoimentos" element={<Testimonials />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href={createWhatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}