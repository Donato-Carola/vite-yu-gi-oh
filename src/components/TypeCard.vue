<template >

  <select  class="form-select w-25 ms-5 mt-3 mb-3" aria-label="Default select example">
  <option selected>scegli il tipo</option>
  <option v-for="character in store.listType" value="1"> {{character.archetype_name}}</option>

</select>
</template>




<script>
import { store } from '../js/store'

export default {
   data() {
    return {
      store,
    }
   },
};

</script>




<style lang="scss">



</style>
