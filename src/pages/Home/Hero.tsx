import Header from "@components/Header/Header.tsx";

function Hero() {
  //Clases para los grandientes
  const radialGradient =
    "bg-[radial-gradient(circle_at_0%_0%,var(--color-glow-primnary),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_100%_100%,var(--color-glow-secondary),transparent_35%)]";

  return (
    <section
      className={`relative min-h-screen bg-background ${radialGradient}`}
    >
      <Header />
    </section>
  );
}

export default Hero;
