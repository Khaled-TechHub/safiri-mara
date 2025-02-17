import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils"; // Assuming you have cn utility

interface InputWithErrorProps extends InputProps {
  error?: string;
}

export const InputWithError = ({
  error,
  className,
  ...props
}: InputWithErrorProps) => {
  return (
    <div className="w-full">
      <Input
        className={cn(
          error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
