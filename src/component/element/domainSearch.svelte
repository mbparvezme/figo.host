<script>
  export let register = true;
  import { onMount } from "svelte";
  let domain = "";
  let registerDomain = () => {
    if (domain == "") {
      alert("Please enter a domain name to register");
      return;
    }
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
  let selectedText =
    defaultPlaceHolder[
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

<form class="domain-search flex flex-row items-center" action="https://my.figo.host/cart.php?a=add&domain=register" method="post">
  <input type="text" name="query" bind:value={domain} required placeholder={placeholderText}/>
  <button class="register-btn btn" on:click={() => registerDomain()}>GET NOW</button>
</form>

<style style lang="postcss">
  input {
    @apply flex items-center h-16 w-full md:w-80 px-6 text-lg font-extralight bg-color1 focus-within:outline-none placeholder-gray-500 cursor-pointer focus-within:cursor-text shadow-around rounded-l-full;
  }
  button {
    @apply h-16 bg-primary font-semibold px-8 w-auto text-lighter rounded-full whitespace-nowrap -ml-6 shadow-around;
  }
</style>
