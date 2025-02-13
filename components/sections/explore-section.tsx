import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ExploreSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's Explore Together</h2>
            <p className="text-gray-600 mb-6">
              Join us on an unforgettable journey through the Masai Mara, where
              every moment brings new discoveries and lasting memories. Our
              expert guides will ensure you experience the best of African
              wildlife and culture.
            </p>
            <Link href="/service" passHref>
              <Button asChild variant="outline" className="text-lg px-8">
                <span>Learn More</span>
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070"
              alt="Safari Experience"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070"
              alt="Wildlife Adventure"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
