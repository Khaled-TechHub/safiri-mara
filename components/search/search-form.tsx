import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function InputWithIcon({ icon, ...props }: { icon?: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <Input
        {...props}
        className={`${props.className} ${icon ? 'pl-10' : ''}`}
      />
    </div>
  );
}

export function SearchForm() {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [duration, setDuration] = useState("1");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., API call
    console.log({
      location,
      checkInDate,
      duration: parseInt(duration, 10),
      guests,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <InputWithIcon 
          id="location"
          icon={<MapPin className="w-5 h-5" />}
          placeholder="Enter destination" 
          className="w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">
            Check-in
          </label>
          <Input 
            id="checkin"
            type="date" 
            className="w-full"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <Input 
            id="duration"
            type="number" 
            placeholder="Nights"
            min="1"
            className="w-full"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
          Guests and Rooms
        </label>
        <InputWithIcon 
          id="guests"
          icon={<Users className="w-5 h-5" />}
          placeholder="2 Adults, 1 Child, 1 Room" 
          className="w-full"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 py-6 text-lg">
        Search Safari
      </Button>
    </form>
  );
}