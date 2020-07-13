<template>
  <div class="layout">
    <header class="flex p-4 px-8 items-center justify-between">
      <div>
        <g-image 
        alt="Logo ANMHE" 
        src="https://studyinkenya.co.ke/assets/default/images/ads/institution-logo-placeholder.png"
        class="w-20 sm:w-32 m:w-40"  
        />
      </div>
      <nav class="sm:mr-20">
        <div class="flex w-auto">
          <a class="uppercase p-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold" href="#">Link</a>
          <a class="uppercase p-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold"  href="#">Link</a>
          <a class="uppercase p-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold"  href="#">Link</a>
          <a class="uppercase p-2 sm:px-6 hover:text-blue-600 hover:underline transition ease-in duration-200 font-semibold"  href="#">Link</a>
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
            <p class="text-xs">Text | text | text | text</p>
            <p class="text-lg">Text | text | text | text</p>
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
</style>
