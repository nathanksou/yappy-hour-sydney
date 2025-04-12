import Image from "next/image";
import { galleryImages, type GalleryImage } from "@/app/data/gallery-images";

const GalleryImage = ({ src, alt, caption }: GalleryImage) => (
  <div className="relative group overflow-hidden rounded-lg">
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      quality={90}
      loading="lazy"
      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex flex-col justify-end p-4">
      <p className="text-background font-medium text-lg">{caption}</p>
    </div>
  </div>
);

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Event Gallery
          </h2>
          <div className="w-16 h-1 mx-auto bg-accent rounded mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <GalleryImage key={image.src} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}
