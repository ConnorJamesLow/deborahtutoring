import debounce from 'lodash.debounce';
import { writable } from 'svelte/store';

function createStore() {
    const { update, subscribe } = writable({
        height: 0,
        width: 0,
        scroll: 0,
        direction: 0
    });

    function calculateHeightWidth() {
        const fn = debounce(() => {
            update(v => ({
                ...v,
                height: window.innerHeight,
                width: window.innerWidth
            }));
        }, 150)
        fn();
        return fn;
    }

    function calculateScroll() {
        const fn = debounce(() => {
            update(v => ({
                ...v,
                direction: v.scroll === window.scrollY
                    ? 0
                    : v.scroll < window.scrollY ? 1 : -1,
                scroll: window.scrollY
            }));
        }, 150);
        fn();
        return fn;
    }

    return {
        subscribe,
        calculateHeightWidth,
        calculateScroll
    }
}

export default createStore();
