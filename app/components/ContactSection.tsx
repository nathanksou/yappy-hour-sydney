"use client";

import { Mail } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface ContactSectionProps {
  email: string;
  socials: SocialLink[];
}

export function ContactSection({ email, socials }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow us on social media to stay updated on upcoming events
          </p>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded mt-6"></div>
        </div>

        <div className="flex justify-center items-center space-x-6 mb-8">
          {socials.map((social, index) => (
            <a
              key={index}
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

        <div className="text-center">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <Mail className="mr-2" size={20} />
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
