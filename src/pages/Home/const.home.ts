import {
  AutomationIcon,
  BoardsIcon,
  CollaborationIcon,
  IntegrationsIcon,
  SecurityIcon,
  ViewsIcon,
} from "@icons/index";
import type { FeaturesCards } from "./types.home";

export const bgPrimary =
  "w-[320px] h-80 absolute -top-32 -left-32 bg-primary opacity-35 blur-[90px] rounded-full";

export const bgSecondary =
  "w-[320px] h-80 absolute -top-32 -right-32 bg-[#3B82F6] blur-[90px] rounded-full opacity-15";

export const bgAccent =
  "w-105 h-105 border border-green-500 absolute top-[10%] -right-52 bg-accent blur-[90px] rounded-full opacity-20 md:top-[25%] xl:top-[40%]";

export const FEATURES_CARDS: FeaturesCards[] = [
  {
    title: "Tableros visuales",
    description:
      "Organiza tareas en columnas y arrástralas a medida que avanza el trabajo.",
    icon: BoardsIcon,
    variant: "primary",
  },
  {
    title: "Automatización",
    description:
      "Reglas sin código que mueven tarjetas, avisan y actualizan por ti.",
    icon: AutomationIcon,
    variant: "accent",
  },
  {
    title: "Colaboración en equipo",
    description:
      "Comenta, menciona y comparte tableros con permisos por miembro.",
    icon: CollaborationIcon,
    variant: "primary",
  },
  {
    title: "Vistas múltiples",
    description:
      "Cambia entre tablero, lista, calendario o línea de tiempo al instante.",
    icon: ViewsIcon,
    variant: "accent",
  },
  {
    title: "Integraciones",
    description:
      "Conecta tu correo, calendario y herramientas favoritas en un clic.",
    icon: IntegrationsIcon,
    variant: "primary",
  },
  {
    title: "Seguridad",
    description:
      "Permisos granulares y cifrado de extremo a extremo en cada tablero.",
    icon: SecurityIcon,
    variant: "accent",
  },
];
