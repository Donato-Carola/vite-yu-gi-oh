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
    


 
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
