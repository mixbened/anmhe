<template>
  <!-- This is the Event Card Preview Component-->
  <section class="px-4 sm:px-32 md:px-64 py-12 bg-orange-500 text-white">
    <div class="grid grid-cols-5">
      <div class="col-span-4">
        <h2 class="">Newsletter abbonieren</h2>
        <h2 class="text-3xl font-semibold">Kein Event mehr verpassen</h2>
        <p class="py-4 italic">Wir sind ehrlich mit dir: Die eierlegende Wollmilchsau sind wir nicht!</p>
      </div>
      <div  class="col-span-1 py-8">
        <g-image src="../assets/undraw_Newsletter_re_wrob.svg"></g-image>
      </div>
      <div  class="col-span-4">
        <input type="text" class="w-full p-2">
      </div>
      <div class="col-span-1">
        <g-link :to="link"><button class="h-full w-full bg-blue-500 hover:bg-gray-800 text-white font-bold py-2 px-4 text-sm">Abonnieren</button></g-link>
      </div>
      <div class="col-span-3 py-4 leading-tight">
        <small>Wir sind ehrlich mit dir: Die eierlegende Wollmilchsau sind wir nicht! Jedoch sind wir in der Lage, mit unserer Beratung, dem Projektmanagement und unserem Netzwerk aus Partnern beinahe jede Aufgabe zu lösen! </small>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter",
  props: {
    title: String,
    text: String,
    button: String,
    image: String,
    text: String,
    link: String
  }
};
</script>

<style scoped>
</style>
