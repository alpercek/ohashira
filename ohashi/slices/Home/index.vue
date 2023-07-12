<template>
  <Bounded as="section" class="relative">

    <PrismicImage :field="slice.primary.littletext" class="hidden md:block absolute right-[14%] top-[calc(19vw+345px)] w-[2.6%] animate-[ping_1s_ease-in-out_1.5s_1_reverse_backwards]" />

    <p class="text-center text-2xl md:text-5xl md:pt-14 text-[#725E43] font-bigcarlos tracking-[-0.02em]">Welcome to Ramen Ohashi</p>
    <p class="text-center text-2xl md:text-4xl font-songti tracking-[-0.02em]">ラーメン大橋</p>


    <div class="md:flex md:mt-16 mt-6 gap-6 justify-center"><div class="md:w-[calc(32vw-0.75rem)]"><PrismicImage :field="slice.primary.image1" class="w-full" /><PrismicRichText :field="slice.primary.label1"  class="hidden md:block text-right text-xl italic font-kingscarlos tracking-[-0.015em] text-[#969696]"/></div>

    <div class="md:hidden text-center max-w-xl m-auto text-2xl md:text-4xl tracking-[-0.02em] font-bigcarlos text-[#725741] mt-7 leading-[1.875rem]">Authentic Japanese handmade ramen noodles by chef <span class="underline">Masanao Ohashi</span></div>
    <div class="flex flex-wrap md:hidden justify-evenly gap-x-2 xl:text-xl text-[#725741] font-bigcarlos mt-9"><PrismicRichText :field="settings.data.siteTitle" class="italic" /><PrismicRichText :field="settings.data.street" /><PrismicRichText :field="settings.data.city" /><PrismicRichText :field="settings.data.phone" /><PrismicRichText :field="settings.data.mail" /></div>

    <div class="md:w-[calc(32vw-0.75rem)] mt-8 md:mt-0"><PrismicImage :field="slice.primary.image2" class="w-full" /><PrismicRichText :field="slice.primary.label2"  class="hidden md:block text-right text-xl italic font-kingscarlos tracking-[-0.015em] text-[#969696]"/></div></div>
  
    <div @click="expanded = !expanded" :class="{ expand: expanded}" class="md:hidden font-kingscarlos text-center text-xl tracking-[-0.015em] text-[#725741] leading-[1.5rem] mt-11 max-h-[calc(350px-29vw)] overflow-hidden transition-all"><PrismicRichText :field="about.data.about" /></div><div @click="expanded = !expanded" :class="{ hide: expanded}" class="m-auto md:hidden font-kingscarlos text-center text-xl tracking-[-0.015em] text-[#725741] leading-[1.5rem]">(more...)</div>
    
    <div  @click="ShowVideo" class="md:hidden font-kingscarlos text-center underline tracking-[-0.015em] leading-[2.25rem] mt-14 text-3xl" >Click here for an impression of the restaurant and the food.</div>
    <div class="hidden md:block text-center max-w-xl m-auto text-2xl md:text-4xl tracking-[-0.02em] font-bigcarlos text-[#725741] mt-14 leading-[1.875rem]">Authentic Japanese handmade ramen noodles by chef <span class="underline">Masanao Ohashi</span></div>
  <div class="hidden md:flex justify-between xl:text-xl text-[#725741] font-bigcarlos mt-24 "><PrismicRichText :field="settings.data.siteTitle" class="italic" /><a href="http://maps.google.com/?q=RAMEN OHASHİ"><PrismicRichText :field="settings.data.street" /></a><a href="http://maps.google.com/?q=RAMEN OHASHİ"><PrismicRichText :field="settings.data.city" /></a><a :href="'tel:'+$prismic.asText(settings.data.phone)" class="flex">TEL:<PrismicRichText :field="settings.data.phone" /></a><a :href="'mailto:' + $prismic.asText(settings.data.mail)"><PrismicRichText :field="settings.data.mail" /></a></div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  data(){
    return{
  expanded: false
    }},
  computed: {
    settings() {
      return this.$store.state.prismic.settings
    },
    about() {
      return this.$store.state.prismic.about
    }
  },
  methods: {
    ShowVideo(){
      document.getElementById("video").style.display = "flex"
      document.getElementById("vd").play()
    },
  },
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
<style>
.expand{
  max-height: 150rem;
}
.hide{
  display: none;
}
</style>
