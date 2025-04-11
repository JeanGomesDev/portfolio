import HeroSection from "./pages/home/hero-section";
import HighlightedProjects from "./pages/home/highlighted-projects";
import KnownTechs from "./pages/home/known-techs";
import WorkExperience from "./pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
