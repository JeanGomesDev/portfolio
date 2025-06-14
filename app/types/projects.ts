import type { RichTextContent } from '@graphcms/rich-text-types'

export type knownTech = {
    iconSvg: string;
    name: string;
    startDate: string;
}

export type ProjectSection = {
    title: string;
    image: {
        url: string;
    }
}

export type Project = {
    slug: string;
    thumbnail: {
        url: string;
    }
    title: string;
    shortDescription: string;
   technologies: knownTech[];
   pageThumbnail: {
       url: string;
   }
   sections: ProjectSection[];
   description: {
       raw: RichTextContent
    }
    liveProjectUrl?: string;
    githubUrl?: string;
}