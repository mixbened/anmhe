<template>
  <Layout>
    <section>
      <Header title=""  background="https://res.cloudinary.com/mixbened/image/upload/v1603873034/ANM/DoSomethingGreat-quer.png"/>
    </section>
    <section class="my-10">
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Petrol-klein@2x.png" class="hidden sm:block absolute left-0 ml-12 -mt-20" width="80"></g-image>
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Pink-minus14grad@2x.png" class="hidden sm:block absolute left-0 m-48" width="200"></g-image>
      <Intro_Main title="Für wen wir <br> das machen" text="Hier wirst du ganz bald Referenzprojekte von uns finden, die dich überzeugen! <br> <br> Frisch gegründet, aber mit jahrelanger Erfahrung. Kunden von Mittelstand bis Dax-Konzern, von Handel über Telekommunikation bis Kultur.Was wir alles für wen schon gemacht haben und warum wir glauben, dass wir der richtige Partner für dich sind, erzählen wir dir gerne im persönlichen Gespräch. Live oder online! Wenn du einer unserer ersten Kunden sein möchtest, dann <a class='underline' href='/bergpost'>schreib uns</a> oder du willst immer up to date sein, dann kannst du weiter unten die Bergpost abonnieren" />
    </section>
    <section class="my-20">
      <section class="mx-4 sm:mx-12 lg:mx-32 lg:pt-12 relative">
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-gelb-minus12Grad@2x.png" class="hidden sm:block absolute left-0 m-64" width="80"></g-image>
        <div class="grid grid-cols-1 sm:grid-cols-3 z-10 relative">
          <div class="mx-8">
            <h2 class="uppercase font-bold text-2xl">Wenn du einer unserer ersten Kunden sein möchtest dann schreib uns</h2>
            <g-link to="/bergpost" class="lg:text-2xl p-1 px-2 bg-primary text-white uppercase font-semibold my-4 sm:my-8 inline-block">Kontakt</g-link>
          </div>
          <div>
            <g-image src="../assets/claudio-schwarz-purzelbaum-unsplash.png"></g-image>
          </div>
          <div class="mx-8">
            <h2 class="uppercase font-bold text-2xl text-primary text-right">Oder willst du nur up-to-date sein? dann kannst du hier die bergpost abonnieren</h2>
            <g-image src="../assets/Newsletter_Laptop_goran-ivos-unsplash.png" class="w-2/3 mx-auto"></g-image>
            <form action="https://aintnomountain.us2.list-manage.com/subscribe/post?u=379cbb28ae2ca785a28d16826&amp;id=82123e83a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div class="grid grid-cols-2 my-8">
                <div>
                  <div class="mc-field-group h-10">
                  <input type="email" value="" name="EMAIL" class="required email w-full p-2 text-black bg-gray-200 h-full" id="mce-EMAIL" placeholder="Email Adresse">
                  </div>
                </div>
                <div>
                  <div class="clear h-10"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="cursor-pointer h-full w-full bg-secondary hover:bg-black text-white font-bold py-2 px-4 text-xs sm:text-sm"></div>
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_379cbb28ae2ca785a28d16826_82123e83a3" tabindex="-1" value=""></div>
                </div>
            </div>
                <div class="col-span-5 text-xs sm:text-xs leading-tight">
                    <input type="checkbox" required="true">
                    Ich stimme zu, Informationen und kommerzielle Angebote über AINTNOMOUNTAIN zu erhalten (z.B. Newsletter, die Veröffentlichung von Event- oder Blog-Posts, das Auslaufen von Tickets, ...) in Übereinstimmung mit der <g-link to="/impressum" class="text-warning"> Datenschutzerklärung</g-link>
                </div>
            </form>
          </div>
        </div>
      </section>
    </section>
    <section>
      <FullBanner title="Jobs" subtitle="Werde Teil unseres Teams" buttonText="Hier lang" link="/jobs" image="https://res.cloudinary.com/mixbened/image/upload/v1604917484/ANM/Titel_Talents_needed_dunkel.jpg"/>
    </section>
  </Layout>
</template>

<script>
import Header from '../components/Header'
import FullBanner from '../components/FullBanner'
import Intro_Main from '../components/Intro_Main'

export default {
  metaInfo: {
    title: 'Für Wen'
  },
  components: {
    Header,
    FullBanner,
    Intro_Main
  }
}
</script>

<style>

</style>
