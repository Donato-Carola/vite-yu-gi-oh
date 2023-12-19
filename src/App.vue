<template>
  <AppHeader />
  <main>
    <TypeCard />

    <!--<ListCard :listaCard="cardCharacters" />   SE USASSIMO LE PROPS DOBBIAMO USARE QUESTO CODICE-->
    <ListCard />
    <div v-if="isLoading">Loading...</div>
  </main>
</template>

<script>
import { store } from "./js/store.js";

import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import ListCard from "./components/ListCard.vue";
import TypeCard from "./components/TypeCard.vue";

export default {
  components: {
    AppHeader,
    ListCard,
    TypeCard,
  },
  data() {
    return {
     /* cardCharacters: [],*/ //se usiamo le props
      store,
      isLoading: true,
    };
  },

  methods: {
    getListCard() {
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0")
        .then((response) => {
          console.log(response);
          this.store.listaCard = response.data.data;
        })
        .catch(function (error) {
          console.error(error);

          this.isLoading = false;
        });
    },
  },

  created() {
    this.getListCard();
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
