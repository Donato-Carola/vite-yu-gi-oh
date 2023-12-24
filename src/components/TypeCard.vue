<template >

  <select  class="form-select w-25 ms-5 mt-3 mb-3" aria-label="Default select example" @change="selectArchetype(selectedArchetype)" v-model="selectedArchetype">
  <option selected>scegli il tipo</option>
  <option v-for="(archetype,index) in  archetypesList" :key="index" :value="archetype.archetype_name" > {{archetype.archetype_name}}</option>

</select>
</template>




<script>
import { store } from '../js/store'
import axios from 'axios'

export default {
   data() {
    return {
      selectedArchetype:'',
      store,
      archetypesList:[],
      apiUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
    }
   },
   methods:{
    getListType() {
      axios
        .get(this.apiUrl)
        .then((response) => {
          console.log(response);
          this.archetypesList = response.data;
        })
        .catch(function (error) {
          console.error(error);

          
        });
    },
    selectArchetype(archetype){
      this.store.getCards(archetype);
    }
   



   },
    created() {
   
   this.getListType();
 },
};

</script>




<style lang="scss">



</style>
