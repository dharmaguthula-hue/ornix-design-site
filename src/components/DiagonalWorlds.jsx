import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reusable Image Sequence Component for the 3D effect
const ImageSequence = ({ folderPath, frameCount, framePrefix = 'ezgif-frame-', frameSuffix = '.jpg' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    const currentFrame = (index) => `${folderPath}/${framePrefix}${(index + 1).toString().padStart(3, '0')}${frameSuffix}`;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // Use placeholder if the actual folder doesn't exist yet, but try to load actual if provided.
      // For this implementation, we will assume the user will place the images in the correct folder later.
      // If folder is placeholder, we just use a generic image.
      img.src = folderPath === 'placeholder' 
        ? 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
        : currentFrame(i);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      // Fallback for missing images
      img.onerror = () => {
         loadedCount++;
         if (loadedCount === frameCount) {
           setImages(loadedImages);
           setIsLoaded(true);
         }
      };
      loadedImages.push(img);
    }
  }, [folderPath, frameCount, framePrefix, frameSuffix]);

  useEffect(() => {
    if (!isLoaded || images.length === 0 || folderPath === 'placeholder') return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas resolution. Adjust as needed for the sequences.
    canvas.width = 1000;
    canvas.height = 1000;

    const render = (index) => {
      if (images[index] && images[index].complete && images[index].naturalWidth !== 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Calculate aspect ratio to fit image nicely
        const hRatio = canvas.width / images[index].width;
        const vRatio = canvas.height / images[index].height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShift_x = (canvas.width - images[index].width * ratio) / 2;
        const centerShift_y = (canvas.height - images[index].height * ratio) / 2;  
        
        context.drawImage(images[index], 0,0, images[index].width, images[index].height,
                           centerShift_x,centerShift_y,images[index].width*ratio, images[index].height*ratio);
      }
    };

    render(0);

    const sequence = { frame: 0 };

    const st = gsap.to(sequence, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center', // Start animation when the section hits the center of viewport
        end: 'bottom center', // End when the bottom hits the center
        scrub: 1, // Smooth scrubbing
      },
      onUpdate: () => render(sequence.frame)
    });

    return () => {
      st.kill();
    };
  }, [isLoaded, images, frameCount, folderPath]);

  return (
    <div ref={containerRef} className="relative w-full aspect-square md:aspect-auto md:h-[80vh] flex items-center justify-center overflow-hidden blue-glow-box bg-ornix-graphite">
       {folderPath === 'placeholder' ? (
         <img src={images[0]?.src} alt="Placeholder" className="w-full h-full object-cover opacity-60" />
       ) : (
         <canvas 
          ref={canvasRef}
          className="w-full h-full object-contain"
        />
       )}
       {!isLoaded && folderPath !== 'placeholder' && (
         <div className="absolute inset-0 flex items-center justify-center bg-black/80">
            <span className="text-ornix-blue tracking-widest text-xs animate-pulse">LOADING SEQUENCE...</span>
         </div>
       )}
    </div>
  );
};

const worlds = [
  {
    title: "DIVINE ICONS",
    description: "Spiritual artifacts and cinematic mythological creations. Experience the divine meticulously engineered using advanced additive manufacturing.",
    // Replace 'placeholder' with actual folder path when ready (e.g., '/Govinda_Anim')
    sequenceFolder: "placeholder", 
    frameCount: 40,
    alignRight: false,
    color: "from-blue-900/40",
  },
  {
    title: "CYBER RELICS",
    description: "Futuristic jewelry, cyberpunk accessories, and engineered fashion. The Salaar collection embodies raw power and future-tech aesthetics.",
    sequenceFolder: "placeholder",
    frameCount: 40,
    alignRight: true,
    color: "from-purple-900/40",
  },
  {
    title: "LIVING SPACES",
    description: "Interior statement pieces and luxury ambient objects. Ride. Dream. Explore. Bring the Moto Cafe spirit into your domain.",
    sequenceFolder: "placeholder",
    frameCount: 40,
    alignRight: false,
    color: "from-slate-900/40",
  },
  {
    title: "FORGE STUDIO",
    description: "Custom designed future-crafted creations. If it doesn't stand out, it doesn't leave ORNIX.",
    sequenceFolder: "placeholder",
    frameCount: 40,
    alignRight: true,
    color: "from-cyan-900/40",
  }
];

const DiagonalWorlds = () => {
  return (
    <section id="worlds" className="relative py-32 px-4 md:px-10 bg-black">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-32 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-ornix-blue tracking-[0.4em] text-xs uppercase mb-4 block"
          >
            Explore The Multiverse
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">THE FOUR WORLDS</h2>
          <div className="w-20 h-1 bg-ornix-blue mx-auto md:mx-0" />
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {worlds.map((world, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${world.alignRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Image Sequence / 3D Model Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className={`absolute inset-0 z-0 bg-gradient-to-br ${world.color} opacity-20 blur-3xl`} />
                <ImageSequence 
                  folderPath={world.sequenceFolder} 
                  frameCount={world.frameCount} 
                />
              </div>

              {/* Text Content Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: world.alignRight ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="text-ornix-blue text-xs tracking-widest mb-4 block">
                    0{index + 1} / WORLD
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase">
                    {world.title}
                  </h3>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                    {world.description}
                  </p>
                  
                  <button className="group relative inline-flex items-center gap-4 overflow-hidden border border-white/20 px-8 py-4 transition-all hover:border-ornix-blue">
                    <span className="text-xs uppercase tracking-widest font-bold z-10 transition-colors group-hover:text-white">Explore Collection</span>
                    <div className="w-12 h-[1px] bg-white group-hover:bg-ornix-blue transition-all duration-300 z-10" />
                    <div className="absolute inset-0 bg-ornix-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagonalWorlds;
