import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SafariMara</h3>
            <p className="text-gray-400">
              Your gateway to extraordinary safari experiences in the heart of Kenya.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Safaris</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accommodations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@safarimara.com</li>
              <li>+254 700 000 000</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-white/10 rounded-md flex-1 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button className="bg-white text-black hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SafariMara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}