<template>
  <!-- This is the Events list Page-->
  <Layout>
    <section>
      <g-image 
        alt="Yellow background with grey pencils. Photo by Joanna Kosinska on Unsplash" 
        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
        class="w-full"
      />
    </section>
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
export default {
  components: {
    Layout,
    EventCard,
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
