import { Button } from "@/components/ui/button";

interface FormNavigationProps {
  activeSection: number;
  totalSections: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const FormNavigation = ({
  activeSection,
  totalSections,
  isSubmitting,
  onPrevious,
  onNext,
}: FormNavigationProps) => (
  <div className="flex justify-between mt-8">
    {activeSection > 0 && (
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        className="bg-white/10 hover:bg-white/20"
      >
        Previous
      </Button>
    )}

    {activeSection < totalSections - 1 ? (
      <Button
        type="button"
        onClick={onNext}
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
);
