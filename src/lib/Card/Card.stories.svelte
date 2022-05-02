<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Card from './Card.svelte';

	const card = {
		test: 'testData for card 1',
		test2: 'testData for card 1'
	};
	const backgroundUrl =
		'https://s3.amazonaws.com/upload.uxpin/files/1226610/1181301/image-04b7811a145d687b85248c8059260f4d-a72c4c.png';
</script>

<Meta
	title="HMR/Card"
	component={Card}
	argTypes={{
		header: { control: 'text' },
		justifyHeader: {
			options: ['left', 'center', 'right'],
			control: { type: 'select' }
		},
		title: { control: 'text' },
		justifyTitle: {
			options: ['left', 'center', 'right'],
			control: { type: 'select' }
		},
		description: { control: 'text' },
		justifyDescription: {
			options: ['left', 'center', 'right'],
			control: { type: 'select' }
		},
		backgroundUrl: { control: 'text' },
		classes: { control: 'text' }
	}}
/>

<Template let:args>
	<Card {...args} />
</Template>

<Story
	name="Primary"
	args={{
		header: 'Header',
		justifyHeader: 'center',
		title: 'Title',
		justifyTitle: 'left',
		description: 'Description',
		justifyDescription: 'left',
		backgroundUrl: backgroundUrl,
		classes: 'grid p-16'
	}}
/>
