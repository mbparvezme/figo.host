<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/tld");
    if (res.ok) {
      return {props: {data: await res.json()}}
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
  export let data;
  import { onMount } from "svelte";
  import Header from "../component/layout/header.svelte";
  import Hero from "../component/element/page-hero-content.svelte";
  import BLOCK_TITLE from "../component/element/block-title.svelte";
  import Domain from "../component/element/domain.svelte";
  import Price_Format from "../component/element/price-format.svelte";
  import Meta from "../component/element/meta.svelte";
  
  let showAll = false
  let allTLD = false
  let toggleAllTld = async () => {
    showAll = !showAll

    if(!allTLD){
      const res = await fetch("/api/all-tld");
      allTLD = await res.json()
    }
  }

  onMount(() => {
    let input = document.getElementById("searchTld");
    input.addEventListener("keyup", () => {
      let rows = document.querySelectorAll(".tld-row");
      rows.forEach((row) => {
        if (input.value != "") {
          let tld = row.querySelector("div:first-child").innerText;
          if (tld.indexOf(input.value.toLowerCase()) >= 0) {
            row.classList.add("grid");
            row.classList.remove("hidden");
          } else {
            row.classList.remove("grid");
            row.classList.add("hidden");
          }
        } else {
          row.classList.add("grid");
          row.classList.remove("hidden");
        }
      });
    });

});
</script>

<Meta
  titlePrefix = "Domain Registration - "
  description = "Instantly find the Domain Name that you've been looking for and register without any hustle. Find the right domain name today from Figo Host."
  keywords    = "domain checker, free domain, cheap domain, cheapest domain, cheap domain, best domain, domain privacy protection, cheap domain name, top domain registrars, cheap .com domain, best domain registration, private domain, cheap registrar, buy domain name cheap"
>
</Meta>


<Header type="globe">
  <Hero
    title="DOMAIN NAME BUILDS YOUR BRAND"
    subtitle="GET A PERFECT DOMAIN FOR YOUR BUSINESS"
    text="Secure your brand today by getting a perfect domain for your business.
    Type your expected domain name & register if available"
    domainBox={true}
  />
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-8 pt-4 pb-32">
    {#each data.offer as domain}
      <Domain tld={domain.tld} fee={domain.fee} renew={domain.renew} />
    {/each}
  </div>
</Header>

<section class="px-8 py-32 bg-color2">
  <BLOCK_TITLE title="DOMAIN PRICE LIST" sub="Popular domains at a great price" />
  <div class="px-8 sm:px-12 py-20 bg-color1 rounded-2xl shadow-inner">
    <!-- TLD HEAD -->
    <div class="hidden sm:grid grid-cols-3 sm:grid-cols-5">
      <div class="sm:col-span-2">&nbsp;</div>
      <div class="text-center py-4 sm:text-lg">
        Register<span class="block text-sm text-gray-500">/yr</span>
      </div>
      <div class="text-center py-4 sm:text-lg bg-color2 rounded-t-xl">
        Renew<span class="block text-sm text-gray-500">/yr</span>
      </div>
      <div class="text-center py-4 text-lg bg-color3 rounded-t-xl">
        Transfer<span class="block text-sm text-gray-500">/yr</span>
      </div>
    </div>
    <div class="p-2 bg-color2 rounded-l-xl rounded-r-xl sm:rounded-r-none">
      <input id="searchTld" placeholder="Search TLD..." type="text" />
    </div>

    {#each data.tld as tld}
      <div class="tld-row grid dark:border-gray-700">
        <div class="tld">
          {tld.tld}
          {#if tld.group == 'sale'}
            <span class="inline-block text-xs font-medium bg-primary rounded-lg px-2 text-lighter">SALE</span>
          {/if}
        </div>
        <div class="register">
          <Price_Format amount={tld.fee} />
          {#if tld.group == 'sale'}
          <small class="text-red-500 text-sm block"><del><Price_Format amount={tld.renew} /></del></small>
          {/if}
        </div>
        <div class="renew"><Price_Format amount={tld.renew} /></div>
        <div class="transfer"><Price_Format amount={tld.transfer} /></div>
      </div>
    {/each}

    {#if showAll}
      {#if !allTLD}
      <div class="p-8 flex justify-center">
        <div class="spinner"></div>
      </div>
      {:else}
        {#each allTLD as tld}
          <div class="tld-row grid dark:border-gray-700">
            <div class="tld">
              {tld.tld}
              {#if tld.group == 'sale'}
                <span class="inline-block text-xs font-medium bg-primary rounded-lg px-2 text-lighter">SALE</span>
              {/if}
            </div>
            <div class="register">
              <Price_Format amount={tld.fee} />
              {#if tld.group == 'sale'}
              <small class="text-red-500 text-sm block"><del><Price_Format amount={tld.renew} /></del></small>
              {/if}
            </div>
            <div class="renew"><Price_Format amount={tld.renew} /></div>
            <div class="transfer"><Price_Format amount={tld.transfer} /></div>
          </div>
        {/each}
      {/if}
    {/if}

    <p class="text-center mt-16">
      <button class="btn py-3 px-6 bg-primary rounded-full text-lighter" on:click={() => toggleAllTld()}>
        {#if showAll}- SHOW LESS{:else}+ SHOW MORE{/if}
      </button>
    </p>

  </div>
</section>

<style style lang="postcss" >
  #searchTld {
    @apply border-0 rounded-lg font-thin outline-none p-3 w-full text-xl bg-color1;
  }
  .tld-row {
    @apply sm:grid-cols-5 border-b sm:text-lg hover:bg-color3 transition-all duration-300 py-2 sm:py-0;
  }
  .tld-row > div {
    @apply py-1 sm:py-3 sm:text-center px-2 sm:px-0;
  }
  .tld-row div.tld {
    @apply sm:col-span-2 text-left font-semibold text-xl sm:text-lg flex items-center justify-between sm:pl-2;
  }
  .tld-row div.renew {
    @apply sm:bg-color2 transition-all duration-300;
  }
  .tld-row:hover div.renew {
    @apply sm:bg-color3;
  }
  .tld-row div.transfer {
    @apply sm:bg-color3;
  }
  .renew,.transfer{
    @apply md:flex md:items-center md:justify-center;
  }
  @media (max-width: 639px) {
    .tld-row div.register {
      @apply flex items-center;
    }
    .tld-row div.register small{
      @apply px-3;
    }
    .tld-row div.register:before {
      content: "Registration: ";
    }
    .tld-row div.renew:before {
      content: "Renewal: ";
    }
    .tld-row div.transfer:before {
      content: "Transfer: ";
    }
  }

  .spinner {
    @apply w-12 h-12 border-4 border-color3 rounded-full;
    border-top-color: var(--color6);
    -webkit-animation: spin .5s linear infinite;
    animation: spin .5s linear infinite;
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
