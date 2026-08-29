import { twMerge } from "tailwind-merge";
import type { IconProps } from "./icon.types";

const BoardsIcon = ({ className, ...props }: IconProps) => (
  <div
    className={twMerge("grid size-6 grid-cols-2 gap-1", className)}
    {...props}
  >
    <span className="rounded-[3px] bg-current" />
    <span className="rounded-[3px] bg-current" />
    <span className="rounded-[3px] bg-current" />
    <span className="rounded-[3px] bg-current" />
  </div>
);

export default BoardsIcon;
