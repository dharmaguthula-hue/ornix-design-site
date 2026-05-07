import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProductPopup from './ProductPopup'

const masterpieces = [
  {
    name: "Divine Ganesha",
    tagline: "Spiritual Engineering",
    price: "4,500",
  },
  {
    name: "Cyber Relic X-1",
    tagline: "Future Artifact",
    price: "2,800",
  },
  {
    name: "Lunar Ambient v.1",
    tagline: "Living Light",
    price: "6,200",
  }
]

const LimitedMasterpieces = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section className="relative py-40 px-4 md:px-10 bg-ornix-black overflow-hidden">
      <ProductPopup 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <h2 className="text-[20vw] font-bold text-white/[0.02] tracking-tighter whitespace-nowrap">
          MASTERPIECES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-ornix-blue tracking-[0.4em] text-xs uppercase mb-4 block"
          >
            Exclusive Collection
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">LIMITED EDITIONS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Each piece is a singular expression of future-tech luxury, engineered for those who demand the original.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {masterpieces.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="group relative"
            >
              <div className="aspect-[3/4] bg-ornix-graphite overflow-hidden relative blue-glow-box">
                {/* Product Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border border-ornix-blue/20 rounded-full animate-pulse flex items-center justify-center">
                    <span className="text-[10px] tracking-widest text-ornix-blue">ORNIX LABS</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-ornix-blue transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">
                  {item.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">${item.price}</span>
                  <button 
                    onClick={() => setSelectedProduct(item)}
                    className="text-[10px] uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Acquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LimitedMasterpieces
