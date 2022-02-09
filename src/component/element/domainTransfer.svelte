<script>
  import { onMount } from "svelte";
  let domain = "";
  let transferDomain = () => {
    if (domain == "") {
      alert("Please enter a domain name to transfer");
      return;
    }
    alert("Transfer domain: " + domain);
    domain = "";
  };
  onMount(() => {
    placeholder();
  });

  let placeholderText = "";
  let placeholderCount = 0;
  let defaultPlaceHolder = [
    "yourdomain.com",
    "mydomain.xyz",
    "helloworld.me",
    "business.club",
  ];
  let selectedText = defaultPlaceHolder[
      Math.floor(Math.random() * (defaultPlaceHolder.length - 1))
    ];
  let placeholder = () => {
    if (placeholderCount < selectedText.length) {
      placeholderText += selectedText.charAt(placeholderCount);
      placeholderCount++;
      setTimeout(placeholder, 400);
    } else {
      setTimeout(() => {
        placeholderText = "";
        placeholderCount = 0;
        selectedText =
          defaultPlaceHolder[
            Math.floor(Math.random() * (defaultPlaceHolder.length - 1))
          ];
        placeholder();
      }, 1500);
    }
  };
</script>


<div class="domain-search flex flex-row items-center">
  <input type="text" bind:value={domain} required placeholder={placeholderText}/>
  <button class="register-btn btn" on:click={() => transferDomain()}>TRANSFER</button>
</div>

<style style lang="postcss">
  input {
    @apply flex items-center h-16 w-full md:w-80 px-6 text-lg font-extralight bg-color1 focus-within:outline-none placeholder-gray-500 cursor-pointer focus-within:cursor-text shadow-around rounded-l-full;
  }
</style>