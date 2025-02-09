"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (mobileMenuOpen && nav && !nav.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white">SafiriMara</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
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
          className={`md:hidden fixed left-0 right-0 top-16 h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border-t border-white/10 h-full flex flex-col">
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Deals
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Partnership
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Bookings
                </a>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4">
                <select className="w-full bg-transparent text-white/90 border-none mb-3 py-2 px-4 rounded-lg hover:bg-white/10">
                  <option value="en" className="text-black">
                    English
                  </option>
                  <option value="sw" className="text-black">
                    Swahili
                  </option>
                </select>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/90 hover:text-white hover:bg-white/10"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
