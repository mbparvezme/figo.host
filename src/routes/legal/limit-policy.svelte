<script>
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta titlePrefix="Unlimited & Unmetered Policy - "/>

<Header overflowHidden={false} type="none">
  <Hero title="UNMETERED / INNUMERABLE POLICY" text="Last Revised: December 20, 2019 at 10:43:50" btn="legal"/>
</Header>

<article class="px-8 lg:px-48 xl:px-60 py-24 leading-7 dark:font-light text-color6 bg-color1">
  <h4>1. UNMETERED DISCLAIMER</h4>
  <h5>How much bandwidth will my plan include?</h5>
  <p class="mb-4">Bandwidth is Unmetered, which means you are not charged according to the amount of bandwidth you use. However, that being said, we do require all customers to be fully compliant with our Terms of Service and its policies, which includes our Acceptable Use Policy ("TOS"), and to only utilize bandwidth in the normal operation of a personal or small business website.</p>
  <p class="mb-4">Usually, we provide bandwidth that is 20 times the storage (in GB) capacity of that respective package. But it is variable from time to time as our shared hosting shares its resources among all websites running on that server.</p>
  <p class="mb-16">For example, a customer, who is using a shared hosting package with 5GB disk space, will have a bandwidth limit of a minimum of 100GB (5 x 20 = 100GB).</p>
  <h4>2. INNUMERABLE DISCLAIMER</h4>
  <h5>How many "INNUMERABLE" resource can I use?</h5>
  <p class="mb-4">The word INNUMERABLE, displayed on some package to specify the limit of a feature means, we won't count the number of that feature and won't charge you according to that.</p>
  <p class="mb-4">Usually, we provide an innumerable resource that is ten (10) times the storage (in GB) capacity of that respective package. But it is variable from time to time as our shared hosting shares its resources among all websites running on that server. If you need more resources labeled as "INNUMERABLE", please contact support at <a href="mailto:support@figo.host">support@figo.host</a>.</p>
  <p class="mb-16">For example, a customer, who is using a shared hosting package with 5GB disk space, will have a minimum "INNUMERABLE" resource limit of 50 (5 x 10 = 50).</p>
  <h4>3. WHAT HAPPENS IF I EXCEED USAGE?</h4>
  <p>If we have concerns about your account's bandwidth or disk space utilization, you will receive an email asking you to reduce usage. Again, it is rare for a customer, managing a personal or small business website and exceed our TOS, which includes our Acceptable Use Policy and other policies.</p>
</article>

<style style lang="postcss" >
  article h4{
    @apply text-xl font-semibold mb-6;
  }
  article h5{
    @apply text-lg font-semibold mb-4;
  }
  article a{
    @apply font-semibold;
  }
</style>