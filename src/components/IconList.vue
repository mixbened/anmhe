<template>
  <!-- This is the Event Card Preview Component-->
  <section class="my-2">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 px-8 sm:px-20">
      <div class="col-span-1 text-center p-4 sm:p-10">
        <g-image
        alt="Icon Image" 
        :src="image1"
        class="w-20 m-auto" 
        />
        <h4 class="text-lg font-bold py-2">{{ title1 }}</h4>
        <p class="text-sm">{{ text1 }}</p>
      </div>
      <div class="col-span-1 text-center p-4 sm:p-10">
        <g-image
        alt="Icon Image" 
        :src="image2"
        class="w-20 m-auto" 
        />
        <h4 class="text-lg font-bold py-2">{{ title2 }}</h4>
        <p class="text-sm">{{ text2 }}</p>
      </div>
      <div class="col-span-1 text-center p-4 sm:p-10">
        <g-image
        alt="Icon Image" 
        :src="image3"
        class="w-20 m-auto" 
        />
        <h4 class="text-lg font-bold py-2">{{ title3 }}</h4>
        <p class="text-sm">{{ text3 }}</p>
      </div>
    </div>
    <section class="sm:mx-20 mx-8 my-32">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 px-0 lg:px-20">
        <div class="col-span-1 p-10 bg-tertiary shadow text-white text-left rounded relative">
          <g-image
          alt="Icon Image" 
          src="https://res.cloudinary.com/mixbened/image/upload/v1603873458/teaser-analog.png"
          class="w-64 m-auto" 
          />
          <h2 class="text-2xl font-semibold uppercase inline-block bg-white leading-tight p-2 my-8 text-tertiary w-full">Analoge Events</h2>
          <p class="mb-4 text-sm">Live will be back! Messen, Produktpräsentationen, Kick-off-Events, Tagungen, Festivals und Mitarbeiterevents werden zurückkommen. Dafür ist der Mensch zu sehr Mensch und von seinen Emotionen gesteuert.</p>
          <g-link to="/was-wir-machen#analog" class="p-1 border-b border-white absolute" style="bottom: 1em">Mehr erfahren</g-link>
        </div>
        <!-- <div class="col-span-1 text-left p-10 bg-secondary shadow text-white rounded relative">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_events_2p66.svg"
          class="w-64 m-auto" 
          />
          <h2 class="text-2xl font-semibold uppercase inline-block bg-white leading-tight p-2 my-8 text-secondary w-full">Digitale Events</h2>
          <p class="mb-4 text-sm">Kurz mal raus aus dem Schatten und alles überholt. Das haben Digitale Events vor ein paar Wochen geschafft und sind aktuell nicht mehr aus der Veranstaltungslandschaft wegzudenken.</p>
          <g-link to="/was-wir-machen#digital" class="p-1 border-b border-white absolute" style="bottom: 1em">Mehr erfahren</g-link>
        </div>
        <div class="col-span-1 text-left p-10 bg-primary shadow text-white rounded relative">
          <g-image 
          alt="Icon Image" 
          src="../assets/undraw_special_event_4aj8.svg"
          class="w-64 m-auto" 
          style="margin: 0.5em"
          />
          <h2 class="text-2xl font-semibold uppercase inline-block bg-white leading-tight p-2 my-8 text-primary w-full">Hybride Events</h2>
          <p class="mb-4 text-sm">Die Zukunft wird Hybrid! Der Mix aus physischer Veranstaltung in Kombination mit digitaler Übertragung und Teilnahme in Echtzeit, gewinnt immer mehr an Akzeptanz.</p>
          <g-link to="/was-wir-machen#hybrid" class="p-1 border-b border-white absolute" style="bottom: 1em">Mehr erfahren</g-link>
        </div> -->
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "IconList",
  props: {
    title1: String,
    text1: String,
    image1: String,
    title2: String,
    text2: String,
    image2: String,
    title3: String,
    text3: String,
    image3: String,
  }
};
</script>

<style scoped>
</style>