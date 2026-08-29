import { twMerge } from "tailwind-merge";
import type { IconProps } from "./icon.types";

const ViewsIcon = ({ className, ...props }: IconProps) => (
  <div
    className={twMerge("flex size-6 flex-col justify-center gap-1", className)}
    {...props}
  >
    <span className="h-0.5 w-full rounded-full bg-current" />
    <span className="h-0.5 w-2/3 rounded-full bg-current" />
    <span className="h-0.5 w-full rounded-full bg-current" />
    <span className="h-0.5 w-1/2 rounded-full bg-current" />
  </div>
);

export default ViewsIcon;
