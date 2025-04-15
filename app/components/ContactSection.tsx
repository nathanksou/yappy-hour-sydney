"use client";
import { type SocialLink, socialLinks } from "@/app/data/social-links";

const SocialLink = ({ platform, url, icon, ariaLabel }: SocialLink) => (
  <a
    href={url}
    target={platform === "Email" ? undefined : "_blank"}
    rel={platform === "Email" ? undefined : "noopener noreferrer"}
    className="p-3 bg-secondary rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 [&>svg]:text-accent"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Join our community and stay updated with our latest events
          </p>
          <div className="w-16 h-1 mx-auto bg-background rounded mt-6"></div>
        </div>

        <div className="flex flex-row justify-center gap-6">
          {socialLinks.map((social) => (
            <SocialLink key={social.platform} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}
