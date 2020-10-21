<template>
  <div class="layout">
      <header :class="{ 'bg-white': !view.atTopOfPage }" class="transition duration-500 text-gray-800 flex items-center justify-between fixed top-0 w-full bg-transparent z-50">
        <div class="hidden lg:block">
          <g-link to="/"><g-image 
          alt="Logo ANMHE" 
          src="../assets/logo-transparent.png"
          class="ml-4 w-20 sm:w-32 m:w-40"  
          /></g-link>
        </div>
        <nav class="sm:mr-20">
          <div class="flex w-auto items-center">
            <g-link to="/"><i class="fas fa-mountain hover:text-secondary cursor-pointer p-2 sm:px-6 text-xl"></i></g-link>
            <g-link to="/was-wir-machen" class="sm:uppercase p-1 sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-sm">Was Wir Machen</g-link>
            <g-link to="/wer-wir-sind" class="sm:uppercase p-1 sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-sm">Wer Wir Sind</g-link>
            <g-link to="/events" class="hidden p-1 sm:block sm:uppercase sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-sm">Wie Wir Arbeiten</g-link>
            <g-link to="/digitale-events" class="p-1 bg-tertiary sm:uppercase sm:p-2 lg:px-6 hover:text-secondary transition ease-in duration-200 font-semibold text-sm  ">Digitale Events</g-link>
          </div>
        </nav>
      </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer class="flex p-4 px-8 items-center justify-center">
        <div>
          <g-image 
          alt="Logo ANMHE" 
          src="../assets/Logo_1.png"
          class="w-20 m-auto"  
          />
          <div class="text-center">
            <p class="text-xs">
              <g-link class="uppercase p-2 hover:text-secondary transition ease-in duration-200 font-semibold"  to="/jobs">Jobs</g-link>|
              <g-link class="uppercase p-2 hover:text-secondary transition ease-in duration-200 font-semibold"  to="/presse">Presse</g-link>|
              <g-link class="uppercase p-2 hover:text-secondary transition ease-in duration-200 font-semibold"  to="/impressum">Impressum</g-link>|
              <g-link class="uppercase p-2 hover:text-secondary transition ease-in duration-200 font-semibold"  to="/impressum#datenschutz">Datenschutz</g-link>
            </p>
            <p class="text-lg py-2">
              <a class="p-2 hover:text-secondary transition ease-in duration-200"  href="/">© Ain't No Mountain</a>
            </p>
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
            atTopOfPage: true
        }
    }
  },

  beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
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
