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

export const projects: Project[] = [
  {
    slug: "test",
    title: "test",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", // 100 characters
    projectImg: "https://via.placeholder.com/150",
    href: "/test",
    subTitle: "Sub Title",
    icons: [
      {
        href: "https://flutter.dev/",
        src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg",
        alt: "Flutter",
      },
      {
        href: "https://nextjs.org/",
        src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
        darkSrc:
          "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
        alt: "NextJs",
      },
    ],
    liveLink: "https://flutter.dev/",
    sourceLink: "https://flutter.dev/",
  },
];
