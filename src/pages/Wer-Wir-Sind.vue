<template>
  <Layout>
    <section>
      <Header title="wer wir sind."  background="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    </section>
    <section class="my-10">
      <Intro title="Vision" text="Holladio! Wir sind Ain´t No Mountain, die junge Agentur für Live-Kommunikation im Rheinland. Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen. Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und keine Challenge zu groß! Wir entwickeln für jedes Projekt die passenden Tools. On- oder offline, analog oder digital, hybrid oder virtuell. Wie wir das schaffen? Ganz einfach: Mit jeder Menge Erfahrung und unserem Netzwerk aus Kreativen und Projektmanagern. Profis aus Event, Messe, Online, Print und Social Media." />
    </section>
    <section class="my-20 mx-4 sm:mx-20 md:ml-32">
      <div class="grid grid-cols-3 sm:grid-cols-11">
        <div class="col-span-6 flex align-center">
          <g-image src="../assets/male.png" class="w-1/2 m-auto"></g-image>
        </div>
        <div class="col-span-5 px-16 py-20 text-center">
          <h3 class="text-2xl font-semibold italic">Die Agentur</h3>
          <p class="p-8 text-sm">Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen. Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit.</p>
        </div>
      </div>
    </section>
    <section>
      <FullBanner title="Jobs" subtitle="Das Ain't No Mountain Team" buttonText="Aktiv werden" link="/jobs" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    </section>
  </Layout>
</template>

<script>
import Header from '../components/Header'
import FullBanner from '../components/FullBanner'
import Intro from '../components/Intro'

export default {
  metaInfo: {
    title: 'Über Uns'
  },
  components: {
    Header,
    FullBanner,
    Intro
  }
}
</script>

<style>

</style>
