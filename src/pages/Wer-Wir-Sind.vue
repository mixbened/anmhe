<template>
  <Layout>
    <section class="w-full mt-20">
      <div class="bg-scroll bg-center bg-cover pt-48 sm:pt-64 cover-image-background relative text-white" :style="{backgroundImage:`url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`}">
        <div class="text-left px-4 sm:px-20 relative z-10">
          <h1 class="text-2xl sm:text-6xl font-bold py-2">title</h1>
        </div>
      </div>
    </section>  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Über Uns'
  },
  components: {
  }
}
</script>

<style>

.cover-image-background > * {
  position: relative;
  z-index: 100;
}
</style>
