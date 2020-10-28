<template>
  <!-- This is the Events list Page-->
  <Layout>
      <Header title="Projekte"  background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
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
      <section class="my-20 mx-4 sm:mx-20 md:ml-32">
        
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
