<template>
  <Layout>
    <Header title="Digitales"  background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    <section class="my-10">
      <Intro title="Konferenz, Meetings & Ähnliches" text="Kurz mal raus aus dem Schatten und alles überholt. Das haben Digitale Events vor ein paar Wochen geschafft und sind aktuell nicht mehr aus der Veranstaltungslandschaft wegzudenken. Mehr noch, denn ohne sie wird man in Zukunft nicht mehr auskommen. Viele Unternehmen haben die Corona-Krise genutzt und ihre Veranstaltungsformate einfach ins digitale übersetzt. Wir helfen dir dabei auch dein Event zu digitalisieren und für das Internet fit zu machen. Dabei legen wir Wert auf eine klare Botschaft, viel Aufmerksamkeit und vor allem Interaktionsmöglichkeiten, damit die Inhalte spannend bleiben und nicht gleich bei der erstbesten Gelegenheit weggeklickt wird." />
    </section>
    <section class="mx-4 sm:mx-20 md:ml-32">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(edge, index) in $page.events.edges" :key="edge.node.id" class="my-8">
          <EventCard
            :event="edge.node"
            :color="hrColors[index % hrColors.length]"
          />
        </div>
      </div>
    </section>
    <section class="mt-20">
      <div class="grid grid-cols-3 sm:grid-cols-11">
        <div class="col-span-5 px-16 py-20 text-center">
          <h3 class="text-2xl font-semibold italic">Unser Leistungsspektrum bei Digitalen Events umfasst:</h3>
          <p class="p-2 px-4 text-left text-xs">
            <ul class="list-disc">
              <li class="py-1">Konzeption - Von einer kleinen Idee bis zu der Konzeption eines ganzen Veranstaltungsformats können wir dir alles bieten!</li>
              <li class="py-1">Beratung und Planung - Individuelle Lösungsansätze für dich, deine Marke und deine Veranstaltung. Wir beraten dich, bis du zufrieden damit bist!</li>
              <li class="py-1">Produktion -  Den richtigen Content entwickeln, Einladungen erstellen, Regie finden und überhaupt die richtige Location suchen. Alles Dinge, die wir dir gern abnehmen!</li>
              <li class="py-1">Umsetzung - Ganzheitliche Betreuung und Koordination des Projekts. Suchst du jemandem für´s “A” sind wir sogar noch bis zum “Z” an deiner Seite.</li>
              <li class="py-1">Recht und Sicherheit - Versammlungen mit gesetzeskonformen Stimmabgaben und -ergebnissen, Datensicherheit gemäß DSGVO und zertifizierte Zurverfügungstellung von Servern in Deutschland ...haben wir unbedingt alles auf dem Schirm für dich!</li>
              <li class="py-1">Was gibt es für Digitale Events? Studioproduktionen (mobil oder fest), Webinare, Live-Streams, virtuelle Konferenzen, Online Trainings, Workshops, digitale Produktvorstellungen, Online Festival u.v.m.</li>
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
