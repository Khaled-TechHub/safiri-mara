import { Input } from "@/components/ui/input";
import { InputWithError } from "@/components/ui/input-with-error";
import { Label } from "@/components/ui/label";
import { FiUser, FiMail, FiCreditCard, FiMapPin, FiInfo } from "react-icons/fi";

export const PersonalInfoForm = ({
  formData,
  setFormData,
  errors,
}: {
  formData: any;
  setFormData: any;
  errors: any;
}) => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-gray-700">
          <FiUser className="w-4 h-4" />
          Full Name
        </Label>
        <InputWithError
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          error={errors.fullName}
        />
      </div>
      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-gray-700">
          <FiMail className="w-4 h-4" />
          Email Address
        </Label>
        <InputWithError
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-gray-700">
          <FiCreditCard className="w-4 h-4" />
          Phone Number
        </Label>
        <InputWithError
          type="tel"
          placeholder="+1 234 567 890"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          error={errors.phone}
        />
      </div>
      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-gray-700">
          <FiMapPin className="w-4 h-4" />
          Pickup Location
        </Label>
        <Input
          value={formData.pickupLocation}
          onChange={(e) =>
            setFormData({
              ...formData,
              pickupLocation: e.target.value,
            })
          }
          placeholder="Hotel or airport address"
        />
      </div>
    </div>

    <div className="space-y-2">
      <Label className="flex items-center gap-2 text-gray-700">
        <FiInfo className="w-4 h-4" />
        Special Requests
      </Label>
      <textarea
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        rows={4}
        value={formData.specialRequests}
        onChange={(e) =>
          setFormData({
            ...formData,
            specialRequests: e.target.value,
          })
        }
        placeholder="Dietary restrictions, accessibility needs, etc."
      />
    </div>
  </div>
);
