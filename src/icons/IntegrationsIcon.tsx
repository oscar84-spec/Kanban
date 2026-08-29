import { twMerge } from "tailwind-merge";
import type { IconProps } from "./icon.types";

const IntegrationsIcon = ({ className, ...props }: IconProps) => (
  <div className={twMerge("relative size-6", className)} {...props}>
    <span className="absolute top-0 left-0 h-px w-2.5 origin-left rotate-45 bg-current/70" />
    <span className="absolute top-0 right-0 h-px w-2.5 origin-right -rotate-45 bg-current/70" />
    <span className="absolute bottom-0.5 left-1/2 h-2 w-px -translate-x-1/2 bg-current/70" />

    <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
    <span className="absolute top-0 left-0 size-1.5 rounded-full bg-current" />
    <span className="absolute top-0 right-0 size-1.5 rounded-full bg-current" />
    <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-current" />
  </div>
);

export default IntegrationsIcon;
