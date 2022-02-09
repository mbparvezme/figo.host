<script>
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta titlePrefix="Legal Agreements - ">
  <meta name="robots" content="noindex" />
</Meta>

<Header overflowHidden={false}>
  <Hero title="LEGAL AGREEMENTS" subtitle="Everything you must know in one place" text="Please read this agreement carefully, as it contains important information regarding your legal rights and remedies." btn="legal"/>
</Header>

<article class="px-8 lg:px-48 xl:px-60 py-24 leading-7 dark:font-light text-color6 bg-color1">
  <h3>General Policies/Notices</h3>
  <ul>
    <li><a href="/legal/tos">Universal Terms of Service</a></li>
    <li><a href="/legal/acceptable-use-policy">Acceptable use policy</a></li>
    <li><a href="/legal/privacy">Privacy policy</a></li>
    <li><a href="/legal/data-request-policy">Data request policy</a></li>
  </ul>
  <h3>Hosting Policies/Notices</h3>
  <ul>
    <li><a href="/legal/u-policy">Unmetered/Uncounted policy</a></li>
    <li><a href="/legal/backup-policy">Backup policy</a></li>
  </ul>
</article>

<style style lang="postcss" >
  a {
    @apply py-2 mb-2 text-lg text-primary;
  }
  h3{
    @apply pt-6 pb-4 font-semibold text-xl text-gray-500;
  }
  ul{
    @apply list-disc list-inside pl-4 leading-10;
  }
</style>