<template>
  <Layout>
    <section class="relative lg:h-screen md:mt-24 lg:mt-0 mt-32" id="banner">
      <div class="w-full h-full block overflow-hidden relative">
        <video autoplay muted id="myVideo" class="w-full h-full scale">
          <source src="https://res.cloudinary.com/mixbened/video/upload/v1603629177/ANM/trimmed-intro-anm.mov" type="video/mp4">
        </video>
        <div class="absolute top-0 left-0 flex items-end justify-center w-full h-full z-10 lg:pb-8 transition ease-in duration-200" :class="{ 'opacity-0': !arrow, 'opacity-100': arrow }">
          <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-white w-0 sm:w-20 z-10 relative animate-bounce">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
    <section class="mt-10" id="start">
      <section class="text-black mx-4 sm:mx-20 md:ml-32 py-12">
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-gelb-minus12Grad@2x.png" class="hidden sm:block absolute  right-0 mr-8" width="80"></g-image>
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Petrol-klein@2x.png" class="hidden sm:block absolute  left-0 m-8" width="80"></g-image>
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Pink-minus14grad@2x.png" class="hidden sm:block absolute left-0 m-64" width="200"></g-image>
          <div class="grid grid-cols-1 sm:grid-cols-2 z-10 relative">
            <div class="sm:mx-8">
              <vue-typed-js :strings="['Holladio!']" :showCursor="false" :typeSpeed="150" :backSpeed="50" :backDelay="2000" :loop="true">
                <h1 class="text-left sm:text-right text-6xl font-semibold"><span class="typing"></span><span class="opacity-0 text-xs">.</span></h1>
              </vue-typed-js>
            </div>
            <div>
              <h3 class="text-left text-base font-semibold uppercase p-0 sm:my-0">Wir sind Ain't No Mountain, die junge Agentur für grenzenlose Live-Kommunikation im Rheinland.</h3>
              <p class="text-justify my-6">Unser Herz schlägt für echte Erlebnisse: ob Messe, Präsentationen, Kick-offs, Festivals oder Mitarbeiter-Events. Analog, digital oder hybrid. <br> Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und kein Projekt zu groß. Von der Idee bis zur Umsetzung, wir geben alles. Wie wir das schaffen? Mit jeder Menge Erfahrung und unserem regionalen Netzwerk. Profis aus Event, Messe, Online, Print und Social Media. <br><br> Wenn der Berg ruft  ♪♫♪... <i>just call us, you don’t have to worry... </i> ♪♫♪</p>
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
            <p class="text-xl uppercase opacity-0" :class="{ 'opacity-100': show === 'analog' }">Es sieht zwar gerade nicht danach aus, aber ohne Zweifel: Live will be back!</p>
          </div>
          <g-link to="/was-wir-machen#analog" class="absolute bottom-0 p-1 bg-primary mb-12 mx-4 sm:mx-12 inline-block opacity-0" :class="{ 'opacity-100': show === 'analog' }">Hier Lang</g-link>
        </div>
        <div class="col-span-1 bg-cover bg-no-repeat bg-scroll text-white text-left relative py-24 sm:py-32 transition ease-in duration-200" @mouseenter="selectShow('digital')" @mouseleave="selectShow('')">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-digital.png" class="opacity-0 transition duration-300 ease-in absolute top-0 w-full h-full" :class="{ 'opacity-50': show === 'digital' }"></g-image>
          <div class="px-4 sm:px-12 relative">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 border-b-2 border-white">Digitale Events</h2>
            <p class="text-xl uppercase opacity-0" :class="{ 'opacity-100': show === 'digital' }">Kurz mal raus aus dem Schatten und alle bisherigen Formate überholt!</p>
          </div>
          <g-link to="/was-wir-machen#digital" class="absolute bottom-0 p-1 bg-secondary border mb-12 mx-4 sm:mx-12 inline-block opacity-0" :class="{ 'opacity-100': show === 'digital' }">Hier Lang</g-link>
        </div>
        <div class="col-span-1 bg-cover bg-no-repeat bg-scroll text-white text-left relative py-24 sm:py-32 transition ease-in duration-200" @mouseenter="selectShow('hybrid')" @mouseleave="selectShow('')">
          <g-image src="https://res.cloudinary.com/mixbened/image/upload/v1603874155/teaser-hybrid.png" class="opacity-0 transition duration-300 ease-in absolute top-0 w-full h-full" :class="{ 'opacity-50': show === 'hybrid' }"></g-image>
          <div class="px-4 sm:px-12 relative">
            <h2 class="text-2xl font-semibold uppercase inline-block leading-tight my-8 border-b-2 border-white">Hybride Events</h2>
            <p class="text-xl uppercase opacity-0" :class="{ 'opacity-100': show === 'hybrid' }">Die Zukunft wird hybrid. Das Beste aus zwei Welten!</p>
          </div>
          <g-link to="/was-wir-machen#hybrid" class="absolute bottom-0 p-1 bg-tertiary mb-12 mx-4 sm:mx-12 inline-block opacity-0" :class="{ 'opacity-100': show === 'hybrid' }">Hier Lang</g-link>
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
      show: '',
      arrow: false
    }
  },
  components: {
    InfoCard,
    InfoGrid,
    IconList,
    Newsletter
  },
  mounted(){
    // setTimeout(() => {
    //   const elBanner = document.getElementById('banner')
    //   const heightBanner = elBanner.offsetHeight 
    //   const elHeader = document.getElementById('header')
    //   const heightHeader = elHeader.offsetHeight 
    //   window.scroll(0,heightBanner-heightHeader)
    // },5000)
    setTimeout(() => {
      this.arrow = true
    },4000)
  },
  methods: {
    selectShow: function(box) {
      this.show = box
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
