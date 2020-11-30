<script lang="typescript">
    import { onDestroy } from "svelte";
    import Contact from "../components/Contact.svelte";
    import Container from "../components/Container.svelte";
    import Header from "../components/Header.svelte";
    import Hero from "../components/Hero.svelte";
    import Highlight from "../components/Highlight.svelte";
    import Icon from "../components/Icon.svelte";
    import WindowPane from "../components/WindowPane.svelte";
    import store from "../store";

let iconSize = 48;

    const unsubscribe = store.view.subscribe(({ height, scroll }) => {
        store.nav.set(scroll < height ? "dark" : "light");
    });

    onDestroy(() => {
        unsubscribe();
        store.nav.set("light");
    });
</script>

<style lang="scss">
    @import "../components/theme";
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: #{$break - 1px}) {
            grid-template-columns: auto;
        }
    }

    div > span {
        display: block;
        margin: auto;
        text-align: center;
    }
</style>

<svelte:head>
    <title>Deborah Low, Private Tutor</title>
</svelte:head>

<Hero image="/img/fence.jpg" imagePosition="center bottom">
    Need a Tutor?
    <span slot="sub">I would love to help!</span>
</Hero>
<Header>
    Get started with one-on-one tutoring.
    <span slot="sub">From $30/hour</span>
</Header>
<WindowPane>
    <Container wide>
        <div class="grid">
            <div>
                <span>
                    <Icon path="phone" size={iconSize} />
                </span>
                <Highlight title="Online & In-Person.">
                    Learn from the comfort of your own home or choose where we
                    meet. *Temporarily, all of our sessions are now over Zoom.
                </Highlight>
            </div>
            <div>
                <span>
                    <Icon path="calendar-week" size={iconSize} />
                </span>
                <Highlight title="Built into your schedule.">
                    I work around your schedule and availability so that we can
                    meet during times that work best for you. Lessons can be as
                    few or as often as you’d like.
                </Highlight>
            </div>
            <div>
                <span>
                    <Icon path="emoji-smile" size={iconSize} />
                </span>
                <Highlight title="Cancel Anytime.">
                    You have the option to cancel your lesson if you find that you don't need the help after all.
                </Highlight>
            </div>
            <div>
                <span>
                    <Icon path="bullseye" size={iconSize} />
                </span>
                <Highlight title="Tailored to you.">
                    You get to set our goals and decide what we work on during
                    our lesson to ensure you get the most out of it!
                </Highlight>
            </div>
        </div>
    </Container>
</WindowPane>
<WindowPane primary>
    <Container>
        <Header>
            Start Learning
            <span slot="sub">
                Contact me to schedule your first tutoring session.
            </span>
        </Header>
        <Contact />
    </Container>
</WindowPane>
