import Section from "@/components/Section/Section";
import { TESTIMONIALS_CARDS } from "./const.home";

const Testimonials = () => {
  const sectionType = "Testimonios";
  const titleSection = "Equipos que ya organizaron su caos";

  //Funcion para obtener las iniciales de los nombres
  const getInitials = (fullName: string) => {
    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];

    const firstNameInitial = firstName.at(0);
    const lastNameInitial = lastName.at(0);

    return `${firstNameInitial}${lastNameInitial}`;
  };

  return (
    <Section
      section={sectionType}
      title={titleSection}
      className="py-30"
      variant="primary"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {TESTIMONIALS_CARDS.map((item, index) => (
          <div
            className="flex flex-col justify-between gap-5 w-full p-5 rounded-lg bg-superficie border border-border/10 dark:bg-superficie-dark"
            key={index}
          >
            <p className="text-text-primary dark:text-text-dark">
              {item.testimonio}
            </p>

            <div className="flex gap-3 items-center">
              <div className="size-14 rounded-full flex justify-center items-center bg-linear-to-br from-primary to-accent">
                <span className="font-bold text-text-dark">
                  {getInitials(item.nombre)}
                </span>
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-text-primary dark:text-text-dark font-bold">
                  {item.nombre}
                </span>
                <span className="text-sm text-text-secondary dark:text-text-secundario-dark">
                  {item.area}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
