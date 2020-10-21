<template>
  <Layout>
    <Header title="Schreib uns."  background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    <section class="mt-20">
      <Intro title="Anfrage, Kontakt & Ähnliches" text="Holladio! Wir sind Ain´t No Mountain, die junge Agentur für Live-Kommunikation im Rheinland. Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen. Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und keine Challenge zu groß! Wir entwickeln für jedes Projekt die passenden Tools. On- oder offline, analog oder digital, hybrid oder virtuell. Wie wir das schaffen? Ganz einfach: Mit jeder Menge Erfahrung und unserem Netzwerk aus Kreativen und Projektmanagern. Profis aus Event, Messe, Online, Print und Social Media." />
    </section>
    <section class="mx-4 sm:mx-20 md:ml-32 px-4">
      <a href="/was-wir-machen"><button class="bg-tertiary hover:bg-secondary  font-bold py-2 px-4 text-sm">Kontaktanfrage</button></a>
    </section>
    <!-- <section class="mt-10">
      <div class="mx-4 sm:mx-8 sm:mx-32 md:mx-48 p-4">
        <form
          action="https://formspree.io/mwkwelwn"
          method="POST"
        >
          <label class="block uppercase font-semibold text-black tracking-wide my-8">
            Deine Email-Adresse
            <input type="text" name="_replyto" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 block w-full appearance-none leading-normal" placeholder="Wohin sollen wir die Antwort schicken?">
          </label>
          <label class="block uppercase font-semibold text-black tracking-wide my-8">
            Betreff
            <input type="text" name="_replyto" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 block w-full appearance-none leading-normal" placeholder="Worum geht's?">
          </label>
          <label class="block uppercase font-semibold text-black tracking-wide my-8">
            Deine Nachricht
            <textarea  type="text" name="_replyto" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 block w-full appearance-none leading-normal" placeholder="Was ist deine Frage?"/>
          </label>


          <button type="submit" class="bg-tertiary hover:bg-blue-700 font-bold py-2 px-4 rounded">
            Senden
          </button>
        </form>
      </div>
    </section> -->
  </Layout>
</template>

<script>
import Intro from '../components/Intro'
import Header from '../components/Header'


export default {
  metaInfo: {
    title: 'Kontakt'
  },
  components: {
    Intro,
    Header
  }
}
</script>

<style>
</style>
