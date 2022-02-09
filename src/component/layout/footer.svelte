<script>
  import { onMount } from "svelte";
  import { whmcsLink, minHostingPrice } from "$lib/store";
  import { newWindow, socials } from "$lib/constant";
  import Price_Format from "../element/price-format.svelte";
  let currentDate = new Date().getFullYear();
</script>

<section class="p-8 lg:px-20 py-20 bg-secondary dark:bg-primary flex flex-col lg:flex-row justify-between items-center">
  <div class="font-bold text-2xl lg:text-3xl mb-8 lg:mb-0 text-center lg:text-left">
    <span class="lg:block lg:mb-1">A simple way</span>
    to change your online world
    <span class="block pt-1 font-thin">Starting @ <Price_Format amount={$minHostingPrice} />/mo</span>
  </div>
  <div>
    <a href="/web-hosting" class="px-6 py-3 flex-grow-0 bg-primary dark:bg-secondary rounded-full text-color1">GET STARTED &rarr;</a>
  </div>
</section>

<section class="px-8 py-24">
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-8 mb-12">
    <div class="lg:col-span-2">
      <h5 class="mb-4 font-semibold">HOSTING & SERVER</h5>
      <ul class="footer-link">
        <li><a sveltekit:prefetch href="web-hosting">Linux web hosting</a></li>
        <li><a sveltekit:prefetch href="cloud-hosting">Shared cloud hosting</a></li>
        <li><a sveltekit:prefetch href="wordpress-hosting">Wordpress hosting</a></li>
        <li><a sveltekit:prefetch href="vps">VPS</a></li>
        <li><a sveltekit:prefetch href="dedicated-server">Dedicated server</a></li>
      </ul>
    </div>
    <div class="lg:col-span-2">
      <h5 class="mb-4 font-semibold">DOMAIN SERVICES</h5>
      <ul class="footer-link">
        <li>
          <a sveltekit:prefetch href="domain-registration"
            >Domain registration</a
          >
        </li>
        <li>
          <a sveltekit:prefetch href="domain-transfer">Domain transfer</a>
        </li>
        <li>
          <a sveltekit:prefetch href="offer/domain">Domain promos</a>
        </li>
        <li><a sveltekit:prefetch href="free-domain">Free domain</a></li>
        <li><a sveltekit:prefetch href="premium-domain">Premium domain</a></li>
      </ul>
    </div>
    <div class="lg:col-span-2">
      <h5 class="mb-4 font-semibold">OTHER SERVICES</h5>
      <ul class="footer-link">
        <li><a sveltekit:prefetch href="ssl-certificate">Comodo SSL certificate</a></li>
        <li><a sveltekit:prefetch href="website-backup-codeguard">Codeguard web backup</a></li>
        <li><a sveltekit:prefetch href="website-security-sitelock">SiteLock web security</a></li>
        <li><a sveltekit:prefetch href="business-email">Business email</a></li>
      </ul>
    </div>
    <div class="sm:col-span-3">
      <h5 class="mb-4 font-semibold">COMPANY & RESOURCES</h5>
      <div class="footer-link grid sm:grid-cols-3 lg:grid-cols-2 sm:gap-x-8 lg:gap-0">
        <ul>
          <li><a sveltekit:prefetch href="/about-figo-host">About</a></li>
          <li><a sveltekit:prefetch href="/contact">Contact</a></li>
          <li><a sveltekit:prefetch href="/blog">Blog</a></li>
          <li><a sveltekit:prefetch href="{$whmcsLink}submitticket.php">Ticket center</a></li>
          <li><a sveltekit:prefetch href="{$whmcsLink}announcements">Announcements</a></li>
          <li><a sveltekit:prefetch href="{$whmcsLink}knowledgebase">Knowledgebase</a></li>
        </ul>
        <ul>
          <li><a sveltekit:prefetch href="/reviews">Client reviews</a></li>
          <li><a sveltekit:prefetch href="/career">Career</a></li>
          <li><a sveltekit:prefetch href="/sitemap">Sitemap</a></li>
          <li><a sveltekit:prefetch href="/legal/tos">Terms of service</a></li>
          <li><a sveltekit:prefetch href="/legal/privacy">Privacy policy</a></li>
          <li><a sveltekit:prefetch href="/legal" rel="nofollow">Legal agreements</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="border-t dark:border-gray-700 pt-12">
    <div class="md:w-5/6 lg:w-4/5 xl:w-3/5 flex flex-col items-center text-center mx-auto">
      <svg class="w-36 xsm:w-48 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4457.8 1515"><g><path class="fill-primary" d="M1450.3,913.7l-536.6,536.6c-86.3,86.3-226.2,86.3-312.4,0L64.7,913.7c-86.3-86.3-86.3-226.2,0-312.4 L601.3,64.7c86.3-86.3,226.2-86.3,312.4,0l536.6,536.6C1536.6,687.6,1536.6,827.4,1450.3,913.7z"/><path class="fill-color1" d="M510.2,618.9c0-76.3,20.9-134.6,62.6-175c41.8-40.3,110.5-60.5,206.3-60.5h252.7v118.8H779.1 c-39.6,0-69,9.4-88,28.1s-28.6,48.2-28.6,88.6v104.8h321.8v118.8H662.5v297H510.2V618.9z"/></g><g><path class="fill-color6" d="M1806.9,618.6c0-76.3,20.9-134.6,62.6-175c41.8-40.3,110.5-60.5,206.3-60.5h252.7v118.8h-252.7 c-39.6,0-69,9.4-88,28.1s-28.6,48.2-28.6,88.6v104.8H2281v118.8h-321.8v297h-152.3V618.6z"/><path class="fill-color6" d="M2455.4,515.4c-16.9-15.5-25.4-35.5-25.4-59.9c0-23.8,8.5-43.4,25.4-58.9c16.9-15.5,38.3-23.2,64.3-23.2 c25.9,0,47.3,7.8,64.2,23.2c16.9,15.5,25.4,35.1,25.4,58.9c0,24.5-8.5,44.5-25.4,59.9c-16.9,15.5-38.3,23.2-64.2,23.2 C2493.8,538.7,2472.4,530.9,2455.4,515.4z M2451.7,671.5c0-29.5,11.2-50.6,33.5-63.2c22.3-12.6,56.2-18.9,101.5-18.9v477.4 c0,28.8-11.2,49.7-33.5,62.6s-56.2,19.4-101.5,19.4V671.5z"/><path class="fill-color6" d="M2845.9,1347c-33.1-11.9-59-27.9-77.8-48.1c-18.7-20.2-28.1-42.5-28.1-67c0-24.5,8.5-41.8,25.4-51.8 c16.9-10.1,40.9-15.1,71.8-15.1c2.9,29.5,14.4,52.4,34.6,68.6c20.2,16.2,49.3,24.3,87.5,24.3c42.5,0,72.5-10.5,90.2-31.3 c17.6-20.9,26.5-49.7,26.5-86.4v-36.7c10.8-7.9,18.7-15.5,23.8-22.7l-4.3-5.4c-18.7,18.7-43.8,33.8-75.1,45.4 c-31.3,11.5-60.7,17.3-88,17.3c-40.3,0-76.3-8.1-108-24.3c-31.7-16.2-56.7-39.1-75.1-68.6c-18.4-29.5-27.5-63-27.5-100.5V783.8 c0-36,9.5-68.9,28.6-98.8c19.1-29.9,44.3-53.3,75.6-70.2s65-25.4,101-25.4c39.6,0,73.3,7.9,101,23.8s53.1,38.5,76.1,68l4.3-4.3 c-3.6-6.5-10.4-15.8-20.5-28.1c0-39.6,41.4-59.4,124.2-59.4v531.4c0,47.5-10.8,89.6-32.4,126.4s-51.7,65.5-90.2,86.4 c-38.5,20.9-81.9,31.3-130.1,31.3C2916.8,1364.9,2879,1358.9,2845.9,1347z M3046.7,998.2c21.6-16.2,32.4-35.5,32.4-57.8V787.1 c0-23-10.6-42.5-31.9-58.3c-21.2-15.8-48.1-23.8-80.5-23.8c-35.3,0-62.5,7.6-81.5,22.7c-19.1,15.1-28.6,36.7-28.6,64.8V935 c0,27.4,9.4,48.8,28.1,64.3c18.7,15.5,46.1,23.2,82.1,23.2C2998.5,1022.5,3025.1,1014.4,3046.7,998.2z"/><path class="fill-color6" d="M3413.4,1123.5c-37.8-16.9-67.5-40.5-89.1-70.8c-21.6-30.2-32.4-64.4-32.4-102.6V797.9 c0-38.9,10.6-74.1,31.9-105.8c21.2-31.7,50.6-56.7,88-75.1s80.3-27.5,128.5-27.5c48.2,0,91.2,9.2,129.1,27.5 c37.8,18.4,67.3,43.4,88.6,75.1c21.2,31.7,31.9,67,31.9,105.8v152.3c0,38.2-11,72.4-32.9,102.6c-22,30.2-51.8,53.8-89.6,70.8 c-37.8,16.9-80.1,25.4-126.9,25.4C3493.5,1148.9,3451.2,1140.4,3413.4,1123.5z M3625.1,1008.5c20.5-16.6,30.8-38.9,30.8-67V804.3 c0-29.5-10.3-53.5-30.8-71.8c-20.5-18.4-48.8-27.5-84.8-27.5c-35.3,0-63.4,9.2-84.2,27.5s-31.3,42.3-31.3,71.8v137.2 c0,28.1,10.4,50.4,31.3,67s49,24.8,84.2,24.8C3576.3,1033.3,3604.5,1025,3625.1,1008.5z"/><path class="fill-primary" d="M3870.7,1133.8c-7.9-7.7-11.8-17-11.8-27.9c0-10.9,3.9-20.4,11.8-28.4c7.8-8,17.4-12,28.7-12 c10.6,0,19.8,4,27.6,12c7.8,8,11.8,17.5,11.8,28.4c0,10.9-3.8,20.2-11.5,27.9c-7.7,7.7-17,11.5-27.9,11.5 C3888.1,1145.3,3878.6,1141.4,3870.7,1133.8z"/><path class="fill-color6" d="M4007.6,1020.3c10.2-12.6,23.6-18.9,40-18.9c28.6,0,43,16.1,43.2,48.4v89.4h-23.1v-89.5 c-0.1-9.8-2.3-17-6.7-21.6c-4.4-4.7-11.2-7-20.4-7c-7.5,0-14.1,2-19.8,6c-5.7,4-10.1,9.2-13.2,15.8v96.4h-23.1v-192h23.1V1020.3z"/><path class="fill-color6" d="M4119.4,1070.3c0-13.2,2.6-25.2,7.8-35.8c5.2-10.6,12.5-18.8,21.8-24.5c9.3-5.8,19.9-8.6,31.8-8.6 c18.4,0,33.3,6.4,44.7,19.1s17.1,29.7,17.1,50.9v1.6c0,13.2-2.5,25-7.6,35.4c-5,10.5-12.2,18.6-21.6,24.4 c-9.4,5.8-20.1,8.8-32.3,8.8c-18.3,0-33.2-6.4-44.6-19.1s-17.1-29.6-17.1-50.6V1070.3z M4142.6,1073c0,15,3.5,27,10.4,36.1 c7,9.1,16.3,13.6,27.9,13.6c11.8,0,21.1-4.6,28-13.8c6.9-9.2,10.4-22.1,10.4-38.7c0-14.8-3.5-26.9-10.6-36.1 c-7-9.2-16.4-13.8-28.1-13.8c-11.4,0-20.6,4.5-27.6,13.6C4146.1,1043.1,4142.6,1056.1,4142.6,1073z"/><path class="fill-color6" d="M4350.2,1103.3c0-6.2-2.4-11.1-7.1-14.6c-4.7-3.5-12.9-6.4-24.6-8.9c-11.7-2.5-21-5.5-27.9-9 s-12-7.7-15.2-12.5c-3.3-4.8-4.9-10.6-4.9-17.2c0-11.1,4.7-20.5,14.1-28.1c9.4-7.7,21.4-11.5,35.9-11.5c15.3,0,27.8,4,37.3,11.9 c9.5,7.9,14.3,18,14.3,30.4h-23.2c0-6.3-2.7-11.8-8.1-16.4c-5.4-4.6-12.1-6.9-20.3-6.9c-8.4,0-15,1.8-19.8,5.5 c-4.8,3.7-7.1,8.5-7.1,14.4c0,5.6,2.2,9.8,6.6,12.6c4.4,2.8,12.4,5.5,23.9,8.1c11.5,2.6,20.9,5.7,28.1,9.2 c7.2,3.6,12.5,7.9,15.9,12.9c3.5,5,5.2,11.2,5.2,18.4c0,12.1-4.8,21.8-14.5,29.1c-9.7,7.3-22.2,10.9-37.6,10.9 c-10.8,0-20.4-1.9-28.8-5.8c-8.3-3.8-14.9-9.2-19.6-16.1c-4.7-6.9-7.1-14.3-7.1-22.3h23.1c0.4,7.8,3.5,13.9,9.3,18.4 c5.8,4.5,13.4,6.8,22.9,6.8c8.8,0,15.8-1.8,21.1-5.3C4347.6,1113.9,4350.2,1109.2,4350.2,1103.3z"/><path class="fill-color6" d="M4434.9,971.1v32.8h25.2v17.9h-25.2v84c0,5.4,1.1,9.5,3.4,12.2s6.1,4.1,11.5,4.1c2.7,0,6.3-0.5,11-1.5v18.6 c-6.1,1.7-12,2.5-17.8,2.5c-10.3,0-18.1-3.1-23.4-9.4s-7.9-15.1-7.9-26.6v-83.9h-24.6v-17.9h24.6v-32.8H4434.9z"/></g></svg>
      <p class="text-sm text-gray-500 mb-16">
        Getting online is not just the solution. It's about creating a safe, reliable, easy & efficient web environment for everyone to create, manage & run the web to accomplish great things. FIGO.HOST is doing this to deliver the exact what is necessary to generate the result. And that is how we are Growing With Your Trust.
      </p>
      <div class="flex flex-col sm:flex-row items-center text-left">
        <div class="flex items-center border rounded-full pr-6 mb-8 sm:mb-0 sm:mr-8">
          <span class="p-2 rounded-full bg-primary-lighter mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-color4 w-12" viewBox="0 0 16 16">
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
            </svg>
          </span>
          <a class="text-color5 font-semibold text-lg flex-grow-0" href="tel:+8801511247365">
            +880 1511 24 7 365
            <small class="block font-normal text-xs">GMT 4:00am - 4:00pm</small>
          </a>
        </div>
        <div class="flex items-center border rounded-full pr-6">
          <span class="p-2 rounded-full bg-primary-lighter mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-color4 w-12" viewBox="0 0 16 16">
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
            </svg>
          </span>
          <a class="text-color5 font-semibold text-lg flex-grow-0" href="mailto:info@figo.host">
            info@figo.host
            <small class="block font-normal text-xs">We will replay within 2 working days</small>
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="lg:col-span-2">
      <h5 class="mb-4 font-semibold">SISTER CONCERN</h5>
      <div class="grid xsm:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 sister-link">
        <a href="https://gosoft.io" target="_blank">Gosoft.io <span class=" ml-1 text-xs w-2 h-2">{@html newWindow}</span></a>
        <a href="https://bipby.com" target="_blank">BipBy Digital <span class=" ml-1 text-xs w-2 h-2">{@html newWindow}</span></a>
      </div>
    </div> -->
  </div>
</section>

<footer class="px-8 py-12 sm:py-8 bg-color2 dark:bg-color3 flex flex-col md:flex-row items-center md:justify-between">
  <p class="text-xs mb-6 md:mb-0 text-center md:text-left font-medium text-gray-500 dark:text-gray-300">
    ©{currentDate} <a sveltekit:prefetch href="./">Figo.host</a> All rights
    reserved<br />A product of
    <a href="https://kathbiral.com" target="blank">Kathbiral Group</a>
  </p>
  <p class="flex md:pr-8 social-link">
    {#each socials as social}
      <a class="w-5 h-5 text-color6" href="{social.url}" target="_blank">{@html social.icon}</a>
    {/each}
  </p>
</footer>

<a sveltekit:prefetch href="/offer" class="offer-btn center-item">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 mr-2" viewBox="0 0 16 16">
    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
  </svg> &nbsp;&nbsp;OFFER
</a>

<a href="#figo" class="to-top btn center-item">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 mr-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
  </svg>
  TO TOP
</a>

<style style lang="postcss" >
  .footer-link li a {
    @apply py-1 inline-block text-sm mb-1 hover:opacity-75 transition-all duration-300 text-gray-500;
  }
  .sister-link a {
    @apply px-4 py-2 border border-primary justify-between items-center rounded-full flex hover:text-lighter hover:bg-primary transition-all duration-300 flex-grow;
  }
  .social-link a:not(:last-child){
    @apply mr-4
  }
  .offer-btn{
    @apply flex -mr-14 px-3 py-2 bg-secondary font-medium text-darker rounded-l-full text-xs fixed right-0 shadow-md top-1/2 transform -translate-y-1/2 transition-all duration-300 z-[5]
  }
  .offer-btn:hover{
    @apply -mr-0
  }
  .to-top{
    @apply flex -mr-14 pl-2 pr-3 py-1 bg-secondary font-medium text-darker rounded-l-full text-xs fixed right-0 shadow-md bottom-8 duration-300 transition-all outline-none z-[5];
  }
  .to-top:hover{
    @apply  -mr-0
  }
</style>