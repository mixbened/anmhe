<template>
    <section class="w-full">
      <div class="bg-scroll bg-center bg-cover h-70 relative text-gray-800 overlay flex items-end" :style="{backgroundImage:`url(${background})`}">
        <div class="text-left px-4 sm:px-20 relative z-10">
          <h1 class="text-2xl sm:text-6xl font-bold py-2 uppercase">{{ title }}</h1>
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
