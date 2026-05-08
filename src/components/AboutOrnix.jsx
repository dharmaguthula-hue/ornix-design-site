import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutOrnix = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 0.2]);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 bg-black overflow-hidden">
      {/* Background glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(0,102,255,0.15) 0%, transparent 70%)',
          opacity: glowOpacity,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — X Visual */}
        <div className="relative flex items-center justify-center order-2 lg:order-1">
          <motion.div
            style={{ rotateY: xRotate }}
            className="relative w-full max-w-lg aspect-square flex items-center justify-center"
          >
            <img
              src="/assets/ornix_hero_x_1778171433139.png"
              alt="ORNIX X"
              className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,102,255,0.2)]"
            />
          </motion.div>
        </div>

        {/* Right — Text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="order-1 lg:order-2"
        >
          <span className="text-[12px] text-ornix-blue tracking-[0.3em] uppercase block mb-4 font-medium">
            ABOUT ORNIX
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-8 text-white">
            ENGINEERED TO STAND APART.
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
            ORNIX is a future-tech design brand creating engineered statement objects inspired by technology, mythology, and cinematic imagination.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Every creation is crafted to be original, powerful, and unforgettable.
          </p>

          <div className="max-w-lg text-sm md:text-base font-medium">
            <span className="text-ornix-blue block">Because if it doesn't stand out,</span>
            <span className="text-gray-500 block">it doesn't leave ORNIX.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOrnix;
