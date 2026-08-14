import { LuKanban } from "react-icons/lu";
import SwitchTheme from "@components/SwitchTheme/SwitchTheme.tsx";
import { FiMenu } from "react-icons/fi";

function Header() {
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

        <div className="flex gap-2 items-center">
          <SwitchTheme />
          <FiMenu className="size-4" />
        </div>
      </header>
    </div>
  );
}

export default Header;
