<template>
  <Layout>
    <section class="mt-32">
      <Intro title="Ain't No Magazine" text="Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet. Events blindtext, Lorem ipsum dolor sit amet" />
    </section>
    <section class="mx-4 sm:mx-20 md:ml-32 py-4 mb-32">
      <h3 class="text-2xl">Logos</h3>
      <div class="grid grid-cols-2">
        <g-image src="../assets/ANM-SHORT-B@3x.png" alt="" width="200"></g-image>
        <g-image src="../assets/ANM-L-BM-O@3x.png" alt="" width="200"></g-image>
      </div>
    </section>
  </Layout>
</template>

<script>
import Intro from '../components/Intro'

export default {
  metaInfo: {
    title: 'Presse'
  },
  components: {
    Intro
  }
}
</script>

<style>
</style>
