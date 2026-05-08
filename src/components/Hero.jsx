import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 40;
const currentFrame = (i) => `/Ornix_Anim/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const xRef = useRef({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const imagesRef = useRef([]);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const imgs = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = img.onerror = () => {
        loaded++;
        setProgress(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded === FRAME_COUNT) {
          imagesRef.current = imgs;
          setReady(true);
        }
      };
      imgs.push(img);
    }
  }, []);

  // Canvas render + GSAP ScrollTrigger
  useEffect(() => {
    if (!ready || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

    const drawFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || !img.naturalWidth) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * ratio) / 2;
      const y = (canvas.height - img.height * ratio) / 2;
      ctx.drawImage(img, x, y, img.width * ratio, img.height * ratio);
    };

    drawFrame(0);

    const seq = { frame: 0 };
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(seq, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: () => drawFrame(Math.round(seq.frame)),
    });

    tl.to(textRef.current, { opacity: 0, y: -60, ease: 'power2.inOut' }, 0);
    tl.to(ctaRef.current, { opacity: 0, y: -40, ease: 'power2.inOut' }, 0.05);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [ready]);

  // Mouse parallax
  useEffect(() => {
    const handleMouse = (e) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * 20;
      const dy = (e.clientY / window.innerHeight - 0.5) * 10;
      if (overlayRef.current) {
        gsap.to(overlayRef.current, { x: dx, y: dy, duration: 1, ease: 'power2.out' });
      }
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      {/* Frame sequence canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      />

      {/* Cinematic vignette & gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10 pointer-events-none" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      }} />

      {/* Loading bar */}
      {!ready && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black gap-4">
          <img src="/assets/Logo.png" alt="ORNIX" className="w-16 h-16 object-contain animate-pulse filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-white tracking-[0.4em] uppercase animate-pulse">
            Loading {progress}%
          </span>
        </div>
      )}

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center pl-16 md:pl-24 lg:pl-32">
        {/* Left content block */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -40 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/assets/Logo.png"
              alt="ORNIX"
              className="w-10 h-10 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />
            <span className="text-[10px] tracking-[0.4em] text-white uppercase font-medium">Original By Design</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mb-2">
            ORNIX
          </h1>
          <div className="w-16 h-[2px] bg-white mb-6" />
          <p className="text-base md:text-lg text-gray-400 tracking-wider mb-2 font-light">
            IF IT DOESN'T STAND OUT,
          </p>
          <p className="text-base md:text-lg text-white tracking-wider mb-10 font-bold">
            IT DOESN'T LEAVE ORNIX.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-10">
            A future-tech design brand creating engineered statement objects inspired by technology, mythology, and cinematic imagination.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <Link
            to="/collections/divine-icons"
            className="group flex items-center gap-3 bg-ornix-blue px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-blue-600 transition-all duration-300"
          >
            Begin Your Journey
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-3 border border-white/20 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white/60 hover:text-white transition-all duration-300 text-gray-400"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-gray-600 tracking-[0.4em] uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-ornix-blue to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
