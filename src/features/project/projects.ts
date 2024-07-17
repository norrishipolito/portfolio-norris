export type Icon = {
  href: string;
  src: string;
  alt: string;
  darkSrc?: string;
};

export type Project = {
  slug: any;
  title: string;
  description: string;
  projectImg: string;
  href: string;
  subTitle: string;
  icons: Icon[];
  liveLink?: string;
  sourceLink?: string;
};

export const projects: Project[] = [];
