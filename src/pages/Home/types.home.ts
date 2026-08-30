import type { ComponentType } from "react";
import type { IconProps } from "@icons/icon.types";

export type FeatureVariant = "primary" | "accent";

export interface FeaturesCards {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  variant: FeatureVariant;
}

//Tipos para las cards de la seccion de testimonios
export interface TestimonilasCards {
  testimonio: string;
  nombre: string;
  area: string;
}
