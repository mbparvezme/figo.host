<!-- <script context="module">
  export async function load({ page, fetch, session, context }) {
    const url = `https://api.figo.host/public/blog`;
    const res = await fetch(url);
    if (res.ok) {
      return {props:{data: await res.json()}};
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script> -->

<script>
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import Meta from "../../component/element/meta.svelte";
  import PostSnip from "../../component/element/postPreview.svelte";
  export let data = [];

</script>

<Meta
  titlePrefix = "Blog - "
  description = "Figo Host in-depth articles about how we build the fastest next generation web hosting platform. Our Blog offers news about websites, domains, hosting, online marketing, WordPress and more."
  keywords    = "domain blog, hosting blog, hosting news, domain updates, hosting updates, web security news"
/>

<Header center="true">
  <Hero title="FIGO HOST BLOG" btn={false}/>
</Header>

<section class="px-8 py-24">
  {#if data.length > 0}
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each data as post}
        <PostSnip {post} />
      {/each}
    </div>
  {:else}
    <p class="text-center text-2xl opacity-50 select-none">NO POST AVAILABLE</p>
  {/if}
</section>