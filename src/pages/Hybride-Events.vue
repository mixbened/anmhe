<template>
  <Layout>
    <FullBanner title="Some Title" subtitle="subtitle" buttonText="Learn More" link="/" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    <InfoCard title="Events sind unser Ding" text="Schau dir an, welche Events wir organisieren. Bei uns wird vor keiner Idee halt gemacht. #wirmachenesmöglich" button="Zu den Events" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" position="left"/>
    <InfoCard title="Events sind unser Ding" text="Schau dir an, welche Events wir organisieren. Bei uns wird vor keiner Idee halt gemacht. #wirmachenesmöglich" button="Zu den Events" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" position="right"/>
  </Layout>
</template>

<script>
import InfoCard from '../components/InfoCard'
import FullBanner from '../components/FullBanner'

export default {
  metaInfo: {
    title: 'Analoge Events'
  },
  components: {
    InfoCard,
    FullBanner
  }
}
</script>

<style>
</style>
