import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <ContactSection />
    </main>
  );
}
