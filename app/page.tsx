"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/layout/main-nav";
import { ServiceNav } from "@/components/layout/service-nav";
import { SearchForm } from "@/components/search/search-form";
import { SpecialOffers } from "@/components/sections/special-offers";
import { ExploreSection } from "@/components/sections/explore-section";
import { AboutSection } from "@/components/sections/about-section";
import { BestEvents } from "@/components/sections/best-events";
import { RecommendedSection } from "@/components/sections/recommended-section";
import { CallToAction } from "@/components/sections/call-to-action";
import { Footer } from "@/components/layout/footer";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070",
    title: "Where You Get Trapped in the Beauty of Wildlife",
    subtitle: "Experience the magic of African safaris with SafariMara"
  },
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070",
    title: "Discover the Heart of African Wildlife",
    subtitle: "Unforgettable adventures await in the Masai Mara"
  },
  {
    image: "https://images.unsplash.com/photo-1532017201189-87395e311df4?q=80&w=2070",
    title: "Create Memories That Last a Lifetime",
    subtitle: "Your journey into the wild starts here"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <MainNav />

      {/* Hero Section with Sliding Background */}
      <section className="relative min-h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        ))}
        
        <div className="relative max-w-7xl mx-auto px-4 pt-32">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 pt-8 lg:pt-16">
              <div className="transition-all duration-500">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-white/90 text-lg mb-8 max-w-xl">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90 px-8 py-6 text-lg">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Search Card */}
            <div className="w-full lg:w-1/2 lg:pl-8">
              <Card className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Find Your Safari</h2>
                <ServiceNav />
                <SearchForm />
              </Card>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <SpecialOffers />
      <ExploreSection />
      <AboutSection />
      <BestEvents />
      <RecommendedSection />
      <CallToAction />
      <Footer />
    </main>
  );
}