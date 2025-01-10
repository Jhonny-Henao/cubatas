"use client";

import React from "react";
import Header from "@/app/components/Header";
import MainCarousel from "@/app/components/MainCarousel";
import ProductCarousel from "@/app/components/ProductCarousel";
import AboutUsSection from "@/app/components/AboutUsSection";
import ContactSection from "@/app/components/ContactSection";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from '@/app/components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <MainCarousel />
      <AboutUsSection />
      <ProductCarousel />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default LandingPage;
