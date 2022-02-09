<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/offer");
    if (res.ok) {
      return {props: {data: await res.json()}}
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    }
  }
</script>

<script>
  export let data
  import { onMount } from "svelte";
  import Header from "../component/layout/header.svelte";
  import Hero from "../component/element/page-hero-content.svelte";
  import { Tabs, TabList, TabPanel, Tab } from "../component/element/Tabs";
  import Domain from "../component/element/domain.svelte";
  import Meta from "../component/element/meta.svelte";

  onMount(() => {
    let input = document.getElementById("searchTld");
    input.addEventListener("keyup", () => {
      let tlds = document.querySelectorAll("[data-tld]");
      tlds.forEach((tld) => {
        if (input.value != "") {
          // let tld = row.querySelector("div:first-child").innerText;
          if (tld.dataset.tld.indexOf(input.value.toLowerCase()) >= 0) {
            tld.classList.add("flex");
            tld.classList.remove("hidden");
          } else {
            tld.classList.remove("flex");
            tld.classList.add("hidden");
          }
        } else {
          tld.classList.add("flex");
          tld.classList.remove("hidden");
        }
      });
    });
  });
</script>

<Meta
  titlePrefix = "Offer & Promotion - "
  description = "Get amazing discounts and deals on domain names! get the best deals and save big with our domain discounts! unlock the best offers with Figo Fost!"
  keywords    = "domain offer, hosting offer, best domain offer, best hosting offer, domain promo, hosting promo, .com domain offer, all domain offer, all hosting offer, domain hosting offer, best domain deal, best hosting deal, domain hosting deal"
/>

<Header>
  <Hero
    title="PEOPLE LOOK FOR BIG OFFER<br>SMART PEOPLE LOOK FOR THE BEST OFFER"
    text="And here we are offering something best JUST FOR YOU
    Enjoy our domain, hosting and other promos of this month"
    subtitlePadding={true}
    btn="offers"
  />
</Header>

<section class="px-8 pt-24 pb-32 bg-color3" id="offers">
  <Tabs>

    <TabList>
      <div class="flex flex-wrap justify-center mb-8 md:mb-16">
        <Tab px="4" gap="4" w="24" h="24">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 mx-auto mb-3" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
          </svg>
          <span class="text-sm">DOMAIN</span>
        </Tab>
        <Tab px="4" gap="4" w="24" h="24">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 mx-auto mb-3" viewBox="0 0 16 16">
            <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z"/>
          </svg>
          <span class="text-sm">HOSTING</span>
        </Tab>
        <Tab px="4" gap="4" w="24" h="24">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 mx-auto mb-3" viewBox="0 0 16 16">
            <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z"/>
            <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"/>
          </svg>
          <span class="text-sm">COMBO</span>
        </Tab>
        <Tab px="4" gap="4" w="24" h="24">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 mx-auto mb-3" viewBox="0 0 16 16">
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
          </svg>
          <span class="text-sm">OTHERS</span>
        </Tab>
      </div>
    </TabList>

    <TabPanel>
      <div class="px-8 py-12 bg-color2 rounded-xl">
        <div class="p-2 bg-color3 rounded-xl shadow-lg mb-8">
          <input id="searchTld" placeholder="Search TLD offer..." type="text" />
        </div>
        <div class="grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8">
          {#each data as domain}
            <Domain tld={domain.tld} fee={domain.fee} renew={domain.renew} />
          {/each}
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="px-8 py-12 bg-color2 rounded-xl text-center">
        <p class="text-gray-500 text-3xl">NOTHING FOUND</p>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="px-8 py-12 bg-color2 rounded-xl text-center">
        <p class="text-gray-500 text-3xl">NOTHING FOUND</p>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="px-8 py-12 bg-color2 rounded-xl text-center">
        <p class="text-gray-500 text-3xl">NOTHING FOUND</p>
      </div>
    </TabPanel>
  </Tabs>
</section>

<style style lang="postcss" >
  #searchTld {
    @apply border-0 rounded-lg font-thin outline-none p-3 w-full text-xl bg-color1;
  }
</style>