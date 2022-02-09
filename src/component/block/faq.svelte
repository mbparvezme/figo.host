<script>
  import BLOCK_TITLE from "../element/block-title.svelte";
  import Collapse from "../element/collapse.svelte";
  export let faqs;
</script>

<section class="px-8 lg:px-40 py-32 dark:bg-color3">
  <BLOCK_TITLE title="FREQUENTLY ASKED QUESTIONS" />
  {#each faqs as faq}
    <Collapse data={faq} />
  {/each}
</section>
