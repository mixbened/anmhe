<template>
  <!-- This is the Event Card Preview Component-->
  <section class="my-8 mx-auto w-full sm:w-4/5 md:w-4/5 lg:w-2/3 xxl:w-1/3 p-4 sm:p-0">
    <form action="https://aintnomountain.us2.list-manage.com/subscribe/post?u=379cbb28ae2ca785a28d16826&amp;id=82123e83a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div class="grid grid-cols-3 sm:grid-cols-5">
        <div  class="col-span-2 py-8">
          <g-image src="../assets/Newsletter_Laptop_goran-ivos-unsplash.png"></g-image>
        </div>
        <div class="col-span-3">
          <h2 class="text-xl sm:text-2xl md:text-5xl font-semibold text-tertiary">Lust auf Bergpost aus Langenfeld? <br> <span class="text-primary text-base sm:text-2xl font-normal">Dann hier den Newsletter abonnieren!</span></h2>
        </div>
        <div class="col-span-3 sm:col-span-4 sm:ml-10">
          <div class="mc-field-group h-10">
          <input type="email" value="" name="EMAIL" class="required email w-full p-2 text-black bg-gray-200 h-full" id="mce-EMAIL" placeholder="Hier Email Adresse eingeben*">
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <div class="clear h-10"><input type="submit" value="Ab die Post!" name="subscribe" id="mc-embedded-subscribe" class="cursor-pointer h-full w-full bg-secondary hover:bg-black text-white font-bold py-2 px-4 text-xs sm:text-sm"></div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_379cbb28ae2ca785a28d16826_82123e83a3" tabindex="-1" value=""></div>
        </div>
        <div class="col-span-5 text-xs sm:text-sm md:mt-8 leading-tight">
            *Weitere Informationen zur Verarbeitung deiner personenbezogenen Daten findest du <g-link class="inline-block underline" to="/datenschutz">hier</g-link>. Die Abmeldung ist jederzeit möglich, zum Beispiel über einen Link am Ende eines jeden Newsletters. Alternativ kannst du deinen Abmeldewunsch gerne auch jederzeit an <a href="mailto:hello@aintnomountain.com" class="underline">hello@aintnomountain.com</a> per E-Mail senden.
        </div>
      </div>
    </form>
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
