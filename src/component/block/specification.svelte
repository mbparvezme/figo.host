<script>
  export let data;
  let text =
    "We are continuously updating our server configurations to provide better server for our customers. We will inform each customer about the major changes if required. No features will be downgraded. We are committed to provide the better service and solutions to our valuable customers.";
</script>

<section class="px-8 py-32 bg-color3">
  <div class="grid md:grid-cols-2 gap-12">
    <div>
      <h4 class="text-2xl font-semibold mb-4 uppercase">SPECIFICATION</h4>
      <p class="dark:font-light text-lg">
        {#if undefined == data.text}{text}{:else}{data.text}{/if}
      </p>
    </div>
    <div class="grid sm:grid-cols-2 gap-2 specification">
      {#each data.items as specification}
        <p>{specification}</p>
      {/each}
    </div>
  </div>
</section>

<style style lang="postcss">
  .specification p {
    @apply py-3 px-4 rounded-full bg-color2 shadow-2xl text-sm;
  }
</style>
