import { FiTarget } from "react-icons/fi";
import Image from "next/image";

// About section content
const mission =
  "Yappy Hour is dedicated to bringing together diverse individuals in Sydney through engaging social activities. We believe that meaningful connections happen when people share experiences, whether it's scaling a wall, mastering a game, creating something delicious, or simply enjoying a drink together.";

const foundersImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Yappy Hour
          </h2>
          <div className="w-16 h-1 mx-auto bg-accent rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <div className="flex items-start mb-6">
              <FiTarget size={32} className="text-accent mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={foundersImage}
                alt="Yappy Hour Founders"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
