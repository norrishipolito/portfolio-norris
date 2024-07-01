import React, { type SVGProps } from "react";

const MaintenanceReact = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          stroke-dasharray="60"
          stroke-dashoffset="60"
          d="M12 3L21 20H3L12 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.375s"
            values="60;0"
          ></animate>
        </path>
        <path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.45s"
            dur="0.15s"
            values="6;0"
          ></animate>
          <animate
            attributeName="stroke-width"
            begin="0.75s"
            dur="2.25s"
            keyTimes="0;0.1;0.2;0.3;1"
            repeatCount="indefinite"
            values="2;3;3;2;2"
          ></animate>
        </path>
      </g>
      <circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s"
          dur="0.3s"
          values="0;1"
        ></animate>
        <animate
          attributeName="r"
          begin="0.975s"
          dur="2.25s"
          keyTimes="0;0.1;0.2;0.3;1"
          repeatCount="indefinite"
          values="1;2;2;1;1"
        ></animate>
      </circle>
    </svg>
  );
};

export default MaintenanceReact;
