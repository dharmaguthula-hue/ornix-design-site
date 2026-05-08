import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Filter, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { collections, getProductsByCollection } from '../data/products';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const slugToId = {
  'divine-icons': 'divine',
  'cyber-relics': 'cyber',
  'living-spaces': 'living',
  'forge-studio': 'forge',
};

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

const CollectionPage = () => {
  const { slug } = useParams();
  const collectionId = slugToId[slug];
  const collection = collections[collectionId];
  const products = getProductsByCollection(collectionId);
  const { addItem, openCart } = useCart();
  const [sort, setSort] = useState('default');

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Collection not found</p>
          <Link to="/" className="text-ornix-blue">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const sorted = [...products].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return 0;
  });

  const handleAdd = (product) => {
    addItem(product);
    openCart();
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover opacity-30"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${collection.bgColor} via-black/80 to-black`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <span className="text-[10px] tracking-[0.4em] uppercase block mb-4 font-medium" style={{ color: collection.accentColor }}>
            {collection.subtitle}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 text-white">
            {collection.title}
          </h1>
          <div className="w-16 h-[2px] mb-6" style={{ background: collection.accentColor }} />
          <p className="text-gray-400 max-w-xl text-base leading-relaxed">
            {collection.description}
          </p>
          <p className="text-gray-600 text-sm mt-4">{products.length} pieces in this collection</p>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="bg-black py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Filter bar */}
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2 text-gray-500">
              <Filter size={14} />
              <span className="text-xs uppercase tracking-widest">{sorted.length} products</span>
            </div>
            <div className="flex items-center gap-3">
              <SlidersHorizontal size={14} className="text-gray-500" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-white/10 text-gray-400 text-xs uppercase tracking-widest px-4 py-2 outline-none hover:border-white/30 transition-colors cursor-pointer"
              >
                <option value="default" className="bg-black">Sort: Featured</option>
                <option value="price-asc" className="bg-black">Price: Low to High</option>
                <option value="price-desc" className="bg-black">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sorted.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group"
              >
                <Link to={`/product/${product.id}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-square bg-[#0a0a0a] border border-white/5 overflow-hidden group-hover:border-white/15 transition-all duration-500 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Badge */}
                    {product.badge && (
                      <div className={`absolute top-3 left-3 px-2 py-1 border text-[9px] font-bold tracking-widest uppercase ${badgeColors[product.badge] || 'bg-white/10 text-white/60 border-white/10'}`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Wishlist */}
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-3 right-3 p-2 bg-black/50 rounded-full text-gray-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Heart size={13} />
                    </button>

                    {/* Quick add */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button
                        onClick={(e) => { e.preventDefault(); handleAdd(product); }}
                        className="w-full bg-ornix-blue py-3 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
                      >
                        <ShoppingBag size={12} /> Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-sm font-bold mb-1 group-hover:text-ornix-blue transition-colors">{product.name}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-[9px] text-gray-600 uppercase tracking-wider">{product.edition}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CollectionPage;
