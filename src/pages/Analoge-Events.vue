<template>
  <Layout>
    <Header title="Analog"  background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    <section class="my-10">
      <Intro title="Konferenz, Meetings & Ähnliches" text="Live will be back! Messen, Produktpräsentationen, Kick-off-Events, Tagungen, Festivals und Mitarbeiterevents werden zurückkommen. Dafür ist der Mensch zu sehr Mensch und von seinen Emotionen gesteuert. Veranstaltungen sprechen alle Sinne an, schaffen starke Erlebnisse und bleiben nachhaltig in Erinnerung. Diese Merkmale sind zu wertvoll, um sie in Vergessenheit geraten zu lassen. In der Gesellschaft ist es fest verankert soziale Kontakte zu pflegen. Bei der Konzeption, Organisation und Umsetzung von Veranstaltungen unterstützen wir dich! Wir beraten dich, welches Veranstaltungsformat für dein Vorhaben am besten geeignet ist und setzen das Event - von der ersten Idee bis der letzte das Licht aus macht - um." />
    </section>
    <section class="mx-4 sm:mx-20 md:ml-32">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="edge in $page.events.edges" :key="edge.node.id" class="my-8">
          <EventCard
            :event="edge.node"
          />
        </div>
      </div>
    </section>
    <section class="mt-20">
      <div class="grid grid-cols-3 sm:grid-cols-11">
        <div class="col-span-6 bg-scroll bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')"></div>
        <div class="col-span-5 px-16 text-center py-6">
          <h3 class="text-2xl font-semibold italic">CORPORATE</h3>
          <p class="p-2 px-4 text-left text-base">
            <ul class="list-disc">
              <li class="py-1">Mitarbeiterfest</li>
              <li class="py-1">Vertriebstagung</li>
              <li class="py-1">Kick-off-Veranstaltung</li>
              <li class="py-1">Messe</li>
              <li class="py-1">Tagung</li>
              <li class="py-1">Incentive</li>
              <li class="py-1">Teambuilding</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-11">
        <div class="col-span-5 px-16 text-center py-6">
          <h3 class="text-2xl font-semibold italic">PUBLIC</h3>
          <p class="px-4 text-left text-base">
            <ul class="list-disc">
              <li class="py-1">Festival</li>
              <li class="py-1">Ausstellungseröffnung</li>
              <li class="py-1">Konzerte</li>
              <li class="py-1">Sport-Events</li>
              <li class="py-1">Finissage</li>
            </ul>
          </p>
          <g-link :to="link"><button class="bg-tertiary hover:bg-blue-700 font-bold py-2 px-4 text-sm">Kontaktanfrage</button></g-link>
        </div>
        <div class="col-span-6 bg-scroll bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')"></div>
      </div>
    </section>
  </Layout>
  
</template>

<page-query>  query Events {
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
import Intro from '~/components/Intro'
import Header from '~/components/Header'
import InfoCard from '~/components/InfoCard'

export default {
  components: {
    Layout,
    EventCard,
    IconList,
    Intro,
    Header,
    InfoCard
  }
};
</script>