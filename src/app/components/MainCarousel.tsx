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
    <div id="inicio" className="relative h-screen pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black"
        >
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="max-w-full max-h-full w-auto h-auto object-contain px-4"
          />
        </motion.div>
      </AnimatePresence>
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  );
};

export default MainCarousel;
