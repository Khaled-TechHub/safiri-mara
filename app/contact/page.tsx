"use client";

import { useState } from "react";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar } from "@/components/ui/avatar";

const teamSizes = [
  "1-50 people",
  "51-200 people",
  "201-500 people",
  "501-1000 people",
  "1000+ people"
];

const locations = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Australia"
];

const teamMembers = [
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
  { image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100" },
  { image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" },
  { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100" },
  { image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100" },
  { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
  { image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teamSize: "",
    location: "",
    message: "",
    agreeToPolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Team Members */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${50 + Math.cos(index * (2 * Math.PI / 7)) * 150}px`,
                        top: `${250 + Math.sin(index * (2 * Math.PI / 7)) * 150}px`
                      }}
                    >
                      <Avatar className="w-12 h-12 border-2 border-white">
                        <img src={member.image} alt="Team member" className="object-cover" />
                      </Avatar>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h1 className="text-3xl font-bold mb-2">Contact us</h1>
              <p className="text-gray-600 mb-8">
                Reach out and we&apos;ll get in touch within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team size</Label>
                    <Select
                      value={formData.teamSize}
                      onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                    >
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Leave us a message..."
                    className="h-32"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="policy"
                    checked={formData.agreeToPolicy}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, agreeToPolicy: checked as boolean })
                    }
                  />
                  <Label htmlFor="policy" className="text-sm">
                    You agree to our friendly{" "}
                    <a href="#" className="text-black underline hover:no-underline">
                      privacy policy
                    </a>
                    .
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                  Send message
                </Button>
              </form>

              {/* Partner Logos */}
              <div className="mt-12">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center opacity-50">
                  <img src="/logos/contentful.svg" alt="Contentful" className="h-6" />
                  <img src="/logos/stripe.svg" alt="Stripe" className="h-6" />
                  <img src="/logos/toggl.svg" alt="Toggl" className="h-6" />
                  <img src="/logos/evernote.svg" alt="Evernote" className="h-6" />
                  <img src="/logos/zapier.svg" alt="Zapier" className="h-6" />
                  <img src="/logos/descript.svg" alt="Descript" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}