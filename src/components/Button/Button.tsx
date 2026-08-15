import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./button.types";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-background dark:ring-offset-background-dark disabled:opacity-50 disabled:cursor-not-allowed";

const Button = ({
  variant = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  const buttonVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary dark:bg-primary-dark-mode dark:text-white dark:hover:bg-primary-dark-dark dark:focus-visible:ring-primary-dark-mode";

      case "secondary":
        return "bg-accent text-white hover:brightness-90 focus-visible:ring-accent dark:bg-accent-dark dark:text-background-dark dark:hover:brightness-90 dark:focus-visible:ring-accent-dark";

      default:
        return "bg-superficie-alterna text-text-primary border border-border hover:bg-border focus-visible:ring-text-secondary dark:bg-superficie-alterna-dark dark:text-text-dark dark:border-bordes-dark dark:hover:bg-bordes-dark dark:focus-visible:ring-text-secundario-dark";
    }
  };

  return (
    <button
      {...props}
      className={twMerge(baseClass, buttonVariantClass(), className)}
    >
      {children}
    </button>
  );
};

export default Button;
