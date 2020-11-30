<script lang="ts">
    export let src: string = null;
    export let alt: string = "";
</script>

<style lang="scss">
    @import "./theme";
    figure {
        height: 100%;
        width: 100%;
        max-width: 100vw;
    }
    img {
        border-radius: unit(0.5);
        width: 100%;
    }
</style>

<figure>
    {#if src}
        <img {src} {alt} />
    {:else}
        <slot />
    {/if}
</figure>
