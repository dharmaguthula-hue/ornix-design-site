import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Social icon SVGs (lucide-react v1 compatible)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Fade-in glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-ornix-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/Logo.png" alt="ORNIX" className="w-8 h-8 object-contain filter drop-shadow-[0_0_10px_rgba(0,102,255,0.7)]" />
              <div>
                <p className="text-base font-bold tracking-[0.3em]">ORNIX</p>
                <p className="text-[8px] text-ornix-blue tracking-[0.25em] uppercase">Original By Design</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Futuristic luxury design brand creating engineered statement objects inspired by future technology and cinematic aesthetics.
            </p>
            <p className="text-ornix-blue text-xs tracking-widest font-bold italic">
              "If it doesn't stand out, it doesn't leave ORNIX."
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-6">Collections</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Divine Icons', href: '/collections/divine-icons' },
                { label: 'Cyber Relics', href: '/collections/cyber-relics' },
                { label: 'Living Spaces', href: '/collections/living-spaces' },
                { label: 'Forge Studio', href: '/collections/forge-studio' },
                { label: 'Limited Masterpieces', href: '/#masterpieces' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-ornix-blue group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About ORNIX', href: '/about' },
                { label: 'Our Studio', href: '/about#studio' },
                { label: 'Craftsmanship', href: '/about#craftsmanship' },
                { label: 'Forge Studio', href: '/collections/forge-studio' },
                { label: 'Careers', href: '/contact' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-ornix-blue group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-6">Stay Connected</h4>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Get first access to new drops, limited releases, and behind-the-forge stories.
            </p>
            <div className="flex border border-white/10 focus-within:border-ornix-blue transition-colors mb-6">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-xs text-white placeholder-gray-600 outline-none"
              />
              <button className="px-4 text-ornix-blue hover:bg-ornix-blue hover:text-white transition-all">
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-ornix-blue transition-all">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-ornix-blue transition-all">
                <YoutubeIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-ornix-blue transition-all">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Support strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/5 mb-10">
          {[
            { icon: '🔒', label: 'Secure Payments', sub: '100% Safe Checkout' },
            { icon: '🌍', label: 'Worldwide Shipping', sub: 'Secure & Insured' },
            { icon: '🏆', label: 'Limited Editions', sub: 'Exclusivity Guaranteed' },
            { icon: '🎨', label: 'Handcrafted', sub: 'Precision Engineered' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white">{item.label}</p>
                <p className="text-[9px] text-gray-600">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] text-gray-600 tracking-widest uppercase">
            © 2026 ORNIX. All Rights Reserved.
          </span>
          <div className="flex gap-8 text-[10px] text-gray-600 tracking-widest uppercase">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>

      {/* Bottom glow strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ornix-blue/30 to-transparent" />
    </footer>
  );
};

export default Footer;
