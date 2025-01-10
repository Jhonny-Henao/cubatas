"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/img/Carrusel/logo.png",
    "/img/Carrusel/oldparr.png",
    "/img/Carrusel/redlabel.png",
    "/img/Carrusel/jack.png",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      id="inicio" 
      className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-contain px-8"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-sm z-20 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white" size={24} />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-sm z-20 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
      >
        <ChevronRight className="text-white" size={24} />
      </motion.button>
    </div>
  );
};

export default MainCarousel;