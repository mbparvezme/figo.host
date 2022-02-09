<script context="module">
  export async function load({fetch}) {
    const res = await fetch("/api/review");
    if (res.ok) {return {props: {data: await res.json()}}}
    return {status: res.status, error: new Error(`Could not load ${url}`)}
  }
</script>

<script>
  export let data;
  import Header from "../component/layout/header.svelte";
  import Hero from "../component/element/page-hero-content.svelte";
  import Review from "../component/element/review.svelte";
  import BLOCK_TITLE from "../component/element/block-title.svelte";
  import Meta from "../component/element/meta.svelte";
</script>

<Meta
  titlePrefix = "Client Reviews - "
  description = "Our clients loves us. Read the reviews from our clients."
/>

<Header>
    <Hero title="REVIEWS" subtitle="OUR CLIENTS LOVE US" btn={false}/>
</Header>

<section class="px-8 py-24">
  <BLOCK_TITLE title="REVIEWS FROM OUR CLIENTS" />
  {#if data.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each data as review}
        <Review {...review} />
      {/each}
    </div>
  {:else}
    <p class="text-center text-2xl opacity-50 select-none">Under Maintenance</p>
  {/if}
</section>