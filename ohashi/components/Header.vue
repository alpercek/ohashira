<template>
  <PrismicImage :field="settings.data.logo" class="mx-auto w-10 md:hidden py-5"/>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
