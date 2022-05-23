<script>
  export let title
  // export let categories
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<!-- {#if categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each categories as category}
        <li>
          <a href="/recipes/categories/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if} -->


<div class="recipe max-w-3xl mx-auto mb-14">
  <slot />
</div>

<style>

    .recipe :global(h3) {
      @apply text-2xl font-semibold py-5;
    }

    .recipe :global(ul) {
      @apply list-disc list-inside pl-5 space-y-1;
    }

    .recipe :global(ul:last-of-type) {
      @apply list-decimal list-inside pl-5 space-y-4;
    }
</style>