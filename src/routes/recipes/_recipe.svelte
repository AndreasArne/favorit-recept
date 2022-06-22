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

    .recipe :global(table){
      border-collapse: collapse;
      margin: 20px 0;
      min-width: 350px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .recipe :global(thead tr) {
        @apply bg-primary;
        color: #ffffff;
        text-align: left;
    }

   .recipe :global( th),
   .recipe :global( td) {
        padding: 10px 10px;
    }

    .recipe :global(tbody tr) {
        border-bottom: thin solid #dddddd;
    }

    .recipe :global(tbody tr:nth-of-type(even)) {
        /* background-color: #f3f3f3; */
        @apply bg-secondary-100;
    }

    .recipe :global(tbody tr:last-of-type) {
        /* border-bottom: thin solid #009879; */
        @apply border-b-primary border-solid border-b-2;
    }

    .recipe :global(tbody tr.active-row) {
        font-weight: bold;
        color: #009879;
    }

</style>