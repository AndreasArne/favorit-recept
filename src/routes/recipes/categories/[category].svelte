<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/recipes.json')
    const recipes = await response.json()

    const matchingRecipes = recipes
      .filter(recipe => recipe.meta.categories.includes(currentCategory))

    return {
      props: {
        recipes: matchingRecipes
      }
    }
  }
</script>

<script>
  export let recipes
</script>

<ul>
  {#each recipes as recipe}
    <li>
      <h2>
        <a href={recipe.path}>
          {recipe.meta.title}
        </a>
      </h2>
      Published {recipe.meta.date}
    </li>
  {/each}
</ul>