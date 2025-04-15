// Base types
export type Title = {
  title: string;
};

export type Content = Title & {
  description: string;
};

export type URL = {
  url: string;
};

export type Image = {
  src: string;
  alt: string;
};

export type Icon = {
  icon: React.ReactNode;
};

// Extended types
export type CTA = URL & {
  text: string;
};
