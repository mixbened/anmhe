<template>
    <section class="w-full">
      <div class="bg-scroll bg-center bg-cover p-20 sm:p-48 relative text-white" :style="{backgroundImage:`url(${image})`}">
        <div class="text-center relative z-10">
          <h1 class="inline-block px-6 leading-tight text-2xl sm:text-5xl font-bold border-b-2 border-white">{{ title }}</h1>
          <h4 class="uppercase text-xl font-semibold py-4">{{ subtitle }}</h4>
          <g-link :to="link" class="p-1 px-2 border border-white bg-secondary uppercase">{{ buttonText }}</g-link>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "FullBanner",
  props: {
    title: String,
    subtitle: String,
    link: String,
    buttonText: String,
    image: String
  }
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 2px solid white;
}

.cover-image-background::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #0E0E0E, #0c0c0c);
  opacity: .3;
  z-index: 1;
}
</style>
