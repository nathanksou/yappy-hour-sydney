import {
  MountainSnow,
  Utensils,
  Beer,
  MapPin,
  GamepadIcon,
  Mountain,
} from "lucide-react";

interface Event {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function EventsSection() {
  const events: Event[] = [
    {
      title: "Bouldering Adventures",
      description:
        "Scale new heights with fellow climbers at Sydney's best indoor climbing venues.",
      icon: <MountainSnow size={36} className="text-orange-500" />,
    },
    {
      title: "Mahjong Meetups",
      description:
        "Learn and play the ancient game in a relaxed, social environment.",
      icon: <GamepadIcon size={36} className="text-orange-500" />,
    },
    {
      title: "Bake Club",
      description:
        "Share recipes, techniques, and delicious treats with fellow baking enthusiasts.",
      icon: <Utensils size={36} className="text-orange-500" />,
    },
    {
      title: "Restaurant Hopping",
      description:
        "Explore Sydney's diverse culinary scene with new friends at happy hour prices.",
      icon: <Beer size={36} className="text-orange-500" />,
    },
    {
      title: "Run Club",
      description:
        "Join our regular running group for scenic routes around Sydney's iconic spots.",
      icon: <MapPin size={36} className="text-orange-500" />,
    },
    {
      title: "Sydney Hikes",
      description:
        "Explore beautiful trails and scenic lookouts around Sydney's stunning natural landscapes.",
      icon: <Mountain size={36} className="text-orange-500" />,
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for a variety of exciting social activities around Sydney
          </p>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-orange-100 p-4 rounded-full">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
