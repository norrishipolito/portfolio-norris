import React from "react";
import type { SVGProps } from "react";

export function LineMdBeer(props: SVGProps<SVGSVGElement>) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path strokeDasharray={60} strokeDashoffset={60} d="M18 3L16 21H7L5 3z">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.45s"
            values="60;0"
          ></animate>
        </path>
        <path
          strokeDasharray={14}
          strokeDashoffset={14}
          d="M6 7.67C6.6 7.3 7.22 7 8 7C10 7 11 9 13 9C14.64 9 15.6 7.66 17 7.17"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.525s"
            dur="0.15s"
            values="14;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
