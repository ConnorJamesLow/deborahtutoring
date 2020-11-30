<script>
	import Nav from "../components/Nav.svelte";
	import store from "../store";

	export let segment;
</script>

<style lang="scss">
	@import "../components/theme";

	footer {
		align-items: baseline;
		background: color(primary);
		color: color(text, transparent);
		display: flex;
		justify-content: space-between;
		padding: unit(1.5) unit(2);
		> * {
			margin-bottom: 0;
		}

		> :last-child {
			margin-left: auto;
		}

		section {
			display: flex;
			> * + * {
				margin-left: unit(1);
			}
		}

		> address {
			color: color(text);
			font-size: unit(1.5);
			font-style: normal;
			h1 {
				color: color(text, transparent);
				font-size: unit(2);
				margin-bottom: unit(1);
			}
		}

		> div {
			margin-top: auto;
		}
	}

	@media (max-width: $break) {
		.desktop {
			display: none;
		}

		footer {
			flex-direction: column;
			> address {
				font-size: unit(1);
			}
			section {
				flex-direction: column;
				> * {
					margin-bottom: unit(1);
					+ * {
						margin-left: 0;
					}
				}
			}
		}
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
	<address>
		<h1>Contact</h1>
		<section>
			<div>Deborah</div>
			<span class="desktop">|</span>
			<div>deborahlow.tutor@gmail.com</div>
		</section>
	</address>
	<div>&copy; Deborah Low, 2020</div>
</footer>
