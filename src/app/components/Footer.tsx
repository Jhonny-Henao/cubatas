"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/licoreraCubatasRionegro/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/licoreracubatas/", label: "Instagram" },
    { icon: Mail, href: "mailto:info@cubatas.com", label: "Email" },
  ];

  return (
    <footer className="bg-black border-t border-blue-400/20 py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-blue-300 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-blue-200">
          <p>&copy; {currentYear} Cubatas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;