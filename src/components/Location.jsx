

const Location = ({data}) => {

    
    

    return (
        
       
        
        
        
        <div className="content-location">
        <div className="content-location-info">
        
            <div>
            <h3>Name:</h3>
            <p>{data.name}</p>
            </div>
            
            <div>
            <h3>Tipo:</h3>
            <p>{data.type}</p>
            </div>

            <div>
            <h3>Dimension :</h3>
            <p>{data.dimension}</p>
            </div>
            
            <div>
            <h3>Residentes #:</h3>
            <p>{data.residents?.length}</p>
            </div>
                       
        </div>
        </div>
        
    );
};

export default Location;