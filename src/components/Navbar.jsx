import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User, Search, ChevronDown, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  {
    label: 'Collections',
    href: '#',
    dropdown: [
      { label: 'Divine Icons', href: '/collections/divine-icons' },
      { label: 'Cyber Relics', href: '/collections/cyber-relics' },
      { label: 'Living Spaces', href: '/collections/living-spaces' },
    ],
  },
  { label: 'Forge Studio', href: '/collections/forge-studio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/Logo.png"
              alt="ORNIX"
              className="w-8 h-8 object-contain filter drop-shadow-[0_0_8px_rgba(0,102,255,0.6)] group-hover:drop-shadow-[0_0_16px_rgba(0,102,255,0.9)] transition-all"
            />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-[0.3em] text-white">ORNIX</span>
              <span className="text-[8px] tracking-[0.25em] text-ornix-blue uppercase">Original By Design</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors font-medium">
                    {link.label}
                    <ChevronDown size={12} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )}

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 bg-[#0d0d0d] border border-white/10 min-w-[200px] py-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block px-5 py-3 text-[11px] uppercase tracking-widest text-gray-400 hover:text-white hover:bg-ornix-blue/10 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button
              className="hidden md:flex text-gray-400 hover:text-white transition-colors"
              onClick={() => navigate('/search')}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* User */}
            <div className="relative">
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => user ? setUserMenuOpen(!userMenuOpen) : navigate('/login')}
                aria-label="Account"
              >
                {user ? (
                  <div className="w-7 h-7 rounded-full bg-ornix-blue flex items-center justify-center text-white text-xs font-bold">
                    {user.name?.[0]?.toUpperCase() || 'U'}
                  </div>
                ) : (
                  <User size={18} />
                )}
              </button>
              <AnimatePresence>
                {userMenuOpen && user && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-full mt-3 bg-[#0d0d0d] border border-white/10 min-w-[180px] py-2"
                  >
                    <div className="px-4 py-3 border-b border-white/5">
                      <p className="text-xs text-white font-bold capitalize">{user.name}</p>
                      <p className="text-[10px] text-gray-500">{user.email}</p>
                    </div>
                    <Link to="/account/orders" className="block px-4 py-2 text-[11px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">My Orders</Link>
                    <Link to="/account/wishlist" className="block px-4 py-2 text-[11px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">Wishlist</Link>
                    <button
                      onClick={() => { logout(); setUserMenuOpen(false); }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-[11px] text-red-400 hover:text-red-300 tracking-widest uppercase transition-colors"
                    >
                      <LogOut size={12} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <button
              className="relative text-gray-400 hover:text-white transition-colors"
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-ornix-blue rounded-full text-[9px] font-bold text-white flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button className="lg:hidden text-white" onClick={() => setIsMobileOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-[90] bg-[#050505] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <span className="text-xl font-bold tracking-widest">ORNIX</span>
              <button onClick={() => setIsMobileOpen(false)}>
                <X size={26} />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-6 flex-1">
              <Link to="/" className="text-3xl font-bold tracking-tighter py-4 border-b border-white/5 hover:text-ornix-blue transition-colors">Home</Link>
              <Link to="/collections/divine-icons" className="text-3xl font-bold tracking-tighter py-4 border-b border-white/5 hover:text-ornix-blue transition-colors">Divine Icons</Link>
              <Link to="/collections/cyber-relics" className="text-3xl font-bold tracking-tighter py-4 border-b border-white/5 hover:text-ornix-blue transition-colors">Cyber Relics</Link>
              <Link to="/collections/living-spaces" className="text-3xl font-bold tracking-tighter py-4 border-b border-white/5 hover:text-ornix-blue transition-colors">Living Spaces</Link>
              <Link to="/collections/forge-studio" className="text-3xl font-bold tracking-tighter py-4 border-b border-white/5 hover:text-ornix-blue transition-colors">Forge Studio</Link>
              <Link to="/about" className="text-3xl font-bold tracking-tighter py-4 border-b border-white/5 hover:text-ornix-blue transition-colors">About</Link>
            </div>
            <div className="p-6 border-t border-white/5">
              {user ? (
                <button onClick={logout} className="w-full py-3 border border-white/10 text-xs tracking-widest uppercase text-gray-400 hover:text-white">Logout</button>
              ) : (
                <Link to="/login" className="block text-center py-3 border border-ornix-blue text-ornix-blue text-xs tracking-widest uppercase hover:bg-ornix-blue hover:text-white transition-all">Sign In</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
