<template>
  <Bounded as="section" class="hidden md:block">
    <p class="text-center text-2xl md:text-5xl md:pt-14 font-bigcarlos tracking-[-0.02em]">About Ramen Ohashi</p>
    <p class="text-center text-2xl md:text-4xl font-songti text-[#725E43] tracking-[-0.02em]">ラーメン大橋</p>

    <div class="flex gap-4 justify-between mt-9">
      <div class="w-[calc(33%-0.875rem)]"><PrismicImage :field="slice.primary.image1" class="w-full" /><PrismicRichText :field="slice.primary.fig1" class="text-right text-xl italic font-kingscarlos tracking-[-0.015em] text-[#969696] pr-[5px]" /></div>
      <div class="w-[calc(33%-0.875rem)]"><PrismicImage :field="slice.primary.image2" class="w-full" /><PrismicRichText :field="slice.primary.fig2" class="text-right text-xl italic font-kingscarlos tracking-[-0.015em] text-[#969696] pr-[5px]" /></div>
      <div class="w-[calc(33%-0.875rem)]"><PrismicImage :field="slice.primary.image3" class="w-full" /><PrismicRichText :field="slice.primary.fig3" class="text-right text-xl italic font-kingscarlos tracking-[-0.015em] text-[#969696] pr-[5px]" /></div>
  </div>
  <div class="flex gap-9 mt-12"><div class="w-[22.4%]"><div @click="ShowVideo" class="text-xl cursor-pointer font-kingscarlos tracking-[-0.015em] leading-[1.5rem]">Click here for an impression of the restaurant and the food.</div><PrismicRichText :field="about.data.history" class="text-xl font-kingscarlos tracking-[-0.015em] leading-[1.5rem] text-[#8DA1BC] mt-14 kedi"/></div><PrismicRichText :field="about.data.about" class="w-[66.4%] font-kingscarlos tracking-[-0.015em] text-4xl text-[#2C425F]" /></div>
  
  
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {

  computed: {
    about() {
      return this.$store.state.prismic.about
    }
  },
  methods: {
    ShowVideo(){
      document.getElementById("video").style.display = "flex"
      document.getElementById("vd").play()
    }
  },
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
<style>
.kedi > p{
  margin-bottom: 0px;
}
.kedi > p:first-child{
  margin-bottom: 2rem;
  font-weight: bold;
}
.kedi > p:last-child{
  text-indent:20px
}
</style>