import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getSignatureSeries, getDivineLegacy } from '../data/products';

const badgeColors = {
  SIGNATURE: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  CYBER: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  DIVINE: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  LEGACY: 'bg-ornix-blue/20 text-ornix-blue border-ornix-blue/30',
  BESTSELLER: 'bg-green-500/20 text-green-400 border-green-500/30',
  COLLECTOR: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  LUXURY: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  'ULTRA LIMITED': 'bg-red-500/20 text-red-400 border-red-500/30',
  NEW: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  CUSTOM: 'bg-ornix-blue/20 text-ornix-blue border-ornix-blue/30',
  COMMISSION: 'bg-ornix-blue/20 text-ornix-blue border-ornix-blue/30',
};

const ProductCard = ({ product }) => {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      className="flex-shrink-0 w-[280px] md:w-[320px] group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-[#0a0a0a] border border-white/5 overflow-hidden group-hover:border-white/15 transition-colors duration-500">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Badge */}
          {product.badge && (
            <div className={`absolute top-4 left-4 px-2 py-1 border text-[9px] font-bold tracking-widest uppercase ${badgeColors[product.badge] || 'bg-white/10 text-white/60 border-white/10'}`}>
              {product.badge}
            </div>
          )}

          {/* Wishlist */}
          <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-gray-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
            <Heart size={14} />
          </button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full bg-ornix-blue py-3 flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
            >
              <ShoppingBag size={12} /> Add to Cart
            </button>
          </div>

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 40px rgba(0,102,255,0.1)' }}
          />
        </div>

        {/* Info */}
        <div className="pt-4 px-1">
          <h3 className="text-sm font-bold tracking-tight group-hover:text-ornix-blue transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">{product.tagline}</p>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-white">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-[9px] text-gray-600 uppercase tracking-wider">{product.edition}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductRow = ({ title, subtitle, products, viewAllHref }) => {
  const rowRef = useRef(null);

  return (
    <div className="mb-24">
      <div className="flex items-end justify-between mb-10 px-6 lg:px-16">
        <div>
          <span className="text-[10px] text-ornix-blue uppercase tracking-[0.4em] block mb-2">{subtitle}</span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">{title}</h3>
        </div>
        <Link
          to={viewAllHref}
          className="hidden md:flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest hover:text-ornix-blue transition-colors group"
        >
          View All
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scrollable Row */}
      <div
        ref={rowRef}
        className="flex gap-6 overflow-x-auto pb-6 px-6 lg:px-16 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

const LimitedMasterpieces = () => {
  const signatureSeries = getSignatureSeries();
  const divineLegacy = getDivineLegacy();

  return (
    <section id="masterpieces" className="relative py-24 bg-black overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black text-white/[0.015] tracking-tighter whitespace-nowrap">
          MASTERPIECES
        </span>
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-ornix-blue/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-ornix-blue tracking-[0.4em] text-xs uppercase mb-4 block"
        >
          Exclusive Collection
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
        >
          LIMITED MASTERPIECES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed"
        >
          Each piece is a singular expression of future-tech luxury, engineered for those who demand the original.
        </motion.p>
      </div>

      {/* Row 1 — Signature Series */}
      <ProductRow
        title="SIGNATURE SERIES"
        subtitle="Exclusive creations released in limited numbers"
        products={signatureSeries}
        viewAllHref="/collections/divine-icons"
      />

      {/* Divider */}
      <div className="flex items-center gap-6 px-6 lg:px-16 mb-20">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <img src="/assets/Logo.png" alt="ORNIX" className="w-8 h-8 object-contain opacity-30 filter drop-shadow-[0_0_8px_rgba(0,102,255,0.5)]" />
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Row 2 — Divine Legacy */}
      <ProductRow
        title="DIVINE LEGACY"
        subtitle="Mythological icons reimagined with futuristic detail"
        products={divineLegacy}
        viewAllHref="/collections/divine-icons"
      />
    </section>
  );
};

export default LimitedMasterpieces;
