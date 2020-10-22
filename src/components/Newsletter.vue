<template>
  <!-- This is the Event Card Preview Component-->
  <section class="px-4 sm:px-32 md:px-64 py-12 bg-tertiary text-white">
    <form action="https://aintnomountain.us2.list-manage.com/subscribe/post?u=379cbb28ae2ca785a28d16826&amp;id=82123e83a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div class="grid grid-cols-5">
        <div class="col-span-4">
          <h2 class="">Newsletter abbonieren</h2>
          <h2 class="text-3xl font-semibold">Kein Event mehr verpassen</h2>
          <p class="py-4 italic">Unser Herz schlägt für echte Erlebnisse: Wir lieben es, Messeauftritte, Produktpräsentationen, Kick-offs, Tagungen, Festivals und Mitarbeiterevents zu konzipieren und umzusetzen.</p>
        </div>
        <div  class="col-span-1 py-8">
          <g-image src="../assets/undraw_Newsletter_re_wrob.svg"></g-image>
        </div>
        <div class="col-span-4">
          <div class="mc-field-group">
          <input type="email" value="" name="EMAIL" class="required email w-full p-2 text-black" id="mce-EMAIL" placeholder="Email Adresse">
          </div>
        </div>
        <div class="col-span-1">
          <div class="clear h-full"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="cursor-pointer h-full w-full bg-secondary hover:bg-black text-white font-bold py-2 px-4 text-sm"></div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_379cbb28ae2ca785a28d16826_82123e83a3" tabindex="-1" value=""></div>
        </div>
        <div class="col-span-5 py-4 leading-tight">
            <input type="checkbox" required="true">
            Ich stimme zu, Informationen und kommerzielle Angebote über AINTNOMOUNTAIN zu erhalten (z.B. Newsletter, die Veröffentlichung von Event- oder Blog-Posts, das Auslaufen von Tickets, ...) in Übereinstimmung mit der <g-link to="/impressum" class="text-warning"> Datenschutzerklärung</g-link>
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
