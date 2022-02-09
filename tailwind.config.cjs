// const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require('tailwindcss/colors')

const config = {
	mode: "jit",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		// options: {
		// 	defaultExtractor: (content) => [
		// 		// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
		// 		...tailwindExtractor(content),
		// 		// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
		// 		...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
		// 	],
		// },
		// safelist: [/^svelte-[\d\w]+$/],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		boxShadow : {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none',
			around_sm: '0px 4px 16px 0px rgba(80, 219, 190, .4)',
			around: '0px 8px 32px 0px rgba(80, 219, 190, .4)'
		},
		screens: {
			'xsm' : '480px',
			'sm': '640px',
			'md': '768px',
			'mlg' : '992px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
    	},
		extend: {
			fontWeight: ['dark'],
			boxShadow : ['dark'],
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary:{
				  lighter: '#D5FFE5',
				  light: '#43BA65',
				//   DEFAULT: '#1dc68c',#11a683
				  DEFAULT: '#3eae5e',
				},
				secondary: '#FFFF70',
				color1: 'var(--color-1)',
				color2: 'var(--color-2)',
				color3: 'var(--color-3)',
				color4: 'var(--color-4)',
				color5: 'var(--color-5)',
				color6: 'var(--color-6)',
				dark: 'var(--color-dark)',
				darker: 'var(--color-darker)',
				light: 'var(--color-light)',
				lighter: 'var(--color-lighter)',
				red: colors.red,
				gray: colors.gray,
			},
		},
		fill: theme => ({
			current: 'currentColor',
			primary: theme('colors.primary'),
			color1: theme('colors.color1'),
			color2: theme('colors.color2'),
			color3: theme('colors.color3'),
			color4: theme('colors.color4'),
			color5: theme('colors.color5'),
			color6: theme('colors.color6'),
			secondary: theme('colors.secondary'),
			lighter: theme('colors.lighter'),
		}),
		customForms: theme => ({
			dark: {
			  'input, textarea, multiselect, checkbox, radio': {
				  backgroundColor: theme('colors.color3'),
			  },
			  select: {
				  backgroundColor: theme('colors.color2'),
			  },
			},
			sm: {
			  'input, textarea, multiselect, select': {
				fontSize: theme('fontSize.sm'),
				padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
			  },
			  select: {
				paddingRight: `${theme('spacing.4')}`,
			  },
			  'checkbox, radio': {
				width: theme('spacing.3'),
				height: theme('spacing.3'),
			  },
			}
		})
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/custom-forms'),
	],
};

module.exports = config;