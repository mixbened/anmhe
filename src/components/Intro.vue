<template>
  <Layout>
    <section>
      <section class="mx-4 sm:mx-8 sm:mx-32 md:mx-48 p-4">
        <h3 class="text-3xl font-semibold uppercase">{{ title }}</h3>
        <p class="my-4 text-justify">{{ text }}</p>
      </section>
    </section>

  </Layout>
</template>

<script>
export default {
  name: "Intro",
  props: {
    title: String,
    text: String
  }
};
</script>

<style scoped>
</style>
