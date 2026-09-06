import { twMerge } from "tailwind-merge";
import type { InputProps } from "./input.types";

const baseClass =
  "w-full rounded-lg border bg-superficie px-4 py-2 text-sm text-text-primary placeholder:text-text-secondary outline-none transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed dark:bg-superficie-dark dark:text-text-dark dark:placeholder:text-text-secundario-dark dark:ring-offset-background-dark";

const Input = ({ error, className, id, type, ...props }: InputProps) => {
  const isCheckable = type === "checkbox" || type === "radio";

  return (
    <div
      className={twMerge(
        isCheckable ? "w-max" : "w-full",
        error && "flex flex-col gap-1",
      )}
    >
      <input
        id={id}
        type={type}
        className={twMerge(
          baseClass,
          isCheckable && "w-max",
          error
            ? "border-red-500 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-500"
            : "border-border focus-visible:ring-primary dark:border-bordes-dark dark:focus-visible:ring-primary-dark-mode",
          className,
        )}
        {...props}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
