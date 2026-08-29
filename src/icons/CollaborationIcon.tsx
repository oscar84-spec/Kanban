import { twMerge } from "tailwind-merge";
import type { IconProps } from "./icon.types";

const CollaborationIcon = ({ className, ...props }: IconProps) => (
  <div className={twMerge("relative size-6", className)} {...props}>
    <span className="absolute top-1/2 left-0 size-4 -translate-y-1/2 rounded-full border-2 border-current bg-current/20" />
    <span className="absolute top-1/2 right-0 size-4 -translate-y-1/2 rounded-full border-2 border-current bg-current/20" />
  </div>
);

export default CollaborationIcon;
