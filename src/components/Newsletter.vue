<template>
  <!-- This is the Event Card Preview Component-->
  <section class="px-4 sm:px-32 md:px-64 py-12 bg-orange-500 text-white">
    <div class="grid grid-cols-5">
      <div class="col-span-4">
        <h2 class="">Some text</h2>
        <h2 class="text-3xl">Newsletter</h2>
      </div>
      <div  class="col-span-1">
        pic
      </div>
      <div  class="col-span-4">
        <input type="text" class="w-full">
      </div>
      <div class="col-span-1">
        <button>Send</button>
      </div>
      <div class="col-span-5">
        <small>ABGG AGB</small>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter",
  props: {
    title: String,
    text: String,
    button: String,
    image: String,
    text: String,
    link: String
  }
};
</script>

<style scoped>
</style>
