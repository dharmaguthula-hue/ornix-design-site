import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Shield, Package, Truck, Star } from 'lucide-react';
import { getProductById, collections } from '../data/products';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Product not found</p>
          <Link to="/" className="text-ornix-blue">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const collection = collections[product.collection];

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  };

  return (
    <>
      <section className="min-h-screen bg-black pt-24 pb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest mb-12">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to={`/collections/${collection?.slug || ''}`} className="hover:text-white transition-colors">{collection?.title || 'Collections'}</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square bg-[#080808] border border-white/5 overflow-hidden"
                style={{ boxShadow: collection ? `0 0 80px ${collection.accentColor}15` : undefined }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-5 left-5 px-3 py-1 bg-ornix-blue/20 border border-ornix-blue/30 text-ornix-blue text-[10px] font-bold tracking-widest uppercase">
                    {product.badge}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col justify-between py-4"
            >
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase mb-4 block" style={{ color: collection?.accentColor || '#0066FF' }}>
                  {collection?.title || 'ORNIX'}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-4">{product.name}</h1>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">{product.tagline}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(24 reviews)</span>
                </div>

                <div className="w-12 h-[1px] bg-ornix-blue mb-8" />

                <p className="text-gray-400 text-base leading-relaxed mb-10">{product.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { label: 'Material', value: product.material },
                    { label: 'Weight', value: product.weight },
                    { label: 'Edition', value: product.edition },
                    { label: 'Status', value: product.inStock ? 'In Stock' : 'Out of Stock' },
                  ].map((spec) => (
                    <div key={spec.label} className="border border-white/5 p-4">
                      <span className="text-[9px] text-gray-600 uppercase tracking-widest block mb-1">{spec.label}</span>
                      <span className="text-sm text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3 mb-10">
                  {[
                    { icon: Shield, text: 'Certificate of Authenticity included' },
                    { icon: Package, text: 'Premium ORNIX packaging' },
                    { icon: Truck, text: 'Insured worldwide shipping' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-gray-400 text-sm">
                      <Icon size={14} className="text-ornix-blue flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price + Add to Cart */}
              <div className="border-t border-white/5 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Price</span>
                    <span className="text-4xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
                  </div>
                  {/* Qty Selector */}
                  <div className="flex items-center border border-white/10">
                    <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-10 text-gray-400 hover:text-white transition-colors">−</button>
                    <span className="w-10 text-center text-sm">{qty}</span>
                    <button onClick={() => setQty((q) => q + 1)} className="w-10 h-10 text-gray-400 hover:text-white transition-colors">+</button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-4 flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                      added ? 'bg-green-600' : 'bg-ornix-blue hover:bg-blue-600'
                    }`}
                  >
                    <ShoppingBag size={16} />
                    {added ? 'Added to Vault!' : 'Add to Cart'}
                  </button>
                  <button className="w-14 h-14 border border-white/10 flex items-center justify-center text-gray-500 hover:text-red-400 hover:border-red-400/30 transition-all">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
