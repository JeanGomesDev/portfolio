import HeroSection from "./pages/home/hero-section";
import HighlightedProjects from "./pages/home/highlighted-projects";
import KnownTechs from "./pages/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
    </>
  );
}
