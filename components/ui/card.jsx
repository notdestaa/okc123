import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white shadow-md p-4",
        className
      )}
      {...props}
    />
  );
}
