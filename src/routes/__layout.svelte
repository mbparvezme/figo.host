<script>
  import "../app.postcss";
  import Nav from "../component/layout/nav.svelte";
  import Footer from "../component/layout/footer.svelte";

  import { navigating } from '$app/stores';
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  const times = {
    delay: 250,
    artificialDuration: 1500,
    doneDuration: 250
  };

  const progressDone = tweened(0, {
    easing: cubicOut
  });

  const progressAnimating = tweened(0, {
    easing: cubicOut
  });

  let progressStoreDone = true;
  $: progressValue = progressStoreDone ? $progressDone : $progressAnimating;
  $: setLoading($navigating);

  async function setLoading(navigating) {
    const progressAnimatingValue = $progressAnimating;
    if (navigating) {
      progressStoreDone = false;
      progressAnimating.set(0, { duration: 0 });
      progressAnimating.set(0.8, { delay: times.delay, duration: times.artificialDuration });
    } else {
      progressStoreDone = true;
      if (progressAnimatingValue > 0) {
        progressDone.set(progressAnimatingValue, { duration: 1 });
        progressDone.set(1, { delay: 1, duration: times.doneDuration });
      }
    }
  }
</script>

<div class="loading-track" class:finished={progressValue === 1} style={`width: ${100 * progressValue}%`} aria-hidden="true" />

<Nav />
<slot />
<Footer />

<style lang="postcss">
  .loading-track {
      z-index: 50000;
      height: 4px;
      width: 0%;
      @apply fixed bg-primary top-0 left-0;
  }
  .loading-track.finished {
      transform: scaleY(0);
      transition: transform 0.5s ease-out;
  }
</style>