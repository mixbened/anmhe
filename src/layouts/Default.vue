<template>
  <div class="layout">
    <header class="header">

    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer class="pt-8">
      Built with
      <a
        href="https://gridsome.org/docs"
        target="_blank"
        rel="noopener"
        class="link--gridsome"
        >Gridsome</a
      >
      by
      <a
        href="https://twitter.com/PichuPlayer"
        target="_blank"
        rel="noopener"
        class="link--blue"
        >Tyler</a
      >
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
