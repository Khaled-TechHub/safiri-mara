// app/booking/page.tsx
"use client";

import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { useBookingForm } from "@/app/booking/hooks/useBookingForm";
import { SectionStepper } from "@/app/booking/SectionStepper";
import { TripDetailsForm } from "@/app/booking/TripDetailsForm";
import { PersonalInfoForm } from "@/app/booking/PersonalInfoForm";
import { PaymentForm } from "@/app/booking/PaymentForm";
import { BookingSummary } from "@/app/booking/BookingSummary";
import { sections } from "@/app/booking/constants/booking";
import { FormNavigation } from "./FormNavigation";

export default function BookingPage() {
  const {
    formData,
    setFormData,
    dateRange,
    setDateRange,
    activeSection,
    setActiveSection,
    isSubmitting,
    errors,
    selectedPackage,
    totalPrice,
    validateForm,
    setIsSubmitting,
    setErrors,
  } = useBookingForm();

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
      alert("Booking submitted successfully!");
      // Reset form
    } catch (error) {
      alert("Error submitting booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 to-amber-900/80 backdrop-blur-sm z-0" />
      <MainNav />

      <main className="relative pt-32 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
                <SectionStepper
                  sections={sections}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />

                <form onSubmit={handleSubmit} className="space-y-8">
                  {activeSection === 0 && (
                    <TripDetailsForm
                      formData={formData}
                      setFormData={setFormData}
                      dateRange={dateRange}
                      setDateRange={setDateRange}
                    />
                  )}

                  {activeSection === 1 && (
                    <PersonalInfoForm
                      formData={formData}
                      setFormData={setFormData}
                      errors={errors}
                    />
                  )}

                  {activeSection === 2 && (
                    <PaymentForm
                      formData={formData}
                      setFormData={setFormData}
                      errors={errors}
                    />
                  )}

                  <FormNavigation
                    activeSection={activeSection}
                    totalSections={sections.length}
                    isSubmitting={isSubmitting}
                    onPrevious={() =>
                      setActiveSection((prev) => Math.max(0, prev - 1))
                    }
                    onNext={() => {
                      const errors = validateForm();
                      if (Object.keys(errors).length === 0) {
                        setActiveSection((prev) =>
                          Math.min(sections.length - 1, prev + 1)
                        );
                      } else {
                        setErrors(errors);
                      }
                    }}
                  />
                </form>
              </div>
            </div>

            <BookingSummary
              selectedPackage={selectedPackage}
              formData={formData}
              dateRange={dateRange}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
