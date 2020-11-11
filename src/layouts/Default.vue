<template>
  <div class="layout">
      <header :class="{ 'opacity-1': !view.atTopOfPage, 'opacity-0': view.atTopOfPage }" class="bg-white transition duration-500 text-gray-800 flex items-center justify-between fixed top-0 w-full bg-transparent z-50 py-2" id="header">
        <div>
          <g-link to="/"><g-image 
          alt="Logo ANMHE" 
          src="../assets/ANM-SHORT-B@3x.png"
          class="ml-1 sm:ml-4 w-20"  
          /></g-link>
        </div>
        <nav class="mr-4 lg:mr-20">
          <div class="flex w-auto items-center">
            <g-link to="/was-wir-machen" class="sm:uppercase p-2 sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-xs md:text-base">Was Wir Machen</g-link>
            <g-link to="/wer-wir-sind" class="sm:uppercase p-2 sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-xs md:text-base">Wer Wir Sind</g-link>
            <g-link to="/fuer-wen" class="hidden p-2 sm:block sm:uppercase sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-xs md:text-base">Für Wen</g-link>
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
            <li><span class="font-bold mr-2">T</span>+49 (0) 2173 9120000</li>
            <li><span class="font-bold mr-2">E</span> hello@aintnomountain.com</li>
            <li class="font-semibold cursor-pointer" @click="typeform">Kontaktformular</li>
          </ul>
        </div>
        <div class="col-span-1 mt-4 sm:m-0">
          <h3 class="inline-block border-b-2 border-white leading-tight mb-2 uppercase text-base sm:text-xl">Anschrift</h3>
          <ul>
            <li>Ain´t No Mountain</li>
            <li>Walter-Kolb-Str. 40</li>
            <li>40764 Langenfeld</li>
          </ul>
        </div>
        <div class="col-span-1 mt-4 sm:m-0">
          <h3 class="inline-block border-b-2 border-white leading-tight mb-2 uppercase text-base sm:text-xl">Links</h3>
          <ul>
            <g-link to="/jobs"><li>Jobs</li></g-link>
            <g-link to="/datenschutz"><li>Datenschutz</li></g-link>
            <g-link to="/impressum"><li>Impressum</li></g-link>
          </ul>
        </div>
      </div>
    </footer>
    <div class="hidden sm:block fixed bottom-0 right-0 cursor-pointer z-10 mr-4 mb-4 round p-2 bg-tertiary text-white" @click="typeform">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </div>
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
import * as typeformEmbed from '@typeform/embed'

export default {
  data () {
    return {
        view: {
            atTopOfPage: false,
            // route: window.location.pathname // eslint-disable-line no-eval
        }
    }
  },

  beforeMount () {
      window.addEventListener('scroll', this.handleScroll); // eslint-disable-line no-eval
      // console.log(this.view)

  },
  watch: {
    $route(to, from) {
      console.log('route changed: ', from, to)
    }
  },
  methods: {
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = false
        }
    },
    typeform: function(){
      this.popup1 = typeformEmbed.makePopup('https://form.typeform.com/to/RuigsLYO', {
          mode: 'drawer_left',          
          hideHeaders: true,
          hideFooter: true
        });
      this.popup1.open()
    }
  }
}
</script>

<style>
.content-container {
  padding: 0 5%;
}

.round {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
