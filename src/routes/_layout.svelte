<script>
	import Nav from "../components/Nav.svelte";
	import store from "../store";

	export let segment;
</script>

<style lang="scss">
	@import "../components/theme";

	footer {
		background: color(primary);
		color: color(text, transparent);
		padding: unit(1.5) unit(2);
	}
</style>

<svelte:window
	on:resize={store.view.calculateHeightWidth()}
	on:scroll={store.view.calculateScroll()} />
<Nav {segment} />

<main>
	<slot />
</main>
<footer class="sans">
	&copy; Deborah Low, 2020
</footer>
