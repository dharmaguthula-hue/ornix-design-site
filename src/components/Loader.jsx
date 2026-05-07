import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-[0.5em] text-white opacity-20">
          ORNIX
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute inset-0 overflow-hidden"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-[0.5em] text-ornix-blue blue-glow whitespace-nowrap">
            ORNIX
          </h1>
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] font-light text-gray-500 uppercase">
          Initializing Engine
        </span>
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-ornix-blue to-transparent"
          />
        </div>
        <span className="text-[10px] font-bold text-ornix-blue mt-2">{progress}%</span>
      </div>
    </motion.div>
  )
}

export default Loader
