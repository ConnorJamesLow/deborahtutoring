<script lang="ts">
    export let wide: boolean = false;
</script>

<style lang="scss">
    @import "theme";
    section {
        margin: auto;
        padding: 0 unit(1);
        width: calc(100vw - #{unit(2)});
        @media (min-width: #{$break}) {
            max-width: 800px;
            &.wide {
                max-width: 1280px;
            }
        }
    }
</style>

<section class="sans" class:wide>
    <slot />
</section>
