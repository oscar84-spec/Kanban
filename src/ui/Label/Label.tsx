import { twMerge } from "tailwind-merge";
import type { LabelProps } from "./label.types";

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={twMerge(
        "text-sm font-medium text-text-primary dark:text-text-dark",
        className,
      )}
    >
      {children}
    </label>
  );
};

export default Label;
