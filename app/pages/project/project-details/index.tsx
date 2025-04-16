import Button from '@/app/components/buttons'
import { SectionTitle } from '@/app/components/section-title'
import TechBadge from '@/app/components/tech-badge'
import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const ProjectDetails = () => {
  return (
    <section className=" w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <div className="absolute inset-0 z-[-1]"
        style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover, url(/images/profile-pic.jpeg)',
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title="Projetos em que trabalhei"
        className="text-center items-center sm:[&>h3]:text-4lx"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sed quod odio dolore fuga. Quisquam id, accusamus, pariatur repellat ad, ab veritatis blanditiis rerum harum eius delectus dolorem vero provident?
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="React" />
        <TechBadge name="TypeScript" />
        <TechBadge name="Tailwind CSS" />
        <TechBadge name="Node.js" />
        <TechBadge name="Express" />
        <TechBadge name="MongoDB" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com/JeanGomesDev" target='_blank'>
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>

        </a>
        <a href="https://github.com/JeanGomesDev" target='_blank'>
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>

        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}

export default ProjectDetails