<template>
  <Layout>
    <section class="relative sm:h-screen">
      <div class="w-full h-full block overflow-hidden">
        <video autoplay muted id="myVideo" class="w-full h-full scale">
          <source src="https://res.cloudinary.com/mixbened/video/upload/v1603629177/ANM/trimmed-intro-anm.mov" type="video/mp4">
        </video>
      </div>
    </section>
    <section class="mt-10">
      <div class="mx-4 sm:mx-8 sm:mx-20 md:w-1/2 md:ml-32 p-4">
        <vue-typed-js :strings="['Holladio!', 'Moin Moin', 'Die Agentur, die du dir gewünscht hast.']" :showCursor="false" :typeSpeed="150" :backSpeed="50" :backDelay="2000" :loop="true">
          <h1 class="text-center text-4xl font-semibold"><span class="typing"></span><span class="opacity-0 text-xs">.</span></h1>
        </vue-typed-js>
        <p class="text-justify leading-loose my-2">
          <span class="block mb-2">Wir sind Ain't No Mountain, die junge Agentur für Live-Kommunikation im Rheinland.</span>
          Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen. Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und keine Challenge zu groß! Wir entwickeln für jedes Projekt die passenden Tools. On- oder offline, analog oder digital, hybrid oder virtuell. Wie wir das schaffen? Ganz einfach: Mit jeder Menge Erfahrung und unserem Netzwerk aus Kreativen und Projektmanagern. Profis aus Event, Messe, Online, Print und Social Media. Wenn der Berg ruft - just call us, you don't have to worry!
          </p>
        <g-link to="/was-wir-machen"><button class="bg-primary text-white hover:bg-secondary font-bold py-2 px-4 text-sm">Mehr über uns</button></g-link>
      </div>
    </section>
    <section class="sm:mx-20 mx-8 my-24">
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

<style scoped>
#myVideo {
  transform: scale(1.3);
}
</style>
