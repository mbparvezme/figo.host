<script>
  export let img;
  export let client;
  export let info;
  export let url;
  export let review;
</script>

<div class="client-quote">
  <div class="profile flex mb-4">
    <img
      src="./assest/img/{img}"
      alt="{client +
        (client == undefined ? '' : ' - ' + info)} - Figo host reviewW"
      class="w-12 h-12 rounded-full mr-4"
    />
    <h4 class="font-bold text-sm text-gray-500">
      {client}
      <a href={url} class="text-xs font-medium block">{info}</a>
    </h4>
  </div>
  <p class="text-sm italic">{@html review}</p>
</div>

<style style lang="postcss">
  .client-quote {
    @apply rounded-lg bg-color1 p-8 flex flex-col shadow-around_sm;
  }
</style>
