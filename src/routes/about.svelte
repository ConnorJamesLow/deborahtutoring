<script lang="ts">
    import Container from "../components/Container.svelte";
    import Figure from "../components/Figure.svelte";
    import Flex from "../components/Flex.svelte";
    import Header from "../components/Header.svelte";
</script>

<style lang="scss">
    @import "../components/theme";
    p {
        font-family: font(sans);
        line-height: 2;
    }

    .space {
        margin-bottom: unit(8);
    }

    .flex {
        display: flex;
        margin-bottom: unit(2);
        > * {
            margin: auto;
            @media screen and (min-width: $break) {
                margin: unit(1);
            }
        }

        @media screen and (max-width: #{$break - 1px}) {
            flex-wrap: wrap;
        }
    }

    aside {
        margin: auto;
        min-width: 320px;
        width: 20%;
        @media screen and (min-width: $break) {
            margin: 0 unit(1);
        }
    }

    hgroup {
        margin: unit(2) 0;
    }

    h1 {
        font-size: unit(2);
    }

    ul {
        list-style: disc;
        padding-left: unit(1);
        line-height: 2;
    }
</style>

<svelte:head>
    <title>Deborah Low, Private Tutor</title>
</svelte:head>

<div class="space" />
<Header>About Me<span slot="sub"> Nice to meet you! </span></Header>
<Container wide>
    <div class="flex">
        <aside>
            <Figure src="img/fence-p.jpg" alt="Deborah Low" />
        </aside>
        <div>
            <p>
                My passion for teaching began at a young age. I became inspired
                by my own teachers who were patient with me whenever I got stuck
                on a problem and wasn’t sure what to do. They knew how to
                encourage and motivate me when I didn’t understand something. I
                built strong relationships with my teachers and they became
                positive role models in my life. My favorite part about tutoring
                is that I get to help students build confidence in learning new
                skills. I care about my students’ success and helping them
                achieve their goals. I am good at adapting to various learning
                styles and paying attention to detail. I know how to organize,
                prioritize, and execute tasks to meet deadlines. I enjoy
                collaborating with students to solve problems together! I
                specialize in tutoring math but also have experience tutoring
                other subjects as well. If there’s a different subject you need
                tutoring for, feel free to ask! I might be able to help!
            </p>
            <hgroup>
                <h1>Education</h1>
            </hgroup>
            <ul>
                <li>
                    B.S., Mathematics Education,
                    Pacific Lutheran University
                </li>
                <li>
                    M.A.E., Secondary Teacher Certification (Endorsement: Mathematics),
                    <br />Pacific Lutheran University
                </li>
            </ul>
            <hgroup>
                <h1>Experience</h1>
            </hgroup>
            <ul>
                <li>K-8 Study Zone Tutor, KCLS</li>
                <li>K-5 Korean Summer School Tutor</li>
                <li>Middle School Homework Program Tutor, FWPS</li>
                <li>College Writing Consultant, HC</li>
                <li>Elementary Afterschool Program Assistant, PSESD</li>
                <li>High School Student Teacher, TPS</li>
                <li>7th grade Math Teacher, FWPS</li>
            </ul>
        </div>
    </div>
</Container>
