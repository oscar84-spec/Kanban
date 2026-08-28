import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "primary" | "secondary";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Activa el borde animado tipo "cometa". Por defecto está activo. */
  animated?: boolean;
}
