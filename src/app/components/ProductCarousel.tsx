"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { 
      src: "/img/Productos/mediaAguardiente.png", 
      title: "Media Botella Aguardiente",
      description: "Aguardiente Antioqueño tradicional 375ml",
      price: "$25.000"
    },
    { 
      src: "/img/Productos/ron.png", 
      title: "Ron Medellín",
      description: "Ron añejo premium 750ml",
      price: "28.000"
    },
    { 
      src: "/img/Productos/wisky.png", 
      title: "Whisky Old Parr",
      description: "Whisky escocés 12 años 750ml",
      price: "$120.000"
    },
    { 
      src: "/img/Productos/blackWhite.png", 
      title: "Whisky Old Parr",
      description: "Black White x 375 ml",
      price: "$29.900"
    },
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (filteredProducts.length === 0) return;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      (prevIndex + newDirection + filteredProducts.length) % filteredProducts.length
    ));
  };

  useEffect(() => {
    if (filteredProducts.length === 0) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [filteredProducts.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [searchTerm]);

  return (
    <motion.section
      id="productos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="pt-40 pb-8 bg-black relative overflow-hidden" // Aumentado el padding superior
    >
      <div className="container mx-auto px-4">
        {/* Título con posición absoluta */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-0 right-0 text-center"
        >
          <h2 className="text-4xl font-bold text-white relative inline-block">
            Nuestros Productos
          </h2>
        </motion.div>

        {/* Buscador con posición absoluta */}
        <div className="absolute top-24 left-0 right-0 px-4">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-400/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
            <Search className="absolute right-3 top-2.5 text-blue-300/50" size={20} />
          </div>
        </div>

        {/* Contenedor principal del carrusel con mayor padding superior */}
        <div className="pt-16"> {/* Añadido padding superior */}
          {filteredProducts.length === 0 ? (
            <div className="text-center text-blue-300 py-8">
              No se encontraron productos que coincidan con tu búsqueda.
            </div>
          ) : (
            <div className="relative h-[400px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full max-w-xl"
                >
                  <motion.div 
                    className="bg-blue-900/20 rounded-xl backdrop-blur-sm border border-blue-400/20 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <img
                        src={filteredProducts[currentIndex].src}
                        alt={filteredProducts[currentIndex].title}
                        className="w-full h-full object-contain p-6"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-blue-200 mb-1">
                        {filteredProducts[currentIndex].title}
                      </h3>
                      <p className="text-blue-100 text-sm mb-2">
                        {filteredProducts[currentIndex].description}
                      </p>
                      <p className="text-2xl font-bold text-blue-300">
                        {filteredProducts[currentIndex].price}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {filteredProducts.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-4 p-2 rounded-full bg-blue-900/20 backdrop-blur-sm border border-blue-400/20 text-blue-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(-1)}
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  
                  <motion.button
                    className="absolute right-4 p-2 rounded-full bg-blue-900/20 backdrop-blur-sm border border-blue-400/20 text-blue-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(1)}
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </>
              )}
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="flex justify-center space-x-2 mt-4">
              {filteredProducts.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-blue-400" : "bg-blue-400/20"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductCarousel;