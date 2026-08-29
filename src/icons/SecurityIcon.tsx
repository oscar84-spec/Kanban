import { twMerge } from "tailwind-merge";
import type { IconProps } from "./icon.types";

const SecurityIcon = ({ className, ...props }: IconProps) => (
  <div
    className={twMerge(
      "size-6 bg-current [clip-path:polygon(50%_0%,100%_20%,100%_55%,50%_100%,0%_55%,0%_20%)]",
      className,
    )}
    {...props}
  />
);

export default SecurityIcon;
