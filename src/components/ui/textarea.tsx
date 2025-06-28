import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  error?: string;
  type?: string;
  register?: any;
  trigger?: any;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, type, label, error, register, trigger, name, ...props },
    ref
  ) => {
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
          </label>
        )}
        <div className="relative">
          <textarea
            className={cn(
              "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className,
              error && "border-destructive shadow-error"
            )}
            ref={ref}
            {...props}
            {...(register ? register(name) : {})}
          />
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
Textarea.displayName = "Textarea";

export { Textarea };
