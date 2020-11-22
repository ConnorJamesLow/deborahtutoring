<script lang="ts">
</script>

<style lang="scss">
    @import "theme";
    button {
        background-color: inherit;
        border-radius: 4rem;
        color: inherit;
        height: 40px;
        transition: background-color ease 0.3s;
        width: 40px;
        &:hover {
            background-color: #0f0f0f3a;
        }
        &:active {
            background-color: #0f0f0f72;
        }
    }
</style>

<button on:click>
    <slot />
</button>
