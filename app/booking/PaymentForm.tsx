import { Select } from "@/components/ui/select";
import { InputWithError } from "@/components/ui/input-with-error";
import { Label } from "@/components/ui/label";
import { FiCreditCard, FiUser } from "react-icons/fi";
import { Input } from "@/components/ui/input";

interface PaymentFormProps {
  formData: any;
  setFormData: (data: any) => void;
  errors: Record<string, string>;
}

export const PaymentForm = ({
  formData,
  setFormData,
  errors,
}: PaymentFormProps) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label className="flex items-center gap-2 text-gray-700">
        <FiCreditCard className="w-4 h-4" />
        Payment Method
      </Label>
      <Select
        value={formData.paymentMethod}
        onValueChange={(value) =>
          setFormData({ ...formData, paymentMethod: value })
        }
      >
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bankTransfer">Bank Transfer</option>
      </Select>
    </div>

    {formData.paymentMethod === "creditCard" && (
      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Card Number</Label>
          <InputWithError
            placeholder="4242 4242 4242 4242"
            value={formData.cardNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                cardNumber: e.target.value.replace(/\s/g, ""),
              })
            }
            error={errors.cardNumber}
          />
        </div>
        <div className="space-y-2">
          <Label>Expiry Date</Label>
          <Input
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={(e) =>
              setFormData({ ...formData, expiry: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label>CVC</Label>
          <Input
            placeholder="123"
            value={formData.cvc}
            onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
          />
        </div>
      </div>
    )}

    <div className="space-y-2">
      <Label className="flex items-center gap-2 text-gray-700">
        <FiUser className="w-4 h-4" />
        Emergency Contact
      </Label>
      <Input
        placeholder="Name and phone number"
        value={formData.emergencyContact}
        onChange={(e) =>
          setFormData({ ...formData, emergencyContact: e.target.value })
        }
      />
    </div>

    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={formData.agreeTerms}
        onChange={(e) =>
          setFormData({ ...formData, agreeTerms: e.target.checked })
        }
        className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
      />
      <Label>
        I agree to the{" "}
        <a href="#" className="text-amber-600 hover:underline">
          terms and conditions
        </a>
      </Label>
    </div>
  </div>
);
