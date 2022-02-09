<script>
  export let title;
  export let tag = 3;
  export let align = "center";
  export let sub = false;

  export let link = false;
  export let linkText = "VIEW ALL &rarr;";
</script>

<div
  class:flex={link}
  class:flex-wrap={link}
  class:items-center={link}
  class:justify-between={link}
  class:text-center={!link && align == "center"}
  class:mb-12={!sub}
  class:mb-2={sub}>
  <div class="text-2xl xsm:text-3xl font-medium">
    {#if      tag == 1}<h1>{@html title}</h1>
    {:else if tag == 2}<h2>{@html title}</h2>
    {:else if tag == 4}<h4>{@html title}</h4>
    {:else if tag == 5}<h5>{@html title}</h5>
    {:else if tag == 6}<h6>{@html title}</h6>
    {:else}            <h3>{@html title}</h3>
    {/if}

    {#if sub != false}<p class="text-center mb-12 text-lg text-gray-500">{@html sub}</p>{/if}
  </div>

  {#if link != false}<a href="{link}" sveltekit:prefetch>{@html linkText}</a>{/if}

</div>

<style style lang="postcss">
  a{
    @apply text-xs px-3 py-2 bg-primary text-lighter rounded-full leading-none;
  }
</style>
