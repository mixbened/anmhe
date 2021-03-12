<template>
      <section class="text-black mx-4 sm:mx-20 md:ml-32 py-4">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <h3 class="text-right text-xl sm:text-3xl font-semibold uppercase leading-tight p-0 my-4 sm:my-0 sm:px-12" v-html="title"></h3>
          <p class="text-justify" v-html="text"></p>
        </div>
      </section>
</template>

<script>
export default {
  name: "Intro_Main",
  props: {
    title: String,
    text: String
  }
};
</script>

<style scoped>
</style>
