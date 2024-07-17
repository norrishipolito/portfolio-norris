import React from "react";
import type { SVGProps } from "react";

export function RightArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g transform="translate(24 0) scale(-1 1)">
        <g
          id="theGroup"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        >
          <path stroke-dasharray="14" stroke-dashoffset="14" d="M19 12H5.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3"
              values="14;0"
              begin="0.1s;knowMeMore.mouseover;"
            ></animate>
          </path>
          <path
            stroke-dasharray="8"
            stroke-dashoffset="8"
            d="M5 12L10 17M5 12L10 7"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="8;0"
              begin="0.1s;knowMeMore.mouseover;"
            ></animate>
          </path>
        </g>
      </g>
    </svg>
  );
}
