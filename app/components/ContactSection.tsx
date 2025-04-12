"use client";
import { MdEmail } from "react-icons/md";

interface ContactSectionProps {
  email: string;
  socials: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

export function ContactSection({ email, socials }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to join our community? Reach out to us!
          </p>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded mt-6"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a
              href={`mailto:${email}`}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Email us"
            >
              <MdEmail className="w-6 h-6 text-orange-500" />
            </a>
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label={`Follow us on ${social.platform}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
