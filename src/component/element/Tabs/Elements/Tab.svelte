<script>
  import { getContext } from "svelte"
  import { TABS } from "./Tabs.svelte"

  const tab = {}
  const { registerTab, selectTab, selectedTab } = getContext(TABS)

  registerTab(tab)

  export let mode = "btn"
  export let align = "center"
  export let flexCol = false
  export let gap = 8
  export let px = 8
  export let grow = false
  export let w = false
  export let h = false
</script>

<button
  class="py-4 focus-within:outline-none dark:border-gray-700"
  class:flat-tab={mode == "flat"}
  class:btn-tab={mode == "btn"}
  class:flex={flexCol}
  class:flex-col={flexCol}
  class:text-center={align == "center"}
  class:text-left={align == "left"}
  class:text-right={align == "right"}
  class:px-0={px == 0}
  class:px-4={px == 4}
  class:px-8={px == 8}
  class:flex-grow={grow}

  class:w-24={w==24}
  class:h-24={h==24}

  class:mr-0={gap == 0}
  class:sm:mr-4={gap == 4}
  class:sm:mr-8={gap == 8}

  class:selected={$selectedTab === tab}
  on:click={() => selectTab(tab)}
><slot /></button>

<style lang="postcss">
  button {
    color: inherit;
    @apply focus-within:outline-none py-3 border-gray-300 bg-transparent font-medium flex-grow md:flex-grow-0;
  }

  button.selected {
    @apply text-primary;
  }

  button.selected {
    @apply border-primary;
  }

  button.flat-tab {
    @apply bg-none border-0 border-b-2 rounded-none;
  }

  button.btn-tab {
    @apply border-0 dark:border-2 border-primary rounded-lg bg-color1 shadow-2xl;
  }
  button.btn-tab.selected {
    @apply shadow-around;
  }

  button.btn-tab:not(:last-child){
    @apply xsm:mr-4;
  }
</style>
