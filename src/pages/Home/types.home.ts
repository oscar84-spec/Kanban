import type { ComponentType } from "react";
import type { IconProps } from "@icons/icon.types";
import type { IconType } from "react-icons";

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

//Tipos para las cards de la seccion de precios

type typePlan = "Gratis" | "Pro" | "Equipos";

interface Benefits {
  benefit: string;
  icon: IconType;
}

export interface PricesCards {
  plan: typePlan;
  description: string;
  price: number;
  text_button: string;
  highlight: boolean;
  benefist: Benefits[];
}

//Tipos para las listas del footer
type typeFeature = "Producto" | "Recursos" | "Empresa";

export interface FooterList {
  typeList: typeFeature;
  listItem: string[];
}
