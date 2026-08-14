import * as React from "react";

//Tipado para las props del componente Header
export interface HeaderProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
