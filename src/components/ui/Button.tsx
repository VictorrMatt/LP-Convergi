import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[200px] font-bold transition-colors",
          {
            "bg-white text-[#08102F] hover:bg-opacity-90":
              variant === "primary",
            "bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10":
              variant === "outline",
            "px-4 py-2": size === "sm",
            "px-6 py-3": size === "md",
            "px-8 py-4": size === "lg",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
