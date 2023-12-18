<template lang="">
  <section class="container">
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3">
    <article v-for="character in listaCard" :key="character.id" class="col">
      <singleCard :character="character"/>
    </article>
   </div>
  </section>
</template>
<script>
import { store } from "../js/store.js";
import singleCard from "./singleCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components:{
    singleCard
  },

  props: {
    listaCard: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
 

</style>
