<template>
  <Layout>
    <section class="relative lg:h-screen" id="banner">
      <div class="w-full h-full block overflow-hidden">
        <video autoplay muted id="myVideo" class="w-full h-full scale">
          <source src="https://res.cloudinary.com/mixbened/video/upload/v1603629177/ANM/trimmed-intro-anm.mov" type="video/mp4">
        </video>
      </div>
    </section>
    <section class="mt-10" id="start">
      <section class="text-black mx-4 sm:mx-20 md:ml-32 py-12">
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-gelb-minus12Grad@2x.png" class="hidden sm:block absolute  right-0 mr-8" width="80"></g-image>
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Petrol-klein@2x.png" class="hidden sm:block absolute  left-0 m-8" width="80"></g-image>
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Pink-minus14grad@2x.png" class="hidden sm:block absolute left-0 m-64" width="200"></g-image>
          <div class="grid grid-cols-1 sm:grid-cols-2 z-10 relative">
            <div class="sm:mx-8">
              <vue-typed-js :strings="['Holladio!', 'Moin Moin', 'Die Agentur, die du dir gewünscht hast.']" :showCursor="false" :typeSpeed="150" :backSpeed="50" :backDelay="2000" :loop="true">
                <h1 class="text-left sm:text-right text-4xl font-semibold"><span class="typing"></span><span class="opacity-0 text-xs">.</span></h1>
              </vue-typed-js>
            </div>
            <div>
              <h3 class="text-left text-base font-semibold uppercase p-0 sm:my-0">Wir sind Ain't No Mountain, die junge Agentur für grenzenlose Live-Kommunikation im Rheinland.</h3>
              <p class="text-justify my-6">Unser Herz schlägt für echte Erlebnisse: ob Messe, Präsentationen, Kick-offs, Festivals oder Mitarbeiter-Events. Analog, digital oder hybrid. <br> Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und kein Projekt zu groß. Von der Idee bis zur Umsetzung, wir geben alles. <br> Wie wir das schaffen? Mit jeder Menge Erfahrung und unserem regionalen Netzwerk. Profis aus Event, Messe, Online, Print und Social Media. <br> Wenn der Berg ruft  ♪♫♪...just call us, you don’t have to worry... ♪♫♪</p>
            </div>
          </div>
      </section>
    </section>
    <section class="my-32 bg-secondary">
      <div class="grid grid-cols-1 sm:grid-cols-3 text-white">
        <h2 class="text-3xl sm:text-5xl font-semibold uppercase absolute left-0 p-4 mt-8 sm:px-12 z-10">Das ist unser Ding</h2>
        <div class="col-span-1 bg-cover bg-no-repeat bg-scroll text-white text-left relative py-24 sm:py-32 transition ease-in duration-200" @mouseenter="selectShow('analog')" @mouseleave="selectShow('')">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-analog.png" class="opacity-0 transition duration-300 ease-in absolute top-0 w-full h-full" :class="{ 'opacity-50': show === 'analog' }"></g-image>
          <div class="px-4 sm:px-12 relative">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 border-b-2 border-white">Analoge Events</h2>
            <p class="text-sm font-semibold uppercase opacity-0" :class="{ 'opacity-100': show === 'analog' }">Es sieht zwar gerade nicht danach aus, aber ohne Zweifel: Live will be back!</p>
            <g-link to="/was-wir-machen#analog" class="p-1 bg-tertiary my-4 inline-block">Mehr erfahren</g-link>
          </div>
        </div>
        <div class="col-span-1 bg-cover bg-no-repeat bg-scroll text-white text-left relative py-24 sm:py-32 transition ease-in duration-200" @mouseenter="selectShow('digital')" @mouseleave="selectShow('')">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-digital.png" class="opacity-0 transition duration-300 ease-in absolute top-0 w-full h-full" :class="{ 'opacity-50': show === 'digital' }"></g-image>
          <div class="px-4 sm:px-12 relative">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 border-b-2 border-white">Digitale Events</h2>
            <p class="text-sm font-semibold uppercase opacity-0" :class="{ 'opacity-100': show === 'digital' }">Kurz mal raus aus dem Schatten und alle bisherigen Formate überholt!</p>
            <g-link to="/was-wir-machen#digital" class="p-1 bg-primary my-4 inline-block">Mehr erfahren</g-link>
          </div>
        </div>
        <div class="col-span-1 bg-cover bg-no-repeat bg-scroll text-white text-left relative py-24 sm:py-32 transition ease-in duration-200" @mouseenter="selectShow('hybrid')" @mouseleave="selectShow('')">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-hybrid.png" class="opacity-0 transition duration-300 ease-in absolute top-0 w-full h-full" :class="{ 'opacity-50': show === 'hybrid' }"></g-image>
          <div class="px-4 sm:px-12 relative">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 border-b-2 border-white">Hybride Events</h2>
            <p class="text-sm font-semibold uppercase opacity-0" :class="{ 'opacity-100': show === 'hybrid' }">Die Zukunft wird hybrid. Das Beste aus zwei Welten!</p>
            <g-link to="/was-wir-machen#hybrid" class="p-1 bg-secondary border my-4 inline-block">Mehr erfahren</g-link>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-32">
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
