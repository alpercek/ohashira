<template><div>
  
 <div id="video" class="hidden fixed z-50 top-0 left-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-screen h-screen md:max-w-[500px] bg-black md:bg-transparent flex-col items-center justify-center"><div @click="HideVideo" class=" cursor-pointer md:h-0 z-50 text-4xl text-[#DCE0DF] absolute top-0 md:static">&#10005;</div><video type="video/mp4" playsinline id="vd" :src="video.url"></video></div>
  <SliceZone :slices="page.data.slices" :components="components" />
  
  <PrismicImage :field="page.data.bottom_image" class="m-auto pt-[300px]"/>
  <p class="text-center font-kingscarlos regularitalic text-[#725E43] md:text-2xl tracking-tight px-[30px] pb-[30px]">design by julian sirre · illustration by <a href="https://viktorhachmang.nl/">viktor hachmang</a> · build by alper çekinmez</p>
  <div class="absolute top-0 z-[-99]" id="background" ><div v-for="(item, i) in page.data.background" :key="`slice-item-${i}`" class="" >
  <PrismicImage :field="item.image" class="h-[100vmax] object-cover walls opacity-0 transition-all duration-[4000ms] ease-in-out"/>
  </div></div>
  <button id="topitop" class="fixed duration-1000 bottom-28 md:bottom-1/3 right-0 lg:right-12 transition-all opacity-0 text-[#2C425F] scale-y-50 text-2xl -translate-x-1/4" @click="toTop()">▲</button>

    
  <div class="fixed top-[17px] md:top-[75px] lg:right-[9vw] right-[30px] z-40 md:w-[195px]">
    <div class="grid md:justify-items-center justify-items-end">
      <div @click="expandMenu = !expandMenu" class="cursor-pointer"><div :class="{ chopstick: expandMenu}" class="h-[0.6rem] w-[2rem] transition-all border-black border-t-[2.5px]" ></div><div class="h-[0.6rem] w-[2rem] border-black border-t-[2.5px]"></div><div class="h-[0.6rem] w-[2rem] border-black border-t-[2.5px]"></div></div>
  <div id="menue" :class="{ showmenu: expandMenu}" class="overflow-hidden transition-all max-h-0 hidden md:block"><div v-for="(item, i) in page.data.slices" :key="`slice-item-${i}`" @click="skate(i)" id="obilemen" class="text-center font-bigcarlos text-2xl text-[#725E43] tracking-[-0.02em] cursor-pointer">
     <li v-if="item.slice_type != 'how_to_eat_ramen'"> {{ item.slice_type }} </li><li v-if="item.slice_type == 'how_to_eat_ramen'" >how to eat Ramen</li>
  </div></div>
  </div>
  </div>
  <div :class="{ mshowmenu: expandMenu}" class=" overflow-hidden transition-all max-h-0 fixed top-0 w-screen md:hidden bg-[#DCE0DF]/80 z-30 h-screen select-none" ><div class="mt-28" > <div id="mobilemen" v-for="(item, i) in page.data.slices" :key="`slice-item-${i}`" @click="skate(i)" class="select-none text-center font-bigcarlos text-4xl text-[#725E43] tracking-[-0.02em] mb-12 cursor-pointer">
     <div v-if="item.slice_type != 'how_to_eat_ramen' && item.slice_type != 'about'"> {{ item.slice_type }} </div><div v-if="item.slice_type == 'how_to_eat_ramen'" >how to eat Ramen</div>
  </div></div><div @click="expandMenu = !expandMenu" class="w-full h-full"></div></div>

  <div id="closedSign" class="fixed text-[#2C425F] delay-[2000ms] duration-300 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-items-center transition-all w-screen md:w-auto"><div class="font-songti hidden tracking-[-0.02em] text-[3.5rem] m-auto md:text-[4.375rem]">準備中</div><div class="font-bigcarlos hidden tracking-[-0.02em] text-[2.5rem] md:text-[3.375rem] border-t-[1px] border-[#2C425F] m-auto leading-tight">We are closed</div>
  <div id="closedText" class="leading-none m-auto hidden md:text-4xl text-xl tracking-[-0.02em] px-4 font-kingscarlos">We will be open on Monday</div><div id="message" class="leading-none text-2xl leading-[1.75rem] px-4 md:text-5xl tracking-[-0.02em] pt-4 font-kingscarlos">{{this.$prismic.asText(this.$store.state.prismic.vacation.data.message)}}</div></div>
   
</div>
</template>

<script>
import { components } from '~/slices'

export default {
  
  async asyncData ({ $prismic, store }) {
    const page = await $prismic.api.getByUID('page', 'home')
    await store.dispatch('prismic/load')
    return {
      page
    }
  },
  data () {
    return { components, 
      showVideo: false,
      expandMenu: false
    }
  },
  head () {
    return {
      title: this.$prismic.asText(this.page.data.title)
    }
  },
  methods: {
    HideVideo(){
      document.getElementById("video").style.display = "none"
    },

    skate(numb){
     document.getElementsByTagName("section")[numb].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },

    toTop() {
    window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
  }
  },
  computed: {
    about() {
      return this.$store.state.prismic.about
    },
    video(){
      return this.$store.state.prismic.about.data.video
    }
  },
  mounted() {
    var lastScrollTop = 0;
    let list = document.getElementById("menue").children
    let sections = document.getElementsByTagName("section")
    list[0].firstElementChild.classList.add("onview")
    let vmax;

    if(window.innerHeight > window.innerWidth){
      vmax = window.innerHeight
    }
    else{
      vmax = window.innerWidth
    }

   
    document.getElementsByClassName("walls")[0].style.opacity = "1"
    
    document.getElementsByClassName("walls")[0].style.marginBottom = sections[2].offsetTop*1.3-vmax + "px"
    
    document.addEventListener("scroll", function(){ 
    
      
      var st = window.pageYOffset || document.documentElement.scrollTop;
      document.getElementById("background").style.top = st*-.3 + "px"

      if (st > lastScrollTop) {
    document.getElementById("topitop").style.opacity = 0
   } else if (st < lastScrollTop) {
    document.getElementById("topitop").style.opacity = 1
   }
   lastScrollTop = st <= 0 ? 0 : st;
  
   for (let index = 0; index < sections.length; index++) {
    if (index < sections.length-1) {
      if (st+100 > sections[index].offsetTop && st+100 < sections[index+1].offsetTop) {
      for (let i = 0; i < list.length; i++) {
        list[i].firstElementChild.classList.remove("onview")
        
      }
      list[index].firstElementChild.classList.add("onview")

      if(index == 2){
      document.getElementsByClassName("walls")[1].style.opacity = "1"
      }
    }
  }
  else{
    if (st+100 > sections[index].offsetTop) {

      for (let i = 0; i < list.length; i++) {
        list[i].firstElementChild.classList.remove("onview")
        
      }
      list[index].firstElementChild.classList.add("onview")
    }
  }
   }

     });

    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();
    let sign = document.getElementById("closedSign")
    let message = document.getElementById("closedText")
     if (hour < 17 || hour >= 22) {
    
      for (let index = 0; index < sign.children.length-1; index++) {
        sign.children[index].style.display = "block"
        }
      message.innerText = "We will be open today from 17:30"
     }
     else if (day == 1 || day == 7) {
      for (let index = 0; index < sign.children.length-1; index++) {
        sign.children[index].style.display = "block"
        }
      message.innerText = "We will be open from Tuesday"
     }
     if (!this.$store.state.prismic.vacation.data.switch) {
      for (let index = 0; index < sign.children.length-1; index++) {
        sign.children[index].style.display = "block"
        }
      message.style.display = "none"
    }

    document.addEventListener("scroll", function() {
      
      document.getElementById('closedSign').style.opacity = "0"
      document.getElementById('entry').style.opacity = "1"
      setTimeout(() => {
        document.getElementById('closedSign').style.display = "none"
      }, 4000);

}, {once : true});
  }

}
</script>
<style>

li{
  list-style-type: ""
}
.onview{
  list-style-type: "⬩"
}
.showmenu{
  max-height: 16rem;
}
.chopstick{
  rotate: -30deg;
  transform-origin: right;
}
#mobilemen:first-letter{
  text-transform: uppercase;
}
#obilemen:first-letter{
  text-transform: uppercase;
}
.mshowmenu{
  max-height: 60rem;
}
</style>