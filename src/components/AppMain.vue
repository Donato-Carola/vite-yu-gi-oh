<template >
    <main>
        <TypeCard/>
         <ListCard/>
    </main>
</template>
<script>

import ListCard from './ListCard.vue';
import TypeCard from './TypeCard.vue';

export default {
    data() {
        return {
            
        }
    },
    components:{
    ListCard,
    TypeCard
},

}
</script>
<style lang="scss">
    
</style>