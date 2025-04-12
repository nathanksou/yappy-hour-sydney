import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Group of people at a social event",
    caption: "Weekly Social Meetup",
  },
  {
    src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "People playing board games",
    caption: "Game Night",
  },
  {
    src: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor activity group",
    caption: "Weekend Hike",
  },
  {
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Cooking class participants",
    caption: "Cooking Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Group at a restaurant",
    caption: "Food Tour",
  },
  {
    src: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Art class participants",
    caption: "Art Workshop",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Memories from our recent events
          </p>
          <div className="w-16 h-1 mx-auto bg-accent rounded mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex flex-col justify-end p-4">
                <p className="text-background font-medium text-lg">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
