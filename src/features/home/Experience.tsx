import React from "react";
import experiences from "./Experiences";

type Props = {};

const ExperienceContent = ({}: Props) => {
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-1 border-l-4 border-gray-600 dark:border-gray-500">
        {experiences.map((experience, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-0 pl-5 ml-[0.125rem] ${
              idx == 0 ? "" : "borde-l-2"
            }border-l-2 text-gray-600 dark:text-gray-300`}
          >
            <h4 className="text-md font-semibold">{experience.jobTitle}</h4>
            <h3 className="text-sm font-normal">{experience.company}</h3>

            <p className="text-xs font-light">{experience.dateRange}</p>
            <p className="text-sm mt-1">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
