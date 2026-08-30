import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import Badge from "@/ui/Badge/Badge";
import { useState } from "react";
import { PRICES_CARDS } from "./const.home";

const Prices = () => {
  const [selectedPlan, setSelectedPlan] = useState<boolean>(true);

  //Funcion para los estilos de la card highlight
  const getListStyle = (index: number) => {
    switch (index) {
      case 0:
        return "bg-accent/20 text-accent";

      case 1:
        return "bg-primary-dark-mode/50";

      case 2:
        return "bg-primary/20 text-primary";

      default:
        return "";
    }
  };

  //Funcion para el color de background de las cards
  const getColorBackgroundCard = (index: number) => {
    switch (index) {
      case 0:
        return "bg-superficie dark:bg-superficie-dark border border-border/10";
      case 1:
        return "bg-primary-dark dark:bg-primary-dark-dark border border-border/10 lg:scale-105";

      case 2:
        return "bg-superficie dark:bg-superficie-dark border border-border/10";

      default:
        return "";
    }
  };

  //Funcion para obtener los precios segun el plan
  const getPriceByPlan = (index: number, price: number): number => {
    switch (index) {
      case 0:
        return price;
      case 1:
        return !selectedPlan ? price - 2 : price;
      case 2:
        return !selectedPlan ? price - 4 : price;

      default:
        return price;
    }
  };

  return (
    <Section
      section="Precio"
      title="Un plan para cada equipo"
      description="Empieza gratis. Mejora cuando lo necesites."
      variant="secondary"
    >
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="p-1 rounded-full bg-superficie-alterna dark:bg-superficie-alterna-dark border border-border/10 flex justify-between max-w-72 w-full">
          <div
            className={`px-5 py-1 rounded-full transition-colors duration-200 ease-in-out  hover:cursor-pointer font-semibold
            ${selectedPlan ? "bg-superficie dark:bg-superficie-dark" : "bg-transparent"}`}
            onClick={() => setSelectedPlan(true)}
          >
            <span
              className={`${selectedPlan ? "text-text-primary dark:text-text-dark" : "text-text-secondary dark:text-text-secundario-dark"}`}
            >
              Mensual
            </span>
          </div>
          <div
            className={`px-5 py-1 rounded-full flex gap-2 items-center  hover:cursor-pointer ${selectedPlan ? "bg-transparent" : "bg-superficie dark:bg-superficie-dark"}`}
            onClick={() => setSelectedPlan(false)}
          >
            <span
              className={`font-semibold ${selectedPlan ? "text-text-secondary dark:text-text-secundario-dark" : "text-text-primary dark:text-text-dark"}`}
            >
              Anual
            </span>
            <Badge variant="secondary" animated className="dark:bg-accent/10">
              -20%
            </Badge>
          </div>
        </div>

        {/* CARDS */}

        <div className="w-full flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:pt-20">
          {PRICES_CARDS.map((item, index) => (
            <div
              className={`relative flex flex-col gap-5 w-full p-5 rounded-lg ${getColorBackgroundCard(index)}`}
              key={index}
            >
              {item.highlight && (
                <div className="absolute -top-4 right-5 px-3 py-0.5 rounded-full bg-accent">
                  <span className="font-semibold text-sm">Más popular</span>
                </div>
              )}
              <div className="flex flex-col gap-0">
                <span className="text-xl text-text-primary dark:text-text-dark font-semibold">
                  {item.plan}
                </span>
                <span className="text-text-secondary dark:text-text-secundario-dark">
                  {item.description}
                </span>
              </div>

              <span className="text-4xl font-bold text-text-primary dark:text-text-dark">
                {`$${getPriceByPlan(index, item.price)}`}
              </span>

              <Button
                type="button"
                className={`${index === 1 ? "dark:bg-superficie dark:text-primary font-semibold border dark:border-primary" : ""}`}
              >
                {item.text_button}
              </Button>
              <ul className="flex flex-col gap-2">
                {item.benefist.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="text-text-primary dark:text-text-dark flex gap-3 items-center"
                  >
                    <div
                      className={`rounded-full p-0.5 ${getListStyle(index)}`}
                    >
                      <listItem.icon className="size-3" />
                    </div>
                    {listItem.benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Prices;
