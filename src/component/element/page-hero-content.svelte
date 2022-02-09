<script>
  import { check, threeDots } from "$lib/constant";
  import DomainSearch from "./domainSearch.svelte";
  import DomainTransfer from "./domainTransfer.svelte";

  export let title;
  export let subtitle = false;
  export let text = false;
  export let center = true;
  export let domainBox = false;
  
  export let btn = "plans";
  let toggleDropdown = (selector) => {
    let allDropdown = document.querySelectorAll(".dropdown");
    allDropdown.forEach((e) => {
      if ("#" + e.getAttribute("id") != selector) e.classList.remove("show");
    });
    document.querySelector(selector).classList.toggle("show");
  };
</script>

<section class="pt-8 pb-32 px-8"
  class:text-center={center}
  class:flex={domainBox}
  class:flex-col={domainBox}
  class:items-center={domainBox}>
  <h2 class="text-2xl sm:text-4xl font-extrabold mb-8">
    {@html title}
    {#if subtitle}
    <span class="text-xl sm:text-3xl block font-normal pt-4">{@html subtitle}</span>
    {/if}
  </h2>
  {#if text}
  <p class="text-lg font-light mb-8 sm:w-1/2" class:mx-auto={center}>{@html text}</p>
  {/if}
  {#if !domainBox && btn}
  {#if btn != 'legal'}
    <a href="#{btn}" class="btn bg-primary rounded-full inline-block px-6 py-3 text-lighter uppercase">VIEW {btn}</a>
    {:else}
    <div class="dropdown w-52 xsm:w-64 mx-auto" id="testDropdown" on:click={() => toggleDropdown("#testDropdown")}>
      <b class="backdrop" />
      <button class="btn dropdown-label text-lighter bg-primary px-6 py-3 rounded-full w-full flex justify-between items-center">TERMS & POLICIES {@html threeDots}</button>
      <div class="dropdown-content-wrap">
        <div class="dropdown-content dropdown-full text-left">
          <a class="dropdown-link" href="/legal">All legal policies & Notices</a>
          <span class="divider"></span>
          <a class="dropdown-link" href="/legal/tos">Terms of service</a>
          <a class="dropdown-link" href="/legal/acceptable-use-policy">Acceptable use policy</a>
          <a class="dropdown-link" href="/legal/privacy">Privacy policy</a>
          <a class="dropdown-link" href="/legal/data-request-policy">Data request policy</a>
          <a class="dropdown-link" href="/legal/copyright-trademark-policies">Copyright & Trademark Policy</a>
          <a class="dropdown-link" href="/legal/limit-policy">Unmetered / Innumerable policy</a>
          <a class="dropdown-link" href="/legal/backup-policy">Backup policy</a>
        </div>
      </div>
    </div>
    {/if}
  {/if}

  {#if domainBox != false}
    {#if domainBox == true}
      <DomainSearch />
    {:else if domainBox == 'transfer'}
      <!-- <DomainTransfer /> -->
      <a href="https://my.figo.host/cart.php?a=add&domain=transfer" class="btn h-16 bg-primary font-semibold px-8 w-auto text-lighter rounded-full whitespace-nowrap shadow-around flex items-center">CONTINUE TO TRANSFER</a>
    {/if}
    <p class="pt-8 text-xs flex flex-col sm:flex-row">
      <span class="mr-6 flex items-center">
        <span class="w-5 h-5 mr-2 text-primary">{@html check}</span> Free DNS Management</span>
      <span class="mr-6 flex items-center">
        <span class="w-5 h-5 mr-2 text-primary">{@html check}</span> Free Privacy Protection</span>
      <span class="mr-6 flex items-center">
        <span class="w-5 h-5 mr-2 text-primary">{@html check}</span> Domain Theft Protection</span>
    </p>
  {/if}
</section>
