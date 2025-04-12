import { eventsContent, type Event } from "@/app/data/events-content";

const EventCard = ({ title, description, icon }: Event) => (
  <div className="bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-lg hover:shadow-xl border border-border transform transition-all duration-300 hover:-translate-y-1">
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 bg-accent/10 p-4 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {eventsContent.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {eventsContent.description}
          </p>
          <div className="w-16 h-1 mx-auto bg-accent rounded mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsContent.events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
