<template>
  <!-- This is the Events list Page-->
  <Layout>
      <Header title=""  background="https://res.cloudinary.com/mixbened/image/upload/v1603873034/ANM/DoSomethingGreat-quer.png"/>
      <section class="mt-10">
        <Intro title="Bisher lief es ganz gut" text="Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet" />
      </section>
      <section class="my-20 mx-4 sm:mx-20 md:ml-32">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(edge, index) in $page.events.edges" :key="edge.node.id">
            <EventCard
              :event="edge.node"
              :color="hrColors[index % hrColors.length]"
            />
          </div>
        </div>
      </section>
      <section class="my-48 mx-4 sm:mx-20 md:ml-32 text-center">
        <h2 class="text-3xl font-semibold uppercase inline-block bg-primary leading-tight p-2 text-white">Frag uns einfach</h2>
        <p class="my-4">Ruf uns an, schick uns eine Anfrage oder sende uns eine Brieftaube</p>
        <g-link to="/bergpost" class="p-1 border-b border-black">Kontaktmöglichkeiten</g-link>
      </section>
  </Layout>
</template>

<page-query>
  query Events {
    events: allEvent (sort: { by: "startDate", order: ASC }){
      edges {
        node{
          id
          name
          beschreibung
        }
      }
    }
  }
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import EventCard from "~/components/EventCard.vue";
import IconList from '../components/IconList'
import Intro from '../components/Intro'
import Header from '../components/Header'

export default {
  components: {
    Layout,
    EventCard,
    IconList,
    Intro,
    Header
  },
  data() {
    return {
      hrColors: [
        "#FCB400", // Airtable Yellow
        "#18BFFF", // Airtable Blue
        "#D92654", // Airtable Red
      ],
    };
  },
};
</script>
