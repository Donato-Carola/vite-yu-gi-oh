<template lang="">
    <!--<img :src="character.card_images.image_url_small" alt="image">
      {{character.name}}
      {{character.archetype}}-->
      <div class="card" >
        <img :src="character.card_images[0].image_url" class="card-img-top" alt="image" />
        <div class="card-body">
          <h5 class="card-title">{{character.name}}</h5>
          <p class="card-text">
            {{character.archetype}}
          </p>
          
        </div>
      </div>
</template>
<script>
export default {
    props:{
        character:{
            type: Object,
            required:true
        }
    },
    data() {
        return {
            
        }
    },
    methods:{

    },
}
</script>
<style lang="scss" scoped>
 div.card{
    height: 100%;
 }
</style>