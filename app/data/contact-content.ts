import { SocialLink, type ContactContent } from "@/app/types";

const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:hello@yappyhour.com",
    ariaLabel: "Email us",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/yappyhoursydney",
    ariaLabel: "Follow us on Instagram",
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/yappyhoursydney",
    ariaLabel: "Follow us on Facebook",
  },
  {
    platform: "X",
    url: "https://twitter.com/yappyhoursydney",
    ariaLabel: "Follow us on X",
  },
];

export const contactContent: ContactContent = {
  title: "Connect With Us",
  description: "Join our community and stay updated with our latest events",
  socialLinks,
};
