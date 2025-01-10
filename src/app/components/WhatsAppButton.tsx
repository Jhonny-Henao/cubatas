"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsAppButton = () => {
  const pulseVariants: Variants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const iconVariants: Variants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría hacer un pedido.");
    window.open(`https://wa.me/573195934764?text=${message}`, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
      />
      <motion.button
        onClick={openWhatsApp}
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-green-500/50"
        whileHover={{
          scale: 1.1,
          transition: {
            type: "spring",
            stiffness: 400,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span variants={iconVariants} initial="initial" whileHover="hover">
          <FaWhatsapp className="w-7 h-7 text-white" /> {/* Ícono de WhatsApp */}
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;
