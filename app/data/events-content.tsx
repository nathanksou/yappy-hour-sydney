import { FiCoffee, FiMap, FiMapPin, FiNavigation } from "react-icons/fi";
import { GiBeerStein, GiGameConsole } from "react-icons/gi";

export type Event = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const eventsContent = {
  title: "Our Events",
  description:
    "Join us for a variety of exciting social activities around Sydney",
  events: [
    {
      title: "Climbing Club",
      description:
        "Scale new heights with fellow climbers at Sydney's best indoor climbing venues.",
      icon: <FiNavigation size={36} className="text-accent" />,
    },
    {
      title: "Mahjong Meetups",
      description:
        "Learn and play the ancient game in a relaxed, social environment.",
      icon: <GiGameConsole size={36} className="text-accent" />,
    },
    {
      title: "Bake Club",
      description:
        "Share recipes, techniques, and delicious treats with fellow baking enthusiasts.",
      icon: <FiCoffee size={36} className="text-accent" />,
    },
    {
      title: "Restaurant Hopping",
      description:
        "Explore Sydney's diverse culinary scene with new friends at happy hour prices.",
      icon: <GiBeerStein size={36} className="text-accent" />,
    },
    {
      title: "Run Club",
      description:
        "Join our regular running group for scenic routes around Sydney's iconic spots.",
      icon: <FiMapPin size={36} className="text-accent" />,
    },
    {
      title: "Sydney Hikes",
      description:
        "Explore beautiful trails and scenic lookouts around Sydney's stunning natural landscapes.",
      icon: <FiMap size={36} className="text-accent" />,
    },
  ],
};
