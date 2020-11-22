<script lang="ts">
    export let href: string;
    export let current: boolean;
</script>

<style lang="scss">
    @import "theme";

    * {
        transition: color ease 0.3s, background ease 0.3s;
    }

    li {
        background: $nav-link--background;
        color: $nav-link--color;
        font: $nav-link--font;
        text-transform: $nav-link--text-transform;
        &:hover {
            @include nav-link--hover;
        }
        &:active {
            @include nav-link--active;
        }
    }

    a {
        color: inherit;
        display: block;
        padding: unit(1) 0;
    }

    @media (max-width: #{$break - 1px}) {
        li {
            @include nav-link--mobile;
            width: 100%;
        }
    }

    @media (min-width: $break) {
        a {
            padding: unit(1);
        }
    }

    .current {
        @include nav-link--current;
    }
</style>

<li class:current>
    <a {href} aria-current={current && 'page'}>
        <slot />
    </a>
</li>
