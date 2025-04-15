import Image from "next/image";
import {
  type Activity,
  activitiesContent,
} from "@/app/data/activities-content";

const ActivityCard = ({ title, description, image, icon }: Activity) => (
  <div className="bg-gradient-to-br from-background to-muted rounded-2xl shadow-lg hover:shadow-xl border border-border transform transition-all duration-300 hover:-translate-y-1 overflow-hidden">
    <div className="relative h-48">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-accent/10 p-3 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {activitiesContent.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {activitiesContent.description}
          </p>
          <div className="w-16 h-1 mx-auto bg-accent rounded mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesContent.activities.map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
