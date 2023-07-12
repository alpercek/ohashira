<template>
  <div class="text-slate-800">
    <Header
      v-if="settings.data"
      :settings="settings"
    />
    <main><nuxt /></main>
  </div>
</template>

<script>
export default {
  computed: {
    settings() {
      return this.$store.state.prismic.settings
    }
  }
}
</script>

<style>
body {
  @apply overflow-x-hidden antialiased;
}
</style>
