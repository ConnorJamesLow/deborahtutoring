<script lang="ts">
</script>

<style lang="scss">
    @import "theme";
    header {
        font-family: font(serif);
        font-size: unit(2);
        padding: 0 unit(1);
        margin: unit(4) 0;
        text-align: center;
        @media (min-width: $break) {
            font-size: unit(4);
        }
    }

    h1 {
        margin-bottom: unit(2);
    }

    small {
        font-size: unit(1.25);
        @media (min-width: $break) {
            font-size: unit(2);
        }
    }
</style>

<header>
    <h1>
        <slot />
    </h1>
    <small>
        <slot name="sub" />
    </small>
</header>
