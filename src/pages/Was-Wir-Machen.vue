<template>
  <Layout>
    <section>
      <Header title="was wir machen." background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    </section>
    <section class="mt-10">
      <div class="mx-4 sm:mx-8 sm:mx-20 md:w-1/2 md:ml-32 p-4">
        <h3 class="text-2xl">No Way is too long. No Mountain too high.</h3>
        <p class="my-4">Wir sind ehrlich mit dir: Die eierlegende Wollmilchsau sind wir nicht! Jedoch sind wir in der Lage, mit unserer Beratung, dem Projektmanagement und unserem Netzwerk aus Partnern beinahe jede Aufgabe zu lösen! Wo wir allerdings so richtig stark sind ist die Konzeption, Organisation und Umsetzung von echten Erlebnissen! Wie diese „echten Erlebnisse“ aussehen sollen, ist erst einmal egal. Wir helfen dir dabei dein “echtes Erlebnis” zu entwickeln, zu transportieren und richtig in Szene zu setzen. Denn unser Ziel ist, deine Veranstaltung an die Spitze zu bringen. <b> Das lieben wir!</b></p>
        <g-link to="/was-wir-machen"><button class="bg-orange-300 hover:bg-gray-800 font-bold py-2 px-4 text-sm">Unsere Events</button></g-link>
      </div>
    </section>
    <section class="p-8 mx-20 mt-10">
      <h2 class="text-center text-4xl">Full Service</h2>
      <h2 class="text-center my-2 mb-8">Veranstaltungen die unser Herz höher schlagen lassen!</h2>
      <div class="grid grid-cols-3 gap-2 my-20">
        <div class="col-span-1 rounded p-4 hover:bg-gray-200 relative" @mouseover="isActive = 'analog'">
          <h4 class="text-2xl py-2 text-center">Analog</h4>
          <p class="transition text-justify duration-500 ease-in-out opacity-0" :class="{active: isActive === 'analog'}">Live will be back! Messen, Produktpräsentationen, Kick-off-Events, Tagungen, Festivals und Mitarbeiterevents werden zurückkommen. Dafür ist der Mensch zu sehr Mensch und von seinen Emotionen gesteuert. </p>
          <div class="bottom-0 my-2 absolute">
          </div>
        </div>
        <div class="col-span-1 rounded p-4 hover:bg-gray-200 relative" @mouseover="isActive = 'online'">
          <h4 class="text-2xl py-2 text-center">Online</h4>
          <p class="transition text-justify duration-500 ease-in-out opacity-0" :class="{active: isActive === 'online'}">Kurz mal raus aus dem Schatten und alles überholt. Das haben Digitale Events vor ein paar Wochen geschafft und sind aktuell nicht mehr aus der Veranstaltungslandschaft wegzudenken. </p>
          <div class="bottom-0 my-2 absolute">
          </div>
        </div>
        <div class="col-span-1 rounded p-4 hover:bg-gray-200 relative" @mouseover="isActive = 'hybrid'">
          <h4 class="text-2xl py-2 text-center">Hybrid</h4>
          <p class="transition text-justify duration-500 ease-in-out opacity-0" :class="{active: isActive === 'hybrid'}">Die Zukunft wird Hybrid! Der Mix aus physischer Veranstaltung in Kombination mit digitaler Übertragung und Teilnahme in Echtzeit, gewinnt immer mehr an Akzeptanz.</p>
          <div class="bottom-0 my-2 absolute">
          </div>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <InfoCard link="/events" title="Corporate Events" text="Schau dir an, welche Events wir organisieren. Bei uns wird vor keiner Idee halt gemacht. #wirmachenesmöglich" button="Zu den Events" image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" position="left"/>
      <InfoCard link="/events" title="Public Events" text="Schau dir an, welche Events wir organisieren. Bei uns wird vor keiner Idee halt gemacht. #wirmachenesmöglich" button="Zu den Events" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" position="right"/>
    </section>
    <section class="mt-20">
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
