<script lang="ts">
    import store from "../store";

    export let href: string;
    export let current: boolean;
    export let action: boolean = false;

    const { nav } = store;
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

    @media (min-width: $break) {
        .action {
            margin-left: unit(1);
            transition: opacity;

            > a {
                padding-left: unit(3);
                padding-right: unit(3);
            }

            color: color(background);
            &.dark {
                color: color(text);
            }

            &:not(.current) {
                background: color(text);
                &.dark {
                    background: color(background);
                }
            }

            &.current {
                background: color(text, transparent);
                &.dark {
                    background: color(background, transparent);
                }
            }

            &:hover {
                opacity: 0.75;
            }
        }
    }
</style>

<li class:current class:action class:dark={$nav === 'dark'}>
    <a {href} aria-current={current && 'page'}>
        <slot />
    </a>
</li>
