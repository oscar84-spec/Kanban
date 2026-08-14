import { LuKanban } from "react-icons/lu";
import SwitchTheme from "@components/SwitchTheme/SwitchTheme.tsx";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import type { HeaderProps } from "@components/Header/header.types.ts";
import { listMenu } from "@/global/global.ts";
import { Link } from "react-router-dom";

function Header({ setOpenSidebar, openSidebar }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 w-full px-5">
      {/* Contenedor centrado, máximo 1000px en desktop, responsive por debajo */}
      <header className="mx-auto flex h-14 w-full max-w-250 items-center justify-between rounded-full bg-background/50 px-4 shadow-md backdrop-blur-3xl border border-background/20 sm:px-6">
        <div className={"flex gap-2 items-center"}>
          <div className={" bg-linear-to-br from-primary to-accent rounded-md"}>
            <LuKanban className={"size-7 stroke-background"} />
          </div>
          <span
            className={
              "text-xl font-bold bg-linear-to-br from-primary to-accent" +
              " bg-clip-text text-transparent"
            }
          >
            TaskFlow
          </span>
        </div>
        {/*Menu para la version desktop*/}
        <nav className="hidden lg:block">
          <ul className="flex gap-3">
            {listMenu.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className="text-gray-500 hover:text-text-primary hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
              >
                {item.text}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
          <SwitchTheme />

          {openSidebar ? (
            <IoIosClose
              className="size-5 lg:hidden"
              onClick={() => setOpenSidebar(false)}
            />
          ) : (
            <IoMenu
              className="size-5 lg:hidden"
              onClick={() => setOpenSidebar(true)}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
