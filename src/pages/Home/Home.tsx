import Hero from "@pages/Home/Hero.tsx";
import Features from "./Features";
import { bgAccent, bgPrimary, bgSecondary } from "./const.home";

function Home() {
  return (
    <main>
      <div className=" w-full relative overflow-x-hidden">
        <div className={bgPrimary} />
        <div className={bgSecondary} />
        <div className={bgAccent} />

        <Hero />
        <Features />
      </div>
    </main>
  );
}

export default Home;
