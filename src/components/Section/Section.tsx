import { twMerge } from "tailwind-merge";
import type { SectionProps } from "./section.types";

const Section = ({
  children,
  className,
  section,
  title,
  description = "",
  variant,
  ...props
}: SectionProps) => {
  const baseClass =
    "bg-background dark:bg-background-dark px-5 py-5 xl:px-20 2xl:px-44 flex flex-col gap-5";

  //Funcion para convertir la section en mayusculas
  const sectionUpperCase = () => {
    return section.toUpperCase();
  };

  const colorTextsection =
    variant === "primary"
      ? "text-primary"
      : variant === "secondary"
        ? "text-accent"
        : "";

  return (
    <section className={twMerge(baseClass, className)} {...props}>
      <h2
        className={`${colorTextsection} font-bold tracking-wider text-center`}
      >
        {sectionUpperCase()}
      </h2>

      <div className="flex flex-col gap-2">
        <span className="text-text-primary font-bold text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl dark:text-text-dark">
          {title}
        </span>
        <p className="text-text-secondary text-center md:text-lg xl:text-xl dark:text-text-secundario-dark">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};

export default Section;
