<template>
  <Layout>
    <section>
      <div class="cover-image-background">
        <div class="sm:p-20 p-8 sm:py-32 p-12 sm:w-1/2 w-full sm:ml-32 ml-0">
          <h2 class="text-2xl font-semibold">WILLKOMMEN AUF'M KIEZ! IM SAFE SPACE FÜR COWORKING, MEETING UND EVENT.</h2>
          <p class="py-8">Das Hamburger Ding ist durch das Labor Dr. Fenner und Kollegen zertifiziert als Corona Safe House: Unsere Meetingräume sind virensicher. Auch für unsere Arbeitsplätze gilt #machdeindingsafe. Du bist auf der Suche nach einer Eventlocation? Nimm direkt Kontakt mit uns auf, oder klick dich durch unsere Welten im Hamburger Ding.</p>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.cover-image-background {
  width: 100%;
  min-height: 500px;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
}

.cover-image-background > * {
  z-index: 100;
  position: relative;
}

.cover-image-background::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #0E0E0E, #0c0c0c);
  opacity: .5;
  z-index: 1;
}
</style>
