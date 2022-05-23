<script context="module">
	export function load({ error }) {
        if (error.message.startsWith("Not found: ")) {
            page = error.message.replace("Not found: ", "")
            error.message = `Sidan ${page} finnd inte!`
        }

		return {
			props: { message: error.message }
		};
	}
</script>

<script>
    export let message;
</script>

<div class="text-center mb-60">
    <h1>Ooops</h1>
    <p>{ message }</p>
    <a class="link" href="/recipes">Kolla in något av alla recept.</a>
</div>