<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: status
			}
		};
	}
</script>

<script>
	export let title;
</script>

<section class="pt-48 pb-24">
    <h1>{title}</h1>
</section>