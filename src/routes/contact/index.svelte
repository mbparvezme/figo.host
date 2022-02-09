<script>
  import {whmcsLink} from "$lib/store";
  import { socials } from "$lib/constant";
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import BLOCK_TITLE from "../../component/element/block-title.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta
  titlePrefix = "Contact - "
  description = "We are here to help! Contact us to find all the answers you need!, we will reply within 24 hours. For support, use our support page. our top-notch support team or browse our extensive Knowledge base to "
  keywords    = "contact us, contact, live chat, contact form"
/>

<Header>
  <Hero title="CONTACT FIGO.HOST" text="We'd love to hear from you" btn={false}/>
</Header>

<section class="px-8 py-24 bg-color2">
    <BLOCK_TITLE title="WHAT CAN WE HELP YOU WITH?"/>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div class="contact-card">
            <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-4 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
            </div>
            <p class="text-gray-500 text-sm mb-3">Email us anytime. We will replay within 24 hrs</p>
            <h5 class="font-bold text-lg text-primary mt-auto">info@figo.host</h5>
            <a href="mailto:info@figo.host" class="absolute inset-0"></a>
        </div>
        <div class="contact-card">
            <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-4 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
            </div>
            <p class="text-gray-500 text-sm mb-3">Message us via Whatsapp for short & instant query</p>
            <h5 class="font-bold text-lg text-primary mt-auto">Send now</h5>
            <a href="https://wa.link/myn1br" class="absolute inset-0" target="_blank"></a>
        </div>
        <div class="contact-card">
            <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-5 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
                    <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"/>
                    <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"/>
                </svg>
            </div>
            <p class="text-gray-500 text-sm mb-3">Discuss in discord with suppert agents and customers</p>
            <h5 class="font-bold text-lg text-primary mt-auto">Discord channel</h5>
            <a href="https://discord.gg/zJ4XnF9SMz" class="absolute inset-0" target="_blank"></a>
        </div>
        <div class="contact-card">
            <div class="w-24 h-24 block mx-auto mb-3 rounded-full border-2 border-primary p-4 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" viewBox="0 0 16 16">
                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <p class="text-gray-500 text-sm mb-3">Create new and chack previous tickets for system supports</p>
            <h5 class="font-bold text-lg text-primary mt-auto">Ticket center</h5>
            <a href="{$whmcsLink}submitticket.php" class="absolute inset-0"> </a>
        </div>
    </div>
</section>

<section class="px-8 py-24 bg-secondary dark:bg-color3">
  <div class="grid md:grid-cols-3 gap-12">
    <div class="shadow-around rounded-xl overflow-hidden hidden md:grid">
      <img src="./assest/img/social.webp" class="w-full h-full" alt="social media of Figo Host">
    </div>
    <div class="col-span-2">
      <span class="text-sm block mb-4">SOCIAL MEDIAS</span>
      <h4 class="text-4xl xsm:text-5xl font-extrabold mb-16">Connect with us, <br class="hidden xsm:block">join the party</h4>
      <div class="flex flex-wrap social-link">
        {#each socials as social}
          <a class="w-12 h-12 text-color6 dark:text-secondary mb-8 xsm:mb-0" href="{social.url}" target="_blank">{@html social.icon}</a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style style lang="postcss" >
  .contact-card{
    @apply bg-color1 shadow hover:shadow-2xl rounded-2xl p-4 py-8 lg:p-8 transition-all duration-300 relative flex flex-col;
  }
  .social-link a:not(:last-child){
    @apply mr-6
  }
</style>