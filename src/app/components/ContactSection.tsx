"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    { icon: Phone, title: "Teléfono", info: ["+57 319 539 4766"] },
    { icon: Clock, title: "Horario", info: ["Lun - Dom", "9:00 AM - 11:00 PM"] },
    {
      icon: MapPin,
      title: "Ubicación",
      info: ["San Antonio de Pereira", "Rionegro, Antioquia"],
    },
  ];

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
          Contáctanos
        </h2>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block mb-6"
              >
                <item.icon className="w-12 h-12 text-blue-300" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">
                {item.title}
              </h3>
              {item.info.map((line, i) => (
                <p key={i} className="text-blue-100">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;