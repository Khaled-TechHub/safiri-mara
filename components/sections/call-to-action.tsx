import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to embark on your next adventure?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Connect with SafiriMara today to start planning your dream safari.
        </p>
        <Link href="/booking">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Start Planning
          </Button>
        </Link>
      </div>
    </section>
  );
}