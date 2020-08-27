<template>
  <Layout>
    <FullBanner title="Some Title" subtitle="subtitle" buttonText="Learn More" link="/" image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
  </Layout>
</template>

<script>
import FullBanner from '../components/FullBanner'

export default {
  metaInfo: {
    title: 'Über Uns'
  },
  components: {
    FullBanner
  }
}
</script>

<style>
</style>
