<script>
  import Price_Format from "./price-format.svelte";
  export let name;
  export let description;
  export let price;
  export let suffix;
  export let btn;
  export let slug;
</script>

<div class="pricing">
  <h2 class="package-name text-2xl font-semibold mb-4">{name}</h2>
  <p class=" text-gray-500 mb-8 text-sm">{description}</p>
  <p class=" text-gray-400 font-semibold uppercase mb-4 mt-auto">Starting at</p>
  <p class="text-4xl mb-12">
    <b>
      <Price_Format amount={price} />
    </b> <sub class="text-base">{suffix}</sub>
  </p>
  <a
    sveltekit:prefetch
    href={slug}
    class="rounded-full bg-primary text-lighter py-3 px-6">{btn}</a
  >
</div>

<style style lang="postcss">
  .pricing {
    @apply bg-color1 rounded-2xl shadow-around_sm py-8 xsm:py-12 px-4 xsm:px-8 lg:px-6 xl:px-8 text-center flex flex-col;
  }
</style>
