import ProjectDetails from '@/app/pages/project/project-details'
import ProjectSections from '@/app/pages/project/project-details/project-sections'
import { ProjectPageData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'

type ProjectProps = {
  params: {
    slug: string;
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `
  return fetchHygraphQuery(query,
    60 * 60 * 24 // 24 hours
  )
}

const Project = async ({ params: { slug } }: ProjectProps) => {
  const { project } = await getProjectDetails(slug)
  console.log("🚀 ~ vai seu fude!!!!!! Project ~ project:", project)

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections />
    </>
  )
}

export default Project