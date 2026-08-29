import { twMerge } from "tailwind-merge";
import type { IconProps } from "./icon.types";

const AutomationIcon = ({ className, ...props }: IconProps) => (
  <div className={twMerge("relative size-6", className)} {...props}>
    <span className="absolute inset-0 rounded-full border-2 border-current border-t-transparent" />
    <span className="absolute top-0.5 right-0.5 size-0 rotate-45 border-x-4 border-b-4 border-x-transparent border-b-current" />
  </div>
);

export default AutomationIcon;
