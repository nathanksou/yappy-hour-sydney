import { Target } from "lucide-react";
import Image from "next/image";

interface AboutSectionProps {
  mission: string;
  foundersImage: string;
}

export function AboutSection({ mission, foundersImage }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Yappy Hour
          </h2>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <div className="flex items-start mb-6">
              <Target size={32} className="text-orange-500 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">{mission}</p>
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
