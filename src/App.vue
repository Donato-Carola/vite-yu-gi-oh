<template>
  <AppHeader />
  <main>
    <AppMain/>
   
  </main>
</template>

<script>
import { store } from "./js/store.js";

import axios from "axios";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";


export default {
  components: {
    AppHeader,
   
    AppMain,
  },
  data() {
    return {
  
      store,
      
    };
  },

   methods:{
    getListType() {
      axios
        .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
        .then((response) => {
          console.log(response);
          this.store.listType = response.data;
        })
        .catch(function (error) {
          console.error(error);

          this.isLoading = false;
        });
    },


  created() {
   
    this.getListType();
  },
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
