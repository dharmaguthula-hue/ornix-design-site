import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';

import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

// Pages that should NOT show the Navbar (full-screen auth experience)
const NO_NAV_ROUTES = ['/login'];

const App = () => {
  const location = useLocation();
  const showNav = !NO_NAV_ROUTES.includes(location.pathname);

  // Initialize Lenis smooth scroll globally
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Connect lenis RAF to GSAP ticker
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {showNav && <Navbar />}
      <CartDrawer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Fallback */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <p className="text-6xl font-black tracking-tighter">404</p>
            <p className="text-gray-500">Page not found in the ORNIX universe.</p>
            <a href="/" className="text-ornix-blue text-sm uppercase tracking-widest hover:text-white transition-colors">← Return to ORNIX</a>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
