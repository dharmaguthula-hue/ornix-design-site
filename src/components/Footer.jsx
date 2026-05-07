import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-bold tracking-tighter mb-6">ORNIX</h2>
          <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
            Futuristic luxury design brand creating engineered statement objects inspired by future technology and cinematic aesthetics.
          </p>
          <p className="text-ornix-blue text-xs tracking-widest font-bold italic">
            "If it doesn’t stand out, it doesn’t leave ORNIX."
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-6">Explore</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a href="#" className="hover:text-ornix-blue transition-colors">Divine Icons</a></li>
            <li><a href="#" className="hover:text-ornix-blue transition-colors">Cyber Relics</a></li>
            <li><a href="#" className="hover:text-ornix-blue transition-colors">Living Spaces</a></li>
            <li><a href="#" className="hover:text-ornix-blue transition-colors">Forge Studio</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-6">Connect</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a href="#" className="hover:text-ornix-blue transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-ornix-blue transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-ornix-blue transition-colors">Behance</a></li>
            <li><a href="#" className="hover:text-ornix-blue transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[10px] text-gray-600 tracking-widest uppercase">
          © 2026 ORNIX DESIGN LABS. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-8 text-[10px] text-gray-600 tracking-widest uppercase">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
