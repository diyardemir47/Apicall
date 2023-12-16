import axios from 'axios';

const searchImages=async (term) => {
    
    const response =await axios.get('https://api.unsplash.com/search/photos',{
       headers:{
 
         Authorization:'Client-ID J7wOUxGaq6vgKsDDnYewl5R0tpx22oa_rwq01SCbsUI'
       }
       ,
       params:{
         query:term
       }
     })
 
     return response.data.results;
   }
; 
export default searchImages;