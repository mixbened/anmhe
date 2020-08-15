<template>
  <!-- This is the Event Card Preview Component-->
  <div class="grid grid-cols-3 sm:grid-cols-11">
    <div class="col-span-6 bg-scroll bg-center" :style="{backgroundImage:`url(${image})`}"></div>
    <div class="col-span-5 px-16 py-20 text-center">
      <h3 class="text-2xl font-semibold italic">{{ title }}</h3>
      <p class="p-8 text-sm">{{ text }}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm">{{ button }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    title: String,
    text: String,
    button: String,
    image: String
  }
};
</script>

<style scoped>
</style>
