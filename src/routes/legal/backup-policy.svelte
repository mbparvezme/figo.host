<script>
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import Price from "../../component/element/price-format.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta titlePrefix="Backup Policy - "/>

<Header overflowHidden={false} type="none">
  <Hero title="BACKUP POLICY" text="Last Revised: December 20, 2019 at 10:43:50" btn="legal"/>
</Header>

<article class="px-8 lg:px-48 xl:px-60 py-24 leading-7 dark:font-light text-color6 bg-color1">
  <p class="mb-4">We undertake periodic backups of data on our shared hosting servers, email infrastructure but the final responsibility for all backups of the data on your hosting packages rests on you. We strongly recommend that you take periodic backups and store them at your end so that you have multiple options in case of necessity for a restore. You may request us for a backup of the last three (3) days (from the date of request), and in most cases, we will be able to provision this from our disaster recovery backups. However, this is not a part of our core hosting services and is merely a last resort. We will try our best to help you out, but backups provisioning and restoration is an extremely time and resource-intensive process. Hence, we can only promise a best-effort service in this regard.</p>
  <p class="mb-4">We strongly recommended that you make use of CodeGuard for reliable and cheap offsite backups. Read more here - <a href="/codeguard-cloud-backup">https://<wbr>figo.host/<wbr>codeguard-cloud-backup</a>.</p>
  <p>Note: Figo host requires a fee of <Price amount=20 /> to provide backup on the Shared Hosting package.</p>
</article>

<style style lang="postcss" >
  article a{
    @apply font-semibold;
  }
</style>