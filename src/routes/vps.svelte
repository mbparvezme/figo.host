<script context="module">
  export async function load({fetch}) {
    const res = await fetch("/api/vps")
    if(res.ok) {return {props: {data: await res.json()}}}
    return {status: res.status, error: new Error(`Could not load ${url}`)}
  }
</script>

<script>
  export let data
  import Header from "../component/layout/header.svelte"
  import Hero from "../component/element/page-hero-content.svelte"
  import BLOCK_TITLE from "../component/element/block-title.svelte"
  import VPS_Card from "../component/element/vps-feature-card.svelte"
  import VPS_Selector from "../component/element/server-package-selector.svelte"
  import Addons from "../component/block/addons.svelte"
  import Specification from "../component/block/specification.svelte"
  import Feature from "../component/block/feature.svelte"
  import Faq from "../component/block/faq.svelte"
  import Meta from "../component/element/meta.svelte"
  import { Tabs, TabList, TabPanel, Tab } from "../component/element/Tabs";
  let vpsPackage = 1
  let selectedSSDPackage = data.packages.ssd[vpsPackage - 1]
  let selectedHDDPackage = data.packages.hdd[vpsPackage - 1]
</script>

<Meta
  titlePrefix = "Virtual Private Server - VPS - "
  description = "Get 30X faster,  stable &amp; secure Cloud based VPS hosting &amp; show your online performance."
  keywords    = "vps hosting, best vps hosting, cheap vps, virtual server, server space, cheapest vps hosting, cheap server build, best vps, best web server, cloud web hosting, dedicated web hosting, vps hosting plans, cloud server hosting, private server, best linux"
/>

<Header>
  <Hero
    title="MAXIMUM PERFORMANCE, MINIMUM EFFORT"
    subtitle="FULL SCALABILITY, HIGH AVAILABILITY"
    text="All resources are dedicated to you and are scalable on demand, ensuring
    ideal performance for your sites and applications"
  />
</Header>

<section class="px-8 pt-24 pb-32 bg-color3" id="plans">
  <Tabs>
    <TabList>
      <div class="flex flex-col xsm:flex-row flex-wrap justify-center mb-8 text-sm">
        <Tab>SSD</Tab>
        <Tab>HDD</Tab>
      </div>
    </TabList>
    <TabPanel>
      <div class="px-8 py-12 bg-color1 rounded-xl">
        <div class="mb-12 pb-8 border-b dark:border-gray-700">
          <input
            type="range"
            min="1"
            max={data.packages.ssd.length}
            step="1"
            id="vpsPackage"
            bind:value={vpsPackage}
            on:change={() => (selectedSSDPackage = data.packages.ssd[vpsPackage - 1])}
          />
          <div class="flex pkg-label">
            {#each data.packages.ssd as pkg}
            <span>{pkg.title}</span>
            {/each}
          </div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 grid lg:grid-cols-2 gap-4 lg:gap-8 rounded-xl bg-color1">
            {#each selectedSSDPackage.data as cardData}
              <VPS_Card data={cardData} />
            {/each}
          </div>
          <div class="lg:col-span-1 self-center h-full">
            <VPS_Selector selectedPackage={selectedSSDPackage} />
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="px-8 py-12 bg-color1 rounded-xl">
        <div class="mb-12 pb-8 border-b dark:border-gray-700">
          <input
            type="range"
            min="1"
            max={data.packages.hdd.length}
            step="1"
            id="vpsPackage"
            bind:value={vpsPackage}
            on:change={() => (selectedHDDPackage = data.packages.hdd[vpsPackage - 1])}
          />
          <div class="flex pkg-label">
            {#each data.packages.hdd as pkg}
            <span>{pkg.title}</span>
            {/each}
          </div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 grid lg:grid-cols-2 gap-4 lg:gap-8 rounded-xl bg-color1">
            {#each selectedHDDPackage.data as cardData}
              <VPS_Card data={cardData} />
            {/each}
          </div>
          <div class="lg:col-span-1 self-center h-full">
            <VPS_Selector selectedPackage={selectedHDDPackage} />
          </div>
        </div>
      </div>
    </TabPanel>
  </Tabs>
</section>

{#if undefined != data.addons}
  <Addons addons={data.addons} />
{/if}

<section class="px-8 py-32 bg-color1">
  <div class="grid md:grid-cols-2 gap-12">
    <div>
      <h4 class="text-2xl font-semibold">FREE domain</h4>
      <h5 class="text-base font-medium mb-4 text-gray-500">
        With annual subscription
      </h5>
      <p class="dark:font-light">
        We offer a free domain with every annual package of VPS server during
        registration. After the initial year, the domain can be renewed at
        market price.
      </p>
    </div>
    <div>
      <h4 class="text-2xl font-semibold">Extreme performance</h4>
      <h5 class="text-base font-medium mb-4 text-gray-500">
        With the latest technologies
      </h5>
      <p class="dark:font-light">
        Using open source technology, like OpenStack and KVM, we offer VPS that
        is both powerful and easy to use. And, by building our servers with
        state-of-the-art components, we unlock truly breakthrough speed.
      </p>
    </div>
  </div>
</section>

{#if undefined != data.specification}
  <Specification data={data.specification} />
{/if}

<section class="px-8 py-32 bg-color1">
  <BLOCK_TITLE title="AVAILABLE OPERATING SYSTEMS" />
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:px-32 os-logo">
    <div class="os-card">
      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M107.86 118.641l9.229 9.177-9.229 9.175H42.901v30.571L3.286 127.818l39.615-39.08v29.903h64.96zm28.554-78.068h78.929v78.93h-78.929v-78.93z" fill="#932279"/><path d="M137.275 107.86l-9.175 9.229-9.175-9.229V42.901H88.352L128.1 3.286l39.077 39.615h-29.902v64.96zm-.86 28.554h78.928v78.93h-78.929v-78.93z" fill="#EFA724"/><path d="M148.057 137.275l-9.23-9.175 9.23-9.175h64.958V88.352l39.617 39.748-39.617 39.077v-29.902h-64.958zm-107.484-.86h78.929v78.93H40.573v-78.93z" fill="#262577"/><path d="M118.641 148.057l9.175-9.23 9.177 9.23v64.96h30.571l-39.748 39.615-39.076-39.615h29.901v-64.96zM40.573 40.573h78.929v78.93H40.573v-78.93z" fill="#9CCD2A"/><path d="M37.754 37.754h84.567v84.567H37.754V37.754zm5.637 78.93h73.291V43.393H43.391v73.291zm90.206-78.93h84.567v84.567h-84.567V37.754zm5.637 78.93h73.291V43.393h-73.291v73.291zm-5.637 16.913h84.567v84.569h-84.567v-84.57zm5.637 78.928h73.291v-73.291h-73.291v73.291zm-101.48-78.928h84.567v84.569H37.754v-84.57zm5.637 78.928h73.291v-73.291H43.391v73.291z" fill="#FFF"/><path d="M60.188 187.758l-59.8-59.8L60.187 68.16l59.8 59.798-59.798 59.8zm-51.826-59.8l51.826 51.826 51.824-51.826-51.826-51.824-51.824 51.824zm119.596-7.972L68.16 60.188l59.798-59.8 59.798 59.8-59.798 59.798zM76.134 60.188l51.824 51.824 51.826-51.824-51.826-51.826-51.824 51.826zm119.596 127.57l-59.798-59.8L195.73 68.16l59.798 59.798-59.798 59.8zm-51.826-59.8l51.826 51.826 51.824-51.826-51.824-51.824-51.826 51.824zm-15.946 127.57L68.16 195.73l59.798-59.798 59.798 59.798-59.798 59.798zM76.134 195.73l51.824 51.824 51.826-51.824-51.826-51.824-51.824 51.824z" fill="#FFF"/></svg>
      <p class="pt-4 text-color4 text-lg text-center font-bold">CentOS</p>
    </div>
    <div class="os-card">
      <svg viewBox="0 0 256 317" xmlns="http://www.w3.org/2000/svg"><g fill="#A80030"><path d="M152.797 167.425c-5.251.073.993 2.706 7.848 3.761a70.171 70.171 0 0 0 5.143-4.43c-4.269 1.046-8.614 1.07-12.991.67M180.98 160.4c3.127-4.315 5.406-9.04 6.21-13.926-.702 3.483-2.593 6.49-4.372 9.663-9.815 6.18-.923-3.67-.006-7.413-10.554 13.284-1.45 7.966-1.832 11.677M191.382 133.33c.635-9.455-1.86-6.466-2.7-2.857.98.508 1.754 6.665 2.7 2.858M132.886 4.088c2.802.503 6.054.888 5.598 1.557 3.066-.672 3.761-1.291-5.598-1.557M138.484 5.645l-1.98.41 1.843-.164.137-.246"/><path d="M225.866 136.916c.312 8.492-2.484 12.612-5.006 19.905l-4.538 2.268c-3.714 7.211.36 4.579-2.3 10.315-5.797 5.154-17.593 16.13-21.368 17.132-2.756-.062 1.867-3.253 2.472-4.503-7.761 5.33-6.227 8-18.097 11.238l-.347-.771c-29.274 13.771-69.937-13.52-69.402-50.76-.313 2.364-.889 1.774-1.537 2.73-1.511-19.16 8.848-38.405 26.319-46.262 17.088-8.46 37.122-4.988 49.362 6.42-6.724-8.808-20.107-18.144-35.968-17.27-15.536.245-30.07 10.12-34.921 20.837-7.96 5.012-8.883 19.318-12.352 21.936-4.666 34.296 8.778 49.114 31.52 66.544 3.58 2.414 1.009 2.78 1.494 4.617-7.557-3.539-14.476-8.88-20.165-15.42 3.018 4.419 6.276 8.714 10.487 12.089-7.124-2.414-16.641-17.264-19.42-17.868 12.281 21.988 49.827 38.562 69.486 30.34-9.096.335-20.653.186-30.874-3.592-4.293-2.209-10.13-6.785-9.088-7.641 26.83 10.023 54.546 7.591 77.762-11.02 5.906-4.599 12.358-12.424 14.222-12.532-2.808 4.222.48 2.03-1.677 5.76 5.885-9.491-2.557-3.864 6.083-16.39l3.191 4.394c-1.186-7.878 9.783-17.444 8.67-29.904 2.516-3.81 2.808 4.1.137 12.866 3.706-9.725.976-11.288 1.929-19.312 1.029 2.697 2.379 5.564 3.071 8.41-2.414-9.398 2.478-15.826 3.688-21.288-1.193-.528-3.726 4.156-4.305-6.945.085-4.822 1.342-2.528 1.827-3.714-.947-.544-3.43-4.24-4.941-11.33 1.095-1.665 2.927 4.32 4.418 4.565-.959-5.637-2.61-9.935-2.677-14.26-4.354-9.099-1.54 1.213-5.073-3.906-4.634-14.456 3.846-3.355 4.419-9.924 7.024 10.178 11.03 25.951 12.868 32.485-1.402-7.966-3.67-15.683-6.437-23.149 2.133.897-3.436-16.39 2.773-4.94-6.633-24.406-28.388-47.21-48.401-57.91 2.449 2.24 5.54 5.055 4.43 5.496-9.953-5.926-8.202-6.388-9.628-8.892-8.109-3.299-8.64.266-14.012.006-15.282-8.106-18.227-7.244-32.291-12.322l.64 2.99c-10.125-3.373-11.797 1.279-22.74.01-.666-.52 3.507-1.881 6.94-2.38-9.789 1.29-9.33-1.93-18.909.356 2.361-1.657 4.857-2.753 7.376-4.161-7.983.485-19.058 4.646-15.64.862-13.02 5.809-36.145 13.964-49.122 26.132l-.41-2.727c-5.945 7.14-25.93 21.32-27.522 30.565l-1.59.371c-3.094 5.24-5.096 11.177-7.55 16.568-4.047 6.896-5.932 2.654-5.356 3.735-7.96 16.138-11.914 29.7-15.33 40.821 2.435 3.638.059 21.9.98 36.517-3.998 72.187 50.662 142.275 110.41 158.458 8.757 3.132 21.78 3.012 32.858 3.334-13.07-3.738-14.76-1.981-27.49-6.42-9.185-4.325-11.198-9.263-17.702-14.908l2.574 4.55c-12.758-4.515-7.42-5.588-17.798-8.875l2.75-3.591c-4.135-.313-10.953-6.97-12.817-10.654l-4.523.178c-5.435-6.706-8.331-11.54-8.12-15.282l-1.462 2.603c-1.657-2.843-19.995-25.15-10.481-19.957-1.768-1.616-4.117-2.63-6.665-7.259l1.937-2.215c-4.579-5.89-8.427-13.441-8.135-15.957 2.443 3.299 4.138 3.915 5.815 4.48-11.563-28.69-12.211-1.581-20.969-29.204l1.853-.149c-1.42-2.139-2.282-4.462-3.425-6.74l.807-8.037c-8.325-9.625-2.33-40.926-1.128-58.093.832-6.98 6.948-14.412 11.6-26.065l-2.834-.488c5.417-9.45 30.933-37.952 42.75-36.485 5.724-7.19-1.137-.026-2.256-1.838 12.573-13.012 16.527-9.193 25.013-11.533 9.151-5.432-7.855 2.118-3.516-2.072 15.82-4.041 11.212-9.187 31.85-11.238 2.178 1.239-5.051 1.914-6.866 3.521 13.181-6.449 41.712-4.982 60.244 3.58 21.504 10.049 45.663 39.754 46.616 67.704l1.084.292c-.55 11.11 1.7 23.958-2.198 35.76l2.654-5.587"/><path d="M95.483 174.634l-.736 3.682c3.45 4.687 6.189 9.765 10.595 13.43-3.17-6.19-5.525-8.746-9.859-17.112M103.642 174.313c-1.827-2.02-2.908-4.45-4.117-6.873 1.157 4.257 3.526 7.916 5.733 11.636l-1.616-4.763M248.003 142.936l-.771 1.934c-1.414 10.046-4.468 19.987-9.15 29.203 5.173-9.725 8.519-20.36 9.921-31.137M133.923 1.57c3.55-1.301 8.728-.714 12.495-1.57-4.91.412-9.795.657-14.62 1.28l2.125.29M9.282 67.847c.819 7.574-5.698 10.514 1.444 5.52 3.828-8.623-1.496-2.381-1.444-5.52M.89 102.9c1.645-5.049 1.943-8.082 2.572-11.004C-1.085 97.708 1.37 98.946.89 102.9"/></g></svg>
      <p class="pt-4 text-color4 text-lg text-center font-bold">Debian</p>
    </div>
    <div class="os-card">
      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M256 128.004C256 57.31 198.691 0 127.998 0 57.336 0 .05 57.262 0 127.914v99.054c.038 16.042 13.049 29.029 29.101 29.029h98.949C198.72 255.969 256 198.679 256 128.004" fill="#294172"/><path d="M165.58 30.307c-33.109 0-60.045 26.935-60.045 60.045v31.87H73.797c-33.109 0-60.045 26.937-60.045 60.046 0 33.108 26.936 60.045 60.045 60.045s60.045-26.937 60.045-60.045v-31.871h31.738c33.109 0 60.046-26.936 60.046-60.045 0-33.11-26.937-60.045-60.046-60.045zm-59.823 151.961c0 17.622-14.337 31.959-31.96 31.959s-31.96-14.337-31.96-31.959c0-17.623 14.337-31.96 31.96-31.96h31.738v.089h.222v31.871zm59.823-59.956h-31.738v-.09h-.221v-31.87c0-17.623 14.337-31.96 31.959-31.96s31.96 14.337 31.96 31.96-14.338 31.96-31.96 31.96z" fill="#3C6EB4"/><path d="M178.851 32.128c-4.66-1.218-8.238-1.786-13.271-1.786-33.177 0-60.075 26.899-60.075 60.074v31.842h-25.16c-7.845 0-14.185 6.165-14.18 13.996 0 7.782 6.27 13.973 14.032 13.973l20.831.004c2.473 0 4.479 2 4.479 4.469v27.553c-.031 17.491-14.219 31.659-31.71 31.659-5.925 0-7.392-.776-11.437-.776-8.497 0-14.182 5.696-14.182 13.528.002 6.479 5.554 12.049 12.348 13.827 4.66 1.218 8.238 1.787 13.271 1.787 33.177 0 60.075-26.899 60.075-60.075v-31.841h25.16c7.845 0 14.185-6.165 14.18-13.996 0-7.783-6.27-13.973-14.032-13.973l-20.831-.004a4.475 4.475 0 0 1-4.479-4.47V90.366c.031-17.491 14.219-31.659 31.71-31.659 5.925 0 7.392.777 11.437.777 8.497 0 14.182-5.697 14.182-13.528-.002-6.48-5.554-12.05-12.348-13.828" fill="#FFF"/></svg>
      <p class="pt-4 text-color4 text-lg text-center font-bold">Fedora</p>
    </div>
    <div class="os-card">
      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M255.637 127.683c0 70.514-57.165 127.68-127.683 127.68C57.434 255.363.27 198.197.27 127.683.27 57.165 57.436 0 127.954 0c70.519 0 127.683 57.165 127.683 127.683z" fill="#DD4814"/><path d="M41.133 110.633c-9.419 0-17.05 7.631-17.05 17.05 0 9.414 7.631 17.046 17.05 17.046 9.415 0 17.046-7.632 17.046-17.046 0-9.419-7.631-17.05-17.046-17.05zm121.715 77.478c-8.153 4.71-10.95 15.13-6.24 23.279 4.705 8.154 15.125 10.949 23.279 6.24 8.153-4.705 10.949-15.125 6.24-23.28-4.705-8.148-15.131-10.943-23.279-6.239zm-84.686-60.428c0-16.846 8.368-31.73 21.171-40.742L86.87 66.067c-14.914 9.97-26.012 25.204-30.624 43.047 5.382 4.39 8.826 11.075 8.826 18.568 0 7.489-3.444 14.174-8.826 18.565C60.852 164.094 71.95 179.33 86.87 189.3l12.463-20.88c-12.803-9.007-21.171-23.89-21.171-40.737zm49.792-49.797c26.013 0 47.355 19.944 49.595 45.38l24.29-.358c-1.194-18.778-9.398-35.636-22.002-48.032-6.482 2.449-13.97 2.074-20.44-1.656-6.483-3.741-10.548-10.052-11.659-16.902a74.26 74.26 0 0 0-19.785-2.69 73.787 73.787 0 0 0-32.819 7.663l11.845 21.227a49.596 49.596 0 0 1 20.975-4.632zm0 99.59a49.601 49.601 0 0 1-20.974-4.632l-11.845 21.225a73.712 73.712 0 0 0 32.82 7.671 74.04 74.04 0 0 0 19.784-2.697c1.111-6.85 5.177-13.155 11.658-16.902 6.476-3.737 13.959-4.105 20.44-1.656 12.605-12.396 20.808-29.254 22.004-48.032l-24.297-.358c-2.235 25.443-23.576 45.38-49.59 45.38zm34.888-110.231c8.154 4.708 18.575 1.92 23.279-6.234 4.71-8.154 1.92-18.575-6.234-23.285-8.154-4.704-18.574-1.91-23.285 6.244-4.703 8.15-1.908 18.57 6.24 23.275z" fill="#FFF"/></svg>
      <p class="pt-4 text-color4 text-lg text-center font-bold">Ubuntu</p>
    </div>
  </div>
</section>

{#if undefined != data.features}
  <Feature features={data.features} />
{/if}
{#if undefined != data.faq}
  <Faq faqs={data.faq} />
{/if}

<style lang="postcss" >
  .vps-package-head {
    @apply grid lg:grid-cols-5 xl:grid-cols-6 py-6 px-3 font-medium text-sm bg-color2 border-none rounded-xl;
  }
  .vps-package-info {
    @apply grid grid-cols-3 border-b dark:border-gray-700 p-8 bg-color1 rounded-xl;
  }

  input[type="range"] {
    -webkit-appearance: none;
    @apply block mb-4 w-full bg-transparent;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply w-8 h-8 rounded-full bg-primary cursor-pointer shadow-sm -mt-3;
  }
  input[type="range"]::-moz-range-thumb {
    @apply w-8 h-8 rounded-full bg-primary cursor-pointer shadow-sm -mt-3;
  }
  input[type="range"]::-ms-thumb {
    @apply w-8 h-8 rounded-full bg-primary cursor-pointer shadow-sm -mt-3;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    @apply w-full h-3 cursor-pointer shadow-inner bg-color3 rounded-xl;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    @apply bg-primary-lighter;
  }

  input[type="range"]::-moz-range-track {
    @apply w-full h-3 cursor-pointer shadow-inner bg-color3 rounded-xl;
  }

  input[type="range"]::-ms-track {
    @apply w-full h-3 cursor-pointer shadow-inner bg-color3 rounded-xl;
  }
  input[type="range"]::-ms-fill-lower {
    @apply bg-primary-lighter;
  }
  input[type="range"]:focus::-ms-fill-lower {
    @apply bg-primary-lighter;
  }
  input[type="range"]::-ms-fill-upper {
    @apply bg-primary-lighter;
  }
  input[type="range"]:focus::-ms-fill-upper {
    @apply bg-primary-lighter;
  }
  .pkg-label{
    @apply flex justify-between;
  }
  .pkg-label span{
    @apply font-semibold uppercase;
  }
  .os-card {
    @apply shadow-2xl bg-color1 dark:bg-color2 rounded-xl p-4 text-center hover:shadow-sm transition-all duration-300 cursor-pointer;
  }
  .os-card svg {
    @apply h-24 md:h-32 w-auto mx-auto inline-block;
  }
</style>
