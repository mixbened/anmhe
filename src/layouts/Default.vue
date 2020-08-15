<template>
  <div class="layout">
    <header class="flex p-4 md:px-8 items-center justify-between">
      <div class="hidden lg:block">
        <g-image 
        alt="Logo ANMHE" 
        src="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png"
        class="w-20 sm:w-32 m:w-40"  
        />
      </div>
      <nav class="sm:mr-20">
        <div class="flex w-auto items-center">
          <g-link to="/"><i class="fas fa-mountain hover:text-blue-600 cursor-pointer p-2 sm:px-6 text-xl"></i></g-link>
          <g-link to="/leistungen" class="sm:uppercase p-1 sm:p-2 lg:px-6 hover:text-blue-600 transition ease-in duration-200 font-semibold text-sm">Leistungen</g-link>
          <g-link to="/about" class="sm:uppercase p-1 sm:p-2 lg:px-6 hover:text-blue-600 transition ease-in duration-200 font-semibold text-sm">Wer wir sind</g-link>
          <g-link to="/events" class="sm:uppercase p-1 sm:p-2 lg:px-6 hover:text-blue-600 transition ease-in duration-200 font-semibold text-sm">Was wir machen</g-link>
          <g-link to="/kontakt" class="hidden p-1 sm:block sm:uppercase sm:p-2 lg:px-6 hover:text-blue-600 transition ease-in duration-200 font-semibold text-sm  ">Kontakt</g-link>
          <g-link to="/digitale-events" class="p-1 bg-orange-300 sm:uppercase sm:p-2 lg:px-6 hover:text-blue-600 transition ease-in duration-200 font-semibold text-sm  ">Digitale Events</g-link>
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
          src="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png"
          class="w-20 m-auto"  
          />
          <div class="text-center">
            <p class="text-xs">
              <a class="uppercase p-2 hover:text-blue-600 transition ease-in duration-200 font-semibold"  href="#">Jobs</a>|
              <a class="uppercase p-2 hover:text-blue-600 transition ease-in duration-200 font-semibold"  href="#">Presse</a>|
              <a class="uppercase p-2 hover:text-blue-600 transition ease-in duration-200 font-semibold"  href="#">Impressum</a>|
              <a class="uppercase p-2 hover:text-blue-600 transition ease-in duration-200 font-semibold"  href="#">Datenschutz</a>
            </p>
            <p class="text-lg py-2">
              <a class="p-2 hover:text-blue-600 transition ease-in duration-200"  href="#">© Ain't No Mountain</a>
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

<style>
.content-container {
  padding: 0 5%;
}
</style>
