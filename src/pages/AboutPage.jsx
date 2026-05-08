import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage = () => (
  <>
    <section className="min-h-screen bg-black pt-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-ornix-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[10px] text-ornix-blue tracking-[0.4em] uppercase block mb-6">About ORNIX</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8">
            ENGINEERED<br />
            <span className="text-ornix-blue">TO STAND</span><br />
            APART.
          </h1>
          <div className="w-20 h-[2px] bg-ornix-blue mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              ORNIX is a future-tech design brand creating engineered statement objects inspired by technology, mythology, and cinematic imagination.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Every creation is crafted to be original, powerful, and unforgettable. We don't follow trends — we engineer legacies. Each piece is a singular intersection of sacred tradition and futuristic vision.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Founded on the belief that design should leave a mark on the world, ORNIX operates at the intersection of art, technology, and mythology — creating pieces that transcend ordinary collectibles.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="border border-ornix-blue/20 p-8 mb-6">
              <h3 className="text-xl font-bold tracking-tight mb-4 text-ornix-blue">Our Philosophy</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "If it doesn't stand out, it doesn't leave ORNIX."
              </p>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                This isn't a tagline — it's our quality filter. Every product that leaves our studio has been designed, engineered, tested, and approved by our team of visionaries.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '50+', label: 'Products' },
                { num: '1000+', label: 'Collectors' },
                { num: '100%', label: 'Original' },
              ].map((stat) => (
                <div key={stat.label} className="border border-white/5 p-5 text-center">
                  <span className="text-3xl font-black text-ornix-blue block mb-1">{stat.num}</span>
                  <span className="text-[9px] text-gray-600 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div id="craftsmanship" className="mb-24">
          <h2 className="text-4xl font-bold tracking-tighter mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Craftsmanship', desc: 'Every product is precision-engineered using advanced manufacturing techniques combined with traditional artisanship.' },
              { title: 'Mythology', desc: 'Rooted in the rich stories of divine beings, each piece carries a narrative that transcends time and culture.' },
              { title: 'Innovation', desc: 'We constantly push the boundaries of what\'s possible, merging sacred tradition with futuristic vision.' },
            ].map((val) => (
              <div key={val.title} className="border border-white/5 p-8 hover:border-ornix-blue/30 transition-colors group">
                <div className="w-10 h-[2px] bg-ornix-blue mb-6 group-hover:w-16 transition-all" />
                <h3 className="text-lg font-bold tracking-tight mb-4">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-16 border-t border-white/5">
          <p className="text-gray-500 mb-8 text-sm">Ready to acquire your masterpiece?</p>
          <Link
            to="/collections/divine-icons"
            className="inline-flex items-center gap-3 bg-ornix-blue px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
          >
            Explore Collections <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default AboutPage;
