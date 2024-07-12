export const APP_STATIC_LINKS = {
  home: "/",
  about: "/about",
  projects: "/projects",
} as const;
export const NAV_LINKS = [
  {
    href: APP_STATIC_LINKS.home,
    label: "Home",
  },
  {
    href: APP_STATIC_LINKS.about,
    label: "About",
  },
  {
    href: APP_STATIC_LINKS.projects,
    label: "Projects",
  },
];

export const CONTACT_LINKS = {
  github: "https://github.com/norrishipolito",
  linkedin: "https://www.linkedin.com/in/norrishipolito/",
  email: "norrishipolito@gmail.com",
} as const;
