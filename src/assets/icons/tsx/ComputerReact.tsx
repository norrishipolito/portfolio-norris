import React from "react";
import type { SVGProps } from "react";

export function LineMdComputer(props: SVGProps<SVGSVGElement>) {
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
        <path strokeDasharray={6} strokeDashoffset={6} d="M12 21H17M12 21H7">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.225s"
            values="6;0"
          ></animate>
        </path>
        <path strokeDasharray={6} strokeDashoffset={6} d="M12 21V17">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.15s"
            values="6;0"
          ></animate>
        </path>
        <path strokeDasharray={64} strokeDashoffset={64} d="M12 17H3V5H21V17Z">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.225s"
            dur="0.45s"
            values="64;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
