import { useState } from "react";
function SearchHeader({search}) {

   const [valueInput, setValue] = useState('')

    const handleForSubmit =(event)=>{
    event.preventDefault();
        search(valueInput);
        
 }

 const handleChange =(event) => {

setValue(event.target.value);

 };
    return (  

<div className="searchDiv">
   
   <form onSubmit={handleForSubmit}> 
  
    <input className="input is-large" type="text" placeholder="Ne Arıyorsunuz" value={valueInput} onChange={handleChange}/>
   
   
   </form>
</div>

    );
}

export default SearchHeader;