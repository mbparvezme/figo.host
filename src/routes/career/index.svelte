<script>
  import { socials } from "$lib/constant";
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import BLOCK_TITLE from "../../component/element/block-title.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta
  titlePrefix = "Career - "
  description = "We are here to help! Contact us to find all the answers you need!, we will reply within 24 hours. For support, use our support page. our top-notch support team or browse our extensive Knowledge base to "
  keywords    = "contact us, contact, live chat, contact form"
/>

<Header>
  <Hero
    title="IGNITE YOUR INNER POWER"
    subtitle="Join us now and make us feel lucky with your talent"
    btn={false}/>
</Header>

<section class="px-8 py-24 bg-color2">
  <BLOCK_TITLE title="OPEN POSITIONS"/>
  <p class="py-8 opacity-30 text-center dark:font-light">Sorry, we don't have a job available right now.</p>
</section>

<style style lang="postcss" >
.contact-card{
  @apply bg-color1 shadow hover:shadow-2xl rounded-2xl p-4 py-8 lg:p-8 transition-all duration-300 relative flex flex-col;
}
.social-link a:not(:last-child){
  @apply mr-6
}
</style>