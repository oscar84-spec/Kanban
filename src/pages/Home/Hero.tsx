import Header from "@components/Header/Header.tsx";
import Sidebar from "@components/Sidebar/Sidebar.tsx";
import Button from "@/components/Button/Button";
import KanbanDemo from "@/ui/KanbanDemo/KanbanDemo";
import { useStoreSidebar } from "@/stores/sidebar/sidebar.store";

function Hero() {
  //Estado para abri el menu en la version mobile
  const openSidebar = useStoreSidebar((state) => state.openSidebar);
  const setOpenSidebar = useStoreSidebar((state) => state.setOpenSidebar);

  return (
    <section className={` bg-background dark:bg-background-dark`}>
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Sidebar openSidebar={openSidebar} />

      <div className="px-5 lg:w-full lg:h-[calc(100vh-56px)] lg:flex lg:items-center lg:justify-between lg:gap-10 xl:px-20 2xl:px-44">
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
        <KanbanDemo />
      </div>
    </section>
  );
}

export default Hero;
