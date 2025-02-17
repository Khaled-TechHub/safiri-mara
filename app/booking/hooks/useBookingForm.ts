
import { useState } from "react";
import { safariPackages } from "@/app/booking/constants/booking";

export const useBookingForm = () => {
  const [dateRange, setDateRange] = useState({
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

  return {
    formData,
    setFormData,
    dateRange,
    setDateRange,
    activeSection,
    setActiveSection,
    isSubmitting,
    setIsSubmitting,
    errors,
    setErrors,
    selectedPackage,
    totalPrice,
    validateForm,
  };
};