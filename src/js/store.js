import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
 
  apiUrl : 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0',
     cardCharacters:[],
  getCards:function(archetypeFilter = null){
    const url = (archetypeFilter != null) ? `${this.apiUrl}&archetype=${archetypeFilter}` : this.apiUrl; 

      axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.cardCharacters = response.data.data;
        })
        .catch(function (error) {
          console.error(error);

          this.isLoading = false;
        });
    
  }
});