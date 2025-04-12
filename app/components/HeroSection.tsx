"use client";

import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";

const ticketUrl = "";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 drop-shadow-lg">
          Yappy Hour Sydney
        </h1>
        <p className="text-xl md:text-2xl text-background mb-8 max-w-2xl mx-auto drop-shadow-md">
          Join our community of social explorers and make new friends through
          fun events and activities
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-background rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open(ticketUrl, "_blank")}
        >
          Get Your Ticket
          <FiArrowRight />
        </Button>
      </div>
    </section>
  );
}
