<script>
  import BLOCK_TITLE from "../element/block-title.svelte";
  export let features;
</script>

<section class="px-8 py-32 bg-color2">
  <BLOCK_TITLE title="FEATURES" />
  <div class="grid md:grid-cols-3 features">
    {#each features as feature}
      <div class="feature">
        <h4 class="font-bold mb-2 text-sm">{feature.title}</h4>
        <p class="text-sm">{feature.info}</p>
      </div>
    {/each}
  </div>
</section>

<style style lang="postcss">
  .features .feature {
    @apply p-8 sm:px-16 md:px-8 lg:px-16 sm:py-20 md:py-16 lg:py-20 rounded-2xl;
  }
  .features .feature:nth-child(2n + 1) {
    @apply bg-color1;
  }
</style>
