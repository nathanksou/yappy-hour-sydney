"use client";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    platform: "Instagram",
    url: "https://instagram.com/yappyhoursydney",
    icon: <RiInstagramFill size={24} className="text-accent" />,
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/yappyhoursydney",
    icon: <FaFacebook size={24} className="text-accent" />,
  },
  {
    platform: "X",
    url: "https://twitter.com/yappyhoursydney",
    icon: <FaSquareXTwitter size={24} className="text-accent" />,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to join our community? Reach out to us!
          </p>
          <div className="w-16 h-1 mx-auto bg-accent rounded mt-6"></div>
        </div>

        <div className="flex flex-row justify-center gap-6">
          <a
            href="mailto:hello@yappyhour.com"
            className="p-3 bg-background rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Email us"
          >
            <MdEmail className="w-6 h-6 text-accent" />
          </a>
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label={`Follow us on ${social.platform}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
