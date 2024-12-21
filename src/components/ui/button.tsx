import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex gap-100 items-center px-200 py-100 rounded-8 text-base leading-tight tracking-tight disabled:text-neutral-300 disabled:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 text-neutral-0 hover:bg-blue-700 focus:outline-offset-2",
        secondary:
          "bg-neutral-100 text-neutral-600 border border-transparent hover:border-neutral-300 hover:text-neutral-950 focus-visible:border-neutral-950 hover:shadow-md",
        border:
          "border border-neutral-300 text-neutral-950 hover:border-transparent hover:bg-neutral-100 hover:text-neutral-600 ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
