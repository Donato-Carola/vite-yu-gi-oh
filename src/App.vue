<template>

  <AppHeader/>
  <main>
  <TypeCard/>
  <ListCard :listaCard="cardCharacters"/>
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
    TypeCard
},
data() {
  return {
    cardCharacters:[],
  }
},

methods:{
  getListCard(){
     axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
     .then((response) =>{
      console.log(response);
      this.cardCharacters = response.data.data;
     })
     .catch(function (error){
      console.error(error);
     });
  }
},

created() {
this.getListCard();
},

}
</script>



<style lang="scss">
@use "./styles/general.scss";

</style>
