import { writable } from "svelte/store";

export function todo<T>(init: () => T) {
    const { subscribe: base, update, set } = writable<T>(null);
    const subscribe: typeof base = (run, invalidate) => base(v => {
        if (v === null) {
            v = init();
            set(v);
        }
        return run(v);
    }, invalidate);
    return {
        subscribe,
        update,
        set
    }
}
