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
  import { fade, scale, } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import Search from '$lib/components/Search.svelte'
  export let recipes
  let searchValue = ""
  let filteredRecipes = []

    $: {
        if(searchValue) {
            filteredRecipes = recipes.filter( recipe => recipe.meta.title.toLowerCase().includes(searchValue.toLowerCase()));
        } else {
            filteredRecipes = [...recipes];
        }
    }
</script>



<div class="px-16 py-6 md:col-span-2">
  <h1>Recept</h1>

  <Search bind:searchValue={searchValue}/>

  <div class="mt-8 grid lg:grid-cols-3 gap-10">
    {#each filteredRecipes as recipe, i (i)}
      <div class="card hover:shadow-lg" in:fade out:scale|local animate:flip={{duration: 800}}>
        <a href={recipe.path}>
        <div class="m-4 text-center">
          <span class="font-bold">{recipe.meta.title}</span>
          <span class="block text-gray-sm">Recept av {recipe.meta.author}</span>
          </div>
        </a>
          <!-- Published {recipe.meta.date} -->
        </div>
      {/each}
  </div>
</div>