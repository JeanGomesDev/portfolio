import Button from '@/app/components/buttons'
import { SectionTitle } from '@/app/components/section-title'
import TechBadge from '@/app/components/tech-badge'
import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { RichText } from '@/app/components/rich-text'

type ProjectDetailsProps = {
  project: Project;
}


const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className=" w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <div className="absolute inset-0 z-[-1]"
        style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover, url(/images/profile-pic.jpeg)',
          // profile-pic é a minha foto que n está vindo do hygraphy
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4lx"
      />
      <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        <RichText content={project.description.raw} />
      </div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies?.map(tech => (
          <TechBadge key={tech.name} name={tech.name} />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">

        {project?.githubUrl && (

          <a href={project.githubUrl} target='_blank'>
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>

          </a>
        )}

        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target='_blank'>
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>

          </a>
        )}
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}

export default ProjectDetails