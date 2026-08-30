import { LuKanban } from "react-icons/lu";
import { FOOTER_LIST } from "./const.home";

const Footer = () => {
  //Obtenemos el año actual
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className="w-full px-5 py-10 bg-background dark:bg-background-dark border-t border-border dark:border-bordes-dark xl:px-20 2xl:px-44">
      <div className="flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className={"flex gap-2 items-center"}>
            <div
              className={" bg-linear-to-br from-primary to-accent rounded-md"}
            >
              <LuKanban className={"size-7 stroke-background"} />
            </div>
            <span
              className={
                "text-xl font-bold text-text-primary dark:text-text-dark"
              }
            >
              TaskFlow
            </span>
          </div>

          <span className="text-sm text-text-secondary dark:text-text-secundario-dark">
            El tablero flexible para equipos que quieren avanzar más rápido.
          </span>
        </div>

        {FOOTER_LIST.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <span className="text-text-primary dark:text-text-dark font-semibold ">
              {item.typeList}
            </span>

            <ul className="flex flex-col gap-2">
              {item.listItem.map((list, listIndex) => (
                <li
                  className="text-text-secondary dark:text-text-secundario-dark text-sm lg:hover:cursor-pointer lg:hover:text-text-primary lg:hover:dark:text-text-dark transition-colors dura ease-in-out"
                  key={listIndex}
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-border dark:border-bordes-dark flex flex-col gap-5 md:flex-row md:justify-between">
        <span className="mt-5 text-text-secondary dark:text-text-secundario-dark">
          © {currentYear} TaskFlow. Todos los derechos reservados.
        </span>

        <ul className="flex gap-3 md:mt-5">
          <a
            href="https://www.linkedin.com/in/devoscardev/"
            target="_blank"
            className="text-text-secondary dark:text-text-secundario-dark text-sm"
          >
            Linkdin
          </a>
          <a
            href="https://github.com/oscar84-spec"
            target="_blank"
            className="text-text-secondary dark:text-text-secundario-dark text-sm"
          >
            Github
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
