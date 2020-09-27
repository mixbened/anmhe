<template>
  <Layout>
    <section class="w-full">
      <div class="bg-scroll bg-center bg-cover h-70 relative text-gray-800 overlay" :style="{backgroundImage:`url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`}">
        <div class="text-left px-4 sm:px-20 relative z-10 flex items-center justify-center   h-full">
            <vue-typed-js :strings="['First text.', 'Second Text.']" :showCursor="false" :typeSpeed="150" :backSpeed="50" :backDelay="2000" :loop="true">
              <h1 class="text-center text-6xl font-semibold typing"></h1>
            </vue-typed-js>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <div class="mx-4 sm:mx-8 sm:mx-20 md:w-1/2 md:ml-32 p-4">
        <h1 class="text-4xl font-semibold">HOLLADIO!</h1>
        <h3 class="text-2xl my-2">WIR SIND AIN´T NO MOUNTAIN, DIE JUNGE AGENTUR FÜR LIVE-KOMMUNIKATION IM RHEINLAND.</h3>
        <p>Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen. Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und keine Challenge zu groß! Wir entwickeln für jedes Projekt die passenden Tools. On- oder offline, analog oder digital, hybrid oder virtuell. Wie wir das schaffen? Ganz einfach: Mit jeder Menge Erfahrung und unserem Netzwerk aus Kreativen und Projektmanagern. Profis aus Event, Messe, Online, Print und Social Media.</p>
        <p class="my-2"><b>Wenn der Berg ruft - just call us, you don't have to worry!</b></p>
        <g-link to="/was-wir-machen"><button class="bg-orange-300 hover:bg-gray-800 font-bold py-2 px-4 text-sm">Mehr über uns</button></g-link>
      </div>
    </section>
    <section class="sm:m-20 m-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 px-0 lg:px-20">
        <div class="col-span-1 text-center p-10">
          <g-image
          alt="Icon Image" 
          src="../assets/undraw_breaking_barriers_vnf3.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold py-2">Breaking Barriers</h4>
          <p class="px-4 sm:px-8 text-sm">Lorem Ipsum.......</p>
        </div>
        <div class="col-span-1 text-center p-10">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_events_2p66.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold py-2">Be On Time</h4>
          <p class="px-4 sm:px-8 text-sm">Lorem Ipsum.......</p>
        </div>
        <div class="col-span-1 text-center p-10">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_special_event_4aj8.svg"
          class="w-64 m-auto" 
          />
          <h4 class="text-lg font-bold pt-4 py-2">Feel the Vibe</h4>
          <p class="px-4 sm:px-8 text-sm">Lorem Ipsum.......</p>
        </div>
      </div>
    </section>
    <section>
      <Newsletter />
    </section>
  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard'
import InfoGrid from '../components/InfoGrid'
import IconList from '../components/IconList'
import Newsletter from '../components/Newsletter'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    InfoCard,
    InfoGrid,
    IconList,
    Newsletter
  }
}
</script>

<style>

.h-70 {
  height: 32rem;
}

.overlay::before {
  position: absolute;
  display: inline-block;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .3;
  background: orange;
}
</style>
