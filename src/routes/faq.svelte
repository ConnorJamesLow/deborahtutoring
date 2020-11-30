<script lang="ts">
    import Accordion from "../components/Accordion.svelte";
    import Container from "../components/Container.svelte";
    import Header from "../components/Header.svelte";
</script>

<style lang="scss">
    @import "../components/theme";

    .space {
        margin-bottom: unit(8);
    }

    section {
        margin-bottom: unit(2);
    }
</style>

<div class="space" />
<Header>
    Information & F.A.Q.
    <span slot="sub"> Get your questions answered.</span>
</Header>
<section>
    <Container wide>
        <Accordion title="How does it work?">
            <ul>
                <li>Step 1: Fill out this form.</li>
                <li>
                    Step 2: I will reach out to you with more info! I will
                    follow up with you to discuss if I can help you, the rate
                    for our tutoring sessions, and figure out how long/how often
                    you would like to meet.
                </li>
                <li>
                    Step 3: Tutoring sessions begin! I will send you a Zoom
                    meeting invite which you can join at the time of our
                    scheduled appointment. If something comes up, you can choose
                    to cancel our meeting anytime. Just send me an email.
                </li>
                <li>
                    *Parents, if you would like to know what your child worked
                    on and accomplished during our tutoring sessions, you can
                    request to get a summary of the learning that was done.
                </li>
            </ul>
            The tutoring sessions are personalized to your learning pace and
            schedule. If you feel you don’t need anymore help, that concludes
            our tutoring lessons. If you feel that you need more help, you can
            continue to book more lessons. During intense periods such as
            midterms or finals week, you can choose to book more sessions if you
            find that you need more help than usual. That’s the benefit of
            having a private tutor - I can work around your needs.
        </Accordion>
        <Accordion title="How can we meet?">
            <ul>
                <li>
                    Typically we can meet online or in-person at the location of
                    your choice. However, due to the pandemic, right now all
                    sessions are over Zoom. In-person tutoring sessions will
                    resume once restrictions are lifted and it is safe to do so.
                </li>
            </ul>
        </Accordion>
        <Accordion title="How much do tutoring sessions cost?">
            <ul>
                <li>
                    Tutoring sessions start at $30/hour and depend on content
                    level.
                </li>
            </ul>
        </Accordion>
        <Accordion title="What can I get help with?">
            <ul>
                <li>
                    I’m a certified math teacher so math is my specialty.
                    However, if there’s a different subject you need tutoring
                    for, feel free to ask and I might be able to help or give
                    you some resources.
                </li>
            </ul>
        </Accordion>
        <Accordion title="What if I can’t make the appointment?">
            <ul>
                <li>
                    You have the option to cancel your lesson if you find that
                    you don't need the help after all. Just send me an email.
                </li>
            </ul>
        </Accordion>
        <Accordion title="How can you help me?">
            What we work on is up to you. You can tell me what you need help
            with or what you want to learn. Here are some things we can do:
            <ul>
                <li>Complete your homework</li>
                <li>Practice new skills</li>
                <li>Review for an exam</li>
                <li>Check your answers</li>
                <li>Get ahead on new material</li>
            </ul>
        </Accordion>
        <Accordion title="Have more questions?">
            <ul>
                <li>
                    Contact me at
                    <address>deborahlow.tutor@gmail.com</address>
                    or fill out
                    <a href="/book">this form</a>
                    and I will get back to you shortly.
                </li>
            </ul>
        </Accordion>
    </Container>
</section>
