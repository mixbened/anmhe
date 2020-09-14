<template>
  <!-- This is the Events list Page-->
  <Layout>
      <section class="mx-4 sm:mx-8 sm:mx-32 md:mx-48 p-4">
        <h3 class="text-3xl font-semibold uppercase">Titeltext</h3>
        <p class="my-4 text-justify">Our mission is to create workspaces in which users can easily work – through fair prices and excellent service. Founded in Germany in 2015, we offer private offices for teams and companies with a flexible monthly subscription. With social awareness, we shape “new work” to grow a healthy business – together. Currently, we operate a total of 21 workspaces in Berlin, Lisbon, Potsdam, Hamburg, Cologne and Munich.</p>
      </section>
      <section class="mt-20">
        <IconList 
          title1="KAPAZITÄT" text1="Kochevents, Tastings, Shootings: Eventlocation für bis zu 50 Personen" image1="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png" 
          title2="KAPAZITÄT" text2="Kochevents, Tastings, Shootings: Eventlocation für bis zu 50 Personen" image2="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png" 
          title3="KAPAZITÄT" text3="Kochevents, Tastings, Shootings: Eventlocation für bis zu 50 Personen" image3="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png" 
        />
      </section>
    <section class="mt-20">
      <div v-for="(edge, index) in $page.events.edges" :key="edge.node.id">
        <EventCard
          :event="edge.node"
          :color="hrColors[index % hrColors.length]"
        />
      </div>
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

export default {
  components: {
    Layout,
    EventCard,
    IconList
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
