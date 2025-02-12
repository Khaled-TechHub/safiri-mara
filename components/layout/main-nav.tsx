"use client";

import { Menu, X, Camera, Compass, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
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

  const navItems = [
    { href: "/", label: "Home", icon: <Compass className="w-4 h-4" /> },
    { href: "/gallery", label: "Gallery", icon: <Camera className="w-4 h-4" /> },
    { href: "/booking", label: "Book Now", icon: <BookOpen className="w-4 h-4" /> },
    { href: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            SafiriMara
          </Link>

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
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                  pathname === item.href
                    ? "text-white bg-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            
            <select className="ml-4 bg-transparent text-white border-none focus:ring-0">
              <option value="en" className="text-black">EN</option>
              <option value="sw" className="text-black">SW</option>
            </select>
            
            <Link href="/register">
              <Button className="ml-4 bg-white text-black hover:bg-white/90">
                Register
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 right-0 top-16 h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-lg border-t border-white/10 h-full flex flex-col">
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      pathname === item.href
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/10 mt-4">
                <select className="w-full bg-transparent text-white/90 border-none mb-3 py-2 px-4 rounded-lg hover:bg-white/10">
                  <option value="en" className="text-black">English</option>
                  <option value="sw" className="text-black">Swahili</option>
                </select>
                
                <Link href="/register" className="block">
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}