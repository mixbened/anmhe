<template>
  <Layout>
    <section>
      <Header title="was wir machen." background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    </section>
    <section class="mt-10">
      <Intro title="No Way is too long. No Mountain too high." text="Wir sind ehrlich mit dir: Die eierlegende Wollmilchsau sind wir nicht! Jedoch sind wir in der Lage, mit unserer Beratung, dem Projektmanagement und unserem Netzwerk aus Partnern beinahe jede Aufgabe zu lösen! Wo wir allerdings so richtig stark sind ist die Konzeption, Organisation und Umsetzung von echten Erlebnissen! Wie diese „echten Erlebnisse“ aussehen sollen, ist erst einmal egal. Wir helfen dir dabei dein “echtes Erlebnis” zu entwickeln, zu transportieren und richtig in Szene zu setzen. Denn unser Ziel ist, deine Veranstaltung an die Spitze zu bringen. Das lieben wir!" />
    </section>
    <section class="mx-4 sm:mx-20 md:ml-32">
      <a href="/was-wir-machen"><button class="bg-tertiary hover:bg-secondary  font-bold py-2 px-4 text-sm">Bisherige Projekte</button></a>
    </section>
    <section class="p-8 mx-20 mt-32 mb-20">
      <h2 class="text-center text-4xl">Full Service</h2>
      <h2 class="text-center my-2 mb-8">Veranstaltungen die unser Herz höher schlagen lassen!</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-20">
        <div class="col-span-1 rounded p-4 hover:bg-gray-200 relative" @mouseover="isActive = 'analog'">
          <g-image
          alt="Icon Image" 
          src="../assets/undraw_events_2p66.svg"
          class="w-64 m-auto" 
          />
          <div class="duration-500 ease-in-out opacity-0 text-center" :class="{active: isActive === 'analog'}">
            <h4 class="text-2xl pt-2">Analog</h4>
            <p class="transition text-sm py-2">Live will be back! Messen, Produktpräsentationen, Kick-off-Events, Tagungen, Festivals und Mitarbeiterevents werden zurückkommen. Dafür ist der Mensch zu sehr Mensch und von seinen Emotionen gesteuert. </p>
            <g-link :to="link" class="py-1 border-bottom inline-block my-2 text-sm">Let's Go</g-link>
          </div>
        </div>
        <div class="col-span-1 rounded p-4 hover:bg-gray-200 relative" @mouseover="isActive = 'online'">
          <g-image
          alt="Icon Image" 
          src="../assets/undraw_conference_call_b0w6.svg"
          class="w-64 m-auto" 
          />
          <div class="duration-500 ease-in-out opacity-0 text-center mt-8" :class="{active: isActive === 'online'}">
            <h4 class="text-2xl py-2">Online</h4>
            <p class="transition text-sm py-2">Kurz mal raus aus dem Schatten und alles überholt. Das haben Digitale Events vor ein paar Wochen geschafft und sind aktuell nicht mehr aus der Veranstaltungslandschaft wegzudenken. </p>
            <g-link :to="link" class="py-1 border-bottom inline-block my-2 text-sm">Let's Go</g-link>
          </div>
        </div>
        <div class="col-span-1 rounded p-4 hover:bg-gray-200 relative" @mouseover="isActive = 'hybrid'">
          <g-image
          alt="Icon Image" 
          src="../assets/undraw_everywhere_together_bdmn.svg"
          class="w-64 m-auto" 
          />
          <div class="duration-500 ease-in-out opacity-0 text-center mt-8" :class="{active: isActive === 'hybrid'}">
            <h4 class="text-2xl py-2">Hybrid</h4>
            <p class="transition text-sm py-2">Die Zukunft wird Hybrid! Der Mix aus physischer Veranstaltung in Kombination mit digitaler Übertragung und Teilnahme in Echtzeit, gewinnt immer mehr an Akzeptanz.</p>
            <g-link :to="link" class="py-1 border-bottom inline-block my-2 text-sm">Let's Go</g-link>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <InfoCard link="/events" title="Corporate Events" text="Schau dir an, welche Events wir organisieren. Bei uns wird vor keiner Idee halt gemacht. #wirmachenesmöglich" button="Zu den Events" image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" position="left"/>
      <InfoCard link="/events" title="Public Events" text="Schau dir an, welche Events wir organisieren. Bei uns wird vor keiner Idee halt gemacht. #wirmachenesmöglich" button="Zu den Events" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" position="right"/>
    </section>
    <section class="my-32">
      <Intro text="Communication is a Gift. Wir glauben, dass Kommunikation ein mächtiges Werkzeug ist, um Menschen zu inspirieren und positiv zu beeinflussen. Gute Kommunikation ist allerdings nicht selbstverständlich. Sie ist Kunst und Wissenschaft zugleich. Mit datengetriebener Kreativität vereinen wir beide Welten für emphatische, authentische und präzise Inhalte." title="Ain't No Mountain." />
    </section>
    <section class="mt-20">
      <FullBanner title="Hybride Events" buttonText="Mehr Erfahren" subtitle="Online - Offline - Hybrid" image="https://images.unsplash.com/photo-1596800933138-f1d353706417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" link="/hybride-events" />
    </section>
  </Layout>
  
</template>

<script>
import InfoCard from '../components/InfoCard'
import Header from '../components/Header'
import Intro from '../components/Intro'
import FullBanner from '../components/FullBanner'

export default {
  metaInfo: {
    title: 'Leistungen'
  },
  components: {
    InfoCard,
    Header,
    Intro,
    FullBanner
  },
  data() {
    return {
      isActive: 'none'
    };
  },
  methods: {
    changeView: function(val){
      this.isActive = val
    }
  }
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 2px solid gray;
}
.active {
 opacity: 1 !important;
}
</style>
