<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';
	import { fade } from 'svelte/transition';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<div in:fade="{{duration:400}}" out:fade="{{duration:0}}">
		<slot></slot>
	</div>
{/if}