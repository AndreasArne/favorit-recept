<script>
import { page } from '$app/stores';
$: pathname = $page.url.pathname;
</script>

<header>
  <nav class="flex justify-center w-full  bg-white h-20 items-center text-gray-700 font-bold">
    <span>
      <a class="px-4 flex justify-end" class:selected="{pathname === '/'}" href="/">Hem
      <svg class="w-5 ml-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </a>
    </span>
    <span>
      <a class="px-4 flex justify-end" class:selected="{pathname.includes('/recipes')}" href="/recipes">Recept
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
      </a>
    </span>
    <span>
      <a class="px-4 flex justify-end" class:selected="{pathname === '/about'}"  href="/about">Om
      <svg class="w-5 ml-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </a>
    </span>
    <span>
      <a class="px-4 flex justify-end" class:selected="{pathname === '/contact'}"  href="/contact">Kontakt
      <svg class="w-5 ml-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </a>
    </span>
  </nav>
</header>

<style>
  .selected {
    @apply border-b-4 border-primary;
  }
</style>