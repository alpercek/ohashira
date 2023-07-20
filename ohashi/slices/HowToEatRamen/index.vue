<template>
  <Bounded as="section" class="!pb-0">
    <p class="text-center text-2xl md:text-5xl md:pt-14 text-[#725E43] font-bigcarlos">How to eat Ramen</p>
    <p class="text-center text-2xl md:text-4xl font-songti tracking-[-0.02em]">ラーメン大橋</p>

    <div class="py-9 md:py-11 md:grid md:grid-cols-10 gap-9">
    <PrismicImage :field="slice.items[0].image" class="md:col-start-1 md:col-end-7 md:order-1"/>
    <div class="font-bigcarlos text-4xl tracking-[-0.02em] my-9 md:m-0 md:col-start-7 md:col-end-11 md:order-2"> 1. <PrismicRichText :field="slice.items[0].description"  class="text-3xl font-kingscarlos tracking-[-0.015em]"/></div>
    <PrismicImage :field="slice.items[1].image" class="md:col-start-7 md:col-end-11 md:order-4"/>
    <div class="font-bigcarlos text-4xl tracking-[-0.02em] my-9 md:m-0 md:col-start-1 md:col-end-7 md:text-right md:order-3"> 2. <PrismicRichText :field="slice.items[1].description"  class="text-3xl font-kingscarlos tracking-[-0.015em]"/></div>
    
    <PrismicImage :field="slice.items[2].image" class="md:col-start-1 md:col-end-6 md:order-5"/>
    <div class="font-bigcarlos text-4xl tracking-[-0.02em] my-9  md:m-0 md:col-start-6 md:col-end-11 md:order-6"> 3. <PrismicRichText :field="slice.items[2].description"  class="text-3xl font-kingscarlos tracking-[-0.015em] mt-4"/></div>
    <PrismicImage :field="slice.items[3].image" class="md:col-start-6 md:col-end-11 md:order-7"/>  
    <div class="font-bigcarlos text-4xl tracking-[-0.02em] my-9 md:my-0 md:col-start-1 md:col-end-6 md:text-right md:order-6"> 4. <PrismicRichText :field="slice.items[3].description"  class="text-3xl font-kingscarlos tracking-[-0.015em]"/></div>
 
  </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";


export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
