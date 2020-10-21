<template>
  <Layout>
    <Header title="Hybrid"  background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    <section class="my-10">
      <Intro title="Konferenz, Meetings & Ähnliches" text="Die Zukunft wird Hybrid! Der Mix aus physischer Veranstaltung in Kombination mit digitaler Übertragung und Teilnahme in Echtzeit, gewinnt immer mehr an Akzeptanz. Veranstaltungsformate werden künftig für zwei Zielgruppen konzipiert und angeboten. Für diejenigen die live dabei sein wollen und auch für Teilnehmer, die das Event rein digital erleben möchten. Das Potential der Hybridisierung von Veranstaltungen ist enorm, denn man kann eine viel höhere Reichweite generieren und Teilnehmerzahlen dadurch um ein vielfaches steigern. Ein erfolgreiches Hybrid-Event ist die Königsdisziplin oder auch die Besteigung des Mount Everest. Wir reichen dir unsere Hand und gehen diese Expedition mit dir, stehen mit unserer Erfahrung zur Seite, bis wir gemeinsam den Gipfel erreicht haben!" />
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
          <h3 class="text-2xl font-semibold italic">Was sind weitere Vorteile von Hybriden Events? </h3>
          <p class="p-2 px-4 text-left text-xs">
            <ul class="list-disc">
              <li class="py-1">Hohe Reichweite - Teilnahme ohne räumliche Bindung</li>
              <li class="py-1">Image - Positionierung als innovativer und nachhaltiger Veranstalter</li>
              <li class="py-1">Ohne Limit - Variabler Veranstaltungszeitraum</li>
              <li class="py-1">Nachhaltigkeit - Geringer Materialverbrauch</li>
              <li class="py-1">Content-Nutzung - Vorteil für Nachbereitung oder neue Bewerbung</li>
              <li class="py-1">flexible Erzählstruktur - Keine Bindung an lineare Abläufe</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-11">
        <div class="col-span-5 px-16 text-center py-6">
          <h3 class="text-2xl font-semibold italic">Unser Leistungsspektrum bei Digitalen Events umfasst:</h3>
          <p class="px-4 text-left text-xs">
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
  }
};
</script>
