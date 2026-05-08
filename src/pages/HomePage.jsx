import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import AboutOrnix from '../components/AboutOrnix';
import DiagonalWorlds from '../components/DiagonalWorlds';
import LimitedMasterpieces from '../components/LimitedMasterpieces';
import Footer from '../components/Footer';
import { useState } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main>
          <Hero />
          <AboutOrnix />
          <DiagonalWorlds />
          <LimitedMasterpieces />
          <Footer />
        </main>
      )}
    </>
  );
};

export default HomePage;
