import React from 'react';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-futuristic flex flex-col overflow-x-hidden">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/5">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-widest text-gray-200">ORNIX</span>
            <span className="text-[8px] tracking-[0.3em] text-ornix-blue uppercase">Original By Design</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-[11px] tracking-[0.2em] text-gray-400 uppercase font-medium">
          <a href="#" className="text-ornix-blue border-b border-ornix-blue pb-1">Home</a>
          <a href="#" className="hover:text-white transition-colors">Collections</a>
          <a href="#" className="hover:text-white transition-colors">Forge Studio</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-6 text-gray-400">
          <button className="hover:text-white"><Search size={18} /></button>
          <button className="hover:text-white"><User size={18} /></button>
          <button className="hover:text-white"><Heart size={18} /></button>
          <button className="hover:text-white flex items-center gap-1">
            <ShoppingCart size={18} />
            <span className="text-ornix-blue text-[10px]">02</span>
          </button>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <aside className="w-24 border-r border-white/5 flex flex-col items-center py-8 hidden lg:flex shrink-0">
          <div className="w-10 h-10 mb-12">
            <img src="/assets/Logo.png" alt="X Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,102,255,0.5)]" />
          </div>
          
          <div className="flex flex-col gap-8 flex-1">
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-6 h-6 border border-ornix-blue/30 rounded-full flex items-center justify-center group-hover:border-ornix-blue transition-colors">
                 <div className="w-2 h-2 bg-ornix-blue rounded-full" />
              </div>
              <span className="text-[8px] uppercase tracking-widest text-gray-500 group-hover:text-ornix-blue text-center leading-tight">Divine<br/>Icons</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center group-hover:border-ornix-blue transition-colors">
                 <div className="w-2 h-2 bg-purple-500 rounded-full" />
              </div>
              <span className="text-[8px] uppercase tracking-widest text-gray-500 group-hover:text-ornix-blue text-center leading-tight">Cyber<br/>Relics</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center group-hover:border-ornix-blue transition-colors">
                 <div className="w-2 h-2 bg-slate-400 rounded-full" />
              </div>
              <span className="text-[8px] uppercase tracking-widest text-gray-500 group-hover:text-ornix-blue text-center leading-tight">Living<br/>Spaces</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center group-hover:border-ornix-blue transition-colors">
                 <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              </div>
              <span className="text-[8px] uppercase tracking-widest text-gray-500 group-hover:text-ornix-blue text-center leading-tight">Forge<br/>Studio</span>
            </button>
          </div>

          <div className="relative w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mb-8">
             <span className="text-[8px] absolute w-full h-full animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-white/20"></span>
             <img src="/assets/Logo.png" alt="X Logo Small" className="w-6 h-6 object-contain opacity-50" />
          </div>

          <div className="flex gap-4 mb-8 text-gray-500 text-[10px] uppercase font-bold">
             <span className="hover:text-white cursor-pointer">IG</span>
             <span className="hover:text-white cursor-pointer">YT</span>
             <span className="hover:text-white cursor-pointer">X</span>
          </div>

          <span className="text-[7px] text-gray-600 uppercase tracking-widest text-center">© 2026 ORNIX.<br/>ALL RIGHTS RESERVED.</span>
        </aside>

        {/* Center Content Area */}
        <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto">
          
          {/* Column 1: Intro (Spans 4 cols) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-center px-4 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ornix-blue/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            
            <img src="/assets/Logo.png" alt="Ornix X" className="w-48 h-48 object-contain mb-8 filter drop-shadow-[0_0_15px_rgba(0,102,255,0.3)]" />
            
            <h1 className="text-5xl xl:text-7xl font-bold tracking-tighter text-white mb-2 leading-none">FUTURISTIC</h1>
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-8">
              BEYOND IMAGINATION.<br/>BUILT WITH PURPOSE.
            </p>
            
            <button className="self-start border border-ornix-blue/50 text-ornix-blue text-[10px] uppercase tracking-widest px-6 py-2 rounded-full hover:bg-ornix-blue hover:text-white transition-all mb-16">
              Begin Your Journey &rarr;
            </button>

            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-8">
              ORNIX creates future-forged masterpieces inspired by technology, divinity and imagination. Designed to stand apart. Crafted to be remembered.
            </p>

            <div className="border-l-2 border-ornix-blue pl-4 mb-8">
              <p className="text-ornix-blue font-bold tracking-widest uppercase text-xs">
                IF IT DOESN'T STAND OUT,<br/>IT DOESN'T LEAVE ORNIX.
              </p>
            </div>
          </div>

          {/* Column 2: The Worlds (Spans 5 cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-4">
            
            {/* World 1 */}
            <div className="relative h-32 md:h-40 group cursor-pointer overflow-hidden border border-white/10" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#110e05] to-[#2a220a] z-0" />
              <img src="/assets/WhatsApp Image 2026-05-07 at 11.50.59 PM.jpeg" alt="Divine Icons" className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display = 'none'} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-center pl-16 md:pl-24">
                <span className="text-gray-400 text-[10px] tracking-widest mb-1">01</span>
                <h3 className="text-2xl font-bold tracking-tighter text-yellow-500 mb-2">DIVINE ICONS</h3>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest max-w-[150px] mb-3">Sacred. Powerful. Eternal.</p>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Explore &rarr;</span>
              </div>
            </div>

            {/* World 2 */}
            <div className="relative h-32 md:h-40 group cursor-pointer overflow-hidden border border-white/10" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 15% 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0715] to-[#1a1236] z-0" />
              <img src="/assets/WhatsApp Image 2026-05-07 at 11.50.58 PM.jpeg" alt="Cyber Relics" className="absolute right-10 top-0 h-full w-1/2 object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display = 'none'} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-center pl-8 md:pl-16">
                <span className="text-gray-400 text-[10px] tracking-widest mb-1">02</span>
                <h3 className="text-2xl font-bold tracking-tighter text-purple-400 mb-2">CYBER RELICS</h3>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest max-w-[150px] mb-3">Futuristic Jewelry. Engineered to impress.</p>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Explore &rarr;</span>
              </div>
            </div>

            {/* World 3 */}
            <div className="relative h-32 md:h-40 group cursor-pointer overflow-hidden border border-white/10" style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#14120f] to-[#2b251c] z-0" />
              <img src="/assets/WhatsApp Image 2026-05-03 at 5.02.34 PM (1).jpeg" alt="Living Spaces" className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display = 'none'} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-center pl-16 md:pl-24">
                <span className="text-gray-400 text-[10px] tracking-widest mb-1">03</span>
                <h3 className="text-2xl font-bold tracking-tighter text-[#fcd386] mb-2">LIVING SPACES</h3>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest max-w-[150px] mb-3">Elevate your space. Futuristic Decor.</p>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Explore &rarr;</span>
              </div>
            </div>

            {/* World 4 */}
            <div className="relative h-32 md:h-40 group cursor-pointer overflow-hidden border border-white/10" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] to-[#0a182b] z-0" />
              <img src="/assets/WhatsApp Image 2026-05-07 at 11.50.58 PM (1).jpeg" alt="Forge Studio" className="absolute right-0 top-0 w-full h-full object-cover opacity-50 mix-blend-screen group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display = 'none'} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-center pl-16 md:pl-24">
                <span className="text-gray-400 text-[10px] tracking-widest mb-1">04</span>
                <h3 className="text-2xl font-bold tracking-tighter text-blue-400 mb-2">FORGE STUDIO</h3>
                <p className="text-gray-500 text-[9px] uppercase tracking-widest max-w-[150px] mb-3">Your vision. Our creation.</p>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Explore &rarr;</span>
              </div>
            </div>

          </div>

          {/* Column 3: Limited Masterpieces (Spans 3 cols) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col border-l border-white/5 pl-6">
            <div className="text-center mb-6">
              <span className="text-[10px] text-ornix-blue uppercase tracking-[0.2em]">Limited</span>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-200">MASTERPIECES</h2>
              <div className="w-4 h-[1px] bg-ornix-blue mx-auto mt-2" />
            </div>

            {/* Featured Item */}
            <div className="relative aspect-[16/9] bg-[#111] border border-white/10 rounded-sm mb-4 group overflow-hidden cursor-pointer">
               <img src="/assets/WhatsApp Image 2026-05-07 at 11.50.59 PM.jpeg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" alt="Hanuman Emblem" onError={(e) => e.target.style.display = 'none'} />
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <h4 className="text-[10px] font-bold text-yellow-500 uppercase">Jay Hanuman</h4>
                  <p className="text-[8px] text-gray-400 uppercase tracking-widest">Car Emblem</p>
                  <p className="text-[7px] text-gray-500 mb-2">925 SILVER / GOLD PLATED</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">₹ 4,999</span>
                    <span className="text-[8px] text-ornix-blue uppercase">View Details &rarr;</span>
                  </div>
               </div>
            </div>

            {/* Grid Items */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { name: "SHIVA STUD", sub: "CYBER EDITION", price: "2,499", img: "/assets/WhatsApp Image 2026-05-07 at 11.50.58 PM.jpeg" },
                 { name: "LITTLE KRISHNA", sub: "COLLECTIBLE", price: "3,499", img: "/assets/WhatsApp Image 2026-05-07 at 11.50.59 PM.jpeg" },
                 { name: "MOON LAMP", sub: "LUNAR SERIES", price: "5,499", img: "/assets/WhatsApp Image 2026-05-03 at 5.02.34 PM (1).jpeg" },
                 { name: "GARAGE SOUL", sub: "COLLECTIBLE", price: "6,999", img: "/assets/WhatsApp Image 2026-05-07 at 11.50.58 PM (1).jpeg" }
               ].map((item, i) => (
                 <div key={i} className="relative aspect-square bg-[#0a0a0a] border border-white/5 rounded-sm p-3 flex flex-col justify-between group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img src={item.img} className="w-full h-full object-contain opacity-70 group-hover:scale-110 transition-transform mix-blend-screen" alt={item.name} onError={(e) => e.target.style.display = 'none'} />
                    </div>
                    <div className="relative z-10 flex justify-end">
                      <Heart size={10} className="text-gray-600 hover:text-white" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-[8px] font-bold text-white uppercase truncate">{item.name}</h4>
                      <p className="text-[6px] text-gray-500 uppercase tracking-widest truncate">{item.sub}</p>
                      <div className="flex justify-between items-end mt-1">
                        <span className="text-[10px] font-bold text-gray-300">₹ {item.price}</span>
                        <div className="w-4 h-4 border border-white/10 flex items-center justify-center hover:bg-ornix-blue transition-colors">
                           <ShoppingCart size={8} />
                        </div>
                      </div>
                    </div>
                 </div>
               ))}
            </div>

            <button className="w-full mt-4 py-3 border border-ornix-blue/30 text-ornix-blue text-[9px] uppercase tracking-widest hover:bg-ornix-blue hover:text-white transition-colors">
              View All Masterpieces
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#0a0a0a] py-3 px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between text-[8px] uppercase tracking-widest text-gray-400">
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white font-bold">P</span>
             </div>
             <div className="flex flex-col">
               <span className="text-white font-bold">PRECISION CRAFTED</span>
               <span className="text-[6px] text-gray-600">With Intelligent Design</span>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white font-bold">M</span>
             </div>
             <div className="flex flex-col">
               <span className="text-white font-bold">PREMIUM MATERIALS</span>
               <span className="text-[6px] text-gray-600">Built To Last Forever</span>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white font-bold">L</span>
             </div>
             <div className="flex flex-col">
               <span className="text-white font-bold">LIMITED EDITIONS</span>
               <span className="text-[6px] text-gray-600">Exclusivity Guaranteed</span>
             </div>
          </div>
          
          <img src="/assets/Logo.png" alt="X" className="w-8 h-8 object-contain filter drop-shadow-[0_0_5px_rgba(0,102,255,0.5)]" />

          <div className="flex items-center gap-3">
             <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white font-bold">W</span>
             </div>
             <div className="flex flex-col">
               <span className="text-white font-bold">WORLDWIDE SHIPPING</span>
               <span className="text-[6px] text-gray-600">Secure & Insured</span>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white font-bold">S</span>
             </div>
             <div className="flex flex-col">
               <span className="text-white font-bold">SECURE PAYMENTS</span>
               <span className="text-[6px] text-gray-600">100% Safe Checkout</span>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white font-bold">C</span>
             </div>
             <div className="flex flex-col">
               <span className="text-white font-bold">CUSTOMER SUPPORT</span>
               <span className="text-[6px] text-gray-600">Always Here for You</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
