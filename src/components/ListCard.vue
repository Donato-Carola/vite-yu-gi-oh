<template lang="">
  <div class="box_card container">
    <section class="container">
      <div class="count ps-5">Found {{store.cardCharacters.length}} card</div>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3">
        <article v-for="card in store.cardCharacters" :key="card.id" class="col">
          <singleCard :card="card" />
        </article>
      </div>
    </section>
  </div>
</template>
<script>
import { store } from "../js/store.js";
import singleCard from "./singleCard.vue";
import axios from 'axios'
export default {
  data() {
    return {
      store,
      //cardCharacters: [],
      //apiUrl : 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0'
    };
  },
  components: {
    singleCard,
  },
  methods: {
   

  },
  created(){
    this.store.getCards();
}
};
</script>






<style lang="scss" scoped>
div.box_card {
  height: 100vh;
  position: relative;
}

section.container {
  padding-top: 3.5rem;
  height: 100%;
  overflow-y: auto;
}

div.count {
  width: 97%;
  position: absolute;
  z-index: 5;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: rgb(27, 27, 27);
  color: white;
}
</style>
