import React from 'react'
import PageIntroduction from '../pages/projects/page-introduction'
import ProjectsList from '../pages/projects/page-introduction/projects-list'
import { ProjectsPageData } from '../types/page-info'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `
  return fetchHygraphQuery(query,
    60 * 60 * 24 // 24 hours
  )
}

const Projects = async () => {

  const { projects } = await getPageData()

  return (
    <div>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </div>
  )
}

export default Projects