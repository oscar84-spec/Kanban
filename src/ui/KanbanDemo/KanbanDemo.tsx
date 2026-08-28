import Badge from "../Badge/Badge";
import { KANBAN_DEMO_HERO } from "./const.kanban_demo";

const KanbanDemo = () => {
  return (
    <div className="mt-10 w-full lg:w-1/2">
      <div className="max-w-lg rounded-2xl border border-border bg-superficie p-5 dark:border-bordes-dark dark:bg-superficie-dark -rotate-1 lg:max-w-full">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-red-400" />
            <div className="size-3 rounded-full bg-yellow-400" />
            <div className="size-3 rounded-full bg-green-400" />
          </div>

          <span className="font-semibold text-text-primary dark:text-text-dark p-3">
            Lanzamiento Q3
          </span>
        </div>

        <div className="mt-3 flex h-72 w-full gap-3 overflow-x-auto">
          {KANBAN_DEMO_HERO.map((item, index) => (
            <div
              className="min-w-56 p-2 flex-1 bg-superficie-alterna dark:bg-superficie-alterna-dark rounded-lg flex flex-col gap-2"
              key={index}
            >
              <span className="text-lg font-semibold text-text-secondary">
                {item.title.toUpperCase()}
              </span>
              {item.cards.map((card, index) => (
                <div
                  className="w-full h-28 p-2 bg-superficie rounded-lg flex flex-col gap-3 dark:bg-superficie-dark"
                  key={index}
                >
                  <Badge variant={card.badge} className="w-max font-semibold">
                    {card.textBadge}
                  </Badge>
                  <p className="font-semibold text-text-primary dark:text-text-dark">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanDemo;
