<script>
  import {whmcsLink} from "$lib/store";
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import BLOCK_TITLE from "../../component/element/block-title.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta titlePrefix="About - "/>

<Header>
  <Hero
    title="FIGO.HOST<br>GROWING WITH YOUR TRUST"
    text="Learn more about FIGO.HOST. The play ground of web pros"
    btn={false}/>
</Header>

<section class="px-8 md:px-20 lg:px-36 py-24 bg-color1">
  <h2 class="font-black text-4xl mb-4">STAND OUT FROM OTHERS</h2>
  <p class="text-lg">Get premium web hosting, shared cloud hosting, virtual private server, dedicated servers and complete domain name registration, transfer and management solutions in a single place. If you are looking for a promising reliable enterprise-grade premium solutions, you are at the right place.</p>
</section>

<section class="px-8 py-24 bg-secondary dark:bg-color3 text-darker dark:text-secondary">
  <div class="grid md:grid-cols-3 gap-8 md:gap-16 mb-16 pb-16 border-b-8 border-dotted border-darker dark:border-secondary">
    <div><h2 class="font-black text-4xl xsm:text-5xl sm:text-6xl">WHO <span class="font-thin">WE ARE?</span></h2></div>
    <div class="md:col-span-2 text-xl dark:font-light">
      <p class="mb-6">Since 2014, we have started and continually delivering reliability and quality in the IT field with several services like development, system design, software architecture, support, domain & hosting. Our journey begins with the name <i class="font-semibold">CapsLock</i>, which providing complete IT solutions & services. In 2017 CapsLock has been rebranded as <i class="font-semibold">Kathbiral IT Solutions</i>.</p>
      <p>In 2021, we have decided to separate our domain & hosting business to manage it more effectively to provide a dedicated and specialized service to our clients. As a result, we have created <i class="font-semibold">FIGO.HOST</i>, a standalone, dedicated & specialized platform of domain & hosting services. FIGO.HOST is now a separate company whose mother company is <i class="font-semibold">Kathbiral Group</i>.</p>
    </div>
  </div>
  <div class="grid md:grid-cols-3 gap-8 md:gap-16">
    <div><h2 class="font-black text-4xl xsm:text-5xl sm:text-6xl">WHAT <span class=" font-thin">WE DO?</span></h2></div>
    <div class="md:col-span-2 text-xl dark:font-light">
      <p class="mb-8"><b class="block font-bold mb-4">MAKING A BETTER DIGITAL WORLD FOR YOU</b>Getting online is not just the solution. It's about creating a safe, reliable, easy & efficient web environment for everyone to create, manage & run the web to accomplish great things. FIGO.HOST is doing this to deliver the exact what is necessary to generate the result. And that is how we are <i class="font-semibold">Growing With Your Trust</i>.</p>
      <p><b class="block font-bold mb-4">PROVIDING COMPLETE WEB SOLUTIONS</b>Our enterprise-grade solutions designed to deliver the needs of a wide range of customers and businesses that provides 360-degree services, solutions & tools for the web environment includes domains, hosting, servers, SSL, backup tool, security tools & more. Either personal or business, novice or pro, you will get a perfect platform that will make your web presence more powerful, manageable & result-generating.</p>
    </div>
  </div>
</section>
<section class="px-8 py-24">
  <BLOCK_TITLE title="HISTORY"/>
  <div class="grid xsm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    <div class="about-card">
      <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-4 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
          <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z"/>
        </svg>
      </div>
      <h5 class="font-thin text-3xl mb-4">DEC 2014</h5>
      <p class="text-gray-500 text-sm">CapsLock had founded to provide IT service & solutions</p>
    </div>
    <div class="about-card">
      <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-4 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
          <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
        </svg>
      </div>
      <h5 class="font-thin text-3xl mb-4">AUG 2017</h5>
      <p class="text-gray-500 text-sm">CapsLock has been re-branded as Kathbiral IT Solutions</p>
    </div>
    <div class="about-card">
      <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-5 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
      </div>
      <h5 class="font-thin text-3xl mb-4">JUN 2021</h5>
      <p class="text-gray-500 text-sm">Kathbiral separated its domain-hosting business as FIGO.HOST</p>
    </div>
    <div class="about-card">
      <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-4 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </div>
      <h5 class="font-thin text-3xl mb-4">JUL 2021</h5>
      <p class="text-gray-500 text-sm">FIGO.HOST started to serve with 360&deg; solutions</p>
    </div>
  </div>
</section>

<section class="px-8 py-24 bg-color2">
  <div class="grid xsm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <a class="about-card" href="/contact">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 block mx-auto mb-4 fill-primary" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
      </svg>
      <h5 class="font-semibold">CONTACT</h5>
    </a>
    <a class="about-card" href="/blog">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 block mx-auto mb-4 fill-primary" viewBox="0 0 16 16">
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
        <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
      </svg>
      <h5 class="font-semibold">BLOG</h5>
    </a>
    <a class="about-card" href="{$whmcsLink}knowledgebase">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 block mx-auto mb-4 fill-primary" viewBox="0 0 16 16">
        <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
        <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
      </svg>
      <h5 class="font-semibold">KNOWLEDGEBASE</h5>
    </a>
    <a class="about-card" href="{$whmcsLink}submitticket.php">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 block mx-auto mb-4 fill-primary" viewBox="0 0 16 16">
        <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
        <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
      </svg>
      <h5 class="font-semibold">TICKET CENTER</h5>
    </a>
  </div>
</section>

<style style lang="postcss" >
  .about-card{
    @apply bg-color1 shadow-2xl hover:shadow rounded-2xl p-4 py-8 lg:p-8 transition-all duration-300
  }
</style>