const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(svelte)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-essentials',
		'@storybook/addon-postcss',
		'@storybook/addon-links',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	async viteFinal(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, '../src/lib')
		};
		config.optimizeDeps = {
			...config.optimizeDeps,
			// Entries are specified relative to the root
			entries: [
				`${path.relative(config.root, path.resolve(__dirname, '../src'))}/**/*.stories.@(svelte)`
			],
			// Add all the required deps to optimizeDeps as mentioned in docs: https://github.com/storybookjs/builder-vite#known-issues
			include: [
				...(config?.optimizeDeps?.include ?? []),
				'@storybook/svelte',
				'@storybook/addon-docs/dist/esm/frameworks/common/config.js',
				'@storybook/addon-docs/dist/esm/frameworks/svelte/config.js',
				'@storybook/svelte/dist/esm/client/preview/config',
				'@storybook/addon-actions/dist/esm/preset/addDecorator.js',
				'@storybook/addon-actions/dist/esm/preset/addArgs.js',
				'@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js',
				'@storybook/addon-backgrounds/dist/esm/preset/addParameter.js',
				'@storybook/addon-measure/dist/esm/preset/addDecorator.js',
				'@storybook/addon-outline/dist/esm/preset/addDecorator.js',
				'@storybook/addon-links/dist/esm/preset/addDecorator.js'
			]
		};
		return config;
	},
	svelteOptions: {
		preprocess: preprocess({ postcss: true })
		// hot: false // <-- causes page reloads all the time. https://github.com/storybookjs/builder-vite/issues/52
	}
};
