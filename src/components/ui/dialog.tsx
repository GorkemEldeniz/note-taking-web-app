"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ImageProps } from "next/image";
import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils/cn";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.Ref<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref as React.Ref<HTMLDivElement>}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.Ref<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 flex flex-col items-start w-full max-w-sm translate-x-[-50%] translate-y-[-50%] border border-neutral-200 rounded-12 bg-neutral-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-start p-250 gap-200", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogArticle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <article className={cn("space-y-075 text-left", className)} {...props} />
);
DialogArticle.displayName = "DialogArticle";

const DialogIcon = ({ className, alt, ...props }: ImageProps) => (
  <div className="inline-block size-40 bg-neutral-100 rounded-8 p-100">
    <Image
      className={cn("size-40", className)} // Changed size-300 to size-40
      alt={alt || ""}
      width={40}
      height={40}
      {...props}
    />
  </div>
);
DialogIcon.displayName = "DialogIcon";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "border-t-[1px] border-t-neutral-200 w-full flex justify-end py-200 px-250 gap-200",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.Ref<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref as React.Ref<HTMLHeadingElement>}
    className={cn(
      "text-xl leading-wide tracking-wide text-neutral-950 font-bold",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.Ref<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref as React.Ref<HTMLParagraphElement>}
    className={cn(
      "text-base leading-tight tracking-normal text-neutral-700",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogArticle,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
