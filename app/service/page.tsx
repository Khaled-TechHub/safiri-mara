"use client";

import { useState } from "react";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Hotel, Car, Camera, Users, Tent, Coffee, MapPin, Sunrise } from "lucide-react";

const services = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Flight Bookings",
    description: "Direct flights to Masai Mara from major cities",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
    features: [
      "International & domestic flights",
      "Private charter services",
      "Airport transfers",
      "Flexible booking options"
    ]
  },
  {
    icon: <Hotel className="w-8 h-8" />,
    title: "Luxury Accommodations",
    description: "World-class lodges and tented camps",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070",
    features: [
      "5-star luxury lodges",
      "Authentic tented camps",
      "Private villa rentals",
      "All-inclusive packages"
    ]
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Safari Adventures",
    description: "Guided tours and wildlife experiences",
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070",
    features: [
      "Big Five safaris",
      "Photography tours",
      "Night game drives",
      "Walking safaris"
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Cultural Experiences",
    description: "Authentic Masai cultural immersion",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2070",
    features: [
      "Village visits",
      "Traditional ceremonies",
      "Cultural workshops",
      "Local craft markets"
    ]
  },
  {
    icon: <Sunrise className="w-8 h-8" />,
    title: "Special Activities",
    description: "Unique experiences in the Mara",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070",
    features: [
      "Hot air balloon safaris",
      "Bush breakfasts",
      "Sundowner experiences",
      "Star gazing"
    ]
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Transport Services",
    description: "Comfortable and reliable transportation",
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=2074",
    features: [
      "4x4 safari vehicles",
      "Luxury transfers",
      "Car rentals",
      "Custom tours"
    ]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
        <MainNav />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services & Experiences
            </h1>
            <p className="text-xl text-white/90">
              Discover the magic of Masai Mara through our comprehensive range of services
              designed to create unforgettable memories
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  selectedService === index ? 'ring-2 ring-black' : ''
                }`}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-black text-white rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className={`space-y-3 transition-all duration-300 ${
                    selectedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-black/90">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to customize your perfect Masai Mara experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-black hover:bg-white/90">
              Contact Us
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}