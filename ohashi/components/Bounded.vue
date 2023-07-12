<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    class="px-[30px] lg:px-[18vw]"
    :class="{
      
      'pb-[17px] md:py-[50px]': yPadding === 'base',
      
    }"
  >
  <PrismicImage :field="settings.data.logo" class="mx-auto hidden md:block"/>
    <div class="mx-auto w-full max-w-6xl">
      <slot />
    </div>
     </Component>
</template>

<script>
export default {
  computed: {
    settings() {
      return this.$store.state.prismic.settings
    }
  },
  props: {
    as: {
      type: [String, Object, Function],
      default: 'div'
    },
    yPadding: {
      type: String,
      default: 'base'
    },
    collapsible: {
      type: Boolean,
      default: true
    },
  }
}
</script>
