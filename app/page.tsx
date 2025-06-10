import HeroSection from "./pages/home/hero-section";
import HighlightedProjects from "./pages/home/highlighted-projects";
import KnownTechs from "./pages/home/known-techs";
import WorkExperience from "./pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchGygraphQuery } from "./utils/fetch-gygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
        url
          }
        title
        shortDescription
        technologies {
            name
          }
        }
      }
  }
`
  return fetchGygraphQuery(query, 60 * 60 * 24);

}

export default async function Home() {
  const { page: pageData } = await getPageData();
  console.log("🚀 ~ Home ~ pageData:", pageData)
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience />
    </>
  );
}
