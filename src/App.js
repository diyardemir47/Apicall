import logo from './logo.svg';
import './App.css';
import SearchHeader from './SearchHeader';
import 'bulma/css/bulma.css';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './component/ImageList';


function App() {
const [images, setImages] = useState([])
 
const handleSubmit = async (term) => {

console.log(term);
const result= await searchImages(term);
setImages(result);

}

  return (
    <div className='app'>
      <div className='container'>
  <SearchHeader search={handleSubmit}/>
<ImageList imagesPlaceholder={images}/>
    </div></div>
  );
}

export default App;
