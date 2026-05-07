import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Info, ShieldCheck } from 'lucide-react'

const ProductPopup = ({ isOpen, onClose, product }) => {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-6xl h-full max-h-[800px] bg-ornix-graphite overflow-hidden flex flex-col md:flex-row blue-glow-box"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-ornix-blue transition-colors rounded-full"
            >
              <X size={24} />
            </button>

            {/* Product Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-ornix-blue/10 text-9xl font-bold">ORNIX</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" 
                alt={product.name}
                className="w-full h-full object-cover relative z-0 opacity-60"
              />
              
              <div className="absolute bottom-10 left-10 z-20">
                <span className="text-ornix-blue text-xs tracking-[0.4em] uppercase mb-2 block">Specifications</span>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">Material</span>
                    <span className="text-sm">Engineered Chrome</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">Weight</span>
                    <span className="text-sm">1.2 kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-ornix-blue text-xs tracking-widest font-bold mb-4 block uppercase">Masterpiece Series</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{product.name}</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Experience the pinnacle of futuristic design. The {product.name} is meticulously engineered using advanced additive manufacturing and hand-finished with surgical precision.
                </p>
                
                <div className="flex flex-col gap-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/5 rounded-lg"><ShieldCheck size={20} className="text-ornix-blue" /></div>
                    <div>
                      <h4 className="text-sm font-bold">Certificate of Authenticity</h4>
                      <p className="text-xs text-gray-500">Each piece comes with a digital NFT-backed signature.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/5 rounded-lg"><Info size={20} className="text-ornix-blue" /></div>
                    <div>
                      <h4 className="text-sm font-bold">Limited Availability</h4>
                      <p className="text-xs text-gray-500">Only 50 units worldwide. No reprints.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-6 border-t border-white/5">
                  <span className="text-gray-500 uppercase tracking-widest text-xs">Acquisition Price</span>
                  <span className="text-3xl font-bold">${product.price}</span>
                </div>
                <button className="w-full bg-ornix-blue py-5 flex items-center justify-center gap-3 hover:bg-blue-700 transition-all font-bold tracking-widest uppercase text-sm">
                  <ShoppingCart size={18} />
                  Add to Vault
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProductPopup
