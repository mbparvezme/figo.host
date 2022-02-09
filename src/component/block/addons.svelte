<script>
  import BLOCK_TITLE from "../element/block-title.svelte";
  import Price_Format from "../element/price-format.svelte";
  export let addons;
</script>

<section class="px-8 py-24 bg-color2">
  <BLOCK_TITLE title="NEED SOME EXTRAS!" />
  <div class="grid gap-4 md:gap-8" class:sm:grid-cols-2={addons.length == 2} class:sm:grid-cols-3={addons.length == 3} class:xsm:grid-cols-2={addons.length == 4} class:lg:grid-cols-4={addons.length == 4}>
    {#each addons as addon}
      <div class="addon">
        <h4 class="font-semibold text-lg">{@html addon.info}</h4>
        <p class="text-sm">
          <Price_Format amount={addon.rate} addon={addon} />
          {#if undefined != addon.scale} {addon.scale} {/if}
          {addon.suffix}
        </p>
      </div>
    {/each}
  </div>
</section>

<style style lang="postcss">
  .addon {
    @apply px-4 py-8 rounded-lg text-center bg-color1 rounded-xl shadow-3xl hover:shadow-lg transition-all duration-300 cursor-pointer;
  }
</style>
