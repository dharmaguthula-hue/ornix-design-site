import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const worlds = [
  {
    id: 'divine',
    num: '01',
    title: 'DIVINE ICONS',
    subtitle: 'Spiritual Artifacts',
    description: 'Spiritual artifacts and cinematic mythological creations carrying divine energy and timeless stories.',
    image: '/assets/WhatsApp Image 2026-05-07 at 11.50.59 PM.jpeg',
    accentColor: '#f5a623',
    bgGradient: 'from-yellow-950/50',
    href: '/collections/divine-icons',
    alignRight: false,
    clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
  },
  {
    id: 'cyber',
    num: '02',
    title: 'CYBER RELICS',
    subtitle: 'Futuristic Artifacts',
    description: 'Futuristic jewelry, cyberpunk accessories, engineered fashion objects designed to impress.',
    image: '/assets/cyber_shiva_mask.png',
    accentColor: '#8b5cf6',
    bgGradient: 'from-purple-950/50',
    href: '/collections/cyber-relics',
    alignRight: true,
    clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)',
  },
  {
    id: 'living',
    num: '03',
    title: 'LIVING SPACES',
    subtitle: 'Ambient Luxury',
    description: 'Interior statement pieces, moon decor, luxury ambient objects that elevate your space.',
    image: '/assets/moon_lamp_luxury.png',
    accentColor: '#94a3b8',
    bgGradient: 'from-slate-900/50',
    href: '/collections/living-spaces',
    alignRight: false,
    clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)',
  },
  {
    id: 'forge',
    num: '04',
    title: 'FORGE STUDIO',
    subtitle: 'Custom Creations',
    description: 'Your vision. Our creation. Custom designed future-crafted creations engineered to be remembered.',
    image: '/assets/WhatsApp Image 2026-05-07 at 11.50.58 PM (1).jpeg',
    accentColor: '#0066FF',
    bgGradient: 'from-blue-950/50',
    href: '/collections/forge-studio',
    alignRight: true,
    clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
  },
];

const WorldPanel = ({ world, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const textX = useTransform(
    scrollYProgress,
    [0, 0.4],
    [world.alignRight ? -50 : 50, 0]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      id={world.id}
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <img
          src={world.image}
          alt={world.title}
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className={`absolute inset-0 z-[1] bg-gradient-to-${world.alignRight ? 'l' : 'r'} ${world.bgGradient} via-black/70 to-black/90`} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className={`flex flex-col ${world.alignRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative group"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{ boxShadow: `0 0 80px ${world.accentColor}20, 0 0 160px ${world.accentColor}10` }}
            >
              <img
                src={world.image}
                alt={world.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Number badge */}
              <div
                className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center border"
                style={{ borderColor: world.accentColor, color: world.accentColor }}
              >
                <span className="text-xs font-bold tracking-wider">{world.num}</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block font-medium" style={{ color: world.accentColor }}>
              {world.num} / {world.subtitle}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 text-white">
              {world.title}
            </h2>
            <div className="w-12 h-[2px] mb-8" style={{ background: world.accentColor }} />
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              {world.description}
            </p>
            <Link
              to={world.href}
              className="self-start group flex items-center gap-4 border px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:text-white"
              style={{ borderColor: `${world.accentColor}50`, color: world.accentColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = world.accentColor;
                e.currentTarget.style.borderColor = world.accentColor;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = `${world.accentColor}50`;
                e.currentTarget.style.color = world.accentColor;
              }}
            >
              Explore Collection
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const DiagonalWorlds = () => {
  return (
    <section className="relative bg-black">
      {/* Section header */}
      <div className="py-24 text-center px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-ornix-blue tracking-[0.4em] text-xs uppercase mb-4 block"
        >
          Explore The Multiverse
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter"
        >
          THE FOUR WORLDS
        </motion.h2>
      </div>

      {/* World panels */}
      {worlds.map((world, index) => (
        <WorldPanel key={world.id} world={world} index={index} />
      ))}
    </section>
  );
};

export default DiagonalWorlds;
