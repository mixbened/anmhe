<template>
  <Layout>
    <Intro title="Kontakt" text="" />
    <div class="mx-4 sm:mx-8 sm:mx-32 md:mx-48 p-4">
      <form
        action="https://formspree.io/mwkwelwn"
        method="POST"
      >
        <label class="block uppercase font-semibold text-gray-700 tracking-wide my-8">
          Deine Email-Adresse
          <input type="text" name="_replyto" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 block w-full appearance-none leading-normal" placeholder="Wohin sollen wir die Antwort schicken?">
        </label>
        <label class="block uppercase font-semibold text-gray-700 tracking-wide my-8">
          Betreff
          <input type="text" name="_replyto" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 block w-full appearance-none leading-normal" placeholder="Worum geht's?">
        </label>
        <label class="block uppercase font-semibold text-gray-700 tracking-wide my-8">
          Deine Nachricht
          <textarea  type="text" name="_replyto" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 my-2 block w-full appearance-none leading-normal" placeholder="Was ist deine Frage?"/>
        </label>

        <!-- your other form fields go here -->

        <button type="submit" class="bg-orange-300 hover:bg-blue-700 font-bold py-2 px-4 rounded">
          Senden
        </button>
      </form>
    </div>
  </Layout>
</template>

<script>
import Intro from '../components/Intro'


export default {
  metaInfo: {
    title: 'Kontakt'
  },
  components: {
    Intro
  }
}
</script>

<style>
</style>
