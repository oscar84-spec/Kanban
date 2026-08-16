import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useThemeStore } from "@stores/theme/theme.store.ts";

function SwitchTheme() {
  const { theme, toggleTheme } = useThemeStore();
  const moveSwitch = theme === "dark";

  return (
    <div
      className="relative flex justify-between px-2 py-1 w-16 rounded-full bg-superficie-alterna border border-border shadow-inner lg:hover:cursor-pointer dark:bg-superficie-alterna-dark dark:border-bordes-dark"
      onClick={() => {
        toggleTheme();
      }}
    >
      <BsFillSunFill className="size-4 fill-primary-dark" />
      <BsFillMoonStarsFill className="size-4 fill-primary-dark" />

      <div
        className={`absolute top-1/2 left-2 -translate-y-1/2 size-5 rounded-full bg-linear-to-br from-primary to-accent border border-blue-500 transition-transform duration-500 ease-in-out ${moveSwitch ? "translate-x-7" : "translate-x-0"}`}
      />
    </div>
  );
}

export default SwitchTheme;
