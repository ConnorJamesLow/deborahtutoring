<script lang="ts">
    export let image: string;
    export let imagePosition: string = "center center";
</script>

<style lang="scss">
    @import "theme";
    $padding: unit(2);
    header {
        background-color: #0a0a0a0a;
        background-repeat: no-repeat;
        background-size: cover;
        color: color(background);
        height: calc(100vh - #{$padding * 2});
        padding: $padding;
        @media (min-width: $break) {
            padding: unit(4);
        }
    }

    h1 {
        font-size: unit(3);
        margin-top: calc(40vh - #{unit(2)});

        @media (min-width: $break) {
            font-size: unit(4);
            + small {
                font-size: unit(2);
            }
        }
        + small {
            display: block;
            font-family: inherit;
            font-size: unit(1.5);
            margin-top: unit(3);
        }
    }
</style>

<header
    style={image && `background-image: linear-gradient(#0004, #0004), url("${image}"); background-position: ${imagePosition};`}>
    <h1>
        <slot />
    </h1>
    <small>
        <slot name="sub" />
    </small>
</header>
