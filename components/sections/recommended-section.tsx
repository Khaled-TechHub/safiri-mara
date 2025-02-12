import { Button } from "@/components/ui/button";
import Link from "next/link";

const experiences = [
  {
    title: "Big Five Safari",
    location: "Masai Mara Reserve",
    price: 299,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070",
  },
  {
    title: "Hot Air Balloon",
    location: "Mara Plains",
    price: 450,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070",
  },
  {
    title: "Photography Tour",
    location: "Wildlife Corridor",
    price: 199,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070",
  },
  {
    title: "Sunset Game Drive",
    location: "Mara Triangle",
    price: 150,
    image: "https://images.unsplash.com/photo-1532017201189-87395e311df4?q=80&w=2070",
  },
];

export function RecommendedSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <div className="relative h-80">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm opacity-90">{exp.location}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold">${exp.price}</span>
                    <Link href="/booking">
                      <Button size="sm" variant="secondary">
                        Book Trip
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}