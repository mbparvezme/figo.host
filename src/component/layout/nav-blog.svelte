<script>
  import { onMount } from "svelte";
  import { currentCurrency, whmcsLink } from "$lib/store";
  import { currencies, chevron, threeDots } from "$lib/constant";

  let showSideNav = false;
  let sidebar = () => {
    showSideNav = !showSideNav;
    document.body.classList.toggle("overflow-hidden", showSideNav);
  };

  let toggleDropdown = (selector) => {
    let allDropdown = document.querySelectorAll(".dropdown");
    allDropdown.forEach((e) => {
      if ("#" + e.getAttribute("id") != selector) e.classList.remove("show");
    });
    document.querySelector(selector).classList.toggle("show");
  };

  let toggleCurrency = (cur) => {
    localStorage.setItem("currentCurrency", cur);
    currentCurrency.update(
      (data) =>
        (data = currencies.filter(
          (c) => c.code == localStorage.currentCurrency
        )[0])
    );
  };

  function toggleTheme() {
    localStorage.setItem(
      "theme",
      localStorage.theme == "light" ? "dark" : "light"
    );
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(localStorage.theme);
  }

  onMount(async () => {
    // STORING DEFAULT CURRENCY
    currentCurrency.update(
      (data) =>
        (data = currencies.filter(
          (c) => c.code == (localStorage.currentCurrency || "usd")
        )[0])
    );

    let nav = document.querySelector(".navbar");
    // adding scroll event
    window.addEventListener("scroll", () => {
      let bodyPos = document.body.getBoundingClientRect().top;
      if (bodyPos < 0) {
        nav.classList.add("bg-color1", "shadow-lg", "md:py-2");
        nav.classList.remove("bg-transparent", "md:py-8");
      } else {
        nav.classList.add("bg-transparent", "md:py-8");
        nav.classList.remove("bg-color1", "shadow-lg", "md:py-2");
      }
    });
    document.addEventListener(
      "readystatechange",
      (event) => {
        if (window.scrollY > 0) {
          nav.classList.add("bg-color1", "shadow-lg", "md:py-2");
          nav.classList.remove("bg-transparent", "md:py-8");
        } else {
          nav.classList.add("bg-transparent", "md:py-8");
          nav.classList.remove("bg-color1", "shadow-lg", "md:py-2");
        }
      },
      false
    );
  });
</script>
  
<nav class="navbar py-4 md:py-8">
  <button class="btn bg-transparent inline-block lg:hidden mr-4 xsm:mr-8" on:click={sidebar}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 16 16">
      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
    </svg>
  </button>
  <a sveltekit:prefetch href="/" class="logo xsm:mr-16">
    <svg class="w-12 block sm:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1515 1515"><path class="fill-primary" d="M1450.3,913.7l-536.6,536.6c-86.3,86.3-226.2,86.3-312.4,0L64.7,913.7c-86.3-86.3-86.3-226.2,0-312.4 L601.3,64.7c86.3-86.3,226.2-86.3,312.4,0l536.6,536.6C1536.6,687.6,1536.6,827.4,1450.3,913.7z"/><path class="fill-color1" d="M510.2,618.9c0-76.3,20.9-134.6,62.6-175c41.8-40.3,110.5-60.5,206.3-60.5h252.7v118.8H779.1 c-39.6,0-69,9.4-88,28.1s-28.6,48.2-28.6,88.6v104.8h321.8v118.8H662.5v297H510.2V618.9z"/></svg>
    <svg class="w-32 hidden sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4457.8 1515"><g><path class="fill-primary" d="M1450.3,913.7l-536.6,536.6c-86.3,86.3-226.2,86.3-312.4,0L64.7,913.7c-86.3-86.3-86.3-226.2,0-312.4 L601.3,64.7c86.3-86.3,226.2-86.3,312.4,0l536.6,536.6C1536.6,687.6,1536.6,827.4,1450.3,913.7z"/><path class="fill-color1" d="M510.2,618.9c0-76.3,20.9-134.6,62.6-175c41.8-40.3,110.5-60.5,206.3-60.5h252.7v118.8H779.1 c-39.6,0-69,9.4-88,28.1s-28.6,48.2-28.6,88.6v104.8h321.8v118.8H662.5v297H510.2V618.9z"/></g><g><path class="fill-color6" d="M1806.9,618.6c0-76.3,20.9-134.6,62.6-175c41.8-40.3,110.5-60.5,206.3-60.5h252.7v118.8h-252.7 c-39.6,0-69,9.4-88,28.1s-28.6,48.2-28.6,88.6v104.8H2281v118.8h-321.8v297h-152.3V618.6z"/><path class="fill-color6" d="M2455.4,515.4c-16.9-15.5-25.4-35.5-25.4-59.9c0-23.8,8.5-43.4,25.4-58.9c16.9-15.5,38.3-23.2,64.3-23.2 c25.9,0,47.3,7.8,64.2,23.2c16.9,15.5,25.4,35.1,25.4,58.9c0,24.5-8.5,44.5-25.4,59.9c-16.9,15.5-38.3,23.2-64.2,23.2 C2493.8,538.7,2472.4,530.9,2455.4,515.4z M2451.7,671.5c0-29.5,11.2-50.6,33.5-63.2c22.3-12.6,56.2-18.9,101.5-18.9v477.4 c0,28.8-11.2,49.7-33.5,62.6s-56.2,19.4-101.5,19.4V671.5z"/><path class="fill-color6" d="M2845.9,1347c-33.1-11.9-59-27.9-77.8-48.1c-18.7-20.2-28.1-42.5-28.1-67c0-24.5,8.5-41.8,25.4-51.8 c16.9-10.1,40.9-15.1,71.8-15.1c2.9,29.5,14.4,52.4,34.6,68.6c20.2,16.2,49.3,24.3,87.5,24.3c42.5,0,72.5-10.5,90.2-31.3 c17.6-20.9,26.5-49.7,26.5-86.4v-36.7c10.8-7.9,18.7-15.5,23.8-22.7l-4.3-5.4c-18.7,18.7-43.8,33.8-75.1,45.4 c-31.3,11.5-60.7,17.3-88,17.3c-40.3,0-76.3-8.1-108-24.3c-31.7-16.2-56.7-39.1-75.1-68.6c-18.4-29.5-27.5-63-27.5-100.5V783.8 c0-36,9.5-68.9,28.6-98.8c19.1-29.9,44.3-53.3,75.6-70.2s65-25.4,101-25.4c39.6,0,73.3,7.9,101,23.8s53.1,38.5,76.1,68l4.3-4.3 c-3.6-6.5-10.4-15.8-20.5-28.1c0-39.6,41.4-59.4,124.2-59.4v531.4c0,47.5-10.8,89.6-32.4,126.4s-51.7,65.5-90.2,86.4 c-38.5,20.9-81.9,31.3-130.1,31.3C2916.8,1364.9,2879,1358.9,2845.9,1347z M3046.7,998.2c21.6-16.2,32.4-35.5,32.4-57.8V787.1 c0-23-10.6-42.5-31.9-58.3c-21.2-15.8-48.1-23.8-80.5-23.8c-35.3,0-62.5,7.6-81.5,22.7c-19.1,15.1-28.6,36.7-28.6,64.8V935 c0,27.4,9.4,48.8,28.1,64.3c18.7,15.5,46.1,23.2,82.1,23.2C2998.5,1022.5,3025.1,1014.4,3046.7,998.2z"/><path class="fill-color6" d="M3413.4,1123.5c-37.8-16.9-67.5-40.5-89.1-70.8c-21.6-30.2-32.4-64.4-32.4-102.6V797.9 c0-38.9,10.6-74.1,31.9-105.8c21.2-31.7,50.6-56.7,88-75.1s80.3-27.5,128.5-27.5c48.2,0,91.2,9.2,129.1,27.5 c37.8,18.4,67.3,43.4,88.6,75.1c21.2,31.7,31.9,67,31.9,105.8v152.3c0,38.2-11,72.4-32.9,102.6c-22,30.2-51.8,53.8-89.6,70.8 c-37.8,16.9-80.1,25.4-126.9,25.4C3493.5,1148.9,3451.2,1140.4,3413.4,1123.5z M3625.1,1008.5c20.5-16.6,30.8-38.9,30.8-67V804.3 c0-29.5-10.3-53.5-30.8-71.8c-20.5-18.4-48.8-27.5-84.8-27.5c-35.3,0-63.4,9.2-84.2,27.5s-31.3,42.3-31.3,71.8v137.2 c0,28.1,10.4,50.4,31.3,67s49,24.8,84.2,24.8C3576.3,1033.3,3604.5,1025,3625.1,1008.5z"/><path class="fill-primary" d="M3870.7,1133.8c-7.9-7.7-11.8-17-11.8-27.9c0-10.9,3.9-20.4,11.8-28.4c7.8-8,17.4-12,28.7-12 c10.6,0,19.8,4,27.6,12c7.8,8,11.8,17.5,11.8,28.4c0,10.9-3.8,20.2-11.5,27.9c-7.7,7.7-17,11.5-27.9,11.5 C3888.1,1145.3,3878.6,1141.4,3870.7,1133.8z"/><path class="fill-color6" d="M4007.6,1020.3c10.2-12.6,23.6-18.9,40-18.9c28.6,0,43,16.1,43.2,48.4v89.4h-23.1v-89.5 c-0.1-9.8-2.3-17-6.7-21.6c-4.4-4.7-11.2-7-20.4-7c-7.5,0-14.1,2-19.8,6c-5.7,4-10.1,9.2-13.2,15.8v96.4h-23.1v-192h23.1V1020.3z"/><path class="fill-color6" d="M4119.4,1070.3c0-13.2,2.6-25.2,7.8-35.8c5.2-10.6,12.5-18.8,21.8-24.5c9.3-5.8,19.9-8.6,31.8-8.6 c18.4,0,33.3,6.4,44.7,19.1s17.1,29.7,17.1,50.9v1.6c0,13.2-2.5,25-7.6,35.4c-5,10.5-12.2,18.6-21.6,24.4 c-9.4,5.8-20.1,8.8-32.3,8.8c-18.3,0-33.2-6.4-44.6-19.1s-17.1-29.6-17.1-50.6V1070.3z M4142.6,1073c0,15,3.5,27,10.4,36.1 c7,9.1,16.3,13.6,27.9,13.6c11.8,0,21.1-4.6,28-13.8c6.9-9.2,10.4-22.1,10.4-38.7c0-14.8-3.5-26.9-10.6-36.1 c-7-9.2-16.4-13.8-28.1-13.8c-11.4,0-20.6,4.5-27.6,13.6C4146.1,1043.1,4142.6,1056.1,4142.6,1073z"/><path class="fill-color6" d="M4350.2,1103.3c0-6.2-2.4-11.1-7.1-14.6c-4.7-3.5-12.9-6.4-24.6-8.9c-11.7-2.5-21-5.5-27.9-9 s-12-7.7-15.2-12.5c-3.3-4.8-4.9-10.6-4.9-17.2c0-11.1,4.7-20.5,14.1-28.1c9.4-7.7,21.4-11.5,35.9-11.5c15.3,0,27.8,4,37.3,11.9 c9.5,7.9,14.3,18,14.3,30.4h-23.2c0-6.3-2.7-11.8-8.1-16.4c-5.4-4.6-12.1-6.9-20.3-6.9c-8.4,0-15,1.8-19.8,5.5 c-4.8,3.7-7.1,8.5-7.1,14.4c0,5.6,2.2,9.8,6.6,12.6c4.4,2.8,12.4,5.5,23.9,8.1c11.5,2.6,20.9,5.7,28.1,9.2 c7.2,3.6,12.5,7.9,15.9,12.9c3.5,5,5.2,11.2,5.2,18.4c0,12.1-4.8,21.8-14.5,29.1c-9.7,7.3-22.2,10.9-37.6,10.9 c-10.8,0-20.4-1.9-28.8-5.8c-8.3-3.8-14.9-9.2-19.6-16.1c-4.7-6.9-7.1-14.3-7.1-22.3h23.1c0.4,7.8,3.5,13.9,9.3,18.4 c5.8,4.5,13.4,6.8,22.9,6.8c8.8,0,15.8-1.8,21.1-5.3C4347.6,1113.9,4350.2,1109.2,4350.2,1103.3z"/><path class="fill-color6" d="M4434.9,971.1v32.8h25.2v17.9h-25.2v84c0,5.4,1.1,9.5,3.4,12.2s6.1,4.1,11.5,4.1c2.7,0,6.3-0.5,11-1.5v18.6 c-6.1,1.7-12,2.5-17.8,2.5c-10.3,0-18.1-3.1-23.4-9.4s-7.9-15.1-7.9-26.6v-83.9h-24.6v-17.9h24.6v-32.8H4434.9z"/></g></svg>
  </a>

  <div class="hidden lg:flex font-semibold">
    <div class="dropdown" id="hostingDropdown" on:click={() => toggleDropdown("#hostingDropdown")}>
      <b class="backdrop" />
      <span class="dropdown-label nav-link text-color6 hover:text-primary">Hosting & Servers {@html threeDots}</span>
      <div class="dropdown-content-wrap">
        <div class="dropdown-content">
          <span class="dropdown-title">HOSTING</span>
          <a sveltekit:prefetch class="dropdown-link" href="/web-hosting"
            >Web hosting</a
          >
          <a sveltekit:prefetch class="dropdown-link" href="/cloud-hosting"
            >Cloud hosting</a
          >
          <a sveltekit:prefetch class="dropdown-link" href="/wordpress-hosting"
            >Wordpress hosting</a
          >
          <div class="divider" />
          <span class="dropdown-title">SERVERS</span>
          <a sveltekit:prefetch class="dropdown-link" href="/vps">VPS</a>
          <a sveltekit:prefetch class="dropdown-link" href="/dedicated-server"
            >Dedicated server</a
          >
        </div>
      </div>
    </div>
    <div class="dropdown" id="domainDropdown" on:click={() => toggleDropdown("#domainDropdown")}>
      <b class="backdrop" />
      <span class="dropdown-label nav-link text-color6 hover:text-primary">Domain {@html threeDots}</span>
      <div class="dropdown-content-wrap">
        <div class="dropdown-content">
          <a sveltekit:prefetch class="dropdown-link" href="/domain-registration">Domain Registration</a>
          <a sveltekit:prefetch class="dropdown-link" href="/domain-transfer">Domain Transfer</a>
          <a sveltekit:prefetch class="dropdown-link" href="/free-domain">Free domain</a>
          <a sveltekit:prefetch class="dropdown-link" href="/premium-domain">Premium domain</a>
          <div class="divider" />
          <a sveltekit:prefetch class="dropdown-link" href="/offer">Offer and promo</a>
        </div>
      </div>
    </div>
    <div class="dropdown" id="otherDropdown" on:click={() => toggleDropdown("#otherDropdown")}>
      <b class="backdrop" />
      <span class="dropdown-label nav-link text-color6 hover:text-primary">Other services {@html threeDots}</span>
      <div class="dropdown-content-wrap">
        <div class="dropdown-content">
          <span class="dropdown-title">WEBSITE ADDONS</span>
          <a sveltekit:prefetch class="dropdown-link" href="/ssl-certificate">SSL certificate</a>
          <a sveltekit:prefetch class="dropdown-link" href="/sitelock-website-security">Sitelock web security</a>
          <a sveltekit:prefetch class="dropdown-link" href="/codeguard-cloud-backup">Codeguard cloud backup</a>
          <div class="divider" />
          <a sveltekit:prefetch class="dropdown-link" href="/business-email">Business email</a>
        </div>
      </div>
    </div>
    <div class="dropdown" id="moreDropdown" on:click={() => toggleDropdown("#moreDropdown")}>
      <b class="backdrop" />
      <span class="dropdown-label nav-link text-color6 hover:text-primary">More {@html threeDots}</span>
      <div class="dropdown-content-wrap">
        <div class="dropdown-content">
          <span class="dropdown-title">COMPANY</span>
          <a sveltekit:prefetch class="dropdown-link" href="/about-figo-host">About</a>
          <!-- <a sveltekit:prefetch class="dropdown-link" href="/press">Press & Media</a> -->
          <a sveltekit:prefetch class="dropdown-link" href="/contact">Contact</a>
          <div class="divider" />
          <span class="dropdown-title">SUPPORT & RESOURCES</span>
          <a sveltekit:prefetch class="dropdown-link" href="/blog">Blog</a>
          <a sveltekit:prefetch class="dropdown-link" href="{$whmcsLink}knowledgebase">Knowledgebase</a>
          <a sveltekit:prefetch class="dropdown-link" href="{$whmcsLink}announcements">Announcements</a>
          <a sveltekit:prefetch class="dropdown-link" href="{$whmcsLink}submitticket.php">Ticket center</a>
        </div>
      </div>
    </div>
  </div>

  <button href="#" class="dropdown ml-auto mr-4 xsm:mr-8 btn" id="currencyDropdown" on:click={() => toggleDropdown("#currencyDropdown")}>
    <b class="backdrop" />
    <span class="dropdown-label nav-link text-color6 hover:text-primary">
      <img class="w-4 h-4 mr-2" src={$currentCurrency.icon} alt="{$currentCurrency.code} currency icon"> {$currentCurrency.code}
    </span>
    <div class="dropdown-content-wrap">
      <div class="dropdown-content">
        {#each currencies as { code, icon }}
          <button class="dropdown-link text-xs flex items-center uppercase" on:click={() => toggleCurrency(code)}>
            <img class="w-4 h-4 mr-2" src={icon} alt="{code} currency icon"/>{code}
          </button>
        {/each}
      </div>
    </div>
  </button>
  <button href="#" class="btn bg-transparent mr-4 xsm:mr-8" on:click={() => {toggleTheme()}}>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 16 16">
      <path id="sun-icon" d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      <path id="moon-icon" d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
    </svg>
  </button>

  <button class="cat-btn btn flex items-center" on:click={()=>{categoryMenu}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 xsm:mr-2" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
    <span class="hidden xsm:block">CATEGORY</span>
  </button>
</nav>

<aside class="sidebar" on:click={sidebar} class:block={showSideNav} class:opacity-100={showSideNav} class:hidden={!showSideNav} class:opacity-0={!showSideNav}>
  <section class="sidebar-bar w-full md:w-1/3 lg:w-1/4 h-full overflow-y-auto pb-32 pt-8">
    <div class="px-8 pb-8 mb-6 border-b border-gray-300 dark:border-gray-700 flex">
      <button class="btn w-10 h-10 rounded-full border center-item text-red-500 border-red-500 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
      </button>
      <a sveltekit:prefetch href="/offer" class="text-lighter bg-primary rounded-full text-sm py-2 select-none text-center block flex-grow items-center mr-4">Offer</a>
      <a href="start" class="text-lighter bg-primary rounded-full text-sm py-2 select-none text-center block flex-grow items-center">Sign in</a>
    </div>
    <div class="sidebar-link-wrap md:pr-4">
      <h3 class="sidebar-label">HOSTING & SERVERS</h3>
      <a sveltekit:prefetch class="sidebar-link" href="web-hosting">Web hosting <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="cloud-hosting">Cloud hosting <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="wordpress-hosting">Wordpress hosting <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="vps">VPS <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="dedicated-server">Dedicated server <span  class="md:hidden">{@html chevron}</span></a>
      <div class="divider" />
      <h3 class="sidebar-label mt-4">DOMAIN SERVICES</h3>
      <a sveltekit:prefetch class="sidebar-link" href="domain-registration">Domain Registration <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="domain-transfer">Domain Transfer <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="free-domain">Free domain <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="premium-domain">Premium domain <span class="md:hidden">{@html chevron}</span></a>
      <div class="divider" />
      <h3 class="sidebar-label mt-4">OTHER SERVICES</h3>
      <a sveltekit:prefetch class="sidebar-link" href="ssl-certificate"
      >SSL certificate <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="sitelock-website-security">Sitelock web security <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="codeguard-cloud-backup">Codeguard cloud backup <span class="md:hidden">{@html chevron}</span></a>
      <a sveltekit:prefetch class="sidebar-link" href="business-email">Business email <span class="md:hidden">{@html chevron}</span></a>
    </div>
  </section>
</aside>
  
<style style lang="postcss">
  .navbar {
    max-width: 1600px;
    @apply flex items-center font-medium fixed w-full transition-all duration-500 top-0 z-10 pl-8;
  }
  .navbar .nav-link {
    @apply flex p-3 text-color6 text-sm opacity-75 uppercase select-none;
  }
  .navbar #currencyDropdown .nav-link {
    @apply mr-0 text-xs px-0;
  }
  #currencyDropdown .dropdown-content {
    @apply p-0 w-32 text-xs left-auto right-0 rounded border-0 dark:bg-color2;
  }
  #currencyDropdown .dropdown-link {
    @apply py-3 rounded-none hover:shadow-none border-b hover:bg-color2 dark:border-color1 dark:hover:bg-color1;
  }
  #currencyDropdown .dropdown-link:last-child {
    @apply border-b-0;
  }
  .navbar .logo {
    @apply flex items-center;
  }
  .navbar .cat-btn {
    @apply text-lighter bg-primary rounded-l-full text-sm select-none transition p-2 xsm:py-3 xl:py-2 xsm:px-3 font-normal;
  }

  .sidebar {
    @apply fixed inset-0 z-10 bg-primary bg-opacity-50 transition-all duration-300;
  }
  .sidebar .sidebar-bar {
    @apply bg-color1 flex flex-col;
  }
  .sidebar .sidebar-bar .sidebar-link-wrap .sidebar-label {
    @apply font-bold opacity-40 mb-4 pl-8 text-xs;
  }
  .sidebar .sidebar-bar .sidebar-link-wrap .sidebar-link {
    @apply text-color4 py-3 pl-8 transition-all duration-300 flex justify-between items-center text-sm md:rounded-r-full;
  }
  .sidebar .sidebar-bar .sidebar-link-wrap .sidebar-link span {
    @apply opacity-75 pr-8;
  }
  .sidebar .sidebar-bar .sidebar-link-wrap .sidebar-link:hover {
    @apply bg-color3;
  }
</style>
