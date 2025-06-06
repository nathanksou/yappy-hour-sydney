"use client";

import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import { heroContent } from "@/app/data/hero-content";
import Image from "next/image";

const HeroContent = () => (
  <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
    <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 drop-shadow-lg">
      {heroContent.title}
    </h1>
    <p className="text-xl md:text-2xl text-background mb-8 max-w-2xl mx-auto drop-shadow-md">
      {heroContent.description}
    </p>
    <Button
      size="lg"
      className="bg-accent hover:bg-accent/90 text-background rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105"
      onClick={() => window.open(heroContent.cta.url, "_blank")}
    >
      {heroContent.cta.text}
      <FiArrowRight className="ml-2" />
    </Button>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0">
        <Image
          src={heroContent.backgroundImage.src}
          alt={heroContent.backgroundImage.alt}
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.7)" }}
          aria-hidden="true"
        />
      </div>
      <div className="relative flex-1 flex items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
}
