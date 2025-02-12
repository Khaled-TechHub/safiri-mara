"use client";

import { useState } from "react";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

const safariPackages = [
  {
    id: "big-five",
    name: "Big Five Safari",
    price: 299,
    duration: "3 days"
  },
  {
    id: "migration",
    name: "Great Migration Safari",
    price: 499,
    duration: "5 days"
  },
  {
    id: "photo",
    name: "Photography Safari",
    price: 399,
    duration: "4 days"
  },
  {
    id: "luxury",
    name: "Luxury Lodge Safari",
    price: 799,
    duration: "7 days"
  }
];

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    package: safariPackages[0].id,
    adults: "2",
    children: "0",
    accommodation: "standard",
    pickupLocation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert("Booking submitted successfully! We'll contact you shortly to confirm your reservation.");
      
      // Reset form
      setFormData({
        package: safariPackages[0].id,
        adults: "2",
        children: "0",
        accommodation: "standard",
        pickupLocation: ""
      });
      setSelectedDate(new Date());
    } catch (error) {
      alert("Error submitting booking. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedPackage = safariPackages.find(pkg => pkg.id === formData.package);
  const totalPrice = selectedPackage ? 
    (parseInt(formData.adults) * selectedPackage.price + parseInt(formData.children) * (selectedPackage.price * 0.5)) : 
    0;

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <MainNav />
      
      <main className="relative pt-32 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Book Your Safari</h1>
                <p className="text-gray-600 mb-8">
                  Fill in the details below to book your dream safari experience
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="package">Select Package</Label>
                    <Select
                      value={formData.package}
                      onValueChange={(value) => setFormData({ ...formData, package: value })}
                    >
                      {safariPackages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} - {pkg.duration} (${pkg.price}/person)
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adults">Adults</Label>
                      <Input
                        id="adults"
                        type="number"
                        min="1"
                        value={formData.adults}
                        onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">Children (under 12)</Label>
                      <Input
                        id="children"
                        type="number"
                        min="0"
                        value={formData.children}
                        onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <div className="border rounded-lg p-4 bg-white">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                        disabled={(date) => date < new Date()}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accommodation">Accommodation Type</Label>
                    <Select
                      value={formData.accommodation}
                      onValueChange={(value) => setFormData({ ...formData, accommodation: value })}
                    >
                      <option value="standard">Standard Lodge</option>
                      <option value="luxury">Luxury Lodge</option>
                      <option value="tented">Tented Camp</option>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation">Pickup Location</Label>
                    <Input
                      id="pickupLocation"
                      placeholder="Hotel name or address"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-black/90 py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Confirm Booking"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-lg sticky top-32">
                <h2 className="text-xl font-semibold mb-6">Booking Summary</h2>
                
                {selectedPackage && (
                  <div className="space-y-4">
                    <div className="pb-4 border-b">
                      <h3 className="font-medium">{selectedPackage.name}</h3>
                      <p className="text-gray-600">{selectedPackage.duration}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Adults</span>
                        <span>{formData.adults} × ${selectedPackage.price}</span>
                      </div>
                      {parseInt(formData.children) > 0 && (
                        <div className="flex justify-between">
                          <span>Children</span>
                          <span>{formData.children} × ${selectedPackage.price * 0.5}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        * Price includes accommodation, meals, and guided tours
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}