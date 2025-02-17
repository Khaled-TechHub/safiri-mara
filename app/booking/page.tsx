"use client";

import { useState } from "react";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  FiUser,
  FiMail,
  FiCreditCard,
  FiInfo,
  FiCalendar,
  FiMapPin,
  FiGlobe,
} from "react-icons/fi";
import { DateRange } from "react-day-picker";

const safariPackages = [
  {
    id: "big-five",
    name: "Big Five Safari",
    price: 299,
    duration: "3 days",
  },
  {
    id: "migration",
    name: "Great Migration Safari",
    price: 499,
    duration: "5 days",
  },
  {
    id: "photo",
    name: "Photography Safari",
    price: 399,
    duration: "4 days",
  },
  {
    id: "luxury",
    name: "Luxury Lodge Safari",
    price: 799,
    duration: "7 days",
  },
];

export default function BookingPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  });

  const [formData, setFormData] = useState({
    package: safariPackages[0].id,
    adults: "2",
    children: "0",
    accommodation: "standard",
    pickupLocation: "",
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    expiry: "",
    cvc: "",
    emergencyContact: "",
    agreeTerms: false,
  });

  const [activeSection, setActiveSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedPackage = safariPackages.find(
    (pkg) => pkg.id === formData.package
  );
  const totalPrice = selectedPackage
    ? parseInt(formData.adults) * selectedPackage.price +
      parseInt(formData.children) * (selectedPackage.price * 0.5)
    : 0;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Invalid email address";
    if (!formData.phone.match(/^\+\d{10,15}$/))
      newErrors.phone = "Invalid phone number";
    if (
      formData.paymentMethod === "creditCard" &&
      !formData.cardNumber.match(/^\d{16}$/)
    )
      newErrors.cardNumber = "Invalid card number";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Booking submitted successfully! We'll contact you shortly.");

      setFormData({
        package: safariPackages[0].id,
        adults: "2",
        children: "0",
        accommodation: "standard",
        pickupLocation: "",
        fullName: "",
        email: "",
        phone: "",
        specialRequests: "",
        paymentMethod: "creditCard",
        cardNumber: "",
        expiry: "",
        cvc: "",
        emergencyContact: "",
        agreeTerms: false,
      });
      setDateRange({
        from: new Date(),
        to: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      });
    } catch (error) {
      alert("Error submitting booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { title: "Trip Details", icon: <FiGlobe /> },
    { title: "Personal Info", icon: <FiUser /> },
    { title: "Payment", icon: <FiCreditCard /> },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 to-amber-900/80 backdrop-blur-sm z-0" />
      <MainNav />

      <main className="relative pt-32 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
                <div className="flex mb-8 gap-4">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        activeSection === index
                          ? "bg-amber-600 text-white"
                          : "bg-white/10 text-gray-600 hover:bg-white/20"
                      }`}
                    >
                      {section.icon}
                      <span className="hidden sm:inline">{section.title}</span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Trip Details Section */}
                  <div
                    className={`space-y-6 ${activeSection !== 0 && "hidden"}`}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-gray-700">
                          <FiGlobe className="w-4 h-4" />
                          Safari Package
                        </Label>
                        <Select
                          value={formData.package}
                          onValueChange={(value) =>
                            setFormData({ ...formData, package: value })
                          }
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
                          onChange={(e) =>
                            setFormData({ ...formData, adults: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Children (2-12)</Label>
                        <Input
                          type="number"
                          min="0"
                          value={formData.children}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              children: e.target.value,
                            })
                          }
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

                  {/* Personal Info Section */}
                  <div
                    className={`space-y-6 ${activeSection !== 1 && "hidden"}`}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-gray-700">
                          <FiUser className="w-4 h-4" />
                          Full Name
                        </Label>
                        <Input
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          error={errors.fullName}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-gray-700">
                          <FiMail className="w-4 h-4" />
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
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
                        <Input
                          type="tel"
                          placeholder="+1 234 567 890"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
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

                  {/* Payment Section */}
                  <div
                    className={`space-y-6 ${activeSection !== 2 && "hidden"}`}
                  >
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
                          <Input
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
                              setFormData({
                                ...formData,
                                expiry: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>CVC</Label>
                          <Input
                            placeholder="123"
                            value={formData.cvc}
                            onChange={(e) =>
                              setFormData({ ...formData, cvc: e.target.value })
                            }
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
                          setFormData({
                            ...formData,
                            emergencyContact: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            agreeTerms: e.target.checked,
                          })
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

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    {activeSection > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setActiveSection((prev) => prev - 1)}
                        className="bg-white/10 hover:bg-white/20"
                      >
                        Previous
                      </Button>
                    )}

                    {activeSection < sections.length - 1 ? (
                      <Button
                        type="button"
                        onClick={() => setActiveSection((prev) => prev + 1)}
                        className="ml-auto bg-amber-600 hover:bg-amber-700"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="ml-auto bg-amber-600 hover:bg-amber-700 px-8 py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </div>
                        ) : (
                          "Confirm Booking"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 sticky top-32">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Booking Summary
                </h2>
                {selectedPackage && (
                  <div className="space-y-6 text-gray-700">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">
                        {selectedPackage.name}
                      </h3>
                      <p className="flex justify-between">
                        <span>Duration:</span>
                        <span>{selectedPackage.duration}</span>
                      </p>
                      {dateRange?.from && (
                        <p className="flex justify-between">
                          <span>Start Date:</span>
                          <span>{dateRange.from.toLocaleDateString()}</span>
                        </p>
                      )}
                      <p className="flex justify-between">
                        <span>Accommodation:</span>
                        <span className="capitalize">
                          {formData.accommodation}
                        </span>
                      </p>
                    </div>

                    <div className="py-4 border-y">
                      <div className="flex justify-between font-medium mb-2">
                        <span>Adults</span>
                        <span>
                          {formData.adults} × ${selectedPackage.price}
                        </span>
                      </div>
                      {parseInt(formData.children) > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>Children (50% off)</span>
                          <span>
                            {formData.children} × ${selectedPackage.price * 0.5}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4">
                      <div className="flex justify-between text-xl font-bold text-amber-700">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Includes all taxes, park fees, and service charges
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
