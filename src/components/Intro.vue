<template>
      <section class="text-black mx-4 sm:mx-20 md:ml-32 py-4 md:w-1/2">
        <h3 class="text-3xl font-semibold uppercase">{{ title }}</h3>
        <p class="my-4 text-justify">{{ text }}</p>
      </section>
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
