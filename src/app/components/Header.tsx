"use client";

import React, { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth"
        });
      }
    }, 300);
  };

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Añadir/remover clase al body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.paddingTop = '16rem'; // Ajusta este valor según la altura de tu menú
    } else {
      document.body.style.paddingTop = '5rem'; // Altura normal del header
    }

    return () => {
      document.body.style.paddingTop = '5rem';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "productos", label: "Productos" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black border-b border-blue-400/20 fixed w-full top-0 z-50"
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Cubatas
          </motion.div>
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </motion.button>
          </div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-blue-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4 bg-black" // Añadido bg-black
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-blue-200 hover:text-white w-full text-left px-2 py-1"
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;