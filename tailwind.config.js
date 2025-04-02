/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				leonore: ["Leonore", "sans-serif"],
			},
			colors: {
				testColor: "#ff00ff",
			},
      // bg colors
      bgColor: {
        testColor: "#ff00ff",
      },
		},
	},
	plugins: [],
};
