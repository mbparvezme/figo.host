<script>
  import { whmcsLink } from "$lib/store"
  import PRICING_BTN from "./pricing-btn.svelte"
  export let data
  export let start = false
  export let btn = "GET STARTED"
</script>

<div
  class="package"
  class:border-2={data.status == 2}
  class:shadow-around={data.status == 2}
  class:shadow-inner={data.status != 2}
  class:md:col-start-2={start && start == 2}
  class:md:col-start-3={start && start == 3}
>

  <h2 class="package-name">{data.title}</h2>

  <PRICING_BTN {data} />

  <ul class="package-feature dark:border-gray-700">
    {#each data.data as spec}
      <li>{@html spec}</li>
    {/each}
  </ul>

  <a href={$whmcsLink + "cart.php?a=add&pid=" + data.id + (data.url||'')}
    class="rounded-full bg-primary text-lighter py-3 px-6 mt-auto">{btn}</a>

</div>

<style style lang="postcss">
  .package {
    @apply bg-color1 py-12 px-8 lg:px-4 xl:px-8 text-center rounded-lg flex flex-col;
  }
  .package.border-2 {
    @apply border-primary;
  }
  .package-name {
    @apply text-3xl font-light mb-8 dark:border-gray-700 uppercase;
  }
  .package-feature {
    @apply pt-8 pb-4 lg:px-4 xl:px-0 border-b mb-12 text-left;
  }
  .package-feature li {
    @apply mb-3;
  }
</style>
