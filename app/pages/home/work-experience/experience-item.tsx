import React from "react";
import Image from "next/image";
import TechBadge from "@/app/components/tech-badge";
import LOGODG from "../../../../public/images/LOGODGUESTS.jpg";

const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
          src={LOGODG}
            alt="DG"
            width={40}
            height={40} 
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/dguests/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ DGuests
          </a>
          <h4 className="text-gray-300">Desenvolvedor FullStack</h4>
          <span className="text-gray-500">jun 2022 • abr 2025 • (2 anos e 10 meses) </span>
          <p className="text-gray-500">
            Atuo no desenvolvimento de soluções web para o setor gastronômico, criando interfaces modernas, responsivas e
            escaláveis. Participei da construção de cardápios digitais interativos, dashboards administrativos e integrações de
            pagamento online, garantindo performance, modularidade e uma experiência fluida para os usuários.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibld">Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="React" />
          <TechBadge name="Next.js" />
          <TechBadge name="Node.js" />
          <TechBadge name="Express" />
          <TechBadge name="TypeScript" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
