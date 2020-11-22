<script lang="ts">
    export let primary: boolean = false;
    export let secondary: boolean = false;
</script>

<style lang="scss">
    @import "theme";
    article {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .primary {
        background: color(primary);
    }

    .secondary {
        background: color(secondary);
    }
</style>

<article class:primary class:secondary>
    <slot />
</article>
