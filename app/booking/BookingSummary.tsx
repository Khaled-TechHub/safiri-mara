interface BookingSummaryProps {
  selectedPackage: any;
  formData: any;
  dateRange: any;
  totalPrice: number;
}

export const BookingSummary = ({
  selectedPackage,
  formData,
  dateRange,
  totalPrice,
}: BookingSummaryProps) => (
  <div className="lg:col-span-1">
    <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 sticky top-32">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Summary</h2>
      {selectedPackage && (
        <div className="space-y-6 text-gray-700">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{selectedPackage.name}</h3>
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
              <span className="capitalize">{formData.accommodation}</span>
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
);
