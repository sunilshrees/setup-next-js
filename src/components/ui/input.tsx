"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  trigger?: any;
  label?: string;
  error?: string;
  name?: string;
  optional?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      register,
      trigger,
      name,
      optional = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        {label && (
          <label
            className={cn(
              "absolute -top-3 left-2 bg-white px-1 text-sm md:text-xs font-medium z-10 font-primary",
              error && "text-destructive"
            )}
            htmlFor={props.id}
          >
            {label}
            {!optional && <span className="text-red-600">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            type={isPassword && showPassword ? "text" : type}
            className={cn(
              "flex h-12 w-full rounded-md border border-muted-light bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
              error &&
                "border-destructive shadow-error font-primary placeholder:font-primary",
              isPassword && "pr-10",
              className
            )}
            autoComplete="new-password"
            ref={ref}
            {...props}
            // {...register(name)}
            {...(register ? register(name) : {})}
          />
          {isPassword && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={togglePasswordVisibility}
              tabIndex={-1}
            >
              {showPassword ? (
                <Icon icon="mdi:eye-off" width="20" height="20" />
              ) : (
                <Icon icon="mdi:eye" width="20" height="20" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          )}
        </div>
        {error && (
          <p className="mt-1 text-xs text-destructive flex items-center gap-1">
            <Icon
              icon="solar:close-square-bold"
              width="14"
              height="14"
              className="text-destructive"
            />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
