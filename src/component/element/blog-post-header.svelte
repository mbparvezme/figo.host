<script>
  import { check, threeDots } from "$lib/constant";
  export let title;
  export let category;
  export let author;

  let authorName = (name) => {
    const nameParts = name.split(" ");

    return nameParts.map((namePart) => { 
      return namePart[0].toUpperCase() + namePart.substring(1); 
    }).join(" ");
  }
</script>

<section class="pt-8 pb-32 px-8 lg:px-48">
  <h1 class="text-2xl sm:text-4xl font-semibold mb-8 text-center leading-10">{@html title}</h1>
  <div class="flex flex-wrap items-center justify-center text-sm">
    <a href="{author.url}" class="mr-2 flex items-center">
      By <img alt="Abc" class="ml-2 w-7 h-7 rounded-full" src="https://randomuser.me/api/portraits/women/81.jpg">
    </a>
    <a href="{author.url}" class="font-medium mr-4">{authorName(author.name)}</a> in
    <a href="/blog/category/{category.slug}" class="font-medium inline-block ml-2">{category.name}</a>
  </div>
</section>
