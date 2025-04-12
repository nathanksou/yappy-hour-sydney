import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { EventsSection } from "./components/EventsSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  // Ticket URL for the Humanitix platform
  const ticketUrl = "";

  // About section content
  const mission =
    "Yappy Hour is dedicated to bringing together diverse individuals in Sydney through engaging social activities. We believe that meaningful connections happen when people share experiences, whether it's scaling a wall, mastering a game, creating something delicious, or simply enjoying a drink together.";

  const foundersImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";

  // Social media links
  const socials = [
    {
      platform: "Instagram",
      url: "https://instagram.com/yappyhour",
      icon: <RiInstagramFill size={24} className="text-orange-500" />,
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/yappyhour",
      icon: <FaFacebook size={24} className="text-orange-500" />,
    },
    {
      platform: "X",
      url: "https://twitter.com/yappyhour",
      icon: <FaSquareXTwitter size={24} className="text-orange-500" />,
    },
  ];

  return (
    <main>
      <HeroSection ticketUrl={ticketUrl} />
      <AboutSection mission={mission} foundersImage={foundersImage} />
      <EventsSection />
      <GallerySection />
      <ContactSection email="yappyhoursydney@gmail.com" socials={socials} />
    </main>
  );
}
