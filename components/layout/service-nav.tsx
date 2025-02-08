import { Plane, Train, Bus, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceNav() {
  return (
    <div className="grid grid-cols-2 md:flex md:space-x-6 gap-4 md:gap-0 mb-8">
      <Button variant="ghost" className="flex items-center space-x-2">
        <Plane className="w-5 h-5" />
        <span className="hidden sm:inline">Flights</span>
      </Button>
      <Button variant="ghost" className="flex items-center space-x-2">
        <Train className="w-5 h-5" />
        <span className="hidden sm:inline">Trains</span>
      </Button>
      <Button variant="ghost" className="flex items-center space-x-2">
        <Bus className="w-5 h-5" />
        <span className="hidden sm:inline">Bus & Travel</span>
      </Button>
      <Button variant="ghost" className="flex items-center space-x-2">
        <Car className="w-5 h-5" />
        <span className="hidden sm:inline">Car Rental</span>
      </Button>
    </div>
  );
}