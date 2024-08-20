/** @type {import('tailwindcss').Config} */


export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				action: "#FF3F3F"
			}
		}
	},
	plugins:[],
}
