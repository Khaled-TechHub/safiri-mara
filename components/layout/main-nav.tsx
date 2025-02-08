"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white">SafariMara</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                Deals
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                Support
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                Partnership
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                Bookings
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-transparent text-white border-none focus:ring-0">
                <option value="en" className="text-black">
                  EN
                </option>
                <option value="sw" className="text-black">
                  SW
                </option>
              </select>
              <Button
                variant="ghost"
                className="text-white hover:text-white/80"
              >
                Login
              </Button>
              <a href="/register">
                <Button className="bg-white text-black hover:bg-white/90">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide Down Animation */}
        <div
          className={`md:hidden fixed left-0 right-0 top-16 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-b-lg p-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-800 hover:text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Deals
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Partnership
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Bookings
              </a>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <select className="w-full bg-transparent text-gray-800 border-none mb-3 py-2 px-4 rounded-lg hover:bg-gray-100">
                <option value="en">English</option>
                <option value="sw">Swahili</option>
              </select>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-800 hover:text-black hover:bg-gray-100"
                >
                  Login
                </Button>
                <a href="/register">
                  <Button className="w-full bg-black text-white hover:bg-black/90">
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
