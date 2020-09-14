<template>
  <Layout>
    <section>
      <div class="cover-image-background relative bg-cover text-white" :style="{backgroundImage:'url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)'}">
        <div class="sm:p-20 p-8 sm:py-32 p-12 sm:w-1/2 w-full sm:ml-32 ml-0">
          <h2 class="text-2xl font-semibold uppercase">Holladio!</h2>
          <h2 class="text-xl font-semibold uppercase">Wir sind Ain´t No Mountain, die junge Agentur für Live-Kommunikation im Rheinland.</h2>
          <p class="py-8">Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen. Unser Ohrwurm-Name ist Programm: Kein Berg zu hoch und kein Weg zu weit. Kein Job zu klein und keine Challenge zu groß! Wir entwickeln für jedes Projekt die passenden Tools. On- oder offline, analog oder digital, hybrid oder virtuell. Wie wir das schaffen? Ganz einfach: Mit jeder Menge Erfahrung und unserem Netzwerk aus Kreativen und Projektmanagern. Profis aus Event, Messe, Online, Print und Social Media.</p>
          <p class="font-bold m-2">Wenn der Berg ruft - just call us, you don't have to worry!</p>
        </div>
      </div>
    </section>
    <InfoCard value="some text" />
    <InfoGrid title="Some Title" subtitle="this is the subtitle" head1="another head" head2="" head3="" text1="some more lorem ipsum text for having some content" text2="" text3="" image1="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" image2="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" image3="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" image4="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard'
import InfoGrid from '../components/InfoGrid'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    InfoCard,
    InfoGrid
  }
}
</script>

<style>

.cover-image-background > * {
  z-index: 100;
  position: relative;
}

.cover-image-background::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #0E0E0E, #0c0c0c);
  opacity: .3;
  z-index: 1;
}
</style>
