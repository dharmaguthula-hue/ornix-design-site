import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { isOpen, closeCart, items, total, removeItem, updateQty, count } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-[81] bg-[#080808] border-l border-white/5 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-ornix-blue" />
                <h2 className="text-sm font-bold tracking-widest uppercase">Your Vault</h2>
                {count > 0 && (
                  <span className="bg-ornix-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {count}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="p-1 text-gray-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto py-4 px-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                    <ShoppingBag size={32} className="text-white/20" />
                  </div>
                  <div>
                    <p className="text-lg font-bold tracking-tight mb-2">Vault is Empty</p>
                    <p className="text-gray-500 text-sm">Explore our collections and acquire your masterpiece.</p>
                  </div>
                  <button
                    onClick={() => { closeCart(); navigate('/collections/divine-icons'); }}
                    className="border border-ornix-blue text-ornix-blue text-xs tracking-widest uppercase px-6 py-3 hover:bg-ornix-blue hover:text-white transition-all"
                  >
                    Explore Collections
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 p-3 bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-[#111] flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover opacity-80"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold tracking-tight truncate">{item.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">{item.tagline}</p>
                        <p className="text-ornix-blue text-sm font-bold">₹{(item.price * item.qty).toLocaleString('en-IN')}</p>

                        {/* Qty Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => item.qty === 1 ? removeItem(item.id) : updateQty(item.id, item.qty - 1)}
                            className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-ornix-blue transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-6 h-6 border border-white/10 flex items-center justify-center hover:border-ornix-blue transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-600 hover:text-red-400 transition-colors flex-shrink-0 mt-1"
                      >
                        <Trash2 size={14} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-white/5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-widest">Subtotal</span>
                  <span className="text-xl font-bold">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[10px] text-gray-600 tracking-wider">Shipping & taxes calculated at checkout</p>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-ornix-blue py-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
                >
                  Proceed to Checkout <ArrowRight size={14} />
                </button>
                <button
                  onClick={closeCart}
                  className="w-full py-3 border border-white/10 text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
