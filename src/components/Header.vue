<template>
    <section class="w-full">
      <div class="bg-scroll bg-center bg-cover h-70 relative text-black flex items-end" :style="{backgroundImage:`url(${background})`}">
        <div class="text-left relative z-10 mx-4 sm:mx-20 md:ml-32">
          <h1 class="text-2xl sm:text-6xl font-bold py-2 uppercase text-white">{{ title }}</h1>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    background: String
  }
};
</script>

<style scoped>
</style>
