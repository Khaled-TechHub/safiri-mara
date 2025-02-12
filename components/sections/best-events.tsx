import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BestEvents() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Best Events For 2024</h2>
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2070"
            alt="Great Migration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Great Migration Safari</h3>
            <p className="text-lg mb-4 max-w-xl">
              Witness one of nature's most spectacular events as millions of wildebeest 
              cross the Mara River in their annual migration.
            </p>
            <Link href="/booking">
              <Button className="bg-white text-black hover:bg-white/90">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}