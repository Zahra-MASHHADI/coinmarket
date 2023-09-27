//components
import { useState } from "react"
import Coin from "../coin/Coin"
import Style from "./style"

export default function MainPage(items){

    const[search , setSearch] = useState("");
    const[loading , setLoading] = useState(false);

    const searchInput = items.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    
    function searchHandler(event){
       const searchValue = event.target.value;
       setSearch(searchValue);
       searchInput.length && setLoading(true)
    }
    
  
    
    return(
        <Style>
        <input placeholder="search" value={search} onChange={searchHandler} />
        
        {
            !searchInput.length ? <p> loading ... </p> :
            <div className="mainDiv">
          {
            searchInput.map(item => <div key={item.id}> <Coin data={item}/>  </div> ) 
          } 
           </div>
        }
      
        </Style>
    )
}