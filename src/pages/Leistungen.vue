<template>
  <Layout>
    <FullBanner title="Some Title" subtitle="subtitle" buttonText="Learn More" link="/" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    <section class="p-8 mx-20 mt-20">
      <h2 class="text-center text-4xl">Full Service</h2>
      <h2 class="text-center my-2 mb-8">Veranstaltungen die unser Herz höher schlagen lassen!</h2>
      <div class="grid grid-cols-2 gap-2">
        <div class="col-span-1 rounded p-4 border">
          <h4 class="text-2xl py-2">Corporate</h4>
          <ul class="list-disc px-6">
            <li>Mitarbeiterfest</li>
            <li>Vertriebstagung</li>
            <li>Kick-off-Veranstaltung</li>
            <li>Messe</li>
            <li>Tagung</li>
            <li>Incentive</li>
            <li>Teambuilding</li>
          </ul>
        </div>
        <div class="col-span-1 rounded p-4 border">
          <h4 class="text-2xl py-2">Public</h4>
          <ul class="list-disc px-6">
            <li>Festival</li>
            <li>Ausstellungseröffnung</li>
            <li>Konzerte</li>
            <li>Sport-Events</li>
            <li>Finissage</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <InfoCard title="Events sind unser Ding" text="Schau dir an, welche Events wir organisieren. Bei uns wird vor keiner Idee halt gemacht. #wirmachenesmöglich" button="Zu den Events" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" position="left"/>
    </section>
  </Layout>
  
</template>

<script>
import InfoCard from '../components/InfoCard'
import FullBanner from '../components/FullBanner'

export default {
  metaInfo: {
    title: 'Leistungen'
  },
  components: {
    InfoCard,
    FullBanner
  }
}
</script>

<style scoped>
li {
  
}
</style>
