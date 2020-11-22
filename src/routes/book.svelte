<script lang="ts">
    import Contact from "../components/Contact.svelte";
    import Container from "../components/Container.svelte";
    import Header from "../components/Header.svelte";
    import WindowPane from "../components/WindowPane.svelte";
</script>

<style lang="scss">
    @import "../components/theme";
    .space {
        margin-bottom: unit(8);
    }
</style>

<WindowPane primary>
    <div class="space" />
    <Header>
        Start Learning
        <span slot="sub">
            Contact me to schedule your free tutoring session.
        </span>
    </Header>
    <Container>
        <Contact />
    </Container>
</WindowPane>
