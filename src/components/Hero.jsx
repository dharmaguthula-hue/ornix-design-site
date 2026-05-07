import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const textRef = useRef(null)
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const frameCount = 40
  const currentFrame = (index) => `/Ornix_Anim/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`

  useEffect(() => {
    const loadedImages = []
    let loadedCount = 0

    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
      img.onload = () => {
        loadedCount++
        if (loadedCount === frameCount) {
          setImages(loadedImages)
          setIsLoading(false)
        }
      }
      loadedImages.push(img)
    }
  }, [])

  useEffect(() => {
    if (images.length === 0) return

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = 1920
    canvas.height = 1080

    const render = (index) => {
      if (images[index]) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.drawImage(images[index], 0, 0, canvas.width, canvas.height)
      }
    }

    render(0)

    const sequence = { frame: 0 }

    gsap.to(sequence, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        pin: true,
      },
      onUpdate: () => render(sequence.frame)
    })

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '50% top',
        scrub: true,
      },
      opacity: 0,
      y: -100,
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [images])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <span className="text-ornix-blue tracking-widest text-xs animate-pulse">PREPARING SEQUENCE...</span>
        </div>
      )}

      <canvas 
        ref={canvasRef}
        className="w-full h-full object-cover"
      />

      <div ref={textRef} className="absolute z-10 text-center pointer-events-none bottom-32 w-full">
        <p className="text-ornix-blue tracking-[0.8em] text-xs md:text-sm font-light uppercase mt-4">
          Original by Design
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-20 bg-gradient-to-b from-ornix-blue to-transparent" />
      </div>
    </section>
  )
}

export default Hero
