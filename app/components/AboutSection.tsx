import { FiTarget } from "react-icons/fi";
import Image from "next/image";
import { aboutContent } from "@/app/data/about-content";

const MissionSection = () => (
  <div className="flex items-start mb-6">
    <FiTarget size={32} className="text-accent mr-4 mt-1" />
    <div>
      <h3 className="text-2xl font-semibold mb-4">
        {aboutContent.mission.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {aboutContent.mission.description}
      </p>
    </div>
  </div>
);

const FoundersImage = () => (
  <div className="rounded-lg overflow-hidden shadow-lg">
    <Image
      src={aboutContent.foundersImage.src}
      alt={aboutContent.foundersImage.alt}
      className="w-full h-full object-cover"
      width={500}
      height={500}
      priority
    />
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {aboutContent.title}
          </h2>
          <div className="w-16 h-1 mx-auto bg-accent rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <MissionSection />
          </div>
          <div className="md:w-1/2">
            <FoundersImage />
          </div>
        </div>
      </div>
    </section>
  );
}
