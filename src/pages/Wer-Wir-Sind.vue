<template>
  <Layout>
    <section>
      <Header title=""  background="https://res.cloudinary.com/mixbened/image/upload/v1604914749/ANM/Titel_Analog_-_Wer_wir_sind.png"/>
    </section>
    <section class="my-10">
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Petrol-klein@2x.png" class="hidden sm:block absolute left-0 ml-12 -mt-20" width="80"></g-image>
      <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Pink-minus14grad@2x.png" class="hidden sm:block absolute left-0 m-48" width="200"></g-image>
      <Intro_Main title="WER WIR SIND. <br> UND WAS UNS AUS MACHT." text="Auch wenn das Rheinland ziemlich flach ist: Berge gibt‘s genug! Denn spätestensseit Corona müssen Veranstaltungen komplett neu gedacht werden. <br> ANM ist die junge Antwort auf den Berg an Veränderungen. Ohne schweren Agenturapparat und mit motivierten Mitarbeiter*innen stellen wir uns der Herausforderung und zeigen, wie man Veranstaltungen zeitgemäß umsetzt. <br> Wir arbeiten für große und kleine Unternehmen, unterstützen andere Agenturen, supporten Institutionen und Verbände.Als Rheinländer liegt uns die Region und der persönliche Austausch am Herzen. Wir sind die von nebenan– und jederzeit für dich da. Einfach klingeln und (aktuellper Live-Bild) vorbeikommen!Ich bin Dominik Dugandzic (mit Foto), dein erster Ansprechpartner bei Ain ́t No Mountain, und stehe dir mit meiner Erfahrung aus über 10 Jahren Eventbusiness zur Seite!" />
    </section>
    <section class="bg-secondary mt-20">
      <section class="mx-4 sm:mx-12 lg:mx-32 lg:pt-12">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="col-span-1 flex align-center">
            <g-image src="../assets/Duga.png" class="w-full m-auto"></g-image>
          </div>
          <div class="col-span-1 py-8 sm:py-20 text-white">
            <h3 class="text-3xl lg:text-4xl lg:underline font-semibold uppercase mt-48">Dominik Dugandzic</h3>
            <p class="uppercase w-full lg:text-2xl lg:w-3/5 font-semibold leading-tight">Den erster Ansprechpartner und Gründer von Ain't No Mountain.</p>
            <div class="my-4 sm:mt-64 sm:-ml-32">
              <p class="inline text-2xl lg:text-3xl leading-tight uppercase bg-primary font-semibold px-1">"Ich stehe dir mit der Erfahrung</p><br>
              <p class="inline text-2xl lg:text-3xl leading-tight uppercase bg-primary font-semibold px-1">aus über 10 Jahren</p><br>
              <p class="inline text-2xl lg:text-3xl leading-tight uppercase bg-primary font-semibold px-1">Eventbusiness zur Seite."</p>
            </div>
            <div>
              <g-link to="/bergpost" class="lg:text-2xl p-1 px-2 bg-primary hover:bg-tertiary text-white uppercase font-semibold my-4 sm:my-20 inline-block">Kontakt</g-link>
            </div>
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
    title: 'Über Uns'
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
