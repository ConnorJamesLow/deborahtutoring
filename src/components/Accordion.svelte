<script lang="ts">
    import { fade } from "svelte/transition";
    import Icon from "./Icon.svelte";

    export let title: string = "";
    let active: boolean = false;
</script>

<style lang="scss">
    @import "./theme";

    h2 {
        align-items: center;
        background-color: color(secondary, transparent);
        border-radius: unit(0.25);
        cursor: pointer;
        display: flex;
        font-family: font("serif");
        font-size: unit(1.25);
        margin-top: unit(1);
        padding: unit(1);
        > span {
            margin: unit(1);
        }

        @media (min-width: $break) {
            font-size: unit(2);
        }
    }

    section {
        padding: unit(1);
    }
</style>

<article>
    <h2 on:click={() => (active = !active)}>
        <Icon path={active ? 'dash-square-fill' : 'plus-square'} size={20} />
        <span>{title}</span>
    </h2>
    {#if active}
        <section in:fade={{ duration: 800 }}>
            <slot />
        </section>
    {/if}
</article>
