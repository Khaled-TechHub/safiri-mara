import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              SafiriMara is your gateway to extraordinary safari experiences in the heart 
              of Kenya's Masai Mara. We specialize in creating personalized wildlife 
              adventures that combine luxury accommodation with authentic cultural experiences.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">50k+</h3>
                <p className="text-gray-600">Happy Travelers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1532017201189-87395e311df4?q=80&w=2070"
              alt="Safari Experience"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}