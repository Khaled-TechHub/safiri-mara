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
import {
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Youtube,
} from "lucide-react";

const teamSizes = [
  "1-50 people",
  "51-200 people",
  "201-500 people",
  "501-1000 people",
  "1000+ people",
];

const locations = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Australia",
];

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    color: "#E4405F",
    link: "https://instagram.com/safarimara",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    color: "#1877F2",
    link: "https://facebook.com/safarimara",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6" />,
    color: "#1DA1F2",
    link: "https://twitter.com/safarimara",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "#25D366",
    link: "https://wa.me/254768871004",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
    color: "#FF0000",
    link: "https://youtube.com/safarimara",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teamSize: teamSizes[0],
    location: locations[0],
    message: "",
    agreeToPolicy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        teamSize: teamSizes[0],
        location: locations[0],
        message: "",
        agreeToPolicy: false,
      });
      alert(
        "Message sent successfully! We'll get back to you within 24 hours."
      );
    } catch (error) {
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
        <MainNav />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Have questions about our safari experiences? We'd love to hear
              from you!
            </p>
          </div>
        </div>
      </div>

      <main className="relative -mt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-black/95 text-white p-8 rounded-2xl shadow-lg backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-gray-300">
                    123 Safari Plaza
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+254 768 871 004</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">info@safarimara.com</p>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div
                          className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: social.color }}
                        >
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Group size</Label>
                    <Select
                      value={formData.teamSize}
                      onValueChange={(value) =>
                        setFormData({ ...formData, teamSize: value })
                      }
                      className="border-gray-300 focus:border-black focus:ring-black"
                    >
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Your location</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) =>
                        setFormData({ ...formData, location: value })
                      }
                      className="border-gray-300 focus:border-black focus:ring-black"
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
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your dream safari experience..."
                    className="h-32 border-gray-300 focus:border-black focus:ring-black"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="policy"
                    checked={formData.agreeToPolicy}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        agreeToPolicy: checked as boolean,
                      })
                    }
                    required
                  />
                  <Label htmlFor="policy" className="text-sm">
                    You agree to our friendly{" "}
                    <a
                      href="#"
                      className="text-black underline hover:no-underline"
                    >
                      privacy policy
                    </a>
                    .
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-black/90 py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
