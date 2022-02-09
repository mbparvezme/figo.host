<script>
  import { currentCurrency } from "$lib/store";
  export let amount;
  export let addon = false;
  export let prefixLg = false;
</script>
{#if !addon}
  {#if $currentCurrency.code == "bdt" || $currentCurrency.code == "inr"}
    {#if prefixLg}
    <span>{$currentCurrency.symbol}</span>{Math.floor(
      amount * $currentCurrency.rate
      ).toFixed(2)}
    {:else}
      <span style="font-size:80%;">{$currentCurrency.symbol}</span>{Math.floor(
        amount * $currentCurrency.rate
      ).toFixed(2)}
    {/if}
  {:else}
    {$currentCurrency.symbol}{(amount * $currentCurrency.rate).toFixed(2)}
  {/if}
{:else}
  <span class="text-2xl">
    <sup class="relative -top-2 text-sm">{$currentCurrency.symbol}</sup>
    {#if $currentCurrency.code == "bdt"}
    {Math.floor(amount * $currentCurrency.rate).toFixed(2)}
    {:else}
    {(amount * $currentCurrency.rate).toFixed(2)}
    {/if}
  </span>
{/if}