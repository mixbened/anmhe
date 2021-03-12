<template>
  <Layout>
    <Header title="Schreib uns."  background="https://res.cloudinary.com/mixbened/image/upload/v1603873041/ANM/Titel_WerWir_Sind.png"/>
    <section class="mt-20">
      <Intro title="Anfrage, Kontakt & Ähnliches" text="Holladio! Wir sind Ain´t No Mountain, die junge Agentur für Live-Kommunikation im Rheinland. Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen. Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und keine Challenge zu groß! Wir entwickeln für jedes Projekt die passenden Tools. On- oder offline, analog oder digital, hybrid oder virtuell. Wie wir das schaffen? Ganz einfach: Mit jeder Menge Erfahrung und unserem Netzwerk aus Kreativen und Projektmanagern. Profis aus Event, Messe, Online, Print und Social Media." />
    </section>
    <section class="my-20 mb-32 sm:mx-20 md:ml-32">
      <div class="grid grid-cols-1 sm:grid-cols-3">
        <div>
          <h3 class="inline-block border-b-2 border-black leading-tight mb-2 uppercase text-xl font-semibold">Kontaktformular</h3>
          <div class="my-2">
            <button class="bg-tertiary text-white p-2 " @click="typeform">Kontaktanfrage</button>
          </div>
        </div>
        <div>
          <h3 class="inline-block border-b-2 border-black leading-tight mb-2 uppercase text-xl font-semibold">Telefon</h3>
          <p class="my-2 text-2xl italic">
            <b>+49 151 24071039</b>
            <br>
            <b>+49 151 24071039</b>
          </p>
        </div>
        <div>
          <h3 class="inline-block border-b-2 border-black leading-tight mb-2 uppercase text-xl font-semibold">Brieftaube</h3>
          <p class="my-2">
            Dominik Dugandzic<br>
            Walter-Kolb-Str. 40<br>
            40764 Langenfeld<br>
          </p>
        </div>
      </div>

    </section>
  </Layout>
</template>

<script>
import Intro from '../components/Intro'
import Header from '../components/Header'
import * as typeformEmbed from '@typeform/embed'


export default {
  metaInfo: {
    title: 'Kontakt'
  },
  components: {
    Intro,
    Header
  },
  data(){
    return {
      popup1: undefined
    }
  },
  methods: {
    typeform: function(){
      console.log('start form')
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
</style>
