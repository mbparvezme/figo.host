<script context="module">
  export async function load({fetch}) {
    const res = await fetch("/api/web-hosting");
    if (res.ok) {
      let data = await res.json()
      // console.log(data)
      return {props: {data}}
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
  export let data;
  import Header from "../component/layout/header.svelte";
  import Hero from "../component/element/page-hero-content.svelte";
  import BLOCK_TITLE from "../component/element/block-title.svelte";
  import { Tabs, TabList, TabPanel, Tab } from "../component/element/Tabs";
  import Package from "../component/element/package.svelte";
  import Addons from "../component/block/addons.svelte";
  import Specification from "../component/block/specification.svelte";
  import Feature from "../component/block/feature.svelte";
  import Faq from "../component/block/faq.svelte";
  import Meta from "../component/element/meta.svelte";
  let currentDate = new Date().getFullYear();
</script>

<Meta
  titlePrefix = "Web Hosting - "
  description = "Figo Host - built for quality, speed, reliablity and security as you required. Get your business online with shared hosting now!"
  keywords    = "web hosting, best web hosting, unlimited web hosting, free domain, website hosting, web host, cheap web hosting, {currentDate}, unlimited web host, free unlimited web hosting, free domain and web hosting, web hosting services, webhosting, best website hosting, best hosting, best web hosting for wordpress, hosting a website, host your own website"
/>

<Header>
  <Hero
    title="LINUX WEB HOSTING"
    subtitle="FREE DOMAIN AND LIFETIME SSL*"
    text="Fast, Secure, Reliable and Flexible hosting plans for you and your
    business. hosting plans for you and your business"
  />
</Header>

<section class="px-8 py-32 bg-color3" id="plans">
  <BLOCK_TITLE title="WEB HOSTING PLANS" />
  <Tabs>
    <TabList>
      <div class="flex flex-col xsm:flex-row flex-wrap justify-center mb-8 md:mb-16 text-sm">
        <Tab>SINGLE SITE</Tab>
        <Tab>MULTI SITE</Tab>
        <!-- <Tab gap=0>EXCLUSIVE</Tab> -->
      </div>
    </TabList>
    <TabPanel>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-8">
        {#each data.packages.singleSite as pack}
          <Package data={pack} />
        {/each}
      </div>
    </TabPanel>
    <TabPanel>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-8">
        {#each data.packages.multiSite as pack, i}
          <Package data={pack} />
        {/each}
      </div>
    </TabPanel>
    <!-- <TabPanel>
      <div class="grid md:grid-cols-3 gap-8 lg:gap-4 xl:gap-8">
        {#each data.packages.multiSite as pack, i}
          <Package data={pack} start={i==0?2:0} />
        {/each}
      </div>
    </TabPanel> -->
  </Tabs>
</section>

{#if undefined != data.addons}
  <Addons addons={data.addons}/>
{/if}

<section class="px-8 py-32 bg-color1">
  <div class="grid md:grid-cols-2 gap-12">
    <div>
      <h4 class="text-2xl font-semibold">FREE domain and lifetime SSL</h4>
      <h5 class="text-base font-medium mb-4 text-gray-500">
        With annual subscription
      </h5>
      <p class="dark:font-light">
        You will get a free Domain with yearly purchase of any package under PRO
        or MEGA. This free domain is only for first year. After the initial
        year, the domain can be renewed at market price. Also lifetime free SSL
        included with both monthly and yearly packages.
      </p>
    </div>
    <div>
      <h4 class="text-2xl font-semibold">Fast server with flexible plans</h4>
      <h5 class="text-base font-medium mb-4 text-gray-500">
        That fits your business need
      </h5>
      <p class="dark:font-light">
        Easily scale your hosting configuration at a minimum cost. Our flexible
        plan gives you the scope to increase your hosting resources (additional
        website, hosting spaces, backup) on demand whenever you need. Dedicated
        feel in shared environment.
      </p>
    </div>
  </div>
</section>

{#if undefined != data.specification}
  <Specification data={data.specification} />
{/if}
{#if undefined != data.features}
  <Feature features={data.features} />
{/if}
{#if undefined != data.faq}
  <Faq faqs={data.faq} />
{/if}