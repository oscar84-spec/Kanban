type typeBadgeVariant = "primary" | "secondary";

interface KanbanCards {
  badge: typeBadgeVariant;
  textBadge: string;
  text: string;
}

export interface KanbanList {
  title: string;
  cards: KanbanCards[];
}
