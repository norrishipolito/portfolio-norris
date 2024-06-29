interface Experience {
  company: string;
  jobTitle: string;
  dateRange: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Lexmark",
    jobTitle: "Software Engineer",
    dateRange: "July 2023 - Present",
    description:
      "Designed and implemented an information system to scan for printer vulnerabilities, enhancing network security.",
  },
  {
    company: "Lexmark",
    jobTitle: "Software Engineer Intern",
    dateRange: "June 2022 - August 2022",
    description:
      "Designed and implemented an information system to scan for printer vulnerabilities, enhancing network security.",
  },
  {
    company: "Freelance",
    jobTitle: "Full Stack Developer",
    dateRange: "October 2021 - July 2023",
    description:
      "Built web applications for school projects and small businesses.",
  },
];

export default experiences;
