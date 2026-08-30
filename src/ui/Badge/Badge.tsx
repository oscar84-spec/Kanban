import { twMerge } from "tailwind-merge";
import type { BadgeProps } from "./badge.types";

const textVariantClass = (variant: BadgeProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "text-primary dark:text-primary-dark-mode";

    case "secondary":
      return "text-accent dark:text-accent-dark";

    default:
      return "text-text-secondary dark:text-text-secundario-dark";
  }
};

const staticBorderVariantClass = (variant: BadgeProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "border-primary/40 dark:border-primary-dark-mode/40";

    case "secondary":
      return "border-accent/40 dark:border-accent-dark/40";

    default:
      return "border-border dark:border-bordes-dark";
  }
};

const cometVariantClass = (variant: BadgeProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,color-mix(in_srgb,var(--color-primary)_35%,transparent)_82%,var(--color-primary)_95%,transparent_100%)] dark:bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,color-mix(in_srgb,var(--color-primary-dark-mode)_35%,transparent)_82%,var(--color-primary-dark-mode)_95%,transparent_100%)]";

    case "secondary":
      return "bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,color-mix(in_srgb,var(--color-accent)_35%,transparent)_82%,var(--color-accent)_95%,transparent_100%)] dark:bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,color-mix(in_srgb,var(--color-accent-dark)_35%,transparent)_82%,var(--color-accent-dark)_95%,transparent_100%)]";

    default:
      return "bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,color-mix(in_srgb,var(--color-text-secondary)_35%,transparent)_82%,var(--color-text-secondary)_95%,transparent_100%)] dark:bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,color-mix(in_srgb,var(--color-text-secundario-dark)_35%,transparent)_82%,var(--color-text-secundario-dark)_95%,transparent_100%)]";
  }
};

const Badge = ({
  variant = "default",
  animated = false,
  children,
  className,
  ...props
}: BadgeProps) => {
  if (!animated) {
    return (
      <span
        {...props}
        className={twMerge(
          "inline-flex items-center rounded-full border bg-superficie px-3 py-1 text-xs font-medium dark:bg-superficie-dark",
          staticBorderVariantClass(variant),
          textVariantClass(variant),
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      {...props}
      className="relative isolate inline-flex overflow-hidden rounded-full p-px"
    >
      <span
        aria-hidden
        className={twMerge(
          "absolute inset-[-150%] animate-[spin_2.5s_linear_infinite]",
          cometVariantClass(variant),
        )}
      />

      <span className="relative isolate z-10 inline-flex items-center overflow-hidden rounded-full bg-superficie px-3 py-1 text-xs font-medium dark:bg-superficie-dark">
        {className && (
          <span
            aria-hidden
            className={twMerge("absolute inset-0 rounded-full", className)}
          />
        )}

        <span className={twMerge("relative", textVariantClass(variant))}>
          {children}
        </span>
      </span>
    </span>
  );
};

export default Badge;
