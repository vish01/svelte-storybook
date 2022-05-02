<script>
	export let justifyTitle = 'left';

	export let justifyDescription = 'left';

	export let justifyHeader = 'left';

	export let title = '',
		backgroundUrl = '',
		description = '',
		header = '';

	/** @type {string} */
	export let classes = 'grid p-16';
	const justMap = {
		right: 'justify-self-end',
		left: 'justify-self-start',
		center: 'justify-self-center'
	};
</script>

<div class={classes} style="background: url({backgroundUrl});">
	{#if header}
		<h1 class="mb-2 heading {justMap[justifyHeader]}">
			{header}
		</h1>
	{/if}
	<h3 class="mb-2 pt-2 title {justMap[justifyTitle]}">
		{title}
	</h3>
	<p class="mb-2 description {justMap[justifyDescription]}">
		{description}
	</p>
</div>
