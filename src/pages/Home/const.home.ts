import {
  AutomationIcon,
  BoardsIcon,
  CollaborationIcon,
  IntegrationsIcon,
  SecurityIcon,
  ViewsIcon,
} from "@icons/index";
import type {
  FeaturesCards,
  FooterList,
  PricesCards,
  TestimonilasCards,
} from "./types.home";
import { FaCheck } from "react-icons/fa";

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

//Arrays para las cards de la seccion testimonios
export const TESTIMONIALS_CARDS: TestimonilasCards[] = [
  {
    testimonio:
      '"Reemplazamos tres herramientas distintas por Flowboard. El equipo de marketing por fin ve todo en un solo tablero."',
    nombre: "María Castillo",
    area: "Directora de Marketing, Vento",
  },
  {
    testimonio:
      '"La automatización nos ahorra horas cada semana. Configuramos reglas en minutos, sin depender de ingeniería."',
    nombre: "Jorge Ruiz",
    area: "Líder de Operaciones, Nortek",
  },
  {
    testimonio:
      '"La curva de aprendizaje fue cero. Todo el equipo lo adoptó en el primer día, sin capacitación."',
    nombre: "Lucía Álvarez",
    area: "Product Manager, Solví",
  },
];

//Array para las cards de la seccion prices
export const PRICES_CARDS: PricesCards[] = [
  {
    plan: "Gratis",
    description: "Para probar y empezar",
    price: 0,
    text_button: "Empezar",
    highlight: false,
    benefist: [
      { icon: FaCheck, benefit: "3 tableros activos" },
      { icon: FaCheck, benefit: "Hasta 10 miembros" },
      { icon: FaCheck, benefit: "Automatizaciones básicas" },
      { icon: FaCheck, benefit: "Historial de 30 días" },
    ],
  },
  {
    plan: "Pro",
    description: "Para equipos en crecimiento",
    price: 9,
    text_button: "Probar 14 días gratis",
    highlight: true,
    benefist: [
      { icon: FaCheck, benefit: "Tableros ilimitados" },
      { icon: FaCheck, benefit: "Miembros ilimitados" },
      { icon: FaCheck, benefit: "Automatizaciones avanzadas" },
      { icon: FaCheck, benefit: "Vistas de calendario y línea de tiempo" },
      { icon: FaCheck, benefit: "Soporte prioritario" },
    ],
  },
  {
    plan: "Equipos",
    description: "Para organizaciones completas",
    price: 19,
    text_button: "Contactar Ventas",
    highlight: false,
    benefist: [
      { icon: FaCheck, benefit: "Todo lo de Pro" },
      { icon: FaCheck, benefit: "Permisos por rol" },
      { icon: FaCheck, benefit: "SSO y auditoría" },
      { icon: FaCheck, benefit: "Panel de administración" },
      { icon: FaCheck, benefit: "Soporte dedicado" },
    ],
  },
];

//Array para las listas del footer
export const FOOTER_LIST: FooterList[] = [
  {
    typeList: "Producto",
    listItem: ["Características", "Precios", "Integraciones", "Novedades"],
  },
  {
    typeList: "Recursos",
    listItem: ["Guías", "Plantillas", "Comunidad", "Centro de ayuda"],
  },
  {
    typeList: "Empresa",
    listItem: ["Sobre nosotros", "Empleo", "Contacto", "Prensa"],
  },
];
