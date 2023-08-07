<template>
   <Bounded as="section" class="mt-12 md:mt-0 relative">
    <p class="text-center text-2xl md:text-5xl md:pt-14  font-bigcarlos">Menu</p>
    <p class="text-center text-2xl md:text-4xl font-songti text-[#725E43] font-bold tracking-[-0.02em]">メニュー</p>

<div class="md:absolute top-[4.5rem] text-[1.313rem] font-kingscarlos tracking-[-0.015em] leading-5 checkbox-circle md:block grid grid-rows-6 grid-flow-col mt-10 md:mt-0">
  <input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" @change="change($event)" class="acheckbox">
  <label for="vegetarian">Vegetarian</label><br>
  <input type="checkbox" id="vegan" name="vegan" value="vegan" @change="change($event)" class="acheckbox">
  <label for="vegan">Vegan</label><br>
  <input type="checkbox" id="spicy" name="spicy" value="spicy" @change="change($event)" class="sacheckbox">
  <label for="spicy">Spicy</label><br>
  <input type="checkbox" id="very-spicy" name="very-spicy" value="very-spicy" @change="change($event)" class="sacheckbox">
  <label for="very-spicy">Very Spicy</label><br>
  <input type="checkbox" id="not-spicy" name="not-spicy" value="not-spicy" @change="change($event)" class="sacheckbox">
  <label for="not-spicy">Not Spicy</label><br>
</div>

<div class="md:absolute text-[#725E43] top-16 lg:top-40 text-3xl md:text-4xl font-bigcarlos tracking-[-0.02em] md:w-3/12 text-center underline right-0 md:mr-[30px] lg:mr-[18vw] md:mt-0 mt-8">Everything on the menu is available for take away</div>
<div class="flex md:gap-6 justify-between md:mt-10 flex-col md:flex-row text-[#725741]">
  <PrismicImage :field="slice.primary.image4" class="w-full mt-6 md:hidden block"/>
<div class="md:w-[33.36%]">
  <div class="font-bigcarlos text-3xl tracking-[-0.02em] mt-12 md:mt-0"><span @click="expand2($event)" class="md:hidden flex relative justify-center"><div class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-[1.688rem]" >▼</div> Ramen</span> <span class="hidden text-[#3C5679] md:block"> Ramen</span></div>
<div class="overflow-hidden transition-all max-h-[999rem]"><div v-for="(item, i) in menu.data.ramen" :key="`slice-item-${i}`" :class="[item.spice , item.diet , 'lll']" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[73.5%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0"/> </div>
  <PrismicRichText :field="item.price" />
</div></div>
<PrismicImage :field="slice.primary.image1" class="lg:w-[120%] lg:max-w-[120%] w-full mt-6 lg:translate-x-[calc(-17%--1px)] " />
<div class="font-bigcarlos text-3xl tracking-[-0.02em] mt-12"><span @click="expand2($event)" class="md:hidden flex relative justify-center"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-[1.688rem]" >▼</div> Ramen Toppings</span> <span class="hidden md:block"> Ramen Toppings</span></div>
<div class="overflow-hidden transition-all max-h-[999rem]"><div v-for="(item, i) in menu.data.ramen_toppings" :key="`slice-item-${i}`" :class="[item.spice , item.diet , 'lll']" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[73.5%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<PrismicImage :field="slice.primary.image2" class="w-full mt-6 hidden md:block"/>
</div>


<div class="md:w-[42.1%]">
  <PrismicImage :field="slice.primary.image3" class="w-full"/>
  <PrismicImage :field="slice.primary.image4" class="w-3/4 mt-6 hidden md:block" />
  <div class="font-bigcarlos text-3xl tracking-[-0.02em] mt-12"><span @click="expand2($event)" class="md:hidden flex relative justify-center"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-[1.688rem]" >▼</div>Drinks</span> <span class="hidden md:block">Drinks</span></div>
  <div class="overflow-hidden transition-all max-h-[999rem]">
  <div class="font-kingscarlos text-xl tracking-[-0.02em] mt-5f -translate-x-0.5"><span @click="expand2($event)" class="flex relative justify-left mt-5"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-base" >▼</div>Beer</span></div>
  <div class="overflow-hidden transition-all max-h-[999rem] pl-4"><div v-for="(item, i) in menu.data.drinks" :key="`slice-item-${i}`" :class="[item.spice , item.diet]" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[79%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<div class="font-kingscarlos text-xl tracking-[-0.02em] -translate-x-0.5"><span @click="expand2($event)" class="flex relative justify-left mt-5"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-base" >▼</div>Shōchū</span></div>
<div class="overflow-hidden transition-all max-h-[999rem] pl-4"><div v-for="(item, i) in menu.data.shochu" :key="`slice-item-${i}`" :class="[item.spice , item.diet]" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[79%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<div class="font-kingscarlos text-xl tracking-[-0.02em] -translate-x-0.5"><span @click="expand2($event)" class="flex relative justify-left mt-5"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-base" >▼</div>Sake</span></div>
<div class="overflow-hidden transition-all max-h-[999rem] pl-4"><div v-for="(item, i) in menu.data.sake" :key="`slice-item-${i}`" :class="[item.spice , item.diet]" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[79%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<div class="font-kingscarlos text-xl tracking-[-0.02em] -translate-x-0.5"><span @click="expand2($event)" class="flex relative justify-left mt-5"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-base" >▼</div>Wine</span></div>
<div class="overflow-hidden transition-all max-h-[999rem] pl-4"><div v-for="(item, i) in menu.data.wine" :key="`slice-item-${i}`" :class="[item.spice , item.diet]" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[79%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<div class="font-kingscarlos text-xl tracking-[-0.02em] -translate-x-0.5"><span @click="expand2($event)" class="flex relative justify-left mt-5"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-base" >▼</div>Whisky</span></div>
<div class="overflow-hidden transition-all max-h-[999rem] pl-4"><div v-for="(item, i) in menu.data.whisky" :key="`slice-item-${i}`" :class="[item.spice , item.diet ]" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[79%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<div class="font-kingscarlos text-xl tracking-[-0.02em] -translate-x-0.5"><span @click="expand2($event)" class="flex relative justify-left mt-5"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-base" >▼</div>Soft Drinks</span></div>
<div class="overflow-hidden transition-all max-h-[999rem] pl-4"><div v-for="(item, i) in menu.data.soft_drinks" :key="`slice-item-${i}`" :class="[item.spice , item.diet ]" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[79%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
</div>
</div>

<PrismicImage :field="slice.primary.image2" class="w-full mt-6 md:hidden "/>
<div class="md:w-[24.2%]">
  <div class="font-bigcarlos text-3xl tracking-[-0.02em] mt-12 md:mt-0"><span @click="expand2($event)" class="md:hidden flex relative justify-center"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-[1.688rem]" >▼</div>Side Dishes</span> <span class="hidden md:block">Side Dishes</span></div>
  <div class="overflow-hidden transition-all max-h-[999rem]"><div v-for="(item, i) in menu.data.side_dishes" :key="`slice-item-${i}`" :class="[item.spice , item.diet , 'lll']" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[64%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<PrismicImage :field="slice.primary.image5" class="w-full mt-6 md:hidden"/>
  <div class="font-bigcarlos text-3xl tracking-[-0.02em] mt-12"><span @click="expand2($event)" class="md:hidden flex relative justify-center"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-[1.688rem]" >▼</div>Curry</span> <span class="hidden md:block">Curry</span></div>
  <div class="overflow-hidden transition-all max-h-[999rem]"><div v-for="(item, i) in menu.data.curry" :key="`slice-item-${i}`" :class="[item.spice , item.diet , 'lll']" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[64%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
<PrismicImage :field="slice.primary.image4" class="w-full mt-6"/>
<PrismicImage :field="slice.primary.image5" class="w-full mt-6 hidden md:block"/>
  <div class="font-bigcarlos text-3xl tracking-[-0.02em] mt-12"><span @click="expand2($event)" class="md:hidden flex relative justify-center"><div  class="left-3 scale-y-50 rotate-[0deg] pointer-events-none text-[1.688rem]" >▼</div>Desserts</span> <span class="hidden md:block">Desserts</span></div>
  <div class="overflow-hidden transition-all max-h-[999rem]"><div v-for="(item, i) in menu.data.deserts" :key="`slice-item-${i}`" :class="[item.spice , item.diet , 'lll']" class="mt-5 font-kingscarlos text-xl tracking-[-0.02em] flex gap-6 justify-between md:justify-start overflow-hidden">
  <div class="w-[64%] overflow-hidden"><PrismicRichText :field="item.title" @mouseover="expandfr($event)" @mouseout="collapsefr($event)" @click="expand($event)" class="cursor-pointer select-none"/>
  <PrismicRichText :field="item.description" class="text-lg transition-all max-h-0" /></div>
  <PrismicRichText :field="item.price" />
</div></div>
  <PrismicImage :field="slice.primary.image6" class="w-full mt-6"/>
</div>
</div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  computed: {
    menu() {
      return this.$store.state.prismic.menu
    }
  },
  methods: {
    change(event) {
  switch (event.target.name) {
        case "vegan":
          document.getElementById("vegetarian").checked = false
          break;
          case "vegetarian":
          document.getElementById("vegan").checked = false
          break;
          case "spicy":
          document.getElementById("not-spicy").checked = false
          document.getElementById("very-spicy").checked = false
          break;
          case "not-spicy":
          document.getElementById("spicy").checked = false
          document.getElementById("very-spicy").checked = false
          break;
          case "very-spicy":
          document.getElementById("not-spicy").checked = false
          document.getElementById("spicy").checked = false
          break;
      
        default:
          break;
      }

  var modelCbs = document.getElementsByClassName("acheckbox")
  var processorCbs = document.getElementsByClassName("sacheckbox")
  var filters = {
    models: this.getClassOfCheckedCheckboxes(modelCbs),
    processors: this.getClassOfCheckedCheckboxes(processorCbs)
  };

  this.filterResults(filters);
},
    getClassOfCheckedCheckboxes(checkboxes) {
  var classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      var cb = checkboxes[i];

      if (cb.checked) {
        classes.push(cb.getAttribute("name"));
      }
    }
  }

  return classes;
},
    filterResults(filters) {
  var rElems = document.getElementsByClassName("lll")
  var hiddenElems = [];

  if (!rElems || rElems.length <= 0) {
    return;
  }

  for (var i = 0; i < rElems.length; i++) {
    var el = rElems[i];

    if (filters.models.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.models.length; j++) {
        var filter = filters.models[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

    if (filters.processors.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.processors.length; j++) {
        var filter = filters.processors[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }
  }

  for (var i = 0; i < rElems.length; i++) {
    rElems[i].style.display = "flex";
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (var i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.display = "none";
  }
},



    expand(event){
      event.target.parentNode.nextElementSibling.classList.toggle("collapsed")
      
        event.target.parentNode.nextElementSibling.classList.remove("expandedfor")
      
    },
    expand2(event){
      event.target.parentNode.nextElementSibling.classList.toggle("expanded")
      event.target.firstElementChild.classList.toggle("rotated")
    },
    expandfr(event){
      
      event.target.parentNode.nextElementSibling.classList.add("expandedfor")
    },
    collapsefr(event){
      
      event.target.parentNode.nextElementSibling.classList.remove("expandedfor")
    }

  },
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
<style>
.checkbox-circle input[type="checkbox"] {
  display: none;
}
.checkbox-circle input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.checkbox-circle input[type="checkbox"] + label:last-child {
  margin-bottom: 0;
}
.checkbox-circle input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 1.375rem;
  height: 1.375rem;
  border: 1px solid black;
  border-radius: 1em;
  position: absolute;
  left: 0;
  top: 0;
  background: white;
}
.checkbox-circle input[type="checkbox"]:checked + label:before {
  border-radius: 1em;
  border: 6px solid #fff;
  width: 1.375rem;
  height: 1.375rem;
  background: #8DA1BC;
  box-shadow: 0 0 0 1px #000;
} 
.collapsed{
  max-height: 30rem;
}
.expanded{
  max-height: 0px;
}
.rotated{
  transform-origin: 61% 36%;
  rotate: -90deg;
}
.expandedfor{
  max-height: 30rem;
}
.hide{
  display: none;
}
</style>