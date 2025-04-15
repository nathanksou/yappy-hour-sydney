import { FiCoffee, FiMap, FiMapPin, FiNavigation } from "react-icons/fi";
import { GiBeerStein, GiGameConsole } from "react-icons/gi";
import { Content, Icon, Image } from "../types";

export type Activity = Content & Icon & { image: Image };

export type ActivitiesContent = Content & {
  activities: Activity[];
};

export const activitiesContent: ActivitiesContent = {
  title: "Our Activities",
  description:
    "Join us for a variety of exciting social activities around Sydney",
  activities: [
    {
      title: "Climbing Club",
      description:
        "Scale new heights with fellow climbers at Sydney's best indoor climbing venues.",
      image: {
        src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Group of people at a climbing gym",
      },
      icon: <FiNavigation size={36} className="text-accent" />,
    },
    {
      title: "Mahjong Meetups",
      description:
        "Learn and play the ancient game in a relaxed, social environment.",
      image: {
        src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "People playing board games",
      },
      icon: <GiGameConsole size={36} className="text-accent" />,
    },
    {
      title: "Bake Club",
      description:
        "Share recipes, techniques, and delicious treats with fellow baking enthusiasts.",
      image: {
        src: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "People baking together",
      },
      icon: <FiCoffee size={36} className="text-accent" />,
    },
    {
      title: "Restaurant Hopping",
      description:
        "Explore Sydney's diverse culinary scene with new friends at happy hour prices.",
      image: {
        src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Group at a restaurant",
      },
      icon: <GiBeerStein size={36} className="text-accent" />,
    },
    {
      title: "Run Club",
      description:
        "Join our regular running group for scenic routes around Sydney's iconic spots.",
      image: {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Group of runners",
      },
      icon: <FiMapPin size={36} className="text-accent" />,
    },
    {
      title: "Sydney Hikes",
      description:
        "Explore beautiful trails and scenic lookouts around Sydney's stunning natural landscapes.",
      image: {
        src: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Group on a hike",
      },
      icon: <FiMap size={36} className="text-accent" />,
    },
  ],
};
