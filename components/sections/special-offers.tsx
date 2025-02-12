"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const offers = [
  {
    title: "Big Five Safari",
    description: "Experience the thrill of seeing Africa's most iconic wildlife up close",
    price: 1299,
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2070",
  },
  {
    title: "Luxury Lodge Experience",
    description: "Stay in premium lodges with stunning views of the savanna",
    price: 1599,
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070",
  },
  {
    title: "Cultural Masai Tour",
    description: "Immerse yourself in the rich culture of the Masai people",
    price: 899,
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2070",
  },
];

export function SpecialOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Limited Time Offer</h2>
            <p className="text-gray-600">Book Now and Save Big!</p>
          </div>
          <Link href="/booking">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${offer.price}</span>
                  <Link href="/booking">
                    <Button>Book Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}