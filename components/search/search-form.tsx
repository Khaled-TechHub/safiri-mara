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
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <InputWithIcon 
          icon={<MapPin className="w-5 h-5" />}
          placeholder="Enter destination" 
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check-in
          </label>
          <Input 
            type="date" 
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <Input 
            type="number" 
            placeholder="Nights"
            min="1"
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Guests and Rooms
        </label>
        <InputWithIcon 
          icon={<Users className="w-5 h-5" />}
          placeholder="2 Adults, 1 Child, 1 Room" 
          className="w-full"
        />
      </div>

      <Button className="w-full bg-black text-white hover:bg-black/90 py-6 text-lg">
        Search Safari
      </Button>
    </div>
  );
}