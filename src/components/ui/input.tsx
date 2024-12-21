"use client";

import { cn } from "@/lib/utils/cn";
import type { Icon } from "@/lib/utils/types";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";

const inputVariants = cva(
  "placeholder:text-neutral-500 text-neutral-900 text-base leading-[20px] tracking-tight appearance-none focus-visible:outline-none disabled:text-neutral-300 disabled:bg-neutral-50"
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  error?: boolean;
  icon?: Icon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";

    const [showPassword, setShowPassword] = useState(false);

    return (
      <div
        className={cn(
          "inline-flex items-center gap-100 border border-neutral-300 rounded-8 py-150 px-200 has-[:focus-visible]:outline-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-neutral-500 has-[:focus-visible]:ring-offset-2",
          {
            "border-red-100 has-[:focus-visible]:ring-red-100": error,
            "border-neutral-300 bg-neutral-50": props.disabled,
          }
        )}
      >
        {icon && (
          <Image
            src={`/images/icon-${icon}.svg`}
            alt={icon}
            width={20}
            height={20}
          />
        )}

        <Comp
          className={cn(inputVariants({ className }))}
          ref={ref}
          {...props}
          type={showPassword ? "text" : "password"}
        />
        {props.name && props.name.toLowerCase().includes("password") && (
          <>
            {showPassword ? (
              <Image
                src="/images/icon-hide-password.svg"
                alt="hide password"
                width={20}
                height={20}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Image
                src="/images/icon-show-password.svg"
                alt="show password"
                width={20}
                height={20}
                onClick={() => setShowPassword(true)}
              />
            )}
          </>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
