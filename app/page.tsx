import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
