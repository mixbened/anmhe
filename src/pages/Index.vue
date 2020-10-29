<template>
  <Layout>
    <section class="relative sm:h-screen" id="banner">
      <div class="w-full h-full block overflow-hidden">
        <video autoplay muted id="myVideo" class="w-full h-full scale">
          <source src="https://res.cloudinary.com/mixbened/video/upload/v1603629177/ANM/trimmed-intro-anm.mov" type="video/mp4">
        </video>
      </div>
    </section>
    <section class="mt-10" id="start">
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
    <section class="my-64">
      <h2 class="text-3xl font-semibold uppercase inline-block leading-tight text-white bg-black mx-4 sm:mx-8 sm:mx-20 md:ml-32 p-2 my-4">Das ist unser Ding</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3">
        <div class="col-span-1 bg-cover bg-white bg-no-repeat bg-scroll text-white text-left relative py-32 transition ease-in duration-200" @mouseenter="selectShow('analog')" @mouseleave="selectShow('')" :style="{ background: show === 'analog' ? 'transparent' : 'white'}">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-analog.png" class="opacity-50 absolute top-0 w-full h-full" style="z-index: -1"></g-image>
          <div class="px-6">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 text-black border-b border-black">Analoge Events</h2>
            <p class="mb-4 text-sm text-black font-semibold" :class="{ opacity: show === 'analog' ? '1' : '0' }">Die Zukunft wird Hybrid! Der Mix aus physischer Veranstaltung in Kombination mit digitaler Übertragung und Teilnahme in Echtzeit, gewinnt immer mehr an Akzeptanz.</p>
            <g-link to="/was-wir-machen#analog" class="p-1 bg-tertiary absolute" style="bottom: 1em; left: 1.5em">Mehr erfahren</g-link>
          </div>
        </div>
        <div class="col-span-1 bg-cover bg-no-repeat bg-scroll text-white text-left relative py-32 transition ease-in duration-200" @mouseenter="selectShow('digital')" @mouseleave="selectShow('')" :style="{ background: show === 'digital' ? 'transparent' : 'white'}">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-hybrid.png" class="opacity-50 absolute top-0 w-full h-full" style="z-index: -1"></g-image>
          <div class="px-6">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 text-black border-b border-black">Digitale Events</h2>
            <p class="mb-4 text-sm text-black font-semibold" :class="{ opacity: show === 'digital' ? '1' : '0' }">Die Zukunft wird Hybrid! Der Mix aus physischer Veranstaltung in Kombination mit digitaler Übertragung und Teilnahme in Echtzeit, gewinnt immer mehr an Akzeptanz.</p>
            <g-link to="/was-wir-machen#digital" class="p-1 bg-primary absolute transition" style="bottom: 1em; left: 1.5em">Mehr erfahren</g-link>
          </div>
        </div>
        <div class="col-span-1 bg-cover bg-white hover:bg-transparent bg-no-repeat bg-scroll text-black text-left relative py-32 transition ease-in duration-200" @mouseenter="selectShow('hybrid')" @mouseleave="selectShow('')" :style="{ background: show === 'hybrid' ? 'transparent' : 'white'}">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-digital.png" class="opacity-50 absolute top-0 w-full h-full" style="z-index: -1"></g-image>
          <div class="px-6">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 border-b border-black">Hybride Events</h2>
            <p class="mb-4 text-sm text-black font-semibold" :class="{ 'opacity-1' : show === 'hybrid', 'opacity-0' : show !== 'hybrid' }">Die Zukunft wird Hybrid! Der Mix aus physischer Veranstaltung in Kombination mit digitaler Übertragung und Teilnahme in Echtzeit, gewinnt immer mehr an Akzeptanz.</p>
            <g-link to="/was-wir-machen#hybrid" class="p-1 bg-secondary absolute text-white" style="bottom: 1em; left: 1.5em">Mehr erfahren</g-link>
          </div>
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
  data(){
    return {
      show: ''
    }
  },
  components: {
    InfoCard,
    InfoGrid,
    IconList,
    Newsletter
  },
  mounted(){
    setTimeout(() => {
      const elBanner = document.getElementById('banner')
      const heightBanner = elBanner.offsetHeight 
      const elHeader = document.getElementById('header')
      const heightHeader = elHeader.offsetHeight 
      window.scroll(0,heightBanner-heightHeader)
    },5000)
  },
  methods: {
    selectShow: function(box) {
      this.show = box
      console.log('checked: ', this.show)
    }
  }
}
</script>

<style scoped>
#myVideo {
  transform: scale(1.3);
}
.bg-opacity {
  opacity: 0;
}
.bg-opacity:hover {
  opacity: 1;
}
</style>
