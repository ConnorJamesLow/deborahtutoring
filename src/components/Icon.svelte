<script lang="ts">
    export let path: string = "bootstrap";
    export let size: number = 16;
    export let height: number = null;
    export let width: number = null;
</script>

<style lang="scss">
</style>

<svg
    class="bi"
    width={width ?? size}
    height={height ?? size}
    fill="currentColor">
    <use xlink:href={`bootstrap-icons.svg#${path}`} />
</svg>
