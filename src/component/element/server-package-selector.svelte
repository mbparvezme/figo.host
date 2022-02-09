<script>
  import { whmcsLink, priceDropdownUpdater } from "$lib/store";
  import Package_Btn from "./pricing-btn.svelte";
  export let selectedPackage;
  export let customPricing = true;
</script>

<div class="bg-color1 rounded-xl sticky top-20">
  <Package_Btn data={selectedPackage} textSize={"xl"} />
  {#if customPricing}
    <label
      class="flex justify-between items-center mt-8 cursor-pointer pb-4 border-b dark:border-gray-700"
    >
      <span class="select-none text-lg">Include managed service</span>
      <input
        type="checkbox"
        class="form-checkbox h-5 w-5 text-primary bg-color3"
        bind:checked={$priceDropdownUpdater}
      />
    </label>
  {/if}
  <div class="pt-8 text-right">
    <a
      href={$whmcsLink + "cart.php?a=add&pid=" + selectedPackage.id}
      class="rounded-xl bg-primary text-lighter py-3 px-6 mt-auto"
      >GET STARTED</a
    >
  </div>
</div>
