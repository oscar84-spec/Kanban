import type { KanbanList } from "./types.kanban_demo";

export const KANBAN_DEMO_HERO: KanbanList[] = [
  {
    title: "Por Hacer",
    cards: [
      {
        badge: "primary",
        textBadge: "Diseño",
        text: "Wireframes de onboarding",
      },
      { badge: "secondary", textBadge: "Copy", text: "Textos landing v2" },
    ],
  },
  {
    title: "En Progreso",
    cards: [
      {
        badge: "secondary",
        textBadge: "Dev",
        text: "Integración de pagos",
      },
    ],
  },
  {
    title: "Hecho",
    cards: [
      {
        badge: "primary",
        textBadge: "QA",
        text: "Pruebas de Checkout",
      },
    ],
  },
];
