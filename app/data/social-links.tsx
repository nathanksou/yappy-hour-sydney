import { MdEmail } from "react-icons/md";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export type SocialLink = {
  platform: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:hello@yappyhour.com",
    icon: <MdEmail size={24} className="text-accent" />,
    ariaLabel: "Email us",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/yappyhoursydney",
    icon: <RiInstagramFill size={24} className="text-accent" />,
    ariaLabel: "Follow us on Instagram",
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/yappyhoursydney",
    icon: <FaFacebook size={24} className="text-accent" />,
    ariaLabel: "Follow us on Facebook",
  },
  {
    platform: "X",
    url: "https://twitter.com/yappyhoursydney",
    icon: <FaSquareXTwitter size={24} className="text-accent" />,
    ariaLabel: "Follow us on X",
  },
];
