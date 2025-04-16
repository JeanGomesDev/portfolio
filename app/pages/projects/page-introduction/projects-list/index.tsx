import React from 'react'
import ProjectCard from './project-card'
import Link from 'next/link';

const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/1">
        <ProjectCard />
      </Link>
      <Link href="/projects/2">
        <ProjectCard />
      </Link>
      <Link href="/projects/3">
        <ProjectCard />
      </Link>


    </section>
  )
}

export default ProjectsList