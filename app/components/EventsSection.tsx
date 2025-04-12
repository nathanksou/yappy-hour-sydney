import { FiCoffee, FiMap, FiMapPin, FiNavigation } from "react-icons/fi";
import { GiBeerStein, GiGameConsole } from "react-icons/gi";

interface Event {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function EventsSection() {
  const events: Event[] = [
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
  ];

  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for a variety of exciting social activities around Sydney
          </p>
          <div className="w-16 h-1 mx-auto bg-accent rounded mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-lg hover:shadow-xl border border-border transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-accent/10 p-4 rounded-full">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
