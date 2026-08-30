import type { HTMLAttributes } from "react";

type variantColor = "primary" | "secondary";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  section: string;
  title: string;
  description?: string;
  variant: variantColor;
}
