"use client";
import { type SocialLink } from "@/app/types";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { contactContent } from "../data/contact-content";

const getIcon = (platform: string) => {
  switch (platform) {
    case "Email":
      return <MdEmail size={24} className="text-background" />;
    case "Instagram":
      return <RiInstagramFill size={24} className="text-background" />;
    case "Facebook":
      return <FaFacebook size={24} className="text-background" />;
    case "X":
      return <FaSquareXTwitter size={24} className="text-background" />;
    default:
      return null;
  }
};

const SocialLink = ({ platform, url, ariaLabel }: SocialLink) => (
  <a
    href={url}
    target={platform === "Email" ? undefined : "_blank"}
    rel={platform === "Email" ? undefined : "noopener noreferrer"}
    className="p-3 bg-secondary rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 [&>svg]:text-accent"
    aria-label={ariaLabel}
  >
    {getIcon(platform)}
  </a>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4">
            {contactContent.title}
          </h2>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            {contactContent.description}
          </p>
          <div className="w-16 h-1 mx-auto bg-background rounded mt-6"></div>
        </div>

        <div className="flex flex-row justify-center gap-6">
          {contactContent.socialLinks.map((social) => (
            <SocialLink key={social.platform} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}
