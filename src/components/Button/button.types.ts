import type { ButtonHTMLAttributes } from "react";

type typeButton = "default" | "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: typeButton;
}
