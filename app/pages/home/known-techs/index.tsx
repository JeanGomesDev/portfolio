import { SectionTitle } from "@/app/components/section-title";
import { TbBrandNextjs } from "react-icons/tb";
import KnownTech from "./known-tech";

const knownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech key={index} tech={{ icon: <TbBrandNextjs />, name: "Next.js", startDate: "2024-01-01" }} />
        ))}
      </div>
    </section>
  );
};

export default knownTechs;
