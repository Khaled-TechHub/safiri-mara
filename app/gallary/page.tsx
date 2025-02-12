"use client";

import { useState, useEffect } from "react";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, X, Camera, Play } from "lucide-react";

const galleryItems = [
  {
    type: "image",
    category: "wildlife",
    title: "Lions of Mara",
    description: "Majestic lions in their natural habitat",
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2070",
  },
  {
    type: "image",
    category: "landscape",
    title: "Sunrise over Savanna",
    description: "Beautiful morning in the Masai Mara",
    url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070",
  },
  {
    type: "image",
    category: "wildlife",
    title: "Elephant Herd",
    description: "Family of elephants crossing the plains",
    url: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2070",
  },
  {
    type: "image",
    category: "culture",
    title: "Masai Warriors",
    description: "Traditional Masai dance ceremony",
    url: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2070",
  },
  {
    type: "image",
    category: "wildlife",
    title: "Cheetah Hunt",
    description: "Cheetah scanning the horizon",
    url: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070",
  },
  {
    type: "image",
    category: "landscape",
    title: "Storm Approaching",
    description: "Dramatic clouds over the Mara River",
    url: "https://images.unsplash.com/photo-1532017201189-87395e311df4?q=80&w=2070",
  },
  {
    type: "image",
    category: "wildlife",
    title: "Giraffe Family",
    description: "Giraffes against the setting sun",
    url: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070",
  },
  {
    type: "image",
    category: "landscape",
    title: "Acacia Sunset",
    description: "Iconic African sunset with acacia trees",
    url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070",
  },
  {
    type: "image",
    category: "wildlife",
    title: "Zebra Crossing",
    description: "Zebras during the great migration",
    url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2070",
  },
  {
    type: "image",
    category: "culture",
    title: "Village Life",
    description: "Daily life in a Masai village",
    url: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2070",
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const categories = ["all", "wildlife", "landscape", "culture"];

  const filteredItems = galleryItems.filter(
    item => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      {/* Loading Screen */}
      <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <Camera className="w-16 h-16 text-white animate-pulse" />
      </div>

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
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <Camera className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Masai Mara Gallery</h1>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {/* Category Filter */}
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                {/* View Mode Toggle */}
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    onClick={() => setViewMode("grid")}
                    size="icon"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    onClick={() => setViewMode("list")}
                    size="icon"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Gallery Grid with Animation */}
            <div className={`
              ${viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
              }
            `}>
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`
                    ${viewMode === "grid"
                      ? "group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      : "flex gap-6 items-center cursor-pointer hover:bg-black/5 rounded-lg transition-colors p-2"
                    }
                  `}
                  onClick={() => setSelectedImage(item.url)}
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className={`
                    relative overflow-hidden rounded-lg
                    ${viewMode === "grid" ? "h-64" : "h-48 w-64"}
                  `}>
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className={viewMode === "list" ? "flex-1" : "mt-4"}>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <span className="inline-block mt-2 text-sm text-gray-500 capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full backdrop-blur-sm transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}