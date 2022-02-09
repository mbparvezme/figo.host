<script>
  import { whmcsLink } from "$lib/store";
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta titlePrefix="Sitemap - "/>

<Header>
  <Hero title="SITEMAP" btn={false}/>
</Header>

<section class="py-24 px-8 bg-color1">
  <h3 class="text-2xl mb-16 py-2 border-l-2 border-primary pl-4">SERVICES<small class="block text-base text-gray-500">Links of all our services</small></h3>
  <div class="grid md:grid-cols-3 gap-8">
    <div class="flex flex-col sitemap">
      <h3 class="font-bold text-lg text-gray-500 mb-8 pb-4 border-b dark:border-gray-700">HOSTING & SERVERS</h3>
      <a href="/web-hosting">Web hosting</a>
      <a href="/cloud-hosting">Cloud hosting</a>
      <a href="/wordpress-hosting">Wordpress hosting</a>
      <a href="/vps">VPS</a>
      <a href="/dedicated-server">Dedicated server</a>
    </div>
    <div class="flex flex-col sitemap">
      <h3 class="font-bold text-lg text-gray-500 mb-8 pb-4 border-b dark:border-gray-700">DOMAIN SERVICES</h3>
      <a href="/domain-registration">Domain registration</a>
      <a href="/domain-transfer">Domain transfer</a>
      <a href="/free-domain">Free domain</a>
      <a href="/premium-domain">Premium domain</a>
      <a href="/offer">Domain offers</a>
    </div>
    <div class="flex flex-col sitemap">
      <h3 class="font-bold text-lg text-gray-500 mb-8 pb-4 border-b dark:border-gray-700">OTHER SERVICES</h3>
      <a href="/ssl-certificate">SSL certificate</a>
      <a href="/sitelock-website-security">Sitelock web security</a>
      <a href="/codeguard-cloud-backup">Codeguard cloud backup</a>
      <a href="/business-email">Business email</a>
    </div>
  </div>

  <h3 class="text-2xl mb-16 py-2 border-l-2 border-primary pl-4 mt-24">COMPANY<small class="block text-base text-gray-500">Links of the pages related to company and Legals</small></h3>
  <div class="grid md:grid-cols-3 md:gap-8">
    <div class="flex flex-col sitemap">
      <a href="/about-figo-host">About</a>
      <a href="/contact">Contact</a>
      <a href="/career">Career</a>
    </div>
    <div class="flex flex-col sitemap">
      <a href="/reviews">Client reviews</a>
      <a href="/blog">Blog</a>
      <a href="{$whmcsLink}announcements">Announcements</a>
    </div>
    <div class="flex flex-col sitemap">
      <a href="{$whmcsLink}knowledgebase">Knowledgebase</a>
      <a href="{$whmcsLink}submitticket.php">Ticket center</a>
    </div>
  </div>

  <h3 class="text-2xl mb-16 py-2 border-l-2 border-primary pl-4 mt-24">LEGAL POLICY & NOTICE<small class="block text-base text-gray-500">Important information regarding your legal rights and remedies</small></h3>  
  <div class="grid md:grid-cols-3 md:gap-8">
    
    <div class="flex flex-col sitemap">
      <a href="/about-figo-host">About</a>
      <a href="/contact">Contact</a>
      <a href="/career">Career</a>
    </div>
    <div class="flex flex-col sitemap">
      <a href="/reviews">Client reviews</a>
      <a href="/blog">Blog</a>
      <a href="{$whmcsLink}announcements">Announcements</a>
    </div>
    <div class="flex flex-col sitemap">
      <a href="{$whmcsLink}knowledgebase">Knowledgebase</a>
      <a href="{$whmcsLink}submitticket.php">Ticket center</a>
    </div>
  </div>
</section>

<style style lang="postcss">
  .sitemap a{
    @apply md:text-lg text-color6 mb-4;
  }
</style>