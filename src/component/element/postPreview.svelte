<script>
  export let post;
</script>

<article class="post-preview border border-color3 postID-{post.ID} flex flex-col">

  {#if post.thumb}
  <div class="relative">
    <img alt="{post.title} - Figo Host blog" class="rounded-xl" src="{post.thumb}">
    <a href="blog/{post.name}" class="absolute inset-0 opacity-0"> </a>
  </div>
  {/if}

  <div class="flex justify-between text-xs pt-3 mb-6 px-4 text-color6 opacity-50">
    <h3>in <a href="/blog/category/{post.category.slug}" class="inline-block font-semibold text-color6">{post.category.name}</a></h3>
    <span class="flex items-center leading-none font-semibold">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3 mr-2" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
      </svg>{post.reading_time} min read
    </span>
  </div>

  <h2 class="font-semibold px-4 relative">
    {post.title}
    <a href="blog/{post.name}" class="absolute inset-0 opacity-0"> </a>
  </h2>

</article>

<style style lang="postcss">
  .post-preview {
    @apply bg-color1 shadow-lg rounded-xl overflow-hidden pb-8 relative;
  }
</style>
