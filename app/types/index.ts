// Base types
type Title = {
  title: string;
};

type Content = Title & { description: string };

type URL = {
  url: string;
};

type CTA = URL & { text: string };

type Image = {
  src: string;
  alt: string;
};

type Icon = {
  icon: string;
};

// Content-specific types
export type AboutContent = Title & {
  mission: Content;
  foundersImage: Image;
};

export type Activity = Content & Icon & { image: Image };

export type ActivitiesContent = Content & {
  activities: Activity[];
};

export type HeroContent = Content & {
  backgroundImage: URL;
  cta: CTA;
};

export type SocialLink = URL & { platform: string; ariaLabel: string };

export type ContactContent = Content & {
  socialLinks: SocialLink[];
};
