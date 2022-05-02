module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary, #bc5801)',
				'primary-variant': 'var(--color-primary-variant, #a24c01)',
				secondary: 'var(--color-secondary, #333333)',
				'secondary-variant': 'var(--color-secondary-variant, #515151)',
				background: 'var(--color-background, #ffffff)',
				surface: 'var(--color-surface, #ffffff)',
				error: 'var(--color-error, #b00020 )',

				'on-primary': 'var(--color-on-primary, #ffffff)',
				'on-secondary': 'var(--color-on-secondary, #ffffff)',
				'on-background': 'var(--color-on-background, #000000)',
				'on-error': 'var(--color-on-error, #ffffff)',
				white: '#FFFFFF'
			},
			minWidth: {
				'button-small': '5rem',
				'button-medium': '8rem',
				'button-large': '9rem'
			}
		}
	},
	corePlugins: {
		float: false
	},
	plugins: []
};
