<script>
  export let data;
  export let type = "faq";
  function toggleCollapse(target, clearState = true) {
    let selectedID = false;
    if (clearState) {
      let activeItem = document.querySelector(".collapse.show");
      if (activeItem != undefined) {
        selectedID = "#" + activeItem.getAttribute("id");
        activeItem.classList.toggle("show");
        document
          .querySelector(".collapse-toggle.active")
          .classList.toggle("active");
      }
    }
    if (selectedID != "#" + target) {
      if (undefined != document.querySelector("." + target))
        document.querySelector("." + target).classList.toggle("active");
      document.querySelector("#" + target).classList.toggle("show");
    }
  }

  let loadingID = "figo-" + Math.random().toString(36).substring(7);
</script>

<div class="collapse-toggle {'faq-1-' + loadingID}">
  <p
    class="collapse-title font-semibold"
    on:click={() => {
      toggleCollapse("faq-1-" + loadingID);
    }}
  >
    {#if type == "faq"} Q. {/if} {@html data.q}
  </p>
  <div class="collapse" id={"faq-1-" + loadingID}>
    <p class="content dark:font-light">{@html data.a}</p>
  </div>
</div>

<style style lang="postcss">
  .collapse-toggle {
    @apply border-b-2 border-color2;
  }
  .collapse-title {
    @apply relative justify-between items-center cursor-pointer py-5;
  }
  .collapse-title:after {
    content: "";
    top: calc(50% - 6px);
    @apply absolute transition-all duration-100 w-2 h-2 right-1 transform rotate-45 border-r-2 border-b-2 border-color6;
  }
  .collapse-toggle.active .collapse-title {
    @apply text-primary;
  }
  .collapse-toggle.active .collapse-title:after {
    top: calc(50% - 3px);
    transform: rotate(-135deg);
    @apply duration-200 border-primary;
  }

  .collapse {
    @apply transition-all duration-700 opacity-0 origin-top h-0 overflow-y-hidden;
  }
  .collapse.show {
    @apply opacity-100 h-auto;
  }
  .collapse .content {
    @apply pt-2 pb-6;
  }
</style>
