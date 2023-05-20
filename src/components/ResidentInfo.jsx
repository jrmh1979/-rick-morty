import { useState,useEffect } from "react";
import axios from "axios";

const ResidentInfo = (resident) => {

        const [residentInfo, setResidentInfo] = useState([])
    
        useEffect(()=> {
            axios
                .get(resident.data)
                .then( resp => setResidentInfo(resp.data) )
                .catch( error => console.error(error) )
        }, [])
    
        return (

        <div className="card-content">
             <div className="card-content-info">
                <article className="card">
                    <div className="card-img">
                    <img src={residentInfo.image} alt="" />
                    </div>
                    
                    <div className= "card-title">
                    <h2 >{residentInfo.name}</h2>
                    </div>                
                                                            
                    <div className= "card-items">
                    <p>Status: {residentInfo.status}</p>
                    </div>

                    <div className= "card-items">
                    <p>Origen :{residentInfo.origin?.name}</p>
                    </div>
                                        
                    <div className= "card-items">
                    <p>Episodios :{residentInfo.episode?.length}</p>
                    </div>
                </article>
             
            </div>            
        </div>
    );
   
    
};

export default ResidentInfo;