// components/booking/TripDetailsForm.tsx
import { Calendar } from "@/components/ui/calendar";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiGlobe, FiCalendar } from "react-icons/fi";
import { safariPackages } from "@/app/booking/constants/booking";

export const TripDetailsForm = ({
  formData,
  setFormData,
  dateRange,
  setDateRange,
}: {
  formData: any;
  setFormData: any;
  dateRange: any;
  setDateRange: any;
}) => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-gray-700">
          <FiGlobe className="w-4 h-4" />
          Safari Package
        </Label>
        <Select
          value={formData.package}
          onValueChange={(value) => setFormData({ ...formData, package: value })}
        >
          {safariPackages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name} - {pkg.duration} (${pkg.price}/person)
            </option>
          ))}
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-gray-700">
          <FiCalendar className="w-4 h-4" />
          Travel Dates
        </Label>
        <div className="border rounded-lg p-4 bg-white">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            className="rounded-md"
            disabled={(date) => date < new Date()}
          />
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label>Adults</Label>
        <Input
          type="number"
          min="1"
          value={formData.adults}
          onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Children (2-12)</Label>
        <Input
          type="number"
          min="0"
          value={formData.children}
          onChange={(e) => setFormData({ ...formData, children: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Accommodation</Label>
        <Select
          value={formData.accommodation}
          onValueChange={(value) =>
            setFormData({ ...formData, accommodation: value })
          }
        >
          <option value="standard">Standard Lodge</option>
          <option value="luxury">Luxury Lodge</option>
          <option value="tented">Tented Camp</option>
        </Select>
      </div>
    </div>
  </div>
);