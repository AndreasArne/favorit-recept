<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname

    return {
      props: {
        currentRoute
      }
    }
  }
</script>

<script>
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import "../style.css"
  // import { prefetch, prefetchRoutes } from '$app/navigation'
  // prefetch('/blog') // Loads the blog page in the background
  // prefetchRoutes() // Loads ALL routes in the background. can be expensive if we habe many pages with much data

export let currentRoute
</script>

<div class="flex flex-col h-screen justify-between">
  <Header />

  {#key currentRoute}
    <main class="max-w-4xl mx-auto mb-auto px-3">
      <slot />
    </main>
  {/key}

  <Footer />
</div>