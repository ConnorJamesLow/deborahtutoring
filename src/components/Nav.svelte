<script lang="ts">
	import Icon from "./Icon.svelte";
	import IconButton from "./IconButton.svelte";
	import { stores } from "@sapper/app";
	import store from "../store";
	import NavLink from "./NavLink.svelte";
	const { page } = stores();

	export let segment;
	let expand: boolean = false;

	// Auto-close on navigate.
	page.subscribe(() => (expand = false));

	const { nav } = store;
</script>

<style lang="scss">
	@import "theme";
	$number-of-links: 3;
	$header-height: unit(4);
	$child-padding-x: unit(1);
	$child-padding-y: unit(0.5);

	@mixin transition-effects {
		filter: blur(2px);
		opacity: 0;
		pointer-events: none;
		top: calc(50vh - #{unit($number-of-links) * 2} - #{unit(1)});
	}

	nav {
		background: $nav--background;
		display: flex;
		flex-wrap: wrap;
		height: 80px;
		position: fixed;
		top: 0;
		transition: all 0.3s;
		width: 100%;
		z-index: $nav--z-index;
	}

	header {
		align-items: center;
		display: flex;
		padding: $child-padding-y $child-padding-x;
		position: absolute;
		height: $header-height;
		> div.mobile {
			margin-left: auto;
		}
	}

	h1 {
		font-size: unit(2);
	}

	ul {
		align-items: center;
		display: flex;
		position: absolute;
	}

	@media (max-width: #{$break - 1px}) {
		nav {
			&:not(.expand) > ul {
				@include transition-effects();
			}
			&.expand {
				background: color(background);
				color: color(text);
				height: 100vh;
				width: 100vw;
			}
		}

		ul {
			flex-direction: column;
			flex-grow: 1;
			justify-content: center;
			padding: 0;
			text-align: center;
			top: calc(50vh - #{unit($number-of-links) * 2});
			transition: all 0.3s, top 0.3s, opacity 0.3s;
			width: 100vw;
		}

		header {
			width: calc(100vw - #{$child-padding-x * 2});
			z-index: 50;
		}
	}

	@media (min-width: $break) {
		ul {
			flex-direction: row;
			margin-left: auto;
			padding: 0 unit(1);
			position: relative;
		}
		header {
			position: relative;
		}
	}

	.dark {
		background-color: transparentize(color(text), 0.5);
		color: color(background);
	}
</style>

<nav class:expand class:dark={$nav === 'dark'}>
	<header>
		<hgroup>
			<a href="/">
				<h1 class="desktop">Deborah Low, Private Tutor</h1>
				<h1 class="mobile">Deborah Tutoring</h1>
			</a>
		</hgroup>
		<div class="mobile">
			<IconButton on:click={() => (expand = !expand)}>
				<Icon path="three-dots-vertical" />
			</IconButton>
		</div>
	</header>
	<ul>
		<NavLink current={!segment} href="/">work</NavLink>
		<NavLink current={segment === 'about'} href="/about">about</NavLink>
		<NavLink current={segment === 'faq'} href="/faq">info</NavLink>
		<NavLink action current={segment === 'book'} href="/book">book</NavLink>
	</ul>
</nav>
