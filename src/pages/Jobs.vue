<template>
  <Layout>
    <section class="mt-32 mx-4 sm:mx-20 md:mx-32 py-4">
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Petrol-klein@2x.png" class="hidden sm:block absolute left-0 ml-12 -mt-28" width="80"></g-image>
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-gelb-minus12Grad@2x.png" class="hidden sm:block absolute right-0 mr-20 mt-20" width="80"></g-image>
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Pink-minus14grad@2x.png" class="hidden sm:block absolute left-0 m-48" width="100"></g-image>
      <h2 class="text-5xl font-semibold uppercase inline-block border-b-2 pl-10 border-primary leading-tight p-2 text-primary">Jobs</h2>
    <div class="grid grid-cols-1 sm:grid-cols-5 my-10">
      <div class="col-span-1 sm:col-span-2">
        <p class="font-bold uppercase text-2xl text-right sm:mr-8 leading-tight">Offene Stellen</p>
      </div>
      <div class="col-span-1 sm:col-span-3">
        <p>Lust, deinen Rucksack zu schnüren und die Eventgipfel des Rheinlands zu erstürmen? Dann bewirb dich bei uns! <br> Mit deiner Planungsliebe und Kreativität bringen wir neue Ideen und gemeinsame Projekte auf den Weg. Deine Aufgaben führst du sicher und souverän an die Spitze. Dort angekommen, genießt du die Aussicht und freust dich auf die nächste Besteigung – in der Zwischenzeit spendieren wir dir ein Hollerwasser*. <br> Wir sind ein kleines Team, das stetig wächst. Hilf uns mit deinem Können beim Aufbau einer lokalen Agentur mit überregionaler Reichweite. Sende uns einfach deine Bewerbung mit ein paar netten Worten und Referenzen an <a href="mailto:hello@himalayeah.de">hello@himalayeah.de</a></p>
      </div>
    </div>
    </section>
    <section class="mb-32 mx-4 sm:mx-20 md:ml-32 p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 my-20">
        <div class="col-span-1 rounded p-4 px-6 shadow relative pb-20 bg-secondary text-white">
          <h4 class="text-2xl my-2 text-center inline-block border-b-2 border-white">Praktikant*in</h4>
          <p class="transition mt-4">
            <b>Was du mitbringen solltest: </b>
            <ul class="list-disc p-4">
              <li>Bisschen Agenturerfahrung wäre nicht schlecht</li>
              <li>Schon mal etwas geplant und organisiert haben</li>
              <li>Bock auf coole Ideen und Kreativität</li>
              <li>Neugier, Mut und Motivation</li>
              <li>Absolute Zuverlässigkeit und Sorgfalt</li>
            </ul>
            <b class="inline-block uppercase">Idealerweise 3 Monate Zeit</b>
          </p>
          <div class="bottom-0 my-2 absolute">
            <a href="mailto:hello@himalayeah.de"><button class="p-1 bg-primary hover:bg-tertiary  my-4 inline-block text-white font-semibold uppercase">Kontakt</button></a>
          </div>
        </div>
        <div class="col-span-1 rounded p-4 px-6 shadow relative pb-20 bg-primary text-white">
          <h4 class="text-2xl my-2 text-center inline-block border-b-2 border-white">Freelancer*in</h4>
          <p class="transition mt-4">
            <b>Wenn du...</b>
            <ul class="list-disc p-4">
              <li>dich als Projektleiter*in, Konzeptioner*in, Architekt*in, Grafiker*in bei uns einbringen möchtest</li>
              <li>kommunikationsstark bist und dich im Team am wohlsten fühlst</li>
              <li>eigenverantwortlich und strukturiert arbeitest</li>
              <li>Projekte umsetzen willst, die den Kunden und uns nach vorne bringen</li>
            </ul>
            <b class="uppercase">…dann freuen wir uns von dir zu hören!</b>
          </p>
          <div class="bottom-0 my-2 absolute">
            <a href="mailto:hello@himalayeah.de"><button class="p-1 bg-tertiary hover:bg-secondary my-4 inline-block text-white font-semibold uppercase">Kontakt</button></a>
          </div>          
        </div>
      </div>
      <div>
        <div class="w-32 border-2 border-black border-primary mb-4"></div>   
        <small class="text-primary">*Du weißt nicht, was ein Hollerwasser ist? Hier das Rezept: <br> Nimm Wasser (egal, ob laut oder leise) und gebe Holunderblütensirup dazu - fertig! Die richtige “Mische” erfährst du, wenn du bei uns anfängst ;-)</small>
      </div>
    </section>
  </Layout>
</template>

<script>
import Intro from '../components/Intro'

export default {
  metaInfo: {
    title: 'Jobs'
  },
  components: {
      Intro
  }
}
</script>

<style>
</style>
