// LandingPage.tsx
"use client";

import React from "react";
import Header from "@/app/components/Header";
import MainCarousel from "@/app/components/MainCarousel";
import ProductCarousel from "@/app/components/ProductCarousel";
import AboutUsSection from "@/app/components/AboutUsSection";
import ContactSection from "@/app/components/ContactSection";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from '@/app/components/Footer';

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20"> {/* Padding inicial para el header */}
        <section id="inicio">
          <MainCarousel />
        </section>

        <section id="nosotros">
          <AboutUsSection />
        </section>

        <section id="productos">
          <ProductCarousel />
        </section>

        <section id="contacto">
          <ContactSection />
        </section>
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default LandingPage;