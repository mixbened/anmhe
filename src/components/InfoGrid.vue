<template>
  <!-- This is the Event Card Preview Component-->
  <section class="bg-blue-200 py-4">
    <div class="text-center mb-6">
      <h2 class="text-3xl font-semibold">{{ title }}</h2>
      <h4>{{ subtitle }}</h4>
    </div>
    <div class="grid grid-cols-3 gap-2 sm:px-20 px-4">
      <div class="col-span-1">
        <div class="my-8">
          <h5 class="text-xl font-semibold">{{ head1 }}</h5>
          <p>{{ text1 }}</p>
        </div>
        <div class="my-8">
          <h5 class="text-xl font-semibold">{{ head1 }}</h5>
          <p>{{ text1 }}</p>
        </div>
        <div class="my-8 py-2">
          <h5 class="text-xl font-semibold">{{ head1 }}</h5>
          <p>{{ text1 }}</p>
        </div>
      </div>
      <div class="col-span-2">
        <div class="grid grid-cols-2 gap-2">
          <div>
              <g-image
              alt="Gallery Image" 
              :src="image1" 
              class="mb-2"  
              />
              <g-image
              alt="Gallery Image" 
              :src="image4"
              />
          </div>
          <div>
              <g-image
              alt="Gallery Image" 
              :src="image2"
              class="mb-2" 
              />
              <g-image
              alt="Gallery Image" 
              :src="image3"
              class="" 
              />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoGrid",
  props: {
    subtitle: String,
    title: String,
    head1: String,
    text1: String,
    image1: String,
    head2: String,
    text2: String,
    image2: String,
    head3: String,
    text3: String,
    image3: String,
    image4: String
  }
}
</script>

<style scoped>
</style>
