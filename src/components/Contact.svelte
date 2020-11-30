<script lang="ts">
    import { send } from "../form";

    import Icon from "./Icon.svelte";

    let name: string = "";
    let grade: string = "";
    let email: string = "";
    let phone: string = "";
    let comments: string = "";

    $: disabled = !name || !email || !comments;

    function submit() {
        console.log(name, email, phone, comments);
        send(name, email, phone, comments)
            .then(() => alert("Sent! Thank you."))
            .catch(() =>
                alert(
                    "Sorry! Something went wrong. Please try again. If the issue persists, you may contact me at deborahlow.tutor@gmail.com."
                )
            );
    }
</script>

<style lang="scss">
    @import "theme";
    $radius: unit(0.25);
    $background: color(background);
    form {
        margin: auto;
        padding: unit(2) 0;
    }

    label {
        background: $background;
        border-radius: $radius;
        display: block;
        margin-top: unit(3);
        padding: unit(1);
        position: relative;
        transition: all 0.3s;
        > div {
            display: inline-block;
            left: 0;
            padding: unit(1) 0;
            pointer-events: none;
            position: absolute;
            text-transform: capitalize;
            top: unit(-2);
            transition: all ease 0.2s;
            > span {
                background: $background;
                color: color(secondary, dark);
                border-radius: $radius;
                padding: unit(0.5) unit(1);
            }
        }
        &:focus-within {
            box-shadow: 2px 2px 4px 4px #0a0a0a17;
            > div > span {
                color: color(text);
            }
        }
    }

    input,
    textarea {
        background-color: transparent;
        border: none;
        font-family: inherit;
        font-size: inherit;
        margin-top: unit(1);
        outline: none;
        resize: none;
        width: 100%;

        &.empty:not(:focus) + div {
            top: unit(0.5);
        }

        &:required + div > span {
            &::after {
                content: " *";
            }
        }
    }

    button {
        align-items: center;
        background: $background;
        border-radius: unit(0.25);
        border: none;
        box-shadow: 2px 2px 4px 4px #0a0a0a17;
        display: flex;
        font-family: inherit;
        font-size: inherit;
        justify-content: space-evenly;
        margin-top: unit(1.5);
        padding: unit(1);
        transition: 0.3s;
        width: unit(8);
        &:disabled {
            box-shadow: none;
            color: color(secondary, dark);
        }
        &:not(:disabled) {
            &:hover,
            &:focus {
                cursor: pointer;
                opacity: 0.75;
            }
        }
    }

    .description {
        color: color(text, transparent);
        display: block;
        margin: 16px 0;
    }
</style>

<form class="sans" on:submit={(e) => e.preventDefault()}>
    <small class="description">Fields marked with * are required.</small>
    <label>
        <input class:empty={!name} type="text" bind:value={name} required />
        <div><span> Full Name </span></div>
    </label>
    <label>
        <input class:empty={!email} type="email" bind:value={email} required />
        <div><span> Email </span></div>
    </label>
    <label>
        <input class:empty={!phone} type="text" bind:value={phone} />
        <div><span> Phone </span></div>
    </label>
    <label>
        <textarea
            class:empty={!comments}
            rows={5}
            bind:value={comments}
            required />
        <div><span> How can I help? </span></div>
    </label>
    <button on:click={submit} {disabled}>
        <span>Submit</span>
        <Icon path="arrow-right" />
    </button>
</form>
