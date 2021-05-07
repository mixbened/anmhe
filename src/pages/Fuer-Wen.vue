<template>
  <Layout>
    <section>
      <Header title=""  background="https://res.cloudinary.com/mixbened/image/upload/v1603873034/ANM/DoSomethingGreat-quer.png"/>
    </section>
    <section class="my-10">
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Petrol-klein@2x.png" class="hidden sm:block absolute left-0 ml-12 -mt-20" width="80"></g-image>
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Pink-minus14grad@2x.png" class="hidden sm:block absolute left-0 m-48" width="200"></g-image>
      <Intro_Main title="Für wen wir das machen." text="Hier wirst du ganz bald Referenzprojekte von uns finden, die dich überzeugen! <br> Frisch gegründet, aber mit jahrelanger Erfahrung. Kunden von Mittelstand bis Dax-Konzern, von Handel über Telekommunikation bis Kultur. Was wir alles für wen schon gemacht haben und warum wir glauben, dass wir der richtige Partner für dich sind, erzählen wir dir gerne im persönlichen Gespräch. Live oder online!" />
    </section>
    <section class="my-20">
      <section class="mx-4 sm:mx-12 lg:mx-32 lg:pt-12 relative">
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-gelb-minus12Grad@2x.png" class="hidden sm:block absolute left-0 m-64" width="80"></g-image>
        <div class="grid grid-cols-1 sm:grid-cols-3 z-10 relative">
          <div class="mx-8">
            <h2 class="uppercase font-bold text-2xl">Wenn du einer unserer ersten Kunden sein möchtest, dann schreib uns...</h2>
            <button class="lg:text-2xl p-1 px-2 bg-primary text-white uppercase font-semibold my-4 sm:my-8 inline-block" @click="typeform">Kontakt</button>
          </div>
          <div class="my-12 sm:my-2">
            <g-image src="../assets/claudio-schwarz-purzelbaum-unsplash.png"></g-image>
          </div>
          <div class="mx-8">
            <h2 class="uppercase font-bold text-2xl text-primary text-right">...oder du willst immer up to date sein, dann kannst du die Bergpost abonnieren</h2>
            <g-image src="../assets/Newsletter_Laptop_goran-ivos-unsplash.png" class="w-2/3 mx-auto"></g-image>
            <form action="https://aintnomountain.us2.list-manage.com/subscribe/post?u=379cbb28ae2ca785a28d16826&amp;id=82123e83a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div class="grid grid-cols-3 my-8">
                <div class="col-span-2">
                  <div class="mc-field-group h-10">
                  <input type="email" value="" name="EMAIL" class="required email w-full p-2 text-black text-xs bg-gray-200 h-full" id="mce-EMAIL" placeholder="Hier E-Mail-Adresse eingeben*">
                  </div>
                </div>
                <div>
                  <div class="clear h-10"><input type="submit" value="Ab die Post!" name="subscribe" id="mc-embedded-subscribe" class="cursor-pointer h-full w-full bg-secondary hover:bg-black text-white font-bold py-2 px-1 lg:px-4 text-xs"></div>
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_379cbb28ae2ca785a28d16826_82123e83a3" tabindex="-1" value=""></div>
                </div>
            </div>
                <div class="col-span-5 text-xs md:mt-8 leading-tight" @mouseover="showDetail = true" @mouseleave="showDetail = false">
                  *Weitere Informationen ...<span class="transition ease-in duration-300" :class="{'opacity-0': !showDetail, 'opacity-100': showDetail}">zur Verarbeitung deiner personenbezogenen Daten findest du <g-link class="inline-block underline" to="/datenschutz">hier</g-link>. Die Abmeldung ist jederzeit möglich, zum Beispiel über einen Link am Ende eines jeden Newsletters. Alternativ kannst du deinen Abmeldewunsch gerne auch jederzeit an <a href="mailto:hello@aintnomountain.com" class="underline">hello@aintnomountain.com</a> per E-Mail senden.</span>
                </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
import Header from '../components/Header'
import FullBanner from '../components/FullBanner'
import Intro_Main from '../components/Intro_Main'
import * as typeformEmbed from '@typeform/embed'

export default {
  metaInfo: {
    title: 'Für wen - Himalayeah - Eventagentur Langenfeld',
    meta: [
      {
        name: "description",
        content: "Wir betreuen Unternehmen, Agenturen, Institutionen und Verbände aus der Region. Von Mittelstand bis Dax-Konzern, von Handel über Telekommunikation bis Kultur."
      }
    ]
  },
  data(){
    return {
      showDetail: false
    }
  },
  components: {
    Header,
    FullBanner,
    Intro_Main
  },
  methods: {
        typeform: function(){
      this.popup1 = typeformEmbed.makePopup('https://form.typeform.com/to/RuigsLYO', {
          mode: 'drawer_left',          
          hideHeaders: true,
          hideFooter: true
        });
      this.popup1.open()
    }
  }
}
</script>

<style>

</style>
