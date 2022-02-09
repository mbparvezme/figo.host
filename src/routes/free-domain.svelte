<script context="module">
  export async function load({fetch}) {
    const res = await fetch("/api/free-tld");

    if (res.ok) {
      return {props: {data: await res.json()}};
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
  import Domain from "../component/element/domain.svelte";
  import STEP from "../component/element/step-card.svelte";
  import Meta from "../component/element/meta.svelte";
</script>

<Meta titlePrefix="Free Domain - "/>

<Meta
  titlePrefix = "Free Domain - "
  description = "Figo Host provides free domains. Grab a free domain name now. Use this unique opportunity and begin your online journey with a free domain name registration. No questions asked!"
  keywords    = "free domain, how to get a free domain name, best domain, domain privacy protection, top domain registrars, .com domain, best domain registration, private domain, free domain name, free custom domain name, free domain registration, free domain hosting"
/>

<Header type="globe">
  <Hero
    title="START YOUR BUSINESS WITH A <span class='text-primary'>FREE DOMAIN</span>"
    subtitle="THE ROAD TO SUCCESS IS FREE FOR YOU<br />JUST STEP INTO IT"
    text="Get your free domain today before someone else own it!"
    domainBox={true}
  />
</Header>

<section class="px-8 py-32 bg-color2">
  <h4 class="text-3xl font-extralight mb-6 md:px-24 lg:px-48">
    KICKSTART YOUR ONLINE PRESENCE WITH A <span class="font-bold text-primary"
      >FREE DOMAIN</span
    >
  </h4>
  <p class="text-xl dark:font-light mb-8 md:px-24 lg:px-48">
    Free domain is open for all. Anyone who get an annual web hosting plan
    (excluding single domain hosting plans), Cloud hosting, Wordpress hosting or
    any server - can get a free domain from OneB! We offer lifetime free domain
    with servers and one year free domain with hosting packages (which is
    eligible with this offer).
  </p>
</section>

<section class="px-8 py-32">
  <div class="grid md:grid-cols-3 gap-8">
    <STEP
      titleSize="sm"
      num="1"
      title="CHOOSE A HOSTING PACKAGE"
      text="Free domain is open for all. Anyone who get an annual web hosting plan
    (excluding single domain hosting plans), Cloud hosting, Wordpress
    hosting or any server - can get a free domain from OneB!"
    />
    <STEP
      titleSize="sm"
      num="2"
      title="GET A PERFECT FREE DOMAIN"
      text="Free domain is open for all. Anyone who get an annual web hosting plan (excluding
      single domain hosting plans), Cloud hosting, Wordpress hosting or any server
      - can get a free domain from OneB!"
    />
    <STEP
      titleSize="sm"
      num="3"
      title="CREATE BUSINESS EMAIL NAME"
      text="Free domain is open for all. Anyone who get an annual web hosting plan (excluding
      single domain hosting plans), Cloud hosting, Wordpress hosting or any server
      - can get a free domain from OneB!"
    />
  </div>
</section>

<section class="px-8 py-32 bg-color3">
  <BLOCK_TITLE title="AVAILABLE FREE TLDS" />
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
    {#each data as tld}
      <Domain tld={tld} />
    {/each}
  </div>
</section>

<style style lang="postcss" >
  .shadow-card {
    @apply p-8 shadow-2xl hover:shadow-lg rounded-2xl transition-all duration-300 bg-color2;
  }
</style>
