import type { RichTextContent } from "@graphcms/rich-text-types";
import { knownTech } from "./projects";

export type Social = {
    url: string;
    iconSvg: string;
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: knownTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
    knownTechs: knownTech[];
};

export type HomePageData = {
  page: HomePageInfo;
};
