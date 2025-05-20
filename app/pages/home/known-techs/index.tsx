import { SectionTitle } from "@/app/components/section-title";
import KnownTech from "./known-tech";
import { knownTech as IkknownTech } from "@/app/types/projects";

type knownTechProps = {
  techs: IkknownTech[]
}

const knownTechs = ({ techs }: knownTechProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default knownTechs;
