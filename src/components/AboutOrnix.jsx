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
          {/* Circular grid rings */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-ornix-blue/10 animate-[spin_20s_linear_infinite]"
                style={{
                  transform: `scale(${0.5 + i * 0.2})`,
                  animationDelay: `${i * -5}s`,
                  animationDirection: i % 2 === 0 ? 'reverse' : 'normal',
                }}
              />
            ))}

            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-full bg-ornix-blue/5 blur-3xl animate-pulse" />

            {/* The X mark */}
            <motion.div
              style={{ rotateY: xRotate }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Glow layers */}
                <div className="absolute inset-0 blur-3xl text-[14rem] font-black text-ornix-blue/20 select-none flex items-center justify-center leading-none">
                  X
                </div>
                <div className="absolute inset-0 blur-xl text-[13rem] font-black text-ornix-blue/30 select-none flex items-center justify-center leading-none">
                  X
                </div>
                {/* Main X */}
                <span
                  className="relative text-[12rem] font-black leading-none select-none"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #0066FF 40%, #ffffff 70%, #0033CC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(0,102,255,0.5))',
                  }}
                >
                  X
                </span>
              </div>
            </motion.div>

            {/* Floating dots */}
            {[45, 135, 225, 315].map((deg, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-ornix-blue rounded-full animate-pulse"
                style={{
                  top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Label */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-8 h-[1px] bg-ornix-blue" />
            <span className="text-[9px] text-ornix-blue tracking-[0.4em] uppercase">ORNIX Sigil</span>
            <div className="w-8 h-[1px] bg-ornix-blue" />
          </div>
        </div>

        {/* Right — Text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="order-1 lg:order-2"
        >
          <span className="text-[10px] text-ornix-blue tracking-[0.4em] uppercase block mb-6">
            About ORNIX
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
            ENGINEERED TO
            <br />
            <span className="text-ornix-blue">STAND APART.</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            ORNIX is a future-tech design brand creating engineered statement objects inspired by technology, mythology, and cinematic imagination.
          </p>

          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg">
            Every creation is crafted to be original, powerful, and unforgettable. We don't follow trends — we engineer legacies. Each piece is a singular intersection of sacred tradition and futuristic vision.
          </p>

          <div className="border-l-2 border-ornix-blue pl-6 mb-12">
            <p className="text-ornix-blue font-bold tracking-widest uppercase text-sm leading-relaxed">
              "If it doesn't stand out,<br />it doesn't leave ORNIX."
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
            {[
              { num: '50+', label: 'Products' },
              { num: '1k+', label: 'Collectors' },
              { num: '100%', label: 'Handcrafted' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{stat.num}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOrnix;
