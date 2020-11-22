<script lang="ts">
    export let title: string = null;
</script>

<style lang="scss">
    @import "theme";
    section {
        padding: unit(2);
        text-align: center;
    }

    h1 {
        font-size: unit(2);
    }

    header {
        margin-bottom: unit(2);
    }

    p {
        font-family: font(sans);
        line-height: 2;
    }
</style>

<section>
    <slot name="title">
        {#if title}
            <header>
                <h1>{title}</h1>
            </header>
        {/if}
    </slot>
    <p>
        <slot />
    </p>
</section>
