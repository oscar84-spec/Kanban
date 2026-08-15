import Header from "@components/Header/Header.tsx";
import { useState } from "react";
import Sidebar from "@components/Sidebar/Sidebar.tsx";
import Button from "@/components/Button/Button";

function Hero() {
  //Estado para abri el menu en la version mobile
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  //Clases para los grandientes
  const radialGradient =
    "bg-[radial-gradient(circle_at_0%_0%,var(--color-glow-primnary),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_100%_100%,var(--color-glow-secondary),transparent_35%)]";

  return (
    <section
      className={`relative min-h-screen bg-background ${radialGradient} overflow-x-hidden dark:bg-background-dark`}
    >
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Sidebar openSidebar={openSidebar} />

      <div className="px-5 lg:w-full lg:h-[calc(100vh-56px)] lg:flex lg:items-center xl:px-20">
        <div className=" mt-10 lg:w-1/2 lg:mt-0">
          <h1 className="text-3xl font-semibold text-text-primary dark:text-text-dark md:text-5xl xl:text-6xl">
            Organiza el trabajo de tu equipo, a tu manera.
          </h1>

          <div className="mt-5 flex flex-col gap-3 md:w-2/3">
            <p className="text-lg text-text-secondary dark:text-text-secundario-dark">
              Tablero flexibles, automatización sin código y vistas para cada
              flujo de trabajo.
            </p>
            <p className="text-lg text-text-secondary dark:text-text-secundario-dark">
              Todo en un sólo lugar, listo en minutos.
            </p>
          </div>

          {/* Botones */}
          <div className="w-full flex flex-col gap-2 mt-5 md:w-2/3 md:flex-row">
            <Button type="button" variant="primary" className="w-full md:w-1/2">
              Empezar gratis
            </Button>

            <Button type="button" className="md:w-1/2">
              Ver Demo
            </Button>
          </div>

          <div className="mt-5">
            <span className="text-sm text-text-secondary dark:text-text-secundario-dark">
              Sin tarjetas de crédito &middot; Configuración en 2 minutos.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
