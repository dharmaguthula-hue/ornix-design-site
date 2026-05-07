import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, User } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-effect py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-bold tracking-tighter blue-glow">ORNIX</a>
          <div className="hidden md:flex items-center gap-8">
            {['Divine', 'Cyber', 'Living', 'Forge'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-ornix-blue transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-ornix-blue transition-colors"><User size={20} /></button>
          <button className="hover:text-ornix-blue transition-colors"><ShoppingBag size={20} /></button>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black p-10 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold tracking-tighter">ORNIX</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-8">
              {['Divine Icons', 'Cyber Relics', 'Living Spaces', 'Forge Studio'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href="#"
                  className="text-4xl font-bold tracking-tighter hover:text-ornix-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs tracking-widest text-gray-500 uppercase">Contact</span>
              <a href="mailto:future@ornix.design" className="text-xl">future@ornix.design</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
