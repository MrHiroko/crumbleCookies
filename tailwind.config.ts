import type { Config } from 'tailwindcss'

export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				// Здесь вы можете добавить свои цвета
			},
			fontFamily: {
				// Здесь вы можете добавить свои шрифты
			},
		},
	},
	plugins: [],
} satisfies Config
