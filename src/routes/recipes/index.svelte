<script context="module">
export const load = async ({ fetch }) => {
  const recipes = await fetch('/api/recipes.json')
  const allRecipes = await recipes.json()

  return {
    props: {
      recipes: allRecipes
    }
  }
}

</script>

<script>
  export let recipes
  import { fade, scale, } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import { onDestroy } from "svelte";
  import Search from '$lib/components/Search.svelte'

  import { searchHandler, createSearchStore } from "../../lib/stores/search";

  const searchRecipes = recipes.map((recipe) => ({
    ...recipe,
    searchTerms: `${recipe.meta.title}`,
  }))

  const searchStore = createSearchStore(searchRecipes)
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model))

  onDestroy(() => {
    unsubscribe();
  })
</script>



<div class="px-16 py-6 md:col-span-2">
  <h1>Recept</h1>

  <Search bind:searchValue={$searchStore.search}/>

  <div class="mt-8 grid lg:grid-cols-3 gap-10">
    {#each $searchStore.filtered as recipe, i (i)}
    <a class="card hover:shadow-lg" href={recipe.path} in:fade out:scale|local animate:flip={{duration: 800}}>
        <div class="mx-auto text-center flex flex-col justify-center h-full">
          <span class="font-bold">{recipe.meta.title}</span>
          <span class=" block text-gray-sm">Recept av {recipe.meta.author}</span>
          </div>
      </a>
          <!-- Published {recipe.meta.date} -->
      {/each}
  </div>
</div>
