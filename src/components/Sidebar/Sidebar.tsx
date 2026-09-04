import type { SidebarProps } from "@components/Sidebar/sidebar.types.ts";
import { listMenu } from "@/global/global.ts";
import { Link } from "react-router-dom";
import Button from "@components/Button/Button";

function Sidebar({ openSidebar }: SidebarProps) {
  const moveSidebar = openSidebar ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-superficie-alterna ${moveSidebar} transition-transform duration-500 ease-in-out lg:hidden dark:bg-superficie-dark z-40`}
    >
      <nav className="absolute top-18 left-0 px-5 flex flex-col gap-5 w-full">
        <ul className="flex flex-col gap-3">
          {listMenu.map((itemMenu, index) => (
            <Link
              to={itemMenu.href}
              key={index}
              className="text-text-primary dark:text-text-dark"
            >
              {itemMenu.text}
            </Link>
          ))}
        </ul>

        <div className="flex flex-col gap-3 w-full">
          <Button type="button">Iniciar sesión</Button>
          <Button type="button" variant="primary">
            Registrarse
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
