<script>
  export let num;
  export let title;
  export let text;

  export let titleSize = "lg";
</script>

<div class="step-card">
  <p class="step-number">{num}</p>
  <h5
    class="mb-4 font-medium"
    class:text-2xl={titleSize == "lg"}
    class:text-xl={titleSize != "lg"}
  >
    {title}
  </h5>
  <p class="text-lg">{text}</p>
</div>

<style style lang="postcss">
  .step-card {
    @apply bg-color1 p-8 shadow-2xl hover:shadow transition-all duration-300 rounded-2xl relative;
  }
  .step-number {
    @apply text-9xl font-black mb-4 text-primary absolute opacity-10 top-4 right-4;
  }
</style>
