<template>
  <div class="layout">
      <header :class="{ 'opacity-1': !view.atTopOfPage, 'opacity-0': view.atTopOfPage }" class="bg-white transition duration-500 text-gray-800 flex items-center justify-between fixed top-0 w-full bg-transparent z-50 py-2" id="header">
        <div>
          <g-link to="/"><g-image 
          alt="Logo ANMHE" 
          src="../assets/ANM-SHORT-B@3x.png"
          class="ml-1 sm:ml-4 w-20 md:w-32 m:w-40"  
          /></g-link>
        </div>
        <nav class="mr-4 lg:mr-20">
          <div class="flex w-auto items-center">
            <g-link to="/was-wir-machen" class="sm:uppercase p-2 sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-xs md:text-base">Was Wir Machen</g-link>
            <g-link to="/wer-wir-sind" class="sm:uppercase p-2 sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-xs md:text-base">Wer Wir Sind</g-link>
            <g-link to="/events" class="hidden p-2 sm:block sm:uppercase sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-xs md:text-base">Wie Wir Arbeiten</g-link>
            <g-link to="/was-wir-machen#digital" class="p-2 border border-primary sm:uppercase sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold  text-xs md:text-base">Digitale Events</g-link>
          </div>
        </nav>
      </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer class="text-white bg-black px-8">
      <div class="grid grid-cols-2 sm:grid-cols-4 px-2 sm:px-12 py-8 flex items-start text-xs sm:text-base">
        <div class="col-span-1 w-1/2">
          <g-image src="../assets/ANM-LC-WTX@3x.png" alt="Logo ANM"></g-image>
        </div>
        <div class="col-span-1">
          <h3 class="inline-block border-b-2 border-white leading-tight mb-2 uppercase text-base sm:text-xl">Kontakt</h3>
          <ul>
            <li><span class="font-bold mr-2">T</span> +49 151 24071039</li>
            <li><span class="font-bold mr-2">F</span> +49 151 24071039</li>
            <li><span class="font-bold mr-2">M</span> hello@aintnomountain.com</li>
            <g-link to="/bergpost"><li><span class="font-bold mr-2 cursor-pointer">W</span> Direkter Kontakt</li></g-link>
          </ul>
        </div>
        <div class="col-span-1 mt-4 sm:m-0">
          <h3 class="inline-block border-b-2 border-white leading-tight mb-2 uppercase text-base sm:text-xl">Anschrift</h3>
          <ul>
            <li>Dominik Dugandzic</li>
            <li>Walter-Kolb-Str. 40</li>
            <li>40764 Langenfeld</li>
          </ul>
        </div>
        <div class="col-span-1 mt-4 sm:m-0">
          <h3 class="inline-block border-b-2 border-white leading-tight mb-2 uppercase text-base sm:text-xl">Social & Links</h3>
          <ul>
            <g-link to="/impressum"><li>Facebook</li></g-link>
            <g-link to="/impressum"><li>Impressum</li></g-link>
            <g-link to="/datenschutz"><li>Datenschutz</li></g-link>
            <g-link to="/presse"><li>Presse</li></g-link>
            <g-link to="/jobs"><li>Jobs</li></g-link>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
        view: {
            atTopOfPage: true,
            // route: window.location.pathname // eslint-disable-line no-eval
        }
    }
  },

  beforeMount () {
      window.addEventListener('scroll', this.handleScroll); // eslint-disable-line no-eval
      // console.log(this.view)

  },
  methods: {
      handleScroll(){
          // when the user scrolls, check the pageYOffset
          if(window.pageYOffset>0){
              // user is scrolled
              if(this.view.atTopOfPage) this.view.atTopOfPage = false
          }else{
              // user is at top of page
              if(!this.view.atTopOfPage) this.view.atTopOfPage = true
          }
      }
  }
}
</script>

<style>
.content-container {
  padding: 0 5%;
}

</style>
