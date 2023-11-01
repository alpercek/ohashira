<template>
   <Bounded as="section" class="mt-20 md:mt-0 relative">
    <p class="text-center text-2xl md:text-5xl md:pt-14 text-[#2C425F]  font-bigcarlos tracking-[-0.02em]">Contact</p>
    <p class="text-center text-2xl md:text-4xl font-songti font-bold text-[#725E43] tracking-[-0.02em]">メニュー</p>
    <div class="flex gap-0 md:gap-32 justify-center font-kingscarlos text-2xl md:text-4xl mt-12 md:mt-14 text-[#725741] tracking-[-0.02em] leading-[2.625rem] flex-col md:flex-row">
      <div class="text-center w-full  md:w-[47.3%]">
        <PrismicRichText :field="settings.data.openHours" class="children-mb-0"/>
        <div v-if="this.$prismic.asText(this.$store.state.prismic.vacation.data.message).length !== 0" class="mt-11 lg:absolute lg:bottom-[100px] left-1/2 text-[#2C425F] lg:-translate-x-1/2">{{this.$prismic.asText(this.$store.state.prismic.vacation.data.message)}}</div>
        <a href="http://maps.google.com/?q=RAMEN OHASHİ"><PrismicRichText :field="settings.data.street" class="underline mt-11 md:mt-20" />
        <PrismicRichText :field="settings.data.city" class="underline" /></a>
        <PrismicRichText :field="settings.data.tram" class="text-lg md:text-xl mb-9 md:mb-7" />
        <a :href="'tel:'+$prismic.asText(settings.data.phone)" class="flex justify-center">TEL:<PrismicRichText :field="settings.data.phone" /></a>
        <a :href="'mailto:' + $prismic.asText(settings.data.mail)"><PrismicRichText :field="settings.data.mail" class="underline" /></a>
      </div>
      
      
        <form id="formm" action="https://formsubmit.co/ramenohashi.nl@gmail.com" method="POST" class="w-full md:w-[39.7%] block relative">
          <input id="nextrefresh" type="hidden" name="_next" value="https://www.ramenohashi.com">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_autoresponse" value="Your submission to Ramen Ohashi have been recieved.">
          <input type="text" name="_honey" style="display:none">
         <span>Name:</span><br><input type="text" required name="name" class="rounded-full bg-[#FCF2E8] border-[1px] border-[#707070] px-2 mb-6 w-full text-xl"> <br>
         <span>E-mail address:</span><br><input type="email" required name="email" class="rounded-full bg-[#FCF2E8] border-[1px] border-[#707070] px-2 mb-6 w-full text-xl"><br>
         <span>Telephone number:</span><br><input type="text" name="phone number" class="rounded-full bg-[#FCF2E8] border-[1px] border-[#707070] px-2 mb-6 w-full text-xl"><br>
         <span>How may we help you?</span><div class="text-[1.25rem]">Please include time and amount of people for reservations.</div><textarea type="text" name="message" class="px-2 h-36 bg-[#FCF2E8] border-[1px] border-[#707070] w-full text-xl"></textarea> <br>
         <input type="button" @click="formSub()"  value="送信" class="font-songti text-white bg-[#725741] rounded-full px-4 text-2xl float-right cursor-pointer">
         <p id="pizzaboy" class="absolute right-0 bottom-0 translate-x-[5%] translate-y-[100%] hidden text-lg" >Message Sent!</p>
      </form>
      <audio id="clicksound" @ended="formSubfr()" :src="audio.url" ></audio>
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  
  computed: {
    settings() {
      return this.$store.state.prismic.settings
    },
    audio(){
      return this.$store.state.prismic.about.data.audio
    }
  },
  methods:{
    formSub(){
      document.getElementById("clicksound").play()
    },
    formSubfr(){
      document.getElementById("formm").submit();
      document.getElementById('pizzaboy').style.display = 'block'
    }
  },
  mounted() {
      document.getElementById("nextrefresh").setAttribute("value" , window.location.href)
     }
  
};
</script>
<style>
.children-mb-0 > * {
  margin-bottom: 0rem !important;
}
@media (min-width: 768px) {
.children-mb-0 > *:nth-child(2){
  margin-bottom: 3.625rem !important
}
}
</style>
