import './App.css'
import { useState, useEffect } from 'react';
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import axios from 'axios';

function App () {
 
  //====== Cargando ======//
const [residents, setResidents] = useState ([])
const [index, setIndex] = useState (0)


 //====== useEffect y axios======//  
 useEffect ( () => {

  const idramdun = (Math.floor(Math.random()*126))
                  
    axios
     .get (`https://rickandmortyapi.com/api/location/${idramdun}`)
     .then (resp =>{
       console.log(resp.data);
       setIndex (resp.data)
       setResidents(resp.data.residents)
     })
     .catch ( error => console.error(error))
   
 },[])


   const [search, setSearch] = useState ('')
   const searchId = () => {

   axios
   .get (`https://rickandmortyapi.com/api/location/${search}`)
   .then (resp =>{
    setIndex (resp.data)
    setResidents(resp.data.residents)
  
   })
   .catch ( error => console.error(error))
 
}

return (  

<div>
  <div className="img-header">
    <div >
    <img src="logo.svg" alt="logo" />
  </div>
  
  </div>
    <div className = "input-search">
      <div className ="input-content">
      <input  type="text" onChange={ e => setSearch(e.target.value)} placeholder ="search location id"></input>
      <button className ="input-search button"onClick={ () => searchId(search) } >Search<i className ='bx bx-search'></i></button>
    </div>
   
  </div>
 
   <Location data = {index} 
/>

{
  residents.map((resident,index)=> (
    <ResidentInfo data={resident} key={index}/>
  ))
}
 </div>
);
}

export default App;
