import { Link } from "@/app/components/link";
import TechBadge from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import Img from "../../../../../public/images/icons/project-title-icon.svg"

const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="img projeto"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image width={20} height={20} src={Img} alt="foto" />
          BookWise
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in dicta voluptas ratione at atque laborum quam,
          exercitationem error quasi animi dignissimos nam eos cupiditate. Fuga aperiam nisi fugiat eum odit magni dolorem!
          Inventore quos architecto expedita, officia provident quam exercitationem at voluptate, consectetur, ipsa ex natus autem
          qui cum!
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="React" />
          <TechBadge name="Next.js" />
          <TechBadge name="TypeScript" />
          <TechBadge name="GraphQL" />
        </div>
        <Link href="/projects/book-wise">
          Ver Projeto <HiArrowNarrowRight />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
