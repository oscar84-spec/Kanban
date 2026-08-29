import { twMerge } from "tailwind-merge";
import { FEATURES_CARDS } from "./const.home";
import type { FeatureVariant } from "./types.home";

const iconWrapperVariantClass = (variant: FeatureVariant) => {
  switch (variant) {
    case "accent":
      return "bg-accent/10 border-accent/10 text-accent dark:bg-accent-dark/10 dark:border-accent-dark/10 dark:text-accent-dark";

    default:
      return "bg-primary/10 border-primary/10 text-primary dark:bg-primary-dark-mode/10 dark:border-primary-dark-mode/10 dark:text-primary-dark-mode";
  }
};

const Features = () => {
  return (
    <section className="bg-background px-5 py-5 text-text-secondary dark:bg-background-dark dark:text-text-secundario-dark xl:px-20 2xl:px-44 flex flex-col gap-5">
      <h2 className=" text-accent font-bold tracking-wider text-center">
        CARACTERÍSTICAS
      </h2>

      <div className="flex flex-col gap-2">
        <span
          className="text-text-primary font-bold text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl
        dark:text-text-dark"
        >
          Todo lo que tu equipo necesita
        </span>
        <span className="text-text-secondary text-center md:text-lg xl:text-xl dark:text-text-secundario-dark">
          Desde tableros simples hasta flujos complejos, con las herramientas
          justas para no perder el ritmo.
        </span>
      </div>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-3 xl:grid-cols-4 xl:gap-5">
        {FEATURES_CARDS.map((item, index) => (
          <div
            className="w-full bg-superficie rounded-md flex flex-col gap-3 p-2 shadow-lg dark:bg-superficie-dark border border-border/10"
            key={index}
          >
            <div
              className={twMerge(
                "size-14 border rounded-md flex items-center justify-center",
                iconWrapperVariantClass(item.variant),
              )}
            >
              <item.icon className="size-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold text-text-primary dark:text-text-dark">
                {item.title}
              </span>
              <p className="text-text-secondary dark:text-text-secundario-dark">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
