<script>
  import { priceDropdownUpdater } from "$lib/store";
  import { chevron_down } from "$lib/constant";
  import Price_Format from "./price-format.svelte";
  export let data;
  export let textSize = "sm";
  let showPricingDropwodn = false;
  let selectedPackageCycle = data.pricing[0];

  $: {
    dataIsChanged(data);
  }

  function dataIsChanged(data) {
    selectedPackageCycle = data.pricing[0];
  }
</script>

<div
  class="pricing"
  class:show={showPricingDropwodn && data.pricing.length > 1}
  on:click={() => (showPricingDropwodn = !showPricingDropwodn)}
>
  <button class="select-btn btn">
    <div class="between-center mb-3">
      <b
        class:text-sm={textSize == "sm"}
        class:text-lg={textSize == "lg"}
        class:text-xl={textSize == "xl"}
      >
        {selectedPackageCycle.label} @
        <Price_Format
          amount={parseFloat(selectedPackageCycle.price) +
            parseFloat($priceDropdownUpdater ? data.managedService : 0)}
            prefixLg={true}
        /><span class="font-light">/{data.pricing_cycle||'mo'}</span></b>{#if data.pricing.length > 1}{@html chevron_down}{/if}
    </div>
    {#if data.price != undefined}
    <div class="between-center text-xs font-semibold dark:font-medium">
      <span class="text-gray-400">Renews @ <Price_Format amount={data.price} prefixLg={true} /></span>
      {#if parseFloat(data.price) > parseFloat(selectedPackageCycle.price)}
        <span class="text-primary">
          SAVE {Math.floor(
            (1 -
              parseFloat(selectedPackageCycle.price) / parseFloat(data.price)) *
              100
          ) + 1}%</span
        >
      {/if}
    </div>
    {/if}
  </button>

  {#if data.pricing.length > 1}
    <div class="dropdown">
      {#each data.pricing as pricing}
        <button class="btn" on:click={() => (selectedPackageCycle = pricing)}>
          <div class="between-center mb-3">
            <b class="text-sm">{pricing.label} @ <Price_Format amount={pricing.price} prefixLg={true}/><span class="font-light">/{data.pricing_cycle||'mo'}</span></b>
          </div>
          <div class="between-center text-xs font-semibold dark:font-medium">
            <span class="text-gray-400">Renews @ <Price_Format amount={data.price} prefixLg={true}/></span>
            {#if parseFloat(data.price) > parseFloat(pricing.price)}
              <span class="text-primary">SAVE {Math.floor((1 - pricing.price / data.price) * 100) + 1}%</span>
            {/if}
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style style lang="postcss">
  .pricing {
    @apply relative;
  }
  .pricing .select-btn {
    @apply rounded-lg shadow-around_sm px-3 py-4 w-full;
  }
  .pricing .dropdown {
    @apply rounded-b-xl shadow-around_sm bg-color1 absolute hidden w-full z-[1];
  }
  .pricing.show .select-btn {
    @apply rounded-b-none;
  }
  .pricing.show .dropdown {
    @apply block;
  }
  .pricing .dropdown button {
    @apply w-full px-3 py-4 rounded-none border-t dark:border-gray-700 hover:bg-color2 dark:hover:bg-color3 transition-all duration-300;
  }
</style>
