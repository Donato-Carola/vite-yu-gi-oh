<template>

  <AppHeader/>
  <main>
    <TypeCard/>
  <ListCard/>
  </main>
</template>




<script>
import axios from 'axios';

import AppHeader from "./components/AppHeader.vue";
import ListCard from "./components/ListCard.vue";
import TypeCard from "./components/TypeCard.vue";


export default {
  components: {
    AppHeader,
    ListCard,
    TypeCard,
}
}
</script>



<style lang="scss">
@use "./styles/general.scss";

</style>
