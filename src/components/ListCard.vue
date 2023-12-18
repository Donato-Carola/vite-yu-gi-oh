<template lang="">
   <section>
    <article v-for="character in  listaCard">
    {{character.name}}
</article>
   </section>
</template>
<script>
import { store } from '../js/store.js';
export default {
    data(){
        return{
            store,
        }
    },

 props:{
    listaCard:{
        type: Array,
        required:true,
    }
 }

    
}
</script>
<style lang="scss">
    
</style>