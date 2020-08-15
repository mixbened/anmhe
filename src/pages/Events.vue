<template>
  <!-- This is the Events list Page-->
  <Layout>
    <IconList 
      title1="KAPAZITÄT" text1="Kochevents, Tastings, Shootings: Eventlocation für bis zu 50 Personen" image1="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png" 
      title2="KAPAZITÄT" text2="Kochevents, Tastings, Shootings: Eventlocation für bis zu 50 Personen" image2="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png" 
      title3="KAPAZITÄT" text3="Kochevents, Tastings, Shootings: Eventlocation für bis zu 50 Personen" image3="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png" 
    />
    <div>
      <div v-for="(edge, index) in $page.events.edges" :key="edge.node.id">
        <EventCard
          :event="edge.node"
          :color="hrColors[index % hrColors.length]"
        />
      </div>
    </div>
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
