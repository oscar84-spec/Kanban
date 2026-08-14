import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";

function SwitchTheme() {
  const [moveSwitch, setMoveSwitch] = useState<boolean>(false);

  return (
    <div
      className="relative flex justify-between px-2 py-1 w-16 rounded-full bg-superficie-alterna border border-gray-300 shadow-inner"
      onClick={() => setMoveSwitch((prev) => !prev)}
    >
      <BsFillSunFill className="size-4" />
      <BsFillMoonStarsFill className="size-4" />

      <div
        className={`absolute top-1/2 left-2 -translate-y-1/2 size-5 rounded-full bg-linear-to-br from-primary to-accent border border-blue-500 transition-transform duration-500 ease-in-out ${moveSwitch ? "translate-x-7" : "translate-x-0"}`}
      />
    </div>
  );
}

export default SwitchTheme;
