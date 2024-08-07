import svgToDataUri from 'mini-svg-data-uri';
import defaultTheme from 'tailwindcss/defaultTheme';

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist Sans', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				spotlight: "spotlight 2s ease .79s 1 forwards",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
		}
	},
	plugins: ["prettier-plugin-tailwindcss", "@tailwindcss/aspect-ratio", addVariablesForColors,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-box": () => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg width="79" height="79" xmlns="http://www.w3.org/2000/svg">
							<line x1="79" y1="0" x2="79" y2="79" stroke="currentColor" stroke-width="0.5" />
							<line x1="79" y1="79" x2="0" y2="79" stroke="currentColor" stroke-width="0.5" />
						  </svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
